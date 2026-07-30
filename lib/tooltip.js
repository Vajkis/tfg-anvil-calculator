// A single shared tooltip element appended to <body>, positioned via
// getBoundingClientRect() on hover/focus. Unlike a CSS ::after tied to the
// hovered element itself, this is never clipped by an ancestor's overflow
// (e.g. .category-row's overflow-x: auto, which forces overflow-y: auto too,
// per spec) — it renders on top the same way no matter which element the
// data-tooltip attribute is on.
//
// Event delegation on `root` means elements added after init (e.g. re-rendered
// preset tiles) don't need to be wired up individually.
export function initTooltips(root = document) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  let currentTarget = null;

  function show(target) {
    const text = target.dataset.tooltip;
    if (!text) return;

    currentTarget = target;
    tooltip.textContent = text;
    tooltip.classList.add('is-visible');

    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
    const top = targetRect.top - tooltipRect.height - 8;

    tooltip.style.left = `${Math.max(4, left)}px`;
    tooltip.style.top = `${Math.max(4, top)}px`;
  }

  function hide(target) {
    if (target && target !== currentTarget) return;
    currentTarget = null;
    tooltip.classList.remove('is-visible');
  }

  root.addEventListener('mouseover', (event) => {
    const target = event.target.closest('[data-tooltip]');
    if (target) show(target);
  });

  root.addEventListener('mouseout', (event) => {
    hide(event.target.closest('[data-tooltip]'));
  });

  root.addEventListener('focusin', (event) => {
    const target = event.target.closest('[data-tooltip]');
    if (target) show(target);
  });

  root.addEventListener('focusout', (event) => {
    hide(event.target.closest('[data-tooltip]'));
  });
}
