window.animateCards = function(container, selector = ".col") {
  if (!container || !window.anime) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const items = container.querySelectorAll(selector);
  if (!items.length) return;

  anime({
    targets: items,
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(60, { start: 100 }),
    duration: 600,
    easing: "easeOutQuad"
  });
};

window.animateHeroContent = function(container, selector = ".hero-content > *") {
  if (!container || !window.anime) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const items = container.querySelectorAll(selector);
  if (!items.length) return;

  anime({
    targets: items,
    opacity: [0, 1],
    translateY: [16, 0],
    delay: anime.stagger(80, { start: 120 }),
    duration: 700,
    easing: "easeOutQuad"
  });
};
