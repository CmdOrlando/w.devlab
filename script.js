// Minimal UI interactions: mobile nav toggle, form handling with client-side validation.
// Save as script.js and include in index.html (already included).

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.style.display = expanded ? '' : 'flex';
  });

  // Smooth scroll for anchors (enhances older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Simple form fake-submit with instant feedback (no network)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validity
    if (!form.checkValidity()) {
      status.textContent = 'Please complete the form correctly.';
      status.style.color = '#ffb3c9';
      return;
    }
    // Visual success
    status.textContent = 'Message sent — thanks! I will get back to you soon.';
    status.style.color = '#bfffc9';
    form.reset();
  });
});
