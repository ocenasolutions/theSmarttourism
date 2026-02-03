
import React from 'react';

const CITIES = [
  { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop', stays: '2,500+ stays', price: '₹1,499' },
  { name: 'Goa', img: 'https://images.unsplash.com/photo-1512789170610-500b45cd2704?q=80&w=800&auto=format&fit=crop', stays: '1,800+ stays', price: '₹2,499' },
  { name: 'Jaipur', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop', stays: '1,200+ stays', price: '₹1,999' },
  { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop', stays: '3,100+ stays', price: '₹2,199' },
  { name: 'Manali', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop', stays: '850+ stays', price: '₹1,299' },
  { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop', stays: '1,500+ stays', price: '₹2,899' },
];

const PopularStays: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Popular stays in India</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight">Cities that Vibe.</h3>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="size-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="size-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-all shadow-xl">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x">
          {CITIES.map((city) => (
            <div 
              key={city.name} 
              className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer"
            >
              <div className="h-[450px] rounded-[3rem] overflow-hidden relative shadow-lg mb-6">
                <img 
                  src={city.img} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-3xl font-black mb-1">{city.name}</h4>
                  <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">{city.stays}</p>
                </div>
              </div>
              <div className="px-4">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  Starting <span className="text-primary text-sm font-black">{city.price}</span>/night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularStays;
