---
name: Digital Curator Aesthetic
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#7f5533'
  on-secondary: '#ffffff'
  secondary-container: '#ffc69b'
  on-secondary-container: '#7a502e'
  tertiary: '#322400'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c3900'
  on-tertiary-container: '#c4a24c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#f3bb91'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#643e1e'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c268'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4400'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  text-main: '#333333'
  border-subtle: '#E5E1D8'
  surface-cream: '#FDFCF8'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  chinese-body:
    fontFamily: Noto Sans SC
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style

The design system is engineered to position the product as a "Digital Curator" of fine Indian spices. The brand personality is scholarly, authoritative, and premium, moving away from the frantic energy of retail e-commerce toward the measured pace of global B2B trade. The target audience consists of international procurement officers, food manufacturers, and luxury distributors who value traceability, quality, and heritage.

The visual style is a blend of **Minimalism** and **Corporate / Modern**. It utilizes heavy whitespace to suggest cleanliness and luxury, while maintaining a structured grid that evokes a sense of organized, industrial-scale reliability. Imagery should prioritize realistic, high-fidelity photography of raw spices and logistics, avoiding overly processed or "lifestyle" marketing visuals. The overall emotional response should be one of profound trust and intellectual rigor.

## Colors

The palette for this design system is rooted in an organic, earthy spectrum that reflects the natural origins of the product. The primary **Dark Green (#1B4332)** serves as the anchor for authority and growth, used for primary actions and structural highlights. The **Earthy Brown (#6B4423)** and **Muted Saffron (#E9C46A)** function as sophisticated accents, representing the spices themselves and the warmth of the Indian sun.

The background uses a **Light Cream (#FDFCF8)** rather than a stark white to create a "parchment" or "archive" feel, reducing eye strain and increasing the perceived value of the content. Typography is strictly **Dark Grey (#333333)** to maintain high legibility while appearing softer and more professional than pure black.

## Typography

The typography strategy employs a classic "Serif for Headlines, Sans-Serif for Data" model. **Noto Serif** provides the editorial and scholarly weight required for headings, conveying a sense of history and establishment. **IBM Plex Sans** is used for all body copy and UI elements due to its technical, neutral character which suits B2B logistics and specifications.

For the Simplified Chinese market, **Noto Sans SC** must be used for body text to maintain visual consistency with the Latin IBM Plex Sans. Headlines should maintain a slightly heavier weight to compensate for the complexity of Chinese characters. All labels and metadata should use the `label-caps` style to create a clear visual distinction between descriptive text and data values.

## Layout & Spacing

This design system utilizes a **fixed-width grid** for desktop to ensure the "curated" feel of an archival document, centering content at a maximum width of 1280px. A 12-column system is used with 24px gutters to allow for complex data layouts, such as product specification tables and export documentation.

On mobile devices, the layout transitions to a single-column fluid flow with 20px side margins. Spacing follows a strict 8px base unit rhythm. Generous vertical "stack" spacing (48px+) should be used between major sections to maintain a sense of openness and prevent the UI from feeling cluttered or "cheap."

## Elevation & Depth

To maintain a scholarly and professional aesthetic, the design system avoids aggressive shadows. Instead, it relies on **low-contrast outlines** and **tonal layers**. 

1.  **Surfaces:** The primary background is the neutral cream. Secondary surfaces (like sidebars or info boxes) use a slightly darker tint or a 1px border in `border-subtle`.
2.  **Shadows:** When necessary for interactive elements like dropdowns or active cards, use a very light, diffused shadow: `box-shadow: 0 4px 20px rgba(27, 67, 50, 0.05)`. The shadow color is tinted with the primary dark green to keep it integrated with the palette.
3.  **Depth:** Depth is primarily communicated through layering—placing white cards on the cream background—rather than significant Z-axis elevation.

## Shapes

The shape language is conservative and disciplined. A **Soft (0.25rem)** roundedness is applied to standard UI elements like input fields and buttons. This provides just enough approachable softness to feel modern without losing the "institutional" feel of a B2B platform. 

Larger components, such as product cards or modal containers, may use a `rounded-lg` (0.5rem) setting. Geometric precision is favored; circles are reserved exclusively for avatars or specific status indicators, while buttons remain rectangular with soft corners.

## Components

### Buttons
Primary buttons use the Dark Green background with white text. Secondary buttons use a transparent background with a 1px Dark Green border. There should be no "ghost" buttons; every action should feel deliberate and defined.

### Cards
Cards are the primary container for product curation. They must feature a 1px `border-subtle` and no shadow in their default state. On hover, a subtle elevation and a saffron-colored bottom border may be applied to indicate interactivity.

### Input Fields
Fields should have a distinct label using `label-caps`. The input box uses a white background to pop against the cream page surface, with a 1px border. The focus state uses a 2px Dark Green border.

### Chips & Tags
Used for spice categories or origin regions. These should be rectangular with the Soft corner radius, using a low-saturation version of the Saffron or Green backgrounds to ensure they do not distract from primary content.

### Data Tables
B2B export requires heavy data. Tables should use the IBM Plex Sans font at `body-sm`. Row separators should be 1px `border-subtle`, and headers should have a light Saffron tint to provide clear visual anchoring.