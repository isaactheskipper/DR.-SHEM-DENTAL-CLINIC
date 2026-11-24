# Dr. Shem Dental website

A responsive multi-page static website built with semantic HTML, CSS and lightweight JavaScript. No framework or package install is required.

## Run locally

From this directory:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. A small `package.json` also provides `npm start` as a convenience wrapper around Python's static server.

## Pages

- Home: `index.html`
- Services: `services.html`
- About the practice and dentist: `about.html`
- Locations and directions: `locations.html`
- Appointment request: `book.html`
- Patient reflections: `reviews.html`
- Clinic journal links: `journal.html`
- Draft privacy statement: `privacy.html`

## Clinic details to confirm before publication

1. Confirm both branch addresses, telephone numbers, hours and branch-level service availability.
2. Confirm the WhatsApp number. Set `WHATSAPP_NUMBER` near the top of `script.js` to the confirmed international digits-only number. Until then, WhatsApp-labelled actions use an email enquiry fallback.
3. Confirm that `drshemrakewadental@gmail.com` remains the correct public booking email.
4. Confirm the official logo and visual identity. The monogram in this preview is a typographic placeholder, not an official logo.
5. Approve the official clinic image URLs and their use; inspect the actual crops, obtain stable local originals, and optimize them before launch. Image downloads were unavailable in this environment.
6. Confirm the accuracy, consent and approved display names for testimonials. The current short excerpt is sourced from the clinic site and is not a third-party rating.
7. Provide a current professional portrait, biography and verified credentials before adding a full dentist profile.
8. Confirm accepted insurance providers and the wording for cover enquiries.
9. Review the privacy statement against the clinic’s actual hosting, email, analytics and data-handling practices.
10. Confirm official social accounts and replace any outdated links.
11. Validate branch directions in Google Maps and confirm the linked clinic journal URLs.

## Booking behavior

There is no booking backend. The form validates in the browser and opens a prefilled email draft; it does not send data or confirm an appointment. Once the clinic confirms a WhatsApp line, update `WHATSAPP_NUMBER` to enable prefilled WhatsApp messages. The patient then reviews and sends the message, and the clinic confirms the appointment directly.

## Design

See [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) for the UI UX Pro Max research output and the adapted editorial design system. See [`public/images/README.md`](public/images/README.md) for image source notes.
