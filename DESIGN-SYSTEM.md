# Dr. Shem Dental — design system

See the persisted master file at `design-system/dr-shem-dental/MASTER.md`.

## UI UX Pro Max research

Generated with `scripts/search.py "premium dental clinic editorial warm minimal healthcare" --design-system -p "Dr. Shem Dental" -f markdown`, then refined with focused `style`, `color`, `typography`, `ux`, and `react` searches.

- **Layout direction:** Editorial Grid / Magazine: asymmetric composition, large image fields, calm dividers and print-like hierarchy. Selected because it best fits the requested premium, human dental identity.
- **Palette:** Clinic-inspired forest green with warm ivory, paper white, pale sage and restrained brass. The catalogue suggested a cyan healthcare palette; the user’s supplied emerald/ivory direction is a closer fit for this specific brand. Body text uses deep ink for contrast.
- **Typography:** Cormorant Garamond for display and Montserrat for body/UI: the UI UX Pro Max Luxury Serif pairing, adapted with the user-requested Cormorant Garamond cut. Single font families for each role; system fallbacks are provided.
- **Motion:** Short opacity/transform reveals and interaction feedback only; all transitions honor `prefers-reduced-motion`.
- **Accessibility:** Semantic landmarks, skip link, visible focus rings, labelled fields, inline errors/status, keyboard menu, 44px+ controls, responsive reflow, explicit alt text and no auto-rotating carousels.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--forest` | `#153C35` | Brand, primary action |
| `--forest-deep` | `#102D28` | Dark surfaces |
| `--ivory` | `#F4F1E9` | Main canvas |
| `--paper` | `#FBFAF6` | Raised / reading surface |
| `--sage` | `#D6E6DC` | Soft section surface |
| `--brass` | `#B28D55` | Fine accent, not small text |
| `--ink` | `#1F2925` | Main text |
| `--muted` | `#58645E` | Secondary text |
| `--line` | `#D8D8CE` | Rules and borders |

## Grid and spacing

- 12-column desktop grid, 1200px maximum content measure, asymmetric editorial blocks.
- 20px mobile gutter, 40px tablet gutter, 64px desktop gutter.
- 4/8px spacing increments; section rhythm scales from 72px mobile to 112px desktop.
- Images preserve explicit aspect ratios and reserve layout space. Hero image is high priority; below-fold images lazy-load.
- Buttons have a minimum 48px height, clear primary/secondary hierarchy and keyboard focus.

## Content and trust rules

- Official business copy and published clinic images are identified in `public/images/README.md`.
- Reviews are clinic-site excerpts and are attributed to that site, not Google.
- No review aggregate, before/after image, unsupported clinical promise, price, or guessed WhatsApp number is used.
- Published hours are labelled “please confirm”; branch treatment availability is not inferred.
- Schema omits ratings, social links, and clinician credentials pending confirmation.
