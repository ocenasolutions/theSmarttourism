
export interface Destination {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'Adventure' | 'Honeymoon' | 'City Break';
  imageUrl: string;
}

export interface Stay {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  content: string;
  rating: number;
  avatar: string;
}
