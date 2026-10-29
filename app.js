(() => {
  'use strict';
  const motionButton = document.querySelector('.motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const roleButtons = [...document.querySelectorAll('[data-role]')];
  const caption = document.querySelector('.diagram-caption');
  const descriptions = {
    preserve: 'Which roles stay similar across related neurons?',
    specialize: 'Which neurons become selective for different contexts?',
    reorganize: 'How do related parts come to play different roles?'
  };
  let motionPreference = null;
  try { motionPreference = localStorage.getItem('portfolio-motion'); } catch (_) { /* Storage is optional. */ }
  let allowMotion = motionPreference === null ? !reducedMotion.matches : motionPreference === 'on' && !reducedMotion.matches;
  let animationContext;
  let activeRole = 'preserve';

  const gsapReady = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (gsapReady) gsap.registerPlugin(ScrollTrigger);

  function applyRole(animate) {
    const lines = [...document.querySelectorAll('.network-paths .connection')];
    lines.forEach(line => {
      const isOrigin = line.classList.contains('connection-origin');
      const isActive = line.classList.contains(`connection-${activeRole}`);
      const stroke = isActive || isOrigin ? '#404fed' : '#a8b1ba';
      const opacity = isActive || isOrigin ? 1 : .16;
      const width = isActive ? 3.2 : (isOrigin ? 2 : 1.2);
      if (animate && gsapReady && allowMotion) {
        gsap.to(line, { attr: { stroke, 'stroke-width': width }, opacity, duration: .5, overwrite: true });
      } else {
        if (gsapReady) gsap.killTweensOf(line);
        line.setAttribute('stroke', stroke);
        line.setAttribute('stroke-width', width);
        line.style.opacity = opacity;
      }
    });
    document.querySelectorAll('.node-end').forEach(node => {
      const selected = node.classList.contains(`node-${activeRole}`);
      const fill = selected ? '#404fed' : '#f7f8f2';
      const radius = selected ? 10 : 7;
      const opacity = selected ? 1 : .35;
      if (animate && gsapReady && allowMotion) {
        gsap.to(node, { attr: { fill, r: radius }, opacity, duration: .5, overwrite: true });
      } else {
        if (gsapReady) gsap.killTweensOf(node);
        node.setAttribute('fill', fill);
        node.setAttribute('r', radius);
        node.style.opacity = opacity;
      }
    });
    roleButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.role === activeRole)));
    caption.textContent = descriptions[activeRole];
  }

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
          .from('.research-object', { opacity: 0, y: 20, duration: .9 }, .45)
          .from('.hero-bottom', { opacity: 0, duration: .7 }, 1.05);
        document.querySelectorAll('[data-reveal]').forEach(element => {
          gsap.from(element, { opacity: 0, y: 24, duration: .85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
        });
        gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: .2 } });
        const pulse = gsap.to('.signal-dot', { opacity: .25, duration: 1.4, stagger: .35, yoyo: true, repeat: -1, ease: 'sine.inOut', paused: true });
        ScrollTrigger.create({ trigger: '.research-object', start: 'top bottom', end: 'bottom top', onToggle: self => self.isActive ? pulse.play() : pulse.pause() });
        gsap.from('.archive-bars i', { yPercent: 18, stagger: .025, ease: 'none', scrollTrigger: { trigger: '.archive-art', start: 'top bottom', end: 'bottom top', scrub: .8 } });
      });
    }
    applyRole(false);
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
  roleButtons.forEach(button => button.addEventListener('click', () => {
    activeRole = button.dataset.role;
    applyRole(true);
  }));

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
