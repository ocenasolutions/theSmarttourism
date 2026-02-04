export interface Stay {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  tag: string | null;
  img: string;
}

export interface Category {
  name: string;
  icon: string;
  active: boolean;
}

export const categories: Category[] = [
  { name: 'Goa', icon: 'beach_access', active: true },
  { name: 'Dubai', icon: 'apartment', active: false },
  { name: 'Bali', icon: 'forest', active: false },
  { name: 'Paris', icon: 'language_french', active: false },
  { name: 'Kyoto', icon: 'temple_hindu', active: false },
  { name: 'Maldives', icon: 'waves', active: false },
  { name: 'Swiss Alps', icon: 'mountain_flag', active: false },
  { name: 'London', icon: 'castle', active: false },
];

export const stays: Stay[] = [
  {
    id: '1',
    name: 'Azure Sands Goa',
    location: 'Baga Beach, Goa • Sea View',
    rating: 4.8,
    price: '5,200',
    tag: '#TRENDING',
    img: 'https://i.pinimg.com/1200x/35/1f/29/351f29badd330aec1aad35f12e7ac07f.jpg',
  },
  {
    id: '2',
    name: 'Palm Luxe Dubai',
    location: 'Palm Jumeirah • Skyline Views',
    rating: 4.9,
    price: '14,500',
    tag: 'LUXURY',
    img: 'https://i.pinimg.com/1200x/10/9c/89/109c89763b3be8d51001c00975c84f8f.jpg',
  },
  {
    id: '3',
    name: 'Ubud Nature Retreat',
    location: 'Ubud, Bali • Jungle Escape',
    rating: 5.0,
    price: '6,800',
    tag: 'ECO-STAY',
    img: 'https://i.pinimg.com/1200x/05/fb/0e/05fb0e639fc5f3373433f4a8594bea54.jpg',
  },
  {
    id: '4',
    name: 'Eiffel Vista Hotel',
    location: 'Paris City Center • Eiffel Views',
    rating: 4.7,
    price: '21,000',
    tag: 'ROMANTIC',
    img: 'https://i.pinimg.com/1200x/2b/07/4d/2b074d520e3149ceb2559b3a85f03d42.jpg',
  },
  {
    id: '5',
    name: 'Kyoto Zen Stay',
    location: 'Gion District, Kyoto • Traditional Ryokan',
    rating: 4.9,
    price: '9,800',
    tag: 'CULTURAL',
    img: 'https://i.pinimg.com/736x/a5/94/78/a59478513256e2976e8dd0186eb324e8.jpg',
  },
  {
    id: '6',
    name: 'Crystal Blue Maldives',
    location: 'North Malé Atoll • Overwater Villa',
    rating: 5.0,
    price: '38,000',
    tag: 'HONEYMOON',
    img: 'https://i.pinimg.com/736x/6d/0f/cb/6d0fcb98e9978789170de18c351fc0c4.jpg',
  },
  {
    id: '7',
    name: 'Alpine Crest Lodge',
    location: 'Swiss Alps • Mountain Views',
    rating: 4.8,
    price: '16,500',
    tag: 'SNOW ESCAPE',
    img: 'https://i.pinimg.com/736x/b8/ed/ed/b8eded1d8c223b3a60ffbcc4e2c234a0.jpg',
  },
  {
    id: '8',
    name: 'Royal Thames Hotel',
    location: 'Central London • River Thames',
    rating: 4.6,
    price: '19,000',
    tag: null,
    img: 'https://i.pinimg.com/736x/f2/6e/32/f26e324f2894714f4c76b488fe8522d8.jpg',
  },
];