export const MATERIALS = [
  {
    id: 'copper',
    color: '#e47b55'
  },
  {
    id: 'bronze',
    color: '#e3ae64'
  },
  {
    id: 'bismuth-bronze',
    color: '#59946d'
  },
  {
    id: 'black-bronze',
    color: '#9b779b'
  },
  {
    id: 'cast-iron',
    color: '#3f3330'
  },
  {
    id: 'wrought-iron',
    color: '#a9a9a9'
  },
  {
    id: 'pig-iron',
    color: '#9e9092'
  },
  {
    id: 'high-carbon-steel',
    color: '#7a959c'
  },
  {
    id: 'steel',
    color: '#899798'
  },
  {
    id: 'high-carbon-black-steel',
    color: '#262626'
  },
  {
    id: 'black-steel',
    color: '#403f3f'
  },
  {
    id: 'tin',
    color: '#f7fbfc'
  },
  {
    id: 'brass',
    color: '#fce892'
  },
  {
    id: 'high-carbon-blue-steel',
    color: '#4868c0'
  },
  {
    id: 'blue-steel',
    color: '#7985b5'
  },
  {
    id: 'high-carbon-red-steel',
    color: '#b23e3e'
  },
  {
    id: 'red-steel',
    color: '#c6565c'
  }
];

export function getMaterialById(id) {
  return MATERIALS.find((material) => material.id === id);
}
