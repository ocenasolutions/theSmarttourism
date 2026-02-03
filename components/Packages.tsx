
import React from 'react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Curated For You</h2>
          <h3 className="text-charcoal dark:text-white text-4xl font-extrabold">Featured Packages</h3>
        </div>
        <div className="flex gap-3">
          <button className="size-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all dark:border-white/10 dark:hover:bg-white/5">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-12 snap-x">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="min-w-[340px] md:min-w-[380px] snap-start bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-white/5">
              <div className="h-64 relative">
                <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-charcoal">
                  {pkg.type}
                </span>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-extrabold mb-2 dark:text-white">{pkg.title}</h4>
                <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Starting from</p>
                    <p className="text-xl font-black text-primary">${pkg.price}</p>
                  </div>
                  <button className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-bold hover:bg-primary transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
