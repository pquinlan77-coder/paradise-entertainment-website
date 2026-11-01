(() => {
  const cfg = window.PARADISE_SITE_CONFIG || {};
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
  for (const el of document.querySelectorAll('[data-contact-slot]')) {
    if (cfg.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.contactEmail)) {
      const a = document.createElement('a');
      a.className = 'email-link';
      a.href = 'mailto:' + cfg.contactEmail;
      a.textContent = cfg.contactEmail;
      el.replaceChildren(a);
    }
  }
})();
