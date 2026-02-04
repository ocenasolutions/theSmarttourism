export interface RideData {
  id: string;
  title: string;
  desc: string;
  vibe: string;
  price: string;
  tag: string;
  img: string;
  category: 'cars' | 'bikes' | 'scooters' | 'off-road';
}

export const RIDES: RideData[] = [
  // BIKES
  {
    id: '1',
    title: 'Meteor 350',
    desc: 'Royal Enfield • Cruiser',
    vibe: 'Relaxed Touring',
    price: '₹1,500/day',
    tag: 'Best for Highways',
    img: 'https://i.pinimg.com/736x/eb/6c/9a/eb6c9a185e0aacdf39ba09e6e89686ab.jpg',
    category: 'bikes'
  },
  {
    id: '2',
    title: 'Interceptor 650',
    desc: 'Royal Enfield • Twin Cylinder',
    vibe: 'Retro Performance',
    price: '₹2,500/day',
    tag: 'Rider Favorite',
    img: 'https://i.pinimg.com/1200x/b0/6c/2a/b06c2a91f3dab9bf941aea3f640cfc6c.jpg',
    category: 'bikes'
  },

  // OFF-ROAD
  {
    id: '3',
    title: 'Himalayan 450',
    desc: 'Royal Enfield • Adventure',
    vibe: 'Off-Road Explorer',
    price: '₹2,000/day',
    tag: 'Top Pick: Mountains',
    img: 'https://i.pinimg.com/736x/f4/15/e9/f415e9baa378e1f8fe3b70231ac64a55.jpg',
    category: 'off-road'
  },
  {
    id: '4',
    title: 'Mahindra Thar',
    desc: 'Mahindra • 4x4 SUV',
    vibe: 'Rugged Adventure',
    price: '₹5,500/day',
    tag: 'Trail Warrior',
    img: 'https://i.pinimg.com/736x/7b/05/32/7b05320bd6b573e039e7bb0dce43dd81.jpg',
    category: 'off-road'
  },
  {
    id: '5',
    title: 'Hero XPulse 200',
    desc: 'Hero • Adventure Bike',
    vibe: 'Budget Explorer',
    price: '₹1,200/day',
    tag: 'Affordable Adventure',
    img: 'https://i.pinimg.com/736x/71/2b/c4/712bc469a96d486574358dc45c0232a8.jpg',
    category: 'off-road'
  },

  // CARS
  {
    id: '6',
    title: 'Honda City',
    desc: 'Honda • Sedan',
    vibe: 'Comfort & Class',
    price: '₹3,200/day',
    tag: 'Business Travel',
    img: 'https://i.pinimg.com/736x/b7/c4/bc/b7c4bc86fc6457bb30333259809f15df.jpg',
    category: 'cars'
  },
  {
    id: '7',
    title: 'Skoda Octavia',
    desc: 'Skoda • Luxury Sedan',
    vibe: 'Premium Performance',
    price: '₹4,500/day',
    tag: 'Luxury Drive',
    img: 'https://i.pinimg.com/736x/7a/60/bb/7a60bbe420fa8afa7dcac4269cf1c41a.jpg',
    category: 'cars'
  },

  // SCOOTERS
  {
    id: '9',
    title: 'Jupiter',
    desc: 'TVS • Scooter',
    vibe: 'Smooth & Practical',
    price: '₹650/day',
    tag: 'Easy Ride',
    img: 'https://i.pinimg.com/736x/08/32/dc/0832dcff698055dcd3cff2f020b4c207.jpg',
    category: 'scooters'
  },
  {
    id: '10',
    title: 'Vespa VXL',
    desc: 'Vespa • Premium Scooter',
    vibe: 'Italian Style',
    price: '₹900/day',
    tag: 'Trendy & Chic',
    img: 'https://i.pinimg.com/736x/8d/45/b3/8d45b30a90030d82393e0b57a3cfa575.jpg',
    category: 'scooters'
  },
];

// Helper functions to filter by category
export const getCars = () => RIDES.filter(ride => ride.category === 'cars');
export const getBikes = () => RIDES.filter(ride => ride.category === 'bikes');
export const getScooters = () => RIDES.filter(ride => ride.category === 'scooters');
export const getOffRoad = () => RIDES.filter(ride => ride.category === 'off-road');

export default RIDES;