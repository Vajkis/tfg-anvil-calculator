export const ACTIONS = [
  { id: 'hit-light', label: 'Light Hit', value: -3, img: 'img/_actions/hit_light.png' },
  { id: 'hit-medium', label: 'Medium Hit', value: -6, img: 'img/_actions/hit_medium.png' },
  { id: 'hit-heavy', label: 'Heavy Hit', value: -9, img: 'img/_actions/hit_heavy.png' },
  { id: 'draw', label: 'Draw', value: -15, img: 'img/_actions/draw.png' },
  { id: 'punch', label: 'Punch', value: 2, img: 'img/_actions/punch.png' },
  { id: 'bend', label: 'Bend', value: 7, img: 'img/_actions/bend.png' },
  { id: 'upset', label: 'Upset', value: 13, img: 'img/_actions/upset.png' },
  { id: 'shrink', label: 'Shrink', value: 16, img: 'img/_actions/shrink.png' }
];

export function getActionById(id) {
  return ACTIONS.find((action) => action.id === id);
}

export const ACTION_CATEGORIES = [
  { id: 'hit', label: 'Hit', variants: ['hit-light', 'hit-medium', 'hit-heavy'] },
  { id: 'draw', label: 'Draw', variants: ['draw'] },
  { id: 'punch', label: 'Punch', variants: ['punch'] },
  { id: 'bend', label: 'Bend', variants: ['bend'] },
  { id: 'upset', label: 'Upset', variants: ['upset'] },
  { id: 'shrink', label: 'Shrink', variants: ['shrink'] }
];

export function getCategoryById(id) {
  return ACTION_CATEGORIES.find((category) => category.id === id);
}
