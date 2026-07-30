const STORAGE_KEY = 'tfg-anvil-calculator:custom-presets';

export function loadCustomPresets() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomPresets(presets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

export function addCustomPreset({ name, last3, target, startValue = 0 }) {
  const presets = loadCustomPresets();
  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  presets.unshift({ id, name, last3, target, startValue });
  saveCustomPresets(presets);
  return presets;
}

export function removeCustomPreset(id) {
  const presets = loadCustomPresets().filter((preset) => preset.id !== id);
  saveCustomPresets(presets);
  return presets;
}

export function moveCustomPreset(id, direction) {
  const presets = loadCustomPresets();
  const index = presets.findIndex((preset) => preset.id === id);
  const targetIndex = index + direction;
  if (index === -1 || targetIndex < 0 || targetIndex >= presets.length) return presets;

  [presets[index], presets[targetIndex]] = [presets[targetIndex], presets[index]];
  saveCustomPresets(presets);
  return presets;
}
