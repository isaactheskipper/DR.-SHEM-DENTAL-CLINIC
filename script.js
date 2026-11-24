/* Clinic settings. Set to the clinic-confirmed international WhatsApp number
   with country code and digits only (for example: 2547XXXXXXXX). Keep empty
   until Dr. Shem Dental confirms the correct WhatsApp line. */
const WHATSAPP_NUMBER = '';
const CLINIC_EMAIL = 'drshemrakewadental@gmail.com';

const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');

if (header) {
  header.innerHTML = `
    <header class="header-shell">
      <a class="wordmark" href="index.html" aria-label="Dr. Shem Dental home"><span class="brand-symbol" aria-hidden="true">S</span><span class="brand-name">DR. SHEM<small>DENTAL CLINIC</small></span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation"><span></span><span></span></button>
      <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="index.html#gallery">Smile gallery</a><a href="locations.html">Locations</a><a href="index.html#contact">Contact</a><a class="nav-cta" href="book.html">Book a visit <span aria-hidden="true">↗</span></a>
      </nav>
    </header>`;
  const toggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.primary-nav');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach((link) => {
    if (link.pathname.split('/').pop() === currentPage && !link.hash) {
      link.setAttribute('aria-current', 'page');
    }
  });
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.focus();
    }
  });
}

if (footer) {
  footer.innerHTML = `
    <footer class="footer" id="contact"><div class="footer-main">
      <div class="footer-about"><a class="wordmark" href="index.html"><span class="brand-symbol" aria-hidden="true">S</span><span class="brand-name">DR. SHEM<small>DENTAL CLINIC</small></span></a><p>Thoughtful dental care in Kisumu and Lang’ata, Nairobi. Call ahead to discuss your visit and confirm availability.</p><p class="footer-social-note"><a href="https://www.tiktok.com/@drshemdentalkisumu" target="_blank" rel="noopener noreferrer">TikTok ↗</a> · account linked from the clinic’s public listing.</p></div>
      <div class="footer-links"><h2>Explore</h2><a href="about.html">About the practice</a><a href="services.html">Dental services</a><a href="reviews.html">Patient reflections</a><a href="journal.html">Dental reading</a><a href="book.html">Request an appointment</a></div>
      <div class="footer-contact"><h2>Kisumu</h2><address>Mega City Mall<br>Ground Floor<br>Kisumu, Kenya</address><a href="tel:+254732224624">+254 732 224 624</a><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=Dr.+Shem+Rakewa+Dental+Clinic%2C+Mega+City+Mall%2C+Kisumu%2C+Kenya">Get directions ↗</a></div>
      <div class="footer-contact"><h2>Lang’ata</h2><address>Freedom Heights Mall<br>Mezzanine Floor, Lang’ata Road<br>Nairobi, Kenya</address><a href="tel:+254768020319">+254 768 020 319</a><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=Freedom+Heights+Mall%2C+Lang%27ata+Road%2C+Nairobi%2C+Kenya">Get directions ↗</a></div>
    </div><div class="footer-bottom"><span>© <span id="copyright-year"></span> Dr. Shem Dental</span><span>Contact details and hours should be confirmed before travelling.</span><nav class="footer-legal" aria-label="Legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></nav></div></footer>`;
  footer.querySelector('#copyright-year').textContent = new Date().getFullYear();
}

// The smile gallery has no clinic-approved before/after cases yet. Keep this
// gallery item a useful destination and a clear, non-misleading empty state.
const galleryAnchor = document.querySelector('#gallery');
if (galleryAnchor) galleryAnchor.setAttribute('id', 'gallery');

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const branch = link.dataset.branch || 'the clinic';
  const note = link.querySelector('[data-whatsapp-note]');
  if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    const message = link.dataset.message || `Hello Dr. Shem Dental, I would like to ask about an appointment at ${branch}.`;
    if (note) note.textContent = 'WhatsApp enquiry ↗';
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    const subject = encodeURIComponent(`Appointment enquiry — ${branch}`);
    const body = encodeURIComponent(`Hello Dr. Shem Dental,\n\nI would like to ask about booking at ${branch}. Please share your confirmed WhatsApp contact if available.\n\nThank you.`);
    link.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
    link.setAttribute('aria-label', `Email the clinic about WhatsApp booking at ${branch}`);
    if (note) note.textContent = 'Email the clinic';
    link.title = 'The clinic’s WhatsApp number is awaiting confirmation. Email the clinic instead.';
  }
});

document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('error', () => {
    image.classList.add('image-unavailable');
    image.setAttribute('aria-hidden', 'true');
    image.removeAttribute('alt');
    image.closest('figure, .feature-image, .location-page-card')?.classList.add('image-fallback');
  }, { once: true });
});

const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  const dateInput = bookingForm.elements.namedItem('date');
  if (dateInput) {
    const now = new Date();
    dateInput.min = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
  }
  const feedback = bookingForm.querySelector('.form-feedback');
  const fields = [...bookingForm.querySelectorAll('input, select, textarea')];
  const showFieldState = (field) => {
    const error = bookingForm.querySelector(`#${field.id}-error`);
    const message = field.validity.valueMissing ? 'Please complete this field.'
      : field.validity.typeMismatch ? 'Please enter a valid value.'
        : field.validity.tooShort ? `Please enter at least ${field.minLength} characters.`
          : field.validity.customError ? field.validationMessage : '';
    if (field.validity.rangeUnderflow) {
      if (error) error.textContent = 'Please choose today or a future date.';
    } else if (error) error.textContent = message;
    const hasError = Boolean(message) || field.validity.rangeUnderflow;
    field.setAttribute('aria-invalid', String(hasError));
    return !hasError;
  };
  fields.forEach((field) => {
    field.addEventListener('blur', () => showFieldState(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') showFieldState(field);
      if (feedback) feedback.textContent = '';
    });
  });
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (feedback) feedback.classList.remove('error');
    const valid = fields.map(showFieldState).every(Boolean) && bookingForm.reportValidity();
    if (!valid) {
      const firstInvalid = fields.find((field) => !field.validity.valid);
      firstInvalid?.focus();
      if (feedback) {
        feedback.classList.add('error');
        feedback.textContent = 'Please review the highlighted fields and try again.';
      }
      return;
    }
    const data = Object.fromEntries(new FormData(bookingForm));
    const lines = [
      'Appointment request — Dr. Shem Dental',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Preferred branch: ${data.branch}`,
      `Treatment / reason: ${data.treatment || 'To discuss'}`,
      `Preferred date: ${data.date || 'Flexible'}`,
      `Preferred time: ${data.time || 'Flexible'}`,
      `Message: ${data.message || '—'}`,
      '',
      'Please contact me to discuss availability. I understand that this request is not a confirmed appointment.'
    ].join('\n');
    if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      const waMessage = `Hello Dr. Shem Dental, I would like to request an appointment.\n${lines}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`, '_blank', 'noopener,noreferrer');
      feedback.textContent = 'Your message is ready in WhatsApp. Review and send it to contact the clinic; the appointment is not confirmed until the team replies.';
    } else {
      feedback.textContent = 'Your email app will open with the request. Send the message to contact the clinic. The appointment is not confirmed until the team replies.';
      window.location.href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent('Appointment request — Dr. Shem Dental')}&body=${encodeURIComponent(lines)}`;
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
