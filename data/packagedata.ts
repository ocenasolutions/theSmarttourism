export interface AdventurePackage {
  id: string;
  title: string;
  desc: string;
  tag: string;
  img: string;
}

export const packageData: AdventurePackage[] = [
  {
    id: 'bali',
    title: 'Explore Bali',
    desc: 'Tropical beaches, lush rice terraces, and spiritual island vibes.',
    tag: 'Island Paradise',
    img: 'https://i.pinimg.com/736x/db/c4/4d/dbc44d949cb20d84a6e1bf78e1aeb955.jpg',
  },
  {
    id: 'dubai',
    title: 'Discover Dubai',
    desc: 'Luxury skylines, desert safaris, and futuristic experiences.',
    tag: 'Luxury & Adventure',
    img: 'https://i.pinimg.com/736x/ef/f9/be/eff9be8fb7df0e5816556e361a0d1d7a.jpg',
  },
  {
    id: 'goa',
    title: 'Goa Getaway',
    desc: 'Golden beaches, nightlife, and a perfect blend of fun and peace.',
    tag: 'Beach Life',
    img: 'https://i.pinimg.com/736x/f1/b9/c1/f1b9c12a15f494a644d892dcc5cda81d.jpg',
  },
  {
    id: 'himachal',
    title: 'Himachal Escape',
    desc: 'Snow-capped mountains, serene valleys, and mountain adventures.',
    tag: 'Mountain Magic',
    img: 'https://i.pinimg.com/736x/13/ca/65/13ca6597d47ecc38e922a0d76c0284de.jpg',
  },
  {
    id: 'kerala',
    title: 'Kerala Backwaters',
    desc: 'Peaceful houseboats, greenery, and nature at its purest.',
    tag: 'God’s Own Country',
    img: 'https://i.pinimg.com/1200x/17/73/67/177367e563a2e5e88d4494a733d60dc4.jpg',
  },
  {
    id: 'korea',
    title: 'Experience Korea',
    desc: 'Modern cities, rich traditions, and stunning landscapes.',
    tag: 'Culture & Tech',
    img: 'https://i.pinimg.com/1200x/e2/ec/86/e2ec8640f5bec5a676e848eee4407874.jpg',
  },
  {
    id: 'thailand',
    title: 'Thailand Adventure',
    desc: 'Exotic islands, street food, and unforgettable nightlife.',
    tag: 'Tropical Fun',
    img: 'https://i.pinimg.com/736x/56/af/5e/56af5e7e076714aefb62ee8bc713efa2.jpg',
  },
  {
    id: 'turkey',
    title: 'Wonders of Turkey',
    desc: 'Historic landmarks, hot air balloons, and cultural beauty.',
    tag: 'History & Romance',
    img: 'https://i.pinimg.com/736x/e4/1b/24/e41b24aa7b83c5695985cfc64a2d7e87.jpg',
  },
  {
    id: 'uttarakhand',
    title: 'Uttarakhand Trails',
    desc: 'Spiritual destinations, rivers, and Himalayan serenity.',
    tag: 'Nature & Spirituality',
    img: 'https://i.pinimg.com/736x/dc/83/98/dc8398f97b3b47def0b3f52cace97de2.jpg',
  },
];
export default packageData;