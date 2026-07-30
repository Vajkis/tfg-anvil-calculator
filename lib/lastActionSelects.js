import { createCustomSelect } from './customSelect.js';

// Wires the three "last action" <select> elements together: populates each with
// the available action categories, upgrades them to custom-styled dropdowns, and
// exposes reading/writing all three at once as a last3 array.
//
// `getActionById` is passed in rather than imported so this stays decoupled from
// the data layer, same as lib/solver.js taking `actions` as a parameter.
export function createLastActionSelects(selectElements, categories, getActionById) {
  function formatCategoryValues(category) {
    return category.variants
      .map((actionId) => getActionById(actionId).value)
      .map((value) => (value > 0 ? `+${value}` : `${value}`))
      .join(' / ');
  }

  function populateOptions(select) {
    const noneOption = document.createElement('option');
    noneOption.value = '';
    noneOption.textContent = 'None';
    select.appendChild(noneOption);

    for (const category of categories) {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = `${category.label} [ ${formatCategoryValues(category)} ]`;
      select.appendChild(option);
    }
  }

  selectElements.forEach(populateOptions);
  const customSelects = selectElements.map(createCustomSelect);

  // Presets store last3 starting from "last" and may omit slots further from the
  // end entirely (e.g. just ['punch'] means only the last action is fixed) — an
  // omitted slot is None, same as an explicit null/''.
  function applyLast3(last3) {
    const count = selectElements.length;
    for (let i = 0; i < count; i += 1) {
      selectElements[i].value = last3[count - 1 - i] ?? '';
    }
    customSelects.forEach((customSelect) => customSelect.refresh());
  }

  function readLast3() {
    const last3 = [];
    for (let i = selectElements.length - 1; i >= 0; i -= 1) {
      last3.push(selectElements[i].value || null);
    }
    while (last3.length > 0 && last3[last3.length - 1] === null) {
      last3.pop();
    }
    return last3;
  }

  function readSlots() {
    return selectElements.map((select) => select.value || null);
  }

  function onChange(callback) {
    selectElements.forEach((select) => select.addEventListener('change', callback));
  }

  return { applyLast3, readLast3, readSlots, onChange };
}
