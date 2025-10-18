export type PiercingService = {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
  minAge: number;
  estTimeMin: number; // minutes
  estTimeMax: number; // minutes
  categorySlugs: string[]; // e.g., ["lobe"]
};

const services: PiercingService[] = [
  {
    id: 'lobe-standard',
    name: 'Earlobe Piercing',
    description: 'Classic single or paired lobe placement. Gentle, precise, and beginner friendly.',
    priceMin: 45,
    priceMax: 85,
    minAge: 16,
    estTimeMin: 10,
    estTimeMax: 20,
    categorySlugs: ['lobe']
  },
  {
    id: 'nostril',
    name: 'Nostril Piercing',
    description: 'Clean nostril placement with jewelry options tailored to your anatomy.',
    priceMin: 55,
    priceMax: 95,
    minAge: 16,
    estTimeMin: 10,
    estTimeMax: 20,
    categorySlugs: ['nostril']
  },
  {
    id: 'septum',
    name: 'Septum Piercing',
    description: 'Centered, anatomy-first placement with careful measuring for comfort and symmetry.',
    priceMin: 70,
    priceMax: 120,
    minAge: 16,
    estTimeMin: 15,
    estTimeMax: 25,
    categorySlugs: ['septum']
  },
  {
    id: 'helix',
    name: 'Helix Piercing',
    description: 'Cartilage placement along the outer rim of the ear. Single, double, or curated.',
    priceMin: 55,
    priceMax: 95,
    minAge: 16,
    estTimeMin: 15,
    estTimeMax: 25,
    categorySlugs: ['helix']
  },
  {
    id: 'conch',
    name: 'Conch Piercing',
    description: 'Inner ear cartilage piercing for a bold yet elegant look.',
    priceMin: 65,
    priceMax: 110,
    minAge: 16,
    estTimeMin: 15,
    estTimeMax: 30,
    categorySlugs: ['conch']
  },
  {
    id: 'navel',
    name: 'Navel Piercing',
    description: 'Navel placement that balances comfort, healing, and style.',
    priceMin: 65,
    priceMax: 110,
    minAge: 18,
    estTimeMin: 15,
    estTimeMax: 25,
    categorySlugs: ['navel']
  }
];

export default services;

