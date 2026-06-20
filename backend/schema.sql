CREATE TABLE IF NOT EXISTS quote_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  product_interest TEXT NOT NULL,
  estimated_volume TEXT,
  requirement_details TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  source_url TEXT,
  user_agent TEXT,
  ip_country TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at
ON quote_requests(created_at);

CREATE INDEX IF NOT EXISTS idx_quote_requests_status
ON quote_requests(status);
