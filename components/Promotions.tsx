
import React from 'react';

const ACCOM_PROMOS = [
  {
    title: "Celebrate 5 Years of Giving Back",
    subtitle: "Eco Deals 5th Anniversary",
    discount: "Up to 20% off",
    bg: "bg-[#fdf8e1]",
    textColor: "text-charcoal",
    icon: "hotel",
    badgeColor: "bg-rose-500",
    img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "2.2 Romantic Sale",
    subtitle: "Worldwide Destinations",
    discount: "Extra 15% off",
    bg: "bg-[#e3f2fd]",
    textColor: "text-charcoal",
    icon: "hotel",
    badgeColor: "bg-rose-500",
    img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Grab all your DEALS here!",
    subtitle: "Limited Time Offers",
    discount: "BIG SAVINGS",
    bg: "bg-[#7e3af2]",
    textColor: "text-white",
    icon: "hotel",
    badgeColor: "bg-rose-500",
    img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=400&auto=format&fit=crop"
  }
];

const FLIGHT_PROMOS = [
  {
    title: "Tours, Attractions & More",
    subtitle: "Worldwide Activities",
    discount: "Up to 5% off",
    bg: "bg-[#fff3e0]",
    textColor: "text-charcoal",
    icon: "local_activity",
    badgeColor: "bg-orange-500",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Flash Sale Flights",
    subtitle: "On all flights, every day!",
    discount: "Up to 5% off",
    bg: "bg-[#f3e5f5]",
    textColor: "text-charcoal",
    icon: "flight",
    badgeColor: "bg-purple-500",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=400&auto=format&fit=crop"
  }
];

const PromoCard: React.FC<{ promo: typeof ACCOM_PROMOS[0] }> = ({ promo }) => (
  <div className={`min-w-[320px] md:min-w-[420px] h-[220px] rounded-[1.5rem] overflow-hidden relative shadow-md snap-start group cursor-pointer ${promo.bg}`}>
    <div className="absolute top-4 left-4 z-20">
      <div className={`${promo.badgeColor} text-white size-8 rounded-lg flex items-center justify-center shadow-lg`}>
        <span className="material-symbols-outlined text-lg">{promo.icon}</span>
      </div>
    </div>
    
    <div className="absolute inset-0 flex">
      {/* Left Content Side */}
      <div className={`w-[60%] p-6 flex flex-col justify-center relative z-10 ${promo.textColor}`}>
        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{promo.subtitle}</p>
        <h4 className="text-sm md:text-base font-extrabold leading-tight mb-3 pr-2">
          {promo.title}
        </h4>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Save</span>
          <span className="text-3xl md:text-4xl font-black italic tracking-tighter">
            {promo.discount.split(' ').map((word, i) => (
              <span key={i} className={word.includes('%') ? 'text-primary' : ''}>{word} </span>
            ))}
          </span>
        </div>
      </div>
      
      {/* Right Image Side */}
      <div className="w-[40%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-inherit via-transparent to-transparent z-10"></div>
        <img 
          src={promo.img} 
          alt={promo.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>
  </div>
);

const Promotions: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Accommodation Row */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black text-charcoal tracking-tight">Accommodation Promotions</h3>
            <a href="#" className="flex items-center gap-1 text-primary text-xs font-black uppercase tracking-widest hover:underline">
              View all <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x">
            {ACCOM_PROMOS.map((promo, idx) => (
              <PromoCard key={idx} promo={promo} />
            ))}
          </div>
        </div>

        {/* Flights & Activities Row */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black text-charcoal tracking-tight">Flights & Activities Promotions</h3>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x">
            {FLIGHT_PROMOS.map((promo, idx) => (
              <PromoCard key={idx} promo={promo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Promotions;
