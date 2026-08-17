/* ==========================================================================
   Beepop — main.js
   ==========================================================================
   - Sticky-nav scrolled state
   - Mobile nav toggle
   - Smooth scroll for in-page anchors
   - Scroll-reveal animations
   - Form submit handlers (visual-only / console.log)
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Sticky nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add('nav--scrolled');
      else nav.classList.remove('nav--scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
      const expanded = links.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav after a link tap
      if (links && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ---------- Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el, i) => {
      // Stagger siblings slightly
      el.style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  /* ---------- Form handlers (visual-only) ---------- */
  const forms = [
    {
      form:  document.querySelector('#spotlight-signup'),
      thanks: document.querySelector('#thanks-spotlight'),
      log:    'Beepop — launch notification signup:',
    },
    {
      form:  document.querySelector('#order-form'),
      thanks: document.querySelector('#thanks-order'),
      log:    'Beepop — order interest captured:',
    },
  ];

  forms.forEach(({ form, thanks, log }) => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // eslint-disable-next-line no-console
      console.log(log, data);
      form.reset();
      thanks?.classList.add('is-visible');
      window.setTimeout(() => thanks?.classList.remove('is-visible'), 5000);
    });
  });

})();
