import { createScrollbar } from './scrollbar.js';

// Wraps a native <select> with a fully custom-styled dropdown. The native select
// stays in the DOM as the source of truth (hidden from view) — existing code that
// reads/writes its .value keeps working unchanged; call refresh() after setting
// .value programmatically (e.g. applying a preset) to sync the visible trigger.
export function createCustomSelect(selectElement) {
  const wrapper = document.createElement('div');
  wrapper.className = 'custom-select';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'custom-select__trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');

  const triggerValue = document.createElement('span');
  triggerValue.className = 'custom-select__value';
  trigger.appendChild(triggerValue);

  // The list and its scrollbar are paired flex children so they always match
  // height; the wrapper (not the list itself) carries the dropdown's overlay
  // positioning and is what gets hidden/shown.
  const listWrapper = document.createElement('div');
  listWrapper.className = 'custom-select__list-wrapper';
  listWrapper.hidden = true;

  const list = document.createElement('ul');
  list.className = 'custom-select__list';
  list.setAttribute('role', 'listbox');

  for (const option of selectElement.options) {
    const item = document.createElement('li');
    item.setAttribute('role', 'option');
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    list.appendChild(item);
  }

  const scrollbarElement = document.createElement('div');
  scrollbarElement.className = 'scrollbar scrollbar--vertical';
  scrollbarElement.hidden = true;
  const scrollbarThumb = document.createElement('div');
  scrollbarThumb.className = 'scrollbar__thumb';
  scrollbarElement.appendChild(scrollbarThumb);

  listWrapper.appendChild(list);
  listWrapper.appendChild(scrollbarElement);

  const scrollbar = createScrollbar(list, scrollbarElement, { orientation: 'vertical' });

  function syncTrigger() {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    triggerValue.textContent = selectedOption ? selectedOption.textContent : '';
    for (const item of list.children) {
      item.classList.toggle('is-selected', item.dataset.value === selectElement.value);
    }
  }

  function close() {
    listWrapper.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  }

  function open() {
    document.querySelectorAll('.custom-select__list-wrapper').forEach((otherWrapper) => {
      if (otherWrapper !== listWrapper) otherWrapper.hidden = true;
    });
    listWrapper.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    scrollbar.update();
  }

  trigger.addEventListener('click', () => {
    if (listWrapper.hidden) open();
    else close();
  });

  list.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (!item) return;

    selectElement.value = item.dataset.value;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    syncTrigger();
    close();
  });

  document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target)) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  wrapper.appendChild(trigger);
  wrapper.appendChild(listWrapper);
  selectElement.insertAdjacentElement('afterend', wrapper);
  selectElement.classList.add('visually-hidden');
  selectElement.tabIndex = -1;

  syncTrigger();

  return { refresh: syncTrigger };
}
