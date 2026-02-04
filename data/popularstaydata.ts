export interface City {
  name: string;
  img: string;
  stays: string;
  price: string;
}

export const cities: City[] = [
  {
    name: 'Delhi',
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    stays: '2,500+ stays',
    price: '₹1,499'
  },
  {
    name: 'Goa',
    img: 'https://i.pinimg.com/1200x/35/1f/29/351f29badd330aec1aad35f12e7ac07f.jpg',
    stays: '1,800+ stays',
    price: '₹2,499'
  },
  {
    name: 'Jaipur',
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    stays: '1,200+ stays',
    price: '₹1,999'
  },
  {
    name: 'Mumbai',
    img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop',
    stays: '3,100+ stays',
    price: '₹2,199'
  },
  {
    name: 'Manali',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    stays: '850+ stays',
    price: '₹1,299'
  },
  {
    name: 'Kerala',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    stays: '1,500+ stays',
    price: '₹2,899'
  },
];