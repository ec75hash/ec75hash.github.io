(() => {
  'use strict';
  const motionButton = document.querySelector('.motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPreference = null;
  try { motionPreference = localStorage.getItem('portfolio-motion'); } catch (_) { /* Storage is optional. */ }
  let allowMotion = motionPreference === null ? !reducedMotion.matches : motionPreference === 'on' && !reducedMotion.matches;
  let animationContext;

  const gsapReady = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (gsapReady) gsap.registerPlugin(ScrollTrigger);

  function setupMotion() {
    if (animationContext) animationContext.revert();
    document.documentElement.dataset.motion = allowMotion ? 'on' : 'off';
    motionButton.setAttribute('aria-pressed', String(!allowMotion));
    const label = allowMotion ? 'Pause animations' : (reducedMotion.matches ? 'Reduced motion enabled' : 'Enable animations');
    motionButton.setAttribute('aria-label', label);
    motionButton.title = label;
    motionButton.disabled = reducedMotion.matches;
    motionButton.querySelector('span').textContent = label;
    motionButton.querySelector('path').setAttribute('d', allowMotion ? 'M7 5v10M13 5v10' : 'M7 5l8 5-8 5z');
    if (gsapReady && allowMotion) {
      animationContext = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro.from('.site-header .wordmark, .site-header nav', { opacity: 0, y: -8, duration: .65, stagger: .06 })
          .from('.hero-eyebrow', { opacity: 0, y: 8, duration: .65 }, .15)
          .from('.title-line > span', { yPercent: 108, duration: 1.05, stagger: .13 }, .24)
          .from('.hero-intro, .hero-actions', { opacity: 0, y: 15, duration: .8, stagger: .1 }, .65)
          .from('.hero-bottom', { opacity: 0, duration: .7 }, 1.05);
        document.querySelectorAll('[data-reveal]').forEach(element => {
          gsap.from(element, { opacity: 0, y: 24, duration: .85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
        });
        gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: .2 } });
        gsap.from('.archive-bars i', { yPercent: 18, stagger: .025, ease: 'none', scrollTrigger: { trigger: '.archive-art', start: 'top bottom', end: 'bottom top', scrub: .8 } });
      });
    }
  }

  motionButton.addEventListener('click', () => {
    if (reducedMotion.matches) return;
    allowMotion = !allowMotion;
    motionPreference = allowMotion ? 'on' : 'off';
    try { localStorage.setItem('portfolio-motion', motionPreference); } catch (_) { /* Storage is optional. */ }
    setupMotion();
  });
  reducedMotion.addEventListener('change', () => {
    allowMotion = !reducedMotion.matches && motionPreference !== 'off';
    setupMotion();
  });
  const copyButton = document.querySelector('.copy-email');
  let copyReset;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText('jws299792@icloud.com');
      copyButton.querySelector('span').textContent = 'Copied';
      status.textContent = 'Email address copied to clipboard.';
    } catch (_) {
      copyButton.querySelector('span').textContent = 'Select the email above';
      status.textContent = 'Copy unavailable. You can select the email address or open its link.';
    }
    clearTimeout(copyReset);
    copyReset = setTimeout(() => { copyButton.querySelector('span').textContent = 'Copy email'; }, 2600);
  });
  setupMotion();
  if (document.fonts && gsapReady) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
