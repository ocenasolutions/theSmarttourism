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
    img: 'https://5.imimg.com/data5/YL/JD/GLADMIN-4852289/bajaj-pulsar-180-1000x1000.png',
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
    img: 'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/hyundai_santro/images/exterior_hyundai-santro_front-side_630x420.jpg?imwidth=930',
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
    img: 'https://live.staticflickr.com/6003/5973846422_e26557d38c.jpg',
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

  // NEW CARS
  {
    id: '28',
    title: 'Aura',
    desc: 'Hyundai • Sedan',
    vibe: 'Smooth City Ride',
    price: '₹1,400 – ₹10,000/day',
    tag: 'Comfort Sedan',
    img: 'https://i.pinimg.com/736x/fc/b7/a3/fcb7a3413e25f6c157b7de204ffe3be0.jpg',
    category: 'cars'
  },
  {
    id: '29',
    title: 'Amaze',
    desc: 'Honda • Compact Sedan',
    vibe: 'Premium Feel, City Price',
    price: '₹1,400 – ₹10,000/day',
    tag: 'Honda Quality',
    img: 'https://i.pinimg.com/736x/b1/2c/3d/b12c3d4e5f6a7b8c9d0e1f2a3b4c5d6e.jpg',
    category: 'cars'
  },
  {
    id: '30',
    title: 'Tigor',
    desc: 'Tata Motors • Compact Sedan',
    vibe: 'Urban Elegance',
    price: '₹1,400 – ₹10,000/day',
    tag: 'Stylish Pick',
    img: 'https://i.pinimg.com/736x/9a/f0/65/9af0656711c57343f28c22f7241a1483.jpg',
    category: 'cars'
  },
  {
    id: '31',
    title: 'Ertiga',
    desc: 'Maruti Suzuki • MPV',
    vibe: 'Family Comfort',
    price: '₹1,800 – ₹13,000/day',
    tag: 'Family MPV',
    img: 'https://i.pinimg.com/1200x/c2/b2/96/c2b296d18c55a6880c4bcce8228df290.jpg',
    category: 'cars'
  },
  {
    id: '32',
    title: 'Innova Crysta',
    desc: 'Toyota • Premium MPV',
    vibe: 'Business Class on Wheels',
    price: '₹2,500 – ₹18,000/day',
    tag: 'Premium Choice',
    img: 'https://i.pinimg.com/736x/b0/84/97/b084974389f0c4f253a3befa9a08c1eb.jpg',
    category: 'cars'
  },
  {
    id: '33',
    title: 'Innova Hycross',
    desc: 'Toyota • Hybrid MPV',
    vibe: 'Eco-Luxury Touring',
    price: '₹3,000 – ₹20,000/day',
    tag: 'Hybrid Luxury',
    img: 'https://i.pinimg.com/736x/3d/99/1a/3d991a1c18881725bd1053848b1b1a7e.jpg',
    category: 'cars'
  },
  {
    id: '34',
    title: 'Carens',
    desc: 'Kia • Premium MPV',
    vibe: 'Modern Family Hauler',
    price: '₹2,500 – ₹18,000/day',
    tag: 'Kia Premium',
    img: 'https://i.pinimg.com/1200x/7d/46/7c/7d467c96b9e3396b94d4b7498e864180.jpg',
    category: 'cars'
  },
  {
    id: '35',
    title: 'Marazzo',
    desc: 'Mahindra • Premium MPV',
    vibe: 'Bold & Spacious Touring',
    price: '₹2,500 – ₹18,000/day',
    tag: 'Mahindra MPV',
    img: 'https://i.pinimg.com/1200x/24/7e/e1/247ee1c2e705e62dc385df85d808798b.jpg',
    category: 'cars'
  },
];

// Helper functions to filter by category
export const getCars = () => RIDES.filter(ride => ride.category === 'cars');
export const getBikes = () => RIDES.filter(ride => ride.category === 'bikes');
export const getScooters = () => RIDES.filter(ride => ride.category === 'scooters');
export const getCaravan = () => RIDES.filter(ride => ride.category === 'caravan');

export default RIDES;