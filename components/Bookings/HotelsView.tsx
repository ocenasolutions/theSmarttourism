import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { categories, stays } from '../../data/hoteldata';

interface HotelsViewProps {
  onNavigate?: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => void;
}

const HotelsView: React.FC<HotelsViewProps> = ({ onNavigate }) => {
  const handleGetQuote = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      // Fallback if onNavigate is not provided
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTalkToExpert = () => {
    window.open('https://wa.me/91987654321', '_blank');
  };

  return (
    <div className="bg-[#fcfaf8] min-h-screen pt-32 pb-20">
      {/* Integrated SearchBox */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <SearchBox type="hotel" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Category Icons matching reference spacing and effects */}
        {/* <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 pt-2 justify-center">
          {categories.map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-3 min-w-[75px] group">
              <div className={`size-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:-translate-y-1 ${cat.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-gray-400 border border-gray-100 group-hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <span className={`text-[11px] font-black uppercase tracking-widest ${cat.active ? 'text-primary' : 'text-gray-400'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div> */}

        {/* Title and View All */}
        <div className="flex items-center justify-between mb-10 pt-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-charcoal">Top Stays for Your Next Vibe</h1>
            <p className="text-gray-500 mt-1 font-medium">Handpicked properties with elite aesthetics.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest hover:underline transition-all">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Hotel Grid - Refined with aspect-[4/5] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {stays.map((stay) => (
            <div key={stay.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${stay.img}')` }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md size-10 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </div>
                {stay.tag && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {stay.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold leading-tight text-charcoal group-hover:text-primary transition-colors">{stay.name}</h3>
                  <div className="flex items-center text-primary">
                    <span className="material-symbols-outlined text-sm font-variation-fill">star</span>
                    <span className="text-xs font-black ml-1 text-charcoal">{stay.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-medium mb-6">{stay.location}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starts from</p>
                    <p className="text-xl font-extrabold text-charcoal">₹{stay.price}<span className="text-xs font-medium text-gray-400">/night</span></p>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-black py-3 px-5 rounded-xl transition-all active:scale-95 text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
                    Get Quotation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Section - Refined dark theme from reference */}
        <section className="py-10">
          <div className="bg-zinc-900 text-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Need a custom<br/><span className="text-primary italic">travel itinerary?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                Tell us your vibe and we'll handle the rest. Get a personalized quote for your next squad trip or solo escape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetQuote}
                  className="bg-primary text-white font-black py-4 px-10 rounded-full hover:scale-105 transition-transform active:scale-95 text-[11px] uppercase tracking-widest shadow-xl shadow-primary/30"
                >
                  Get a Quote Now
                </button>
                <button 
                  onClick={handleTalkToExpert}
                  className="bg-white/10 backdrop-blur-md text-white font-black py-4 px-10 rounded-full border border-white/20 hover:bg-white/20 transition-all text-[11px] uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk to an Expert
                </button>
              </div>
            </div>
            <div className="flex-1 w-full h-64 md:h-96 relative group">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop')` }}
              ></div>
              <div className="absolute -top-10 -right-10 size-40 bg-primary/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelsView;