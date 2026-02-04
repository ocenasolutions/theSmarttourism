
import React from 'react';

const EXP = [
  { title: 'Adventure Tours', icon: 'surfing', img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Bike & Car Rentals', icon: 'directions_bike', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop' },
  { title: 'Paragliding', icon: 'air', img: 'https://i.pinimg.com/1200x/e0/f8/e7/e0f8e789ddf2285958b73c36039f68ab.jpg' },
  { title: 'Desert Safari', icon: 'beach_access', img: 'https://i.pinimg.com/736x/56/ec/fe/56ecfe02cb41fc25a62dfefa2e7be57e.jpg' },
  { title: 'Trekking Packages', icon: 'hiking', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop' },
];

const Experiences: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 size-[600px] bg-primary/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-20">
          <div>
            <h2 className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-6">Fun & Adventures</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              Experience<br/><span className="text-primary italic">The Unforgettable.</span>
            </h3>
            <p className="text-gray-400 text-lg font-medium max-w-md leading-relaxed mb-12">
              Smart Tourism provides the best adventure tours in India. Travel is not just visiting 
              coordinates; it’s the adrenaline of the first wave and the silence of the high mountains.
            </p>
            <button className="bg-primary hover:bg-white hover:text-charcoal px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl">
              Unlock All Adventures
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {EXP.slice(0, 4).map((item, i) => (
               <div key={item.title} className={`group relative rounded-[2.5rem] overflow-hidden aspect-square ${i === 1 ? 'mt-12' : ''} ${i === 2 ? '-mt-12' : ''} shadow-2xl`}>
                 <img src={item.img} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" alt={item.title} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 font-variation-fill">{item.icon}</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{item.title}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
