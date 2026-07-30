// Synthetic scrollbar for a scrollable list: real ::-webkit-scrollbar styling
// isn't reliable on recent Chromium/Windows builds (they render their own
// overlay scrollbar and ignore page CSS), so this is a plain div kept in sync
// with scrollLeft/scrollTop in JS instead — fully stylable, hoverable, and
// draggable like a native scrollbar thumb, regardless of what the browser does.
//
// Expects `scrollbarElement` to contain a `.scrollbar__thumb` child (see
// index.html / customSelect.js) and starts hidden via the `hidden` attribute
// until the paired list actually overflows — unless `alwaysVisible` is set, in
// which case it's shown at full width/height (nothing to drag) instead of
// hiding, e.g. so a tab row still shows the affordance even when everything
// currently fits.
export function createScrollbar(scrollElement, scrollbarElement, { orientation = 'vertical', snap = false, alwaysVisible = false } = {}) {
  const thumb = scrollbarElement.querySelector('.scrollbar__thumb');
  const horizontal = orientation === 'horizontal';

  function update() {
    const scrollSize = horizontal ? scrollElement.scrollWidth : scrollElement.scrollHeight;
    const clientSize = horizontal ? scrollElement.clientWidth : scrollElement.clientHeight;
    const scrollPos = horizontal ? scrollElement.scrollLeft : scrollElement.scrollTop;

    const overflowing = scrollSize > clientSize;
    scrollbarElement.hidden = alwaysVisible ? false : !overflowing;

    // With alwaysVisible, the track stays visible even with nothing to scroll —
    // but a thumb stretched to fill it would look identical to the track itself
    // (just a plain colored bar), implying a draggable thumb that isn't actually
    // there. Hide the thumb rather than fill it, so an empty track shows instead.
    if (!overflowing) {
      thumb.hidden = alwaysVisible;
      return;
    }
    thumb.hidden = false;

    const thumbSizePercent = (clientSize / scrollSize) * 100;
    const maxScroll = scrollSize - clientSize;
    const thumbPosPercent = maxScroll > 0 ? (scrollPos / maxScroll) * (100 - thumbSizePercent) : 0;

    if (horizontal) {
      thumb.style.width = `${thumbSizePercent}%`;
      thumb.style.left = `${thumbPosPercent}%`;
    } else {
      thumb.style.height = `${thumbSizePercent}%`;
      thumb.style.top = `${thumbPosPercent}%`;
    }
  }

  // Snaps to whichever item is nearest the current scroll position, animated —
  // used once a thumb drag is released so dragging still ends up aligned on an
  // item instead of stopping mid-item. Only relevant for lists opted into CSS
  // scroll-snap (the `snap` option) — a plain scrollable list like the last-action
  // dropdown has nothing to align to.
  function snapToNearestItem() {
    const firstItem = scrollElement.querySelector('li');
    if (!firstItem) return;

    const gap = parseFloat(getComputedStyle(scrollElement)[horizontal ? 'columnGap' : 'rowGap']) || 0;
    const step = (horizontal ? firstItem.offsetWidth : firstItem.offsetHeight) + gap;
    const scrollSize = horizontal ? scrollElement.scrollWidth : scrollElement.scrollHeight;
    const clientSize = horizontal ? scrollElement.clientWidth : scrollElement.clientHeight;
    const maxScroll = scrollSize - clientSize;
    const scrollPos = horizontal ? scrollElement.scrollLeft : scrollElement.scrollTop;
    const nearest = Math.min(maxScroll, Math.max(0, Math.round(scrollPos / step) * step));

    scrollElement.scrollTo(horizontal ? { left: nearest, behavior: 'smooth' } : { top: nearest, behavior: 'smooth' });
  }

  // Pointer capture keeps the drag tracking even once the cursor leaves the thumb.
  //
  // scroll-snap-type: mandatory forces an instant, unanimated re-snap on every
  // single scroll write — including ones made programmatically mid-drag — which
  // is what makes dragging feel like it teleports. Snapping is switched off for
  // the duration of the drag so the scroll position can follow the pointer
  // freely, then restored and animated to the nearest item once released.
  thumb.addEventListener('pointerdown', (event) => {
    thumb.setPointerCapture(event.pointerId);
    if (snap) scrollElement.style.scrollSnapType = 'none';

    const startPointerPos = horizontal ? event.clientX : event.clientY;
    const startScroll = horizontal ? scrollElement.scrollLeft : scrollElement.scrollTop;
    const trackSize = horizontal ? thumb.parentElement.clientWidth : thumb.parentElement.clientHeight;
    const thumbSize = horizontal ? thumb.offsetWidth : thumb.offsetHeight;
    const trackDistance = trackSize - thumbSize;
    const scrollSize = horizontal ? scrollElement.scrollWidth : scrollElement.scrollHeight;
    const clientSize = horizontal ? scrollElement.clientWidth : scrollElement.clientHeight;
    const maxScroll = scrollSize - clientSize;

    function onMove(moveEvent) {
      if (trackDistance <= 0) return;
      const pointerPos = horizontal ? moveEvent.clientX : moveEvent.clientY;
      const deltaScroll = (pointerPos - startPointerPos) * (maxScroll / trackDistance);
      const nextScroll = Math.min(maxScroll, Math.max(0, startScroll + deltaScroll));
      if (horizontal) scrollElement.scrollLeft = nextScroll;
      else scrollElement.scrollTop = nextScroll;
    }

    function onUp() {
      thumb.removeEventListener('pointermove', onMove);
      thumb.removeEventListener('pointerup', onUp);
      if (!snap) return;

      // Snap-type stays off until the animation actually finishes — restoring it
      // any earlier re-snaps instantly (a synchronous side effect of turning
      // mandatory snapping back on while off-point), which would cut the
      // animation short right as it starts.
      snapToNearestItem();
      scrollElement.addEventListener(
        'scrollend',
        () => {
          scrollElement.style.scrollSnapType = '';
        },
        { once: true }
      );
    }

    thumb.addEventListener('pointermove', onMove);
    thumb.addEventListener('pointerup', onUp);
  });

  scrollElement.addEventListener('scroll', update);
  window.addEventListener('resize', update);

  return { update };
}
