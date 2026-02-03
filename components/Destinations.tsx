
import React from 'react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Trending Experiences</h2>
            <h3 className="display-header text-5xl md:text-7xl leading-tight">The Ultimate<br/>Bucket List</h3>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all uppercase tracking-widest text-xs mb-2">
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <div 
              key={dest.id} 
              className={`group relative h-[600px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl`}
            >
              <img 
                src={dest.imageUrl} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                 <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                   {idx === 0 ? 'Aesthetic Heritage' : 'Tropical Escape'}
                 </span>
              </div>
              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                <div>
                  <h4 className="display-header text-white text-5xl mb-2">{dest.name}</h4>
                  <p className="text-white/70 font-medium max-w-xs leading-relaxed">{dest.tagline}</p>
                </div>
                <button className="bg-white text-charcoal px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                  View Vibe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
