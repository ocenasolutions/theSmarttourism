export interface RideData {
  id: string;
  title: string;
  desc: string;
  vibe: string;
  price: string;
  tag: string;
  img: string;
  category: 'cars' | 'bikes' | 'scooters' | 'caravan';
}

export const RIDES: RideData[] = [
  // BIKES
  {
    id: '11',
    title: 'Classic 350',
    desc: 'Royal Enfield • Retro Cruiser',
    vibe: 'Heritage Roads',
    price: '₹1,200/day',
    tag: 'Timeless Classic',
    img: 'https://i.pinimg.com/736x/c3/56/60/c356609bfcfcba9b0ce7493968d982ea.jpg',
    category: 'bikes'
  },
  {
    id: '12',
    title: 'Thunderbird 350',
    desc: 'Royal Enfield • Touring Cruiser',
    vibe: 'Long Haul Touring',
    price: '₹1,200/day',
    tag: 'Touring Beast',
    img: 'https://i.pinimg.com/1200x/ac/c9/91/acc99188f615015e24fe26805400d119.jpg',
    category: 'bikes'
  },
  {
    id: '13',
    title: 'Avenger 220',
    desc: 'Bajaj • Cruiser',
    vibe: 'Laid-Back Cruising',
    price: '₹1,000/day',
    tag: 'Budget Cruiser',
    img: 'https://i.pinimg.com/736x/52/dd/90/52dd9081238654168cbf51804e9d4503.jpg',
    category: 'bikes'
  },
  {
    id: '14',
    title: 'Pulsar 180',
    desc: 'Bajaj • Sports Commuter',
    vibe: 'City Performance',
    price: '₹800/day',
    tag: 'Sporty & Affordable',
    img: 'https://i.pinimg.com/736x/31/9d/af/319daf6ccaf01b44a6c8f75d196ce1cb.jpg',
    category: 'bikes'
  },
  {
    id: '15',
    title: 'Mountain Bike',
    desc: 'Single Seater • 29 Gear',
    vibe: 'Trail Adventure',
    price: '₹200/hour',
    tag: 'Off-Road Fun',
    img: 'https://i.pinimg.com/736x/04/f4/a7/04f4a7a831f5b1fffe6e3b327914b7d1.jpg',
    category: 'bikes'
  },

  // CARS
  {
    id: '16',
    title: 'Alto',
    desc: 'Maruti Suzuki • Hatchback',
    vibe: 'City Zipping',
    price: '₹1,100 – ₹9,700/day',
    tag: 'Budget Pick',
    img: 'https://i.pinimg.com/736x/88/09/88/880988bffc72feccb88034c5a4050907.jpg',
    category: 'cars'
  },
  {
    id: '17',
    title: 'Wagon R',
    desc: 'Maruti Suzuki • Hatchback',
    vibe: 'Practical & Spacious',
    price: '₹1,100 – ₹9,700/day',
    tag: 'Family Friendly',
    img: 'https://i.pinimg.com/736x/4a/9f/7a/4a9f7a57b406e558e5156c862cbe92d8.jpg',
    category: 'cars'
  },
  {
    id: '18',
    title: 'Santro',
    desc: 'Hyundai • Hatchback',
    vibe: 'Breezy City Drive',
    price: '₹1,100 – ₹9,700/day',
    tag: 'Easy Commute',
    img: 'https://i.pinimg.com/736x/c6/4a/cb/c64acb7bad68ab88532f888885a22287.jpg',
    category: 'cars'
  },
  {
    id: '19',
    title: 'Zen',
    desc: 'Maruti Suzuki • Hatchback',
    vibe: 'Calm & Compact',
    price: '₹1,100 – ₹9,700/day',
    tag: 'Classic Choice',
    img: 'https://i.pinimg.com/736x/ab/3e/b9/ab3eb92a6334b39293403e1c81ca35bf.jpg',
    category: 'cars'
  },
  {
    id: '20',
    title: 'Dzire',
    desc: 'Maruti Suzuki • Sedan',
    vibe: 'Smart & Stylish',
    price: '₹1,400 – ₹10,000/day',
    tag: 'Office Ready',
    img: 'https://i.pinimg.com/736x/8e/64/cc/8e64cc674cf764b5275adbb274d04698.jpg',
    category: 'cars'
  },
  {
    id: '21',
    title: 'Etios',
    desc: 'Toyota • Sedan',
    vibe: 'Reliable & Roomy',
    price: '₹1,400 – ₹10,000/day',
    tag: 'Long Drive Ready',
    img: 'https://i.pinimg.com/1200x/89/15/2e/89152e475c57992f7cb17794ec8b77f9.jpg',
    category: 'cars'
  },
  {
    id: '22',
    title: 'Tavera',
    desc: 'Chevrolet • MUV',
    vibe: 'Group Travel',
    price: '₹1,600 – ₹12,000/day',
    tag: 'Crew Mover',
    img: 'https://i.pinimg.com/736x/7c/25/9b/7c259b460dc6b5996b092814471d1454.jpg',
    category: 'cars'
  },
  {
    id: '23',
    title: 'Bolero',
    desc: 'Mahindra • SUV',
    vibe: 'Rugged & Ready',
    price: '₹1,600 – ₹12,000/day',
    tag: 'Tough Terrain',
    img: 'https://i.pinimg.com/736x/a4/49/13/a449135edde9393be31155b6dfdbec89.jpg',
    category: 'cars'
  },
  {
    id: '24',
    title: 'Sumo',
    desc: 'Tata Motors • SUV',
    vibe: 'Bold & Spacious',
    price: '₹1,600 – ₹12,000/day',
    tag: 'Adventure Ready',
    img: 'https://i.pinimg.com/1200x/42/2a/82/422a82e912038fa39aae692b3bddce34.jpg',
    category: 'cars'
  },
  {
    id: '25',
    title: 'Maxx',
    desc: 'Mahindra • MUV',
    vibe: 'Load & Go',
    price: '₹1,600 – ₹6,500/day',
    tag: 'Workhorse',
    img: 'https://i.pinimg.com/1200x/9d/4d/bb/9d4dbb7d0fb96df7460127ffa09a851c.jpg',
    category: 'cars'
  },
  {
    id: '26',
    title: 'Innova',
    desc: 'Toyota • Premium MPV',
    vibe: 'Luxury Group Ride',
    price: '₹2,000 – ₹15,000/day',
    tag: 'Top Seller',
    img: 'https://i.pinimg.com/736x/24/59/83/245983f6f56c90384b6d8fa1901b7780.jpg',
    category: 'cars'
  },
  {
    id: '27',
    title: 'Zylo',
    desc: 'Mahindra • MPV',
    vibe: 'Family Road Trip',
    price: '₹2,000 – ₹15,000/day',
    tag: 'Family Hauler',
    img: 'https://i.pinimg.com/736x/39/32/d5/3932d5e1e3ad6b7c7e3996d22565904d.jpg',
    category: 'cars'
  },
];

// Helper functions to filter by category
export const getCars = () => RIDES.filter(ride => ride.category === 'cars');
export const getBikes = () => RIDES.filter(ride => ride.category === 'bikes');
export const getScooters = () => RIDES.filter(ride => ride.category === 'scooters');
export const getCaravan = () => RIDES.filter(ride => ride.category === 'caravan');

export default RIDES;