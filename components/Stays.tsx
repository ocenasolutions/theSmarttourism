
import React from 'react';
import { STAYS } from '../constants';

const Stays: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">The Aesthetic Stay</h2>
          <h3 className="text-charcoal dark:text-white text-4xl font-extrabold tracking-tight">Top Rated Boutique Stays</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAYS.map((stay, idx) => (
            <div key={stay.id} className={`flex flex-col gap-4 ${idx === 1 ? 'md:mt-12' : ''}`}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group">
                <img 
                  src={stay.imageUrl} 
                  alt={stay.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="px-2">
                <div className="flex items-center gap-1 text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      {i < Math.floor(stay.rating) ? 'star' : 'star_half'}
                    </span>
                  ))}
                  <span className="text-charcoal dark:text-white text-xs font-bold ml-1">
                    {stay.rating} ({stay.reviews} reviews)
                  </span>
                </div>
                <h4 className="text-xl font-bold dark:text-white">{stay.name}</h4>
                <p className="text-gray-500 text-sm">{stay.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stays;
