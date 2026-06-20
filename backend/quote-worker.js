const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': 'https://aniymp.com',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

const MAX_LENGTHS = {
  fullName: 120,
  company: 160,
  email: 160,
  phone: 80,
  productInterest: 80,
  estimatedVolume: 80,
  requirementDetails: 2000,
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: JSON_HEADERS,
  });
}

function cleanText(value, maxLength) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function cleanMultiline(value, maxLength) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(input) {
  if (cleanText(input.website, 80)) {
    return { spam: true };
  }

  const data = {
    fullName: cleanText(input.fullName, MAX_LENGTHS.fullName),
    company: cleanText(input.company, MAX_LENGTHS.company),
    email: cleanText(input.email, MAX_LENGTHS.email).toLowerCase(),
    phone: cleanText(input.phone, MAX_LENGTHS.phone),
    productInterest: cleanText(input.productInterest, MAX_LENGTHS.productInterest),
    estimatedVolume: cleanText(input.estimatedVolume, MAX_LENGTHS.estimatedVolume),
    requirementDetails: cleanMultiline(input.requirementDetails, MAX_LENGTHS.requirementDetails),
  };

  const missing = [];
  if (!data.fullName) missing.push('fullName');
  if (!data.company) missing.push('company');
  if (!data.email || !isValidEmail(data.email)) missing.push('email');
  if (!data.productInterest) missing.push('productInterest');
  if (!data.requirementDetails) missing.push('requirementDetails');

  return { data, missing };
}

async function saveQuote(env, data, request) {
  const sourceUrl = request.headers.get('referer') || 'https://aniymp.com/';
  const userAgent = request.headers.get('user-agent') || '';
  const ipCountry = request.cf?.country || '';

  const result = await env.DB.prepare(`
    INSERT INTO quote_requests (
      full_name,
      company,
      email,
      phone,
      product_interest,
      estimated_volume,
      requirement_details,
      source_url,
      user_agent,
      ip_country
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.fullName,
    data.company,
    data.email,
    data.phone,
    data.productInterest,
    data.estimatedVolume,
    data.requirementDetails,
    sourceUrl,
    userAgent.slice(0, 500),
    ipCountry
  ).run();

  return result.meta.last_row_id;
}

async function sendNotification(env, data, quoteId) {
  if (!env.RESEND_API_KEY) {
    return false;
  }

  const subject = `New quote request #${quoteId} - ${data.productInterest}`;
  const text = [
    `New quote request received on aniymp.com`,
    ``,
    `Quote ID: ${quoteId}`,
    `Name: ${data.fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || '-'}`,
    `Product: ${data.productInterest}`,
    `Estimated Volume: ${data.estimatedVolume || '-'}`,
    ``,
    `Requirement Details:`,
    data.requirementDetails,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: env.MAIL_FROM || 'ANIYMP Website <no-reply@aniymp.com>',
      to: [env.MAIL_TO || 'info@aniymp.com'],
      reply_to: data.email,
      subject,
      text,
    }),
  });

  return response.ok;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: JSON_HEADERS });
    }

    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/api/quote') {
      return jsonResponse({ ok: false, error: 'Not found' }, 404);
    }

    if (!env.DB) {
      return jsonResponse({ ok: false, error: 'Database is not configured' }, 500);
    }

    let input;
    try {
      input = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
    }

    const validation = validatePayload(input);
    if (validation.spam) {
      return jsonResponse({ ok: true });
    }
    if (validation.missing?.length) {
      return jsonResponse({ ok: false, error: 'Missing required fields', fields: validation.missing }, 400);
    }

    try {
      const quoteId = await saveQuote(env, validation.data, request);
      const emailSent = await sendNotification(env, validation.data, quoteId);
      return jsonResponse({ ok: true, quoteId, emailSent });
    } catch (error) {
      console.error('Quote request failed', error);
      return jsonResponse({ ok: false, error: 'Unable to submit quote request' }, 500);
    }
  },
};
