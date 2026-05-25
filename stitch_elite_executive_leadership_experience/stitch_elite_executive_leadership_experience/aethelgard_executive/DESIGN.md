---
name: Aethelgard Executive
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#dbc582'
  on-secondary: '#3b2f00'
  secondary-container: '#574811'
  on-secondary-container: '#ccb775'
  tertiary: '#cecece'
  on-tertiary: '#2f3131'
  tertiary-container: '#b2b3b3'
  on-tertiary-container: '#434546'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#f8e19b'
  secondary-fixed-dim: '#dbc582'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#54450e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
---

## Brand & Style
The design system embodies "Quiet Luxury"—an aesthetic reserved for high-stakes executive coaching and elite consulting. It evokes an emotional response of absolute confidence, exclusivity, and cinematic gravitas. 

The style is a fusion of **Minimalism** and **Glassmorphism**, leveraging deep, matte surfaces punctuated by ethereal metallic light. It avoids the clutter of traditional corporate design, opting instead for a "Less but Better" philosophy that mirrors the clarity and focus provided by top-tier coaching. The UI feels like a private member’s club: dark, focused, and impeccably polished.

## Colors
The palette is rooted in a fundamental contrast between **Deep Matte Black (#0A0A0A)** and **Pure White (#FFFFFF)**, establishing an authoritative foundation. 

The **Gold Gradient (#D4AF37 to #F9E29C)** is used sparingly as a "light source" rather than a fill color. It appears in high-value interactions, subtle glows, and delicate borders. Secondary surfaces utilize a "Glass" effect—semi-transparent layers that allow the deep background to breathe through, creating a sense of physical depth and atmospheric richness.

## Typography
The typography system relies on a high-contrast pairing. **Playfair Display** provides a literary, authoritative voice for headlines, emphasizing the premium nature of the service. **Montserrat** is used for body copy and UI labels, ensuring modern legibility and a geometric, clean feel.

To maintain the luxury aesthetic, we utilize generous line heights (1.8x for body) and increased letter spacing for all-caps labels, creating a sense of "air" and breathability within the text blocks.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered within a 1440px container to ensure maximum focus. Spacing is intentionally "extravagant," using large vertical gaps (160px) between sections to signal that the content is not rushed and the brand is not desperate for space.

Mobile layouts transition to a fluid model with 24px side margins. Alignment is strictly disciplined, utilizing a 12-column grid to maintain a structured, architectural feel. Every element should feel like it has "room to breathe," avoiding dense clusters of information.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Light Radiation** rather than traditional drop shadows.

1.  **Surfaces:** Cards use a `backdrop-filter: blur(20px)` with a very low opacity white fill (3%).
2.  **Borders:** Instead of solid lines, use 1px "inner glows" or gradients that catch the light, mimicking the edge of a polished glass pane.
3.  **Glows:** High-priority elements feature a "Magnetic Glow"—a soft, diffused radial gradient of gold (#D4AF37) positioned behind the element at 10-15% opacity, creating a halo effect that suggests importance and energy.

## Shapes
The shape language is sophisticated and "Soft" (0.25rem - 0.75rem). While completely sharp corners feel too aggressive, overly rounded "bubble" corners feel too casual for executive coaching. We use a restrained corner radius that feels intentional and precision-engineered. Interactive elements like buttons may use a slightly higher radius to feel more inviting to the touch, but never reaching a full pill shape.

## Components

### Buttons
- **Primary:** Solid Matte Black background with a 1px Gold Gradient border. On hover, a soft gold "Magnetic Glow" appears behind the button, and the text shifts slightly in response to the cursor.
- **Secondary:** Ghost style with a thin 10% white border. Typography is set in `label-caps`.

### Glass Cards
- Containers feature a 20px backdrop blur and a "Gold Hairline" top border (a 1px gradient stroke). Padding is generous (40px+).

### Inputs
- Bottom-border only or very subtle glass fields. Focus state triggers a slow expansion of a gold underline from the center outward.

### Chips/Tags
- Small, uppercase Montserrat text inside a glass container with no border. Used for "Premium Access" or "Exclusive" markers.

### Lists
- Minimalist indicators (e.g., a simple gold 1px horizontal line) rather than bulky bullet points. Significant vertical padding between list items.