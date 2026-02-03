
import React from 'react';

const CATEGORIES = [
  { name: 'Goa', icon: 'flare', active: true },
  { name: 'Dubai', icon: 'apartment' },
  { name: 'Bali', icon: 'park' },
  { name: 'Paris', icon: 'castle' },
  { name: 'Kyoto', icon: 'temple_buddhist' },
  { name: 'Maldives', icon: 'water' },
  { name: 'Swiss Alps', icon: 'landscape' },
  { name: 'London', icon: 'location_city' },
];

const STAYS = [
  {
    id: '1',
    name: 'The Boho Goa Resort',
    location: 'Anjuna, North Goa • Beachfront',
    rating: 4.9,
    price: '4,999',
    tag: '#TRENDING',
    img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Luxury Dubai Palms',
    location: 'Palm Jumeirah • City Views',
    rating: 4.8,
    price: '12,500',
    tag: null,
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Ubud Jungle Escape',
    location: 'Ubud, Bali • Private Pool',
    rating: 5.0,
    price: '6,200',
    tag: 'ECO-STAY',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Marrakech Artisan Riad',
    location: 'Medina • Rooftop Lounge',
    rating: 4.7,
    price: '5,500',
    tag: null,
    img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop'
  }
];

const VibeStays: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      {/* Category Selection */}
      <div className="flex justify-center gap-12 mb-16 overflow-x-auto hide-scrollbar">
        {CATEGORIES.map((cat) => (
          <button key={cat.name} className="flex flex-col items-center gap-3 min-w-[70px] group">
            <div className={`size-12 rounded-full flex items-center justify-center transition-all ${cat.active ? 'bg-primary text-white shadow-lg' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
              <span className="material-symbols-outlined text-2xl font-variation-fill">{cat.icon}</span>
            </div>
            <span className={`text-[11px] font-black uppercase tracking-widest ${cat.active ? 'text-primary' : 'text-gray-400'}`}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Title */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-charcoal tracking-tight mb-2">Top Stays for Your Next Vibe</h2>
          <p className="text-gray-400 text-sm font-medium">Handpicked properties with elite aesthetics.</p>
        </div>
        <a href="#" className="flex items-center gap-1 text-primary text-xs font-black uppercase tracking-widest hover:underline">
          View All <span className="material-symbols-outlined text-sm">east</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STAYS.map((stay) => (
          <div key={stay.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="h-64 relative overflow-hidden">
              <img src={stay.img} alt={stay.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <button className="absolute top-4 right-4 size-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-gray-400 text-xl hover:text-primary transition-colors">favorite</span>
              </button>
              {stay.tag && (
                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {stay.tag}
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-black text-charcoal leading-tight max-w-[70%]">{stay.name}</h4>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm font-variation-fill">star</span>
                  <span className="text-xs font-black text-charcoal">{stay.rating}</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs font-bold mb-6">{stay.location}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Starts From</p>
                  <p className="text-lg font-black text-charcoal tracking-tight">₹{stay.price}<span className="text-[10px] text-gray-400">/night</span></p>
                </div>
                <button className="bg-primary hover:bg-[#d62b34] text-white px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md shadow-primary/10">
                  Get Quotation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VibeStays;
