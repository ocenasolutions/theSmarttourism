
import React from 'react';

const TRUST_CARDS = [
  { 
    title: 'Expert Curation', 
    desc: 'Our itineraries are hand-crafted by professional explorers, not cold algorithms.', 
    icon: 'auto_awesome', 
    color: 'bg-rose-50 text-rose-600' 
  },
  { 
    title: 'Best Price Promise', 
    desc: 'As the best travel agency in India, we guarantee rates that beat any competitor.', 
    icon: 'payments', 
    color: 'bg-blue-50 text-blue-600' 
  },
  { 
    title: 'Instagrammable Stays', 
    desc: 'Every hotel is physically verified for its aesthetic vibe and service excellence.', 
    icon: 'verified', 
    color: 'bg-emerald-50 text-emerald-600' 
  },
  { 
    title: '24/7 Human Logic', 
    desc: 'Skip the chat bots. Talk to real travel managers who know your name and trip.', 
    icon: 'forum', 
    color: 'bg-amber-50 text-amber-600' 
  },
  { 
    title: 'Global Footprint', 
    desc: 'Your bridge to high-end international travel from Bali to the Swiss Alps.', 
    icon: 'public', 
    color: 'bg-indigo-50 text-indigo-600' 
  },
];

const TrustBuilder: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-4">Why Smart Tourism?</h2>
          <h3 className="text-5xl md:text-7xl font-black text-charcoal tracking-tighter leading-tight mb-6">
            Travel designed <br/><span className="italic font-extrabold text-primary">for humans.</span>
          </h3>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-loose">
            The smarter choice for modern Indian travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TRUST_CARDS.map((card) => (
            <div key={card.title} className="group bg-white p-10 rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col items-center text-center">
              <div className={`size-16 rounded-3xl ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <span className="material-symbols-outlined text-3xl font-variation-fill">{card.icon}</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-charcoal leading-snug">{card.title}</h4>
              <p className="text-[11px] font-semibold text-gray-400 leading-relaxed group-hover:text-charcoal transition-colors">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;
