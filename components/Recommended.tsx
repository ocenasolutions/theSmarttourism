
import React from 'react';

const INDIA_REC = [
  { name: 'Kashmir', tag: 'Trending 🔥', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Leh–Ladakh', tag: 'Adventure 🧗', img: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=600&auto=format&fit=crop' },
  { name: 'Udaipur', tag: 'Honeymoon ❤️', img: 'https://images.unsplash.com/photo-1515502847861-15a33945538e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Rishikesh', tag: 'Spirituality ✨', img: 'https://images.unsplash.com/photo-1598977123418-45003963f429?q=80&w=600&auto=format&fit=crop' },
  { name: 'Andaman', tag: 'Budget Friendly', img: 'https://images.unsplash.com/photo-1589135410974-dc856247764d?q=80&w=600&auto=format&fit=crop' },
];

const INT_REC = [
  { name: 'Dubai', tag: 'Luxury 💎', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Bali', tag: 'Vibe Check 🌴', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop' },
  { name: 'Thailand', tag: 'Party 🥳', img: 'https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Maldives', tag: 'Premium ❤️', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop' },
  { name: 'Turkey', tag: 'History 🏛️', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600&auto=format&fit=crop' },
];

const Recommended: React.FC = () => {
  const Section = ({ title, items }: { title: string, items: typeof INDIA_REC }) => (
    <div className="mb-24">
      <div className="flex items-center gap-6 mb-12">
        <h4 className="text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap">{title}</h4>
        <div className="h-[1px] flex-grow bg-slate-100"></div>
      </div>
      <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar">
        {items.map((item) => (
          <div key={item.name} className="min-w-[280px] group cursor-pointer">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-charcoal shadow-sm">
                  {item.tag}
                </span>
              </div>
            </div>
            <h5 className="text-xl font-black text-charcoal tracking-tight group-hover:text-primary transition-colors">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-4">Recommended Holiday Packages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-charcoal tracking-tighter leading-tight mb-6">Expert Picks for You.</h3>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-loose">
            The best destinations for domestic and international travel, hand-selected by the Smart Tourism explorer squad.
          </p>
        </div>
        
        <Section title="🇮🇳 Recommended in India" items={INDIA_REC} />
        <Section title="🌍 International Picks" items={INT_REC} />
      </div>
    </section>
  );
};

export default Recommended;
