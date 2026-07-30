import './style.scss';
import { ACTIONS, getActionById, ACTION_CATEGORIES, getCategoryById } from './data/actions.js';
import { METALS, getPresetById } from './data/presets.js';
import { solveSequence } from './lib/solver.js';
import { loadCustomPresets, addCustomPreset, removeCustomPreset, moveCustomPreset } from './lib/customPresets.js';
import { computeTargetValue } from './lib/targetValue.js';
import { createScrollbar } from './lib/scrollbar.js';
import { createLastActionSelects } from './lib/lastActionSelects.js';
import { initTooltips } from './lib/tooltip.js';

const presetNameInput = document.querySelector('#preset-name');
const savePresetButton = document.querySelector('#save-preset');
const customPresetGroup = document.querySelector('#custom-preset-group');
const worldSeedInput = document.querySelector('#world-seed');
const builtInPresetGroup = document.querySelector('#builtin-preset-group');
const customPresetsList = document.querySelector('#custom-presets-list');
const customPresetsScrollbarElement = document.querySelector('#custom-presets-scrollbar');
const builtInCategoryRow = document.querySelector('#builtin-category-row');
const builtInCategoryScrollbar = document.querySelector('#builtin-category-scrollbar');
const builtInSubcategoryRow = document.querySelector('#builtin-subcategory-row');
const builtInSubcategoryScrollbar = document.querySelector('#builtin-subcategory-scrollbar');
const builtInPresetsGrid = document.querySelector('#builtin-presets-grid');
const lastActionSelectElements = [
  document.querySelector('#last-action-0'),
  document.querySelector('#last-action-1'),
  document.querySelector('#last-action-2')
];
const startValueInput = document.querySelector('#start-value');
const startValueSlider = document.querySelector('#start-value-slider');
const targetInput = document.querySelector('#target');
const targetSlider = document.querySelector('#target-slider');
const calculateButton = document.querySelector('#calculate');
const resultSection = document.querySelector('#result');
const divider = document.querySelector('#divider');

let customPresets = loadCustomPresets();
let selectedPresetId = null;
// Both nullable and independently toggleable — clicking an already-selected tile
// deselects it, same as clicking a fresh one selects it (see handleCategoryRowClick
// / handleSubcategoryRowClick). No metal selected means nothing else shows;
// a metal selected with no subcategory means "every item across all of this
// metal's subcategories".
let selectedMetalId = null;
let selectedSubcategoryId = null;

function clearSelectedPreset() {
  selectedPresetId = null;
  refreshPresetUI();
}

function syncSliderFill(slider) {
  const min = Number(slider.min);
  const max = Number(slider.max);
  const percent = ((Number(slider.value) - min) / (max - min)) * 100;
  slider.style.setProperty('--fill', `${percent}%`);
}

function setTargetValue(value) {
  const clamped = Math.min(145, Math.max(0, value));
  targetInput.value = clamped;
  targetSlider.value = clamped;
  syncSliderFill(targetSlider);
}

function setStartValue(value) {
  const clamped = Math.min(145, Math.max(0, value));
  startValueInput.value = clamped;
  startValueSlider.value = clamped;
  syncSliderFill(startValueSlider);
}

function renderPresetRow(preset, { withReorderActions, isFirst, isLast }) {
  const isActive = preset.id === selectedPresetId;
  const reorderActions = withReorderActions
    ? `
        <button type="button" data-action="up" ${isFirst ? 'disabled' : ''} aria-label="Move up">&uarr;</button>
        <button type="button" data-action="down" ${isLast ? 'disabled' : ''} aria-label="Move down">&darr;</button>
        <button type="button" data-action="delete" aria-label="Delete">&times;</button>
      `
    : '';

  return `
    <li data-id="${preset.id}" class="${isActive ? 'is-active' : ''}">
      <button type="button" class="preset-list__name" data-action="apply">${preset.name}</button>
      <span class="preset-list__actions">${reorderActions}</span>
    </li>
  `;
}

function renderCustomPresetsList() {
  customPresetGroup.hidden = customPresets.length === 0;

  customPresetsList.innerHTML = customPresets
    .map((preset, index) =>
      renderPresetRow(preset, {
        withReorderActions: true,
        isFirst: index === 0,
        isLast: index === customPresets.length - 1
      })
    )
    .join('');
  presetsScrollbar.update();
}

// Built-in presets are now a category tab row (one horizontally-scrolling row,
// wheel-paged like the vertical preset lists) plus a preset grid below it that
// always shows every preset for the selected category, wrapping into as many
// rows as needed rather than scrolling. Each tile shows a template shape image
// (img is the full path, e.g. "/img/ingot.png" — several tiles can share one
// template) tinted with the category's color, with the name as a hover tooltip.
//
// data-tooltip lives on the <li>, not the button — the button has overflow:
// hidden (to crop/fit its icon) which would clip a tooltip positioned outside
// its own bounds.
//
// The template PNGs already have their own baked-in pixel-art shading (light/
// dark variation), so a flat mask-fill recolor would flatten that detail away.
// Instead, the category's color is applied as its own layer — masked to the
// same template silhouette, then mix-blend-mode: multiply'd onto the base
// image — the same technique Minecraft itself uses to tint leather armor and
// spawn eggs: it recolors while keeping the template's own shading intact.
// With no color assigned yet, the template just renders as-is, untinted.
//
// Only tints images living flat in /img/ (e.g. "/img/rod.png") — one template
// shared and recolored per metal. Anything in a subfolder (e.g.
// "/img/bars/copper.png") is already a material-specific, pre-colored image and
// must not be tinted again on top. Inferred from the path itself rather than a
// per-preset flag, so it can't drift out of sync with where the image actually
// lives.
//
// overlay (not every template has one) is a second image composited on top of
// the base+tint, as-is — not tinted itself, just an extra detail/shading pass,
// the same way Minecraft layers multiple texture passes on one item.
function renderTintedIcon(imgPath, color, overlayPath) {
  if (!imgPath) return '';
  const isGenericTemplate = /^\/?img\/[^/]+$/.test(imgPath);
  const tintLayer =
    color && isGenericTemplate
      ? `<span class="tinted-icon__tint" style="background-color: ${color}; -webkit-mask-image: url('${imgPath}'); mask-image: url('${imgPath}');"></span>`
      : '';
  const overlayLayer = overlayPath ? `<img class="tinted-icon__overlay" src="${overlayPath}" alt="" />` : '';
  return `
    <span class="tinted-icon">
      <img class="tinted-icon__base" src="${imgPath}" alt="" />
      ${tintLayer}
      ${overlayLayer}
    </span>
  `;
}

function renderPresetSquare(preset, fallbackColor) {
  const isActive = preset.id === selectedPresetId;
  return `
    <li data-id="${preset.id}" class="${isActive ? 'is-active' : ''}" data-tooltip="${preset.name}">
      <button type="button" class="preset-grid__name" data-action="apply">
        ${renderTintedIcon(preset.img, preset.color ?? fallbackColor, preset.overlay)}
      </button>
    </li>
  `;
}

function renderBuiltInCategoryRow() {
  if (builtInCategoryRow.childElementCount === 0) {
    builtInCategoryRow.innerHTML = METALS.map(
      (metal) => `
        <li data-metal="${metal.id}" data-tooltip="${metal.name}">
          <button type="button" class="category-row__name" data-action="select-metal">
            ${renderTintedIcon(metal.img, metal.color, metal.overlay)}
          </button>
        </li>
      `
    ).join('');
  }

  for (const li of builtInCategoryRow.children) {
    li.classList.toggle('is-active', li.dataset.metal === selectedMetalId);
  }
}

// Only rendered/visible once a metal is selected — same square-tile design as
// the metal row above it (reuses .category-row / .category-row__name as-is).
function renderBuiltInSubcategoryRow() {
  const metal = METALS.find((metal) => metal.id === selectedMetalId);
  builtInSubcategoryRow.hidden = !metal;

  if (!metal) {
    builtInSubcategoryRow.innerHTML = '';
    builtInSubcategoryScrollbar.hidden = true;
    return;
  }

  builtInSubcategoryRow.innerHTML = metal.subcategories
    .map(
      (subcategory) => `
      <li data-subcategory="${subcategory.id}" data-tooltip="${subcategory.name}">
        <button type="button" class="category-row__name" data-action="select-subcategory">
          ${renderTintedIcon(subcategory.img, subcategory.color ?? metal.color, subcategory.overlay)}
        </button>
      </li>
    `
    )
    .join('');

  for (const li of builtInSubcategoryRow.children) {
    li.classList.toggle('is-active', li.dataset.subcategory === selectedSubcategoryId);
  }

  // The row was just rebuilt (possibly after being display:none while no metal
  // was selected, which reads as zero width) — recompute the scrollbar now that
  // real dimensions exist, same fix as updateBuiltInVisibility below.
  subcategoryScrollbar.update();
}

// With no subcategory selected, every preset across all of this metal's
// subcategories shows at once — a subcategory tile narrows that down to just
// its own presets. Each preset is paired with the subcategory it actually
// came from (rather than flattening presets alone) so its color fallback
// chain — preset's own color, then its subcategory's, then the metal's —
// stays correct even when presets from several subcategories are mixed
// together in the unfiltered view.
function renderBuiltInPresetsGrid() {
  const metal = METALS.find((metal) => metal.id === selectedMetalId);
  const subcategory = metal?.subcategories.find((subcategory) => subcategory.id === selectedSubcategoryId);
  const subcategories = metal ? (subcategory ? [subcategory] : metal.subcategories) : [];
  const presetEntries = subcategories.flatMap((subcategory) =>
    subcategory.presets.map((preset) => ({ preset, subcategory }))
  );

  // An empty-but-rendered grid still counts as a flex child of .preset-group__content
  // and takes its share of gap either side — hiding it outright (not just emptying
  // its innerHTML) is what actually removes that gap.
  builtInPresetsGrid.hidden = presetEntries.length === 0;
  builtInPresetsGrid.innerHTML = presetEntries
    .map(({ preset, subcategory }) => renderPresetSquare(preset, subcategory.color ?? metal?.color))
    .join('');
}

function handleCategoryRowClick(event) {
  const button = event.target.closest('button[data-action="select-metal"]');
  if (!button) return;

  const metalId = button.closest('li').dataset.metal;
  selectedMetalId = selectedMetalId === metalId ? null : metalId;
  selectedSubcategoryId = null;
  refreshPresetUI();

  // scrollLeft belongs to the row element itself, not its content, so it
  // survives the innerHTML rebuild inside refreshPresetUI() — without
  // resetting it here, switching to a metal with a shorter subcategory list
  // can leave the row scrolled past its own content. Only reset on a metal
  // change, not on a subcategory change within the same metal.
  builtInSubcategoryRow.scrollLeft = 0;
}

function handleSubcategoryRowClick(event) {
  const button = event.target.closest('button[data-action="select-subcategory"]');
  if (!button) return;

  const subcategoryId = button.closest('li').dataset.subcategory;
  selectedSubcategoryId = selectedSubcategoryId === subcategoryId ? null : subcategoryId;
  refreshPresetUI();
}

function renderBuiltInPresetsList() {
  renderBuiltInCategoryRow();
  renderBuiltInSubcategoryRow();
  renderBuiltInPresetsGrid();
}

function refreshPresetUI() {
  renderCustomPresetsList();
  renderBuiltInPresetsList();
}

function findPresetById(id) {
  return customPresets.find((preset) => preset.id === id) ?? getPresetById(id);
}

// Built-in presets store a recipeId (the real TFC anvil recipe's id, e.g.
// "tfc:anvil/copper_rod") instead of a fixed number - the actual target_value
// depends on the world seed, so it's computed on the fly from whatever seed is
// currently entered. Custom presets (user-saved) aren't tied to any recipe and
// keep their own literal target.
function applyPreset(presetId) {
  const preset = findPresetById(presetId);
  if (!preset) return;

  lastActionSelects.applyLast3(preset.last3);
  const target = preset.recipeId ? computeTargetValue(worldSeedInput.value, preset.recipeId) : preset.target;
  setTargetValue(target);
  setStartValue(preset.startValue ?? 0);
}

// Slots are ordered 3rd-to-last .. last. Whichever ones are set (skipping "None")
// must end up as the literal final actions of the sequence, contiguous, in that
// order — leaving a slot as "None" removes it, it never leaves a gap to be
// backfilled with an extra free action.
function getFixedCategoryIds(slots) {
  return slots.filter((categoryId) => categoryId !== null);
}

// Hit covers 3 possible power levels, so a fixed "Hit" slot isn't a single value —
// expand every combination of concrete actions across the fixed slots.
function expandFixedCombinations(categoryIds) {
  let combinations = [[]];
  for (const categoryId of categoryIds) {
    const category = getCategoryById(categoryId);
    const nextCombinations = [];
    for (const combo of combinations) {
      for (const variantId of category.variants) {
        nextCombinations.push([...combo, variantId]);
      }
    }
    combinations = nextCombinations;
  }
  return combinations;
}

// An ingot breaks if the work value ever drops below 0 or exceeds 145, so every
// action in the actual worked order — including the required trailing ones —
// must keep the running total inside that range.
function stepsStayInBounds(startValue, actionIds) {
  let value = startValue;
  for (const actionId of actionIds) {
    value += getActionById(actionId).value;
    if (value < 0 || value > 145) return false;
  }
  return true;
}

// When several trailing slots are the generic "Hit" category, multiple concrete
// variant combos can tie on total steps. Prefer the one tapering heaviest-first
// (-9, then -6, then -3), matching the same convention used for the free steps.
function isMoreDescending(candidate, current) {
  for (let i = 0; i < candidate.length; i += 1) {
    const diff = getActionById(candidate[i]).value - getActionById(current[i]).value;
    if (diff !== 0) return diff < 0;
  }
  return false;
}

function buildSolution(target, slots, startValue = 0) {
  const fixedCategoryIds = getFixedCategoryIds(slots);

  let best = null;
  for (const fixedActionIds of expandFixedCombinations(fixedCategoryIds)) {
    const fixedSum = fixedActionIds.reduce((sum, actionId) => sum + getActionById(actionId).value, 0);
    const remainder = target - fixedSum;
    if (!stepsStayInBounds(remainder, fixedActionIds)) continue;

    const preceding = solveSequence(remainder - startValue, ACTIONS, 0, startValue);
    if (preceding === null) continue;

    const totalSteps = preceding.length + fixedActionIds.length;
    const isBetter =
      best === null ||
      totalSteps < best.totalSteps ||
      (totalSteps === best.totalSteps && isMoreDescending(fixedActionIds, best.fixedActionIds));

    if (isBetter) {
      best = { preceding, fixedActionIds, totalSteps };
    }
  }

  if (best === null) return null;

  // Free steps have no required order, so display them the way an anvil is
  // conventionally worked: biggest shaping moves (+) first, largest-first,
  // then the negative moves (Draw/Hits) largest-magnitude-first, tapering
  // down to the lightest hit right before the required trailing steps. Only
  // used if it still keeps the ingot in bounds — otherwise keep the order
  // the solver actually found, which is guaranteed valid.
  const positives = best.preceding.filter((id) => getActionById(id).value > 0);
  const negatives = best.preceding.filter((id) => getActionById(id).value < 0);
  positives.sort((a, b) => getActionById(b).value - getActionById(a).value);
  negatives.sort((a, b) => getActionById(a).value - getActionById(b).value);

  const reordered = [...positives, ...negatives];
  const sortedPreceding = stepsStayInBounds(startValue, reordered) ? reordered : best.preceding;

  const fullSequence = [...sortedPreceding, ...best.fixedActionIds];
  const fixedMask = fullSequence.map((_, index) => index >= sortedPreceding.length);

  return { fullSequence, fixedMask };
}

// Consecutive repeats of the same action (e.g. three Light Hits in a row)
// collapse into a single tile with an "x3" badge instead of three identical
// tiles — actions aren't merged across a gap, only when they're adjacent in
// the actual worked order.
function groupConsecutiveActions(actionIds) {
  const groups = [];
  for (const actionId of actionIds) {
    const last = groups[groups.length - 1];
    if (last && last.actionId === actionId) {
      last.count += 1;
    } else {
      groups.push({ actionId, count: 1 });
    }
  }
  return groups;
}

// One square tile per actual step — repeats show as repeated tiles rather
// than a count badge, so the row itself stays a plain visual strip; the
// count is called out in words in the steps list below instead (see
// renderStepsList).
function renderActionRow(actionIds) {
  return actionIds
    .map((actionId) => {
      const action = getActionById(actionId);
      return `
        <li class="result__tile" data-tooltip="${action.label}">
          <img src="${action.img}" alt="${action.label}" />
        </li>
      `;
    })
    .join('');
}

function renderStepsList(actionIds, isFixed) {
  return groupConsecutiveActions(actionIds)
    .map(({ actionId, count }) => {
      const action = getActionById(actionId);
      const countLabel = count > 1 ? ` × ${count}` : '';
      return `<li class="${isFixed ? 'result__step--fixed' : ''}"><span class="result__value">${
        action.value > 0 ? '+' : ''
      }${action.value}</span> - ${action.label}${countLabel}</li>`;
    })
    .join('');
}

function renderResult(solution, target, presetName) {
  divider.hidden = false;
  resultSection.hidden = false;

  if (solution === null) {
    resultSection.innerHTML = `<p class="result__error">No solution found — value would drop below 0 or exceed 145 with these trailing actions and target.</p>`;
    return;
  }

  const { fullSequence, fixedMask } = solution;

  if (fullSequence.length === 0) {
    resultSection.innerHTML = `<p class="result__error">Nothing to calculate, target already equals the start value.</p>`;
    return;
  }

  // fixedMask's true values are always the trailing contiguous tail (see
  // buildSolution) — everything before that first true is the free setup
  // portion, everything from it onward is the required finishing sequence.
  const splitIndex = fixedMask.indexOf(true);
  const setupIds = splitIndex === -1 ? fullSequence : fullSequence.slice(0, splitIndex);
  const finishIds = splitIndex === -1 ? [] : fullSequence.slice(splitIndex);

  const heading = presetName ? `<span class="result__item">${presetName}</span>` : '';
  const setupRow = setupIds.length
    ? `<ul class="result__row result__row--setup">${renderActionRow(setupIds)}</ul>`
    : '';
  const finishRow = finishIds.length
    ? `<ul class="result__row result__row--finish">${renderActionRow(finishIds)}</ul>`
    : '';
  const stepsList = `<ul class="result__steps">${renderStepsList(setupIds, false)}${renderStepsList(
    finishIds,
    true
  )}</ul>`;

  resultSection.innerHTML = `
    <h2 class="result__title">${heading} ${fullSequence.length} Step${fullSequence.length === 1 ? '' : 's'}</h2>
    ${setupRow}
    ${finishRow}
    ${stepsList}
  `;
}

function handleCalculate(presetName = null) {
  const slots = lastActionSelects.readSlots();
  const target = Number(targetInput.value);
  const startValue = Number(startValueInput.value);

  const solution = buildSolution(target, slots, startValue);
  renderResult(solution, target, presetName);
}

function handleSavePreset() {
  const name = presetNameInput.value.trim();
  if (!name) return;

  const last3 = lastActionSelects.readLast3();
  const target = Number(targetInput.value);
  const startValue = Number(startValueInput.value);

  customPresets = addCustomPreset({ name, last3, target, startValue });
  presetNameInput.value = '';
  refreshPresetUI();
}

function handlePresetListClick(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const id = button.closest('li').dataset.id;
  const action = button.dataset.action;

  if (action === 'apply') {
    selectedPresetId = id;
    applyPreset(id);
    handleCalculate(findPresetById(id)?.name ?? null);
  } else if (action === 'delete') {
    customPresets = removeCustomPreset(id);
  } else if (action === 'up') {
    customPresets = moveCustomPreset(id, -1);
  } else if (action === 'down') {
    customPresets = moveCustomPreset(id, 1);
  }

  refreshPresetUI();
}

// Scroll-snap alone doesn't cap how far a single wheel notch travels, so a
// default wheel delta can jump past 2-3 items at once. Intercept it and move
// exactly one item (+ gap) per tick instead.
//
// Each tick's destination is tracked separately from scrollTop and accumulated,
// rather than re-reading scrollTop (which lags behind mid-animation) — otherwise
// fast successive ticks each restart a smooth-scroll from a stale position and
// fight each other, making the list feel like it's crawling.
function enableWheelPaging(listElement, { horizontal = false } = {}) {
  let targetScroll = horizontal ? listElement.scrollLeft : listElement.scrollTop;
  let lastTickAt = 0;

  listElement.addEventListener(
    'wheel',
    (event) => {
      const firstItem = listElement.querySelector('li');
      if (!firstItem) return;

      event.preventDefault();

      const now = performance.now();
      if (now - lastTickAt > 150) {
        targetScroll = horizontal ? listElement.scrollLeft : listElement.scrollTop;
      }
      lastTickAt = now;

      const gap = parseFloat(getComputedStyle(listElement)[horizontal ? 'columnGap' : 'rowGap']) || 0;
      const step = (horizontal ? firstItem.offsetWidth : firstItem.offsetHeight) + gap;
      const maxScroll = horizontal
        ? listElement.scrollWidth - listElement.clientWidth
        : listElement.scrollHeight - listElement.clientHeight;

      targetScroll = Math.min(maxScroll, Math.max(0, targetScroll + Math.sign(event.deltaY) * step));
      listElement.scrollTo(
        horizontal ? { left: targetScroll, behavior: 'smooth' } : { top: targetScroll, behavior: 'smooth' }
      );
    },
    { passive: false }
  );
}

// Remembers whether each preset group is expanded or collapsed, per group, across reloads.
function restoreCollapsedState(detailsElement) {
  const storageKey = `tfg-anvil-calculator:collapsed:${detailsElement.id}`;
  const stored = localStorage.getItem(storageKey);
  if (stored !== null) {
    detailsElement.open = stored !== 'collapsed';
  }

  detailsElement.addEventListener('toggle', () => {
    localStorage.setItem(storageKey, detailsElement.open ? 'open' : 'collapsed');
  });
}

// Built-in presets' target values are derived from (world seed, recipe id) —
// see lib/targetValue.js — so without a seed there's nothing correct to show.
function updateBuiltInVisibility() {
  builtInPresetGroup.hidden = worldSeedInput.value.trim() === '';

  // While hidden, the category row is display:none, so its clientWidth/scrollWidth
  // both read 0 and categoryScrollbar.update() concludes there's nothing to
  // scroll — hiding the scrollbar until a real 'scroll' event happens to
  // recompute it. Re-running update() here (now that it's actually visible and
  // has real dimensions) means it doesn't wait on the user to scroll first.
  // Same fix applies to the subcategory row, but only if it's actually meant to
  // be showing (a metal selected) — subcategoryScrollbar is alwaysVisible, so
  // calling update() unconditionally would force it visible even with no metal
  // selected, overriding renderBuiltInSubcategoryRow's own hide for that case.
  if (!builtInPresetGroup.hidden) {
    categoryScrollbar.update();
    if (!builtInSubcategoryRow.hidden) subcategoryScrollbar.update();
  }
}

// Remembers the entered world seed across reloads — typing it back in every
// visit would be tedious, and unlike the trailing actions/target it isn't part
// of "the current calculation" so it doesn't need clearing alongside those.
const WORLD_SEED_STORAGE_KEY = 'tfg-anvil-calculator:world-seed';

function restoreWorldSeed() {
  const stored = localStorage.getItem(WORLD_SEED_STORAGE_KEY);
  if (stored !== null) {
    worldSeedInput.value = stored;
  }
}

initTooltips();
const lastActionSelects = createLastActionSelects(lastActionSelectElements, ACTION_CATEGORIES, getActionById);
const categoryScrollbar = createScrollbar(builtInCategoryRow, builtInCategoryScrollbar, {
  orientation: 'horizontal',
  snap: true
});
const subcategoryScrollbar = createScrollbar(builtInSubcategoryRow, builtInSubcategoryScrollbar, {
  orientation: 'horizontal',
  snap: true,
  alwaysVisible: true
});
const presetsScrollbar = createScrollbar(customPresetsList, customPresetsScrollbarElement, {
  orientation: 'vertical',
  snap: true
});
refreshPresetUI();
enableWheelPaging(customPresetsList);
enableWheelPaging(builtInCategoryRow, { horizontal: true });
enableWheelPaging(builtInSubcategoryRow, { horizontal: true });
categoryScrollbar.update();
restoreCollapsedState(customPresetGroup);
restoreCollapsedState(builtInPresetGroup);
restoreWorldSeed();
updateBuiltInVisibility();
worldSeedInput.addEventListener('input', () => {
  localStorage.setItem(WORLD_SEED_STORAGE_KEY, worldSeedInput.value);
  updateBuiltInVisibility();

  // A built-in preset's target depends on the seed - re-derive it so editing the
  // seed with a preset already selected doesn't leave a stale value on screen.
  const selected = findPresetById(selectedPresetId);
  if (selected?.recipeId) {
    setTargetValue(computeTargetValue(worldSeedInput.value, selected.recipeId));
  }
});
syncSliderFill(targetSlider);
syncSliderFill(startValueSlider);

calculateButton.addEventListener('click', () => {
  handleCalculate(findPresetById(selectedPresetId)?.name ?? null);
});
savePresetButton.addEventListener('click', handleSavePreset);
customPresetsList.addEventListener('click', handlePresetListClick);
builtInCategoryRow.addEventListener('click', handleCategoryRowClick);
builtInSubcategoryRow.addEventListener('click', handleSubcategoryRowClick);
builtInPresetsGrid.addEventListener('click', handlePresetListClick);

// Editing any trailing action or the target value manually means the form no
// longer necessarily matches the preset it was loaded from.
lastActionSelects.onChange(clearSelectedPreset);

// Doesn't rewrite targetInput while it parses to something in range (so we never
// fight the user mid-keystroke, e.g. clearing the field to type a new value) —
// but a value that's actually out of bounds gets clamped immediately.
targetInput.addEventListener('input', () => {
  const value = Number(targetInput.value);

  if (!Number.isNaN(value) && (value < 0 || value > 145)) {
    targetInput.value = Math.min(145, Math.max(0, value));
  }

  const sliderValue = Number(targetInput.value);
  targetSlider.value = Number.isNaN(sliderValue) ? 0 : sliderValue;
  syncSliderFill(targetSlider);
  clearSelectedPreset();
});
targetSlider.addEventListener('input', () => {
  setTargetValue(Number(targetSlider.value));
  clearSelectedPreset();
});
targetSlider.addEventListener(
  'wheel',
  (event) => {
    event.preventDefault();
    const step = Number(targetSlider.step) || 1;
    setTargetValue(Number(targetSlider.value) + Math.sign(event.deltaY) * step);
    clearSelectedPreset();
  },
  { passive: false }
);

// Same behavior as the target value field/slider above, mirrored for start value.
startValueInput.addEventListener('input', () => {
  const value = Number(startValueInput.value);

  if (!Number.isNaN(value) && (value < 0 || value > 145)) {
    startValueInput.value = Math.min(145, Math.max(0, value));
  }

  const sliderValue = Number(startValueInput.value);
  startValueSlider.value = Number.isNaN(sliderValue) ? 0 : sliderValue;
  syncSliderFill(startValueSlider);
  clearSelectedPreset();
});
startValueSlider.addEventListener('input', () => {
  setStartValue(Number(startValueSlider.value));
  clearSelectedPreset();
});
startValueSlider.addEventListener(
  'wheel',
  (event) => {
    event.preventDefault();
    const step = Number(startValueSlider.step) || 1;
    setStartValue(Number(startValueSlider.value) + Math.sign(event.deltaY) * step);
    clearSelectedPreset();
  },
  { passive: false }
);
