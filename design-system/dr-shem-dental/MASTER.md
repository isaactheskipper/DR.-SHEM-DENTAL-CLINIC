# Dr. Shem Dental — Master Design System

> Final system applied to all pages. The Pro Max generator returned Liquid Glass on the premium clinic query, while the focused `editorial healthcare asymmetric magazine layout` search returned **Editorial Grid / Magazine**. Editorial Grid is selected for this public-facing dental practice because it fits the supplied art direction and avoids glass effects, excessive shadows and generic app styling. The palette follows the user-supplied clinic direction; the generated medical palette was cyan and did not match the requested brand.

**Project:** Dr. Shem Dental  
**Product:** Premium dental clinic website · Kenya  
**Style:** Editorial Grid / Magazine, refined healthcare  
**Pattern:** Narrative clinic introduction, curated service taxonomy, practical branch details, patient trust, clear appointment path  
**Motion:** Subtle interactions only; no scroll-dependent content hiding  
**Density:** Spacious; responsive 12-column desktop grid

## Color tokens

| Role | Hex | CSS variable |
|---|---|---|
| Brand forest | `#153C35` | `--forest` |
| Deep forest | `#102D28` | `--forest-deep` |
| Warm ivory | `#F4F1E9` | `--ivory` |
| Paper surface | `#FBFAF6` | `--paper` |
| Soft sage | `#D6E6DC` | `--sage` |
| Muted brass | `#B28D55` | `--brass` |
| Ink | `#1F2925` | `--ink` |
| Muted text | `#58645E` | `--muted` |
| Border | `#D8D8CE` | `--line` |

Maintain at least 4.5:1 contrast for body text. The implemented muted text on ivory is 5.47:1; forest on ivory is 10.76:1. Text accents use darker brass/forest shades, not the brass token where it would reduce text contrast.

## Typography

- **Display:** Cormorant Garamond, 400–600; serif headlines with generous line spacing.
- **Body and controls:** Montserrat, 400–700; 16px base, 1.7 line height.
- **Fallbacks:** Georgia/serif for display; Arial/sans-serif for body.
- Avoid long all-caps passages, tight body tracking and line measures over 75 characters.

## Layout and spacing

- Content max width: 1200px.
- 12-column desktop; editorial asymmetry for hero, introduction, feature, and profile regions.
- Horizontal gutters: 22px small mobile, 7vw mobile, 32px tablet, and centered 1200px container desktop.
- Spacing follows 4px/8px increments. Sections use 64–100px vertical spacing responsive to viewport.
- Mobile breakpoints: 420px, 760px, 1000px. Reflow columns before shrinking text.
- Image aspect ratios are reserved to limit layout shift; hero image loads eagerly and supporting images lazy-load.

## Components

- **Navigation:** compact warm paper header, one high-contrast booking action, keyboard-operable disclosure menu, Escape-to-close.
- **Primary button:** forest background or ivory on forest, square-corner editorial geometry, minimum 48px height.
- **Secondary action:** text link with visible underline/rule and arrow; never icon-only.
- **Service list:** numbered editorial rows rather than repeated equal cards.
- **Branch information:** clear address, clickable telephone, generated Google directions, explicit current-hours confirmation note.
- **Appointment form:** visible labels, associated inline errors, native form controls, 48px control height, polite status, no implied booking confirmation.
- **Patient gallery:** consent-ready empty state until real approved images are supplied.
- **Reviews:** sourced from the clinic site and not labelled Google or shown with fabricated ratings.

## Motion and interaction

- Use opacity and small `translateY` only where content is already available; this implementation leaves section copy visible without JavaScript.
- Hover and focus transitions: 150–250ms, no layout shift.
- All meaningful controls have a clear focus state; support keyboard and reduced motion.
- No autoplay, scroll hijacking or parallax.

## Responsive and accessibility rules

- Semantic landmarks, skip link, sequential headings, descriptive image alternatives, keyboard navigation and visible focus.
- Body copy stays at least 15–16px; labels and help text remain readable.
- Controls meet 44px minimum touch size with spacing.
- No horizontal scrolling at 320px; form fields reflow to one column on narrow screens.
- `prefers-reduced-motion` disables transitions and makes reveal content immediately visible.

## Content integrity and launch checks

- No stock or generated image is represented as clinic photography; only current official clinic image URLs are used and their provenance is in `public/images/README.md`.
- The visible monogram is a typographic placeholder until the clinic provides its official logo.
- Confirm all branch contacts, hours, service availability, clinician profile, testimonial consent and display names, social links, image rights and WhatsApp number.
- Confirm site hosting, privacy terms and appointment path before launch.
