
import React from 'react';

const CATEGORIES = [
  { name: 'Goa', icon: 'beach_access', active: true },
  { name: 'Dubai', icon: 'apartment', active: false },
  { name: 'Bali', icon: 'forest', active: false },
  { name: 'Paris', icon: 'language_french', active: false },
  { name: 'Kyoto', icon: 'temple_hindu', active: false },
  { name: 'Maldives', icon: 'waves', active: false },
  { name: 'Swiss Alps', icon: 'mountain_flag', active: false },
  { name: 'London', icon: 'castle', active: false },
];

const STAYS = [
  { id: '1', name: 'The Boho Goa Resort', location: 'Anjuna, North Goa • Beachfront', rating: 4.9, price: '4,999', tag: '#TRENDING', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM22McxL_5fXI3U6ssdGfnH-1rVCvWw6hsbFSK42C4a-haeysOW4D8KiTLCSyZ1T2Picy0vH0fwVUxW3bTN5qn4qfBHiWfQRqrCKZLnn8gfU8az81dobJ_O_QsC_qPvc-f54-F1ndyDV15PkcJPywxG_DdbpY5VmdYhAh91hYrN3I5Gt_VwLBBkthEkDF5318geYlo38a16-wDGbwa682F7Zpo1PY3vHX1o5SixGh98UCOuvfjRJWAFwp32BRT413C2Sjbv9txRzWz' },
  { id: '2', name: 'Luxury Dubai Palms', location: 'Palm Jumeirah • City Views', rating: 4.8, price: '12,500', tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYmgAl4d_UDQLt_rfC9bLwJCFBfiDTsy2wD-eLE6cGoKEoSjL1ZNKUownI6U5jvmk1CJLAf0tCRg72c-Rue2siOtQz4o9LtNJvJz0d9s065Ucm1p4xAE06eZ_22b8c7_ExAOSPEgx4kdJFQZj5RpBibT3TRZbO-cVadWj15Izkpbg43M0hZ4Zvum4VKODc1ghU3H-ggiX1HHbRbhnXiWjM1Mm4_ZkwD0Hp6aIMd4Twruv5AIEquiMYQuoo-7wckEQAusKtLTi4IytX' },
  { id: '3', name: 'Ubud Jungle Escape', location: 'Ubud, Bali • Private Pool', rating: 5.0, price: '6,200', tag: 'ECO-STAY', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-g60FOsJa9d6emFDKl63ssEQWusxVbrHsM2UJXlYGiWxZdIFM9Js5QWZFYqlpHJ9ry63_VdVexP3QffujE90_ESfze7Yz73W0NW0U2ccH9yghYOgPj5mEzGyKEh3m225tPT0YGNpFydza6uHVoFeYjft_SCkFC4X64JD7cYolneJVYOeG6BC3o0F0gQS5RPcDno4hXp-EmzygFp3DsMn7G0WBQz4XSYUveKb4BRDUt7MPu0vJjkOXFvKTiudyHHHmXGJ7AdN4HEi0' },
  { id: '4', name: 'Marrakech Artisan Riad', location: 'Medina • Rooftop Lounge', rating: 4.7, price: '5,500', tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOVGxQ9ncwUrNygTx3UCq9fROgwdE62v1DH31cesbV8kh5b6KJASMCY0fye7liHhvM5g59cqfBDhaY8H6DH94GgJdM7yDw3GhLbJMBdo5JX1dghWVO9JJwt-2homnNAB_WVu-NHbJmGYpIh1B8BB2D69lsKaa1fczmV2LnCIvKLxDcdCynD6dy7f-AQ8s3uNyk4uQKQaJD7IBtETkW48v1OTKMNha8Cj4dTvpS1kOWwUAiiQh_0GIKACEp1wna18g2I4M192oyFkzt' },
  { id: '5', name: 'Modern Tokyo Suite', location: 'Shibuya • Minimalist Design', rating: 4.9, price: '9,000', tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Lqc1Ljg_GBLSdJfsT-Z2CQGrMsL2lnMgxnwkD_Yvir_xzoOI8623dgO82hsmM49cFevaJarC6Yhn9EhWkU3FmTK_vaP496Y03w4rCkwcEpSQ7G5s1bCSgG_dm8L7OpTYjVCKXG57RfjC-rfeh9oSPUgnNOhMgh7MHa6fNEUQLpODOAmp3-U9Zt0rir-Vl35LDvkHCMPG2I3SSVzHWcHS4NOG2AcGnd2zO5g-MfcIznALYny7tyM1Wj1jABiuraJBSC8gBrEs0wkW' },
  { id: '6', name: 'Eiffel Heritage Hotel', location: 'Paris, France • Balcony View', rating: 4.8, price: '22,000', tag: 'ROMANTIC', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7AkgHB1GSaVJ7RzdoXyebSnVzq_iQ74Ed3SceH8fiAqQAN5Y-7gPRpBXoNSg89Hzb1KTuqFBPCusOqThhDmLTUIJSs3lfICHC3P0lmlTpLbdgE3F0RZvhIcApNsQUuTjP8CbesYfd0ffQ5iTuqQyGzmYYmoxpcOYyJ3rVEJNVeDuNpi8D35q8o0CLN_nnhLTpUpfw5yOil59FCoFcjoOInuzthpMM72BprQYw0aRrZ6oRGVQCEnpg_BzcoFAZdp_q1g0ybirSJ0Qb' },
  { id: '7', name: 'Santorini Sunset Villa', location: 'Oia, Greece • Sea View', rating: 4.9, price: '18,000', tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcyqLcDSO28lkamy04aSCHkjmB1IVqkNykvN176DdTKTVbBBy2Pcs0qM30oR6Ge0ghOkEglngRu3gq-p3iEKZzV_AQRqUxyjZ7Y9y0N0iKvety6-Pjm63JxlKwGl6zzr0NdWrJR4dYQDRxAjGCGOaT_KRaH1zzBy0h-bCJhGbzSP_mDk6jGoRtQt7AdLEdU0GTot-VNbPBJx5Rgau95qdkHrKgnTGKxnOgbIOnO66DY_xiwm-N56asMiWphQzkqnuJiB-5lwB8FJee' },
  { id: '8', name: 'Crystal Maldives Resort', location: 'Maafushi • Private Deck', rating: 5.0, price: '35,000', tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmjE7wExfYrmzOV_9cpNNsk2q2Rc28rqtrRGqV0nxvpwkSgJKcVePhaW87BQsNeBIPZhcRq3KEZSuUfMaZX0IFGjc1nFibUUrJspnJ-7k25s9BwnSQV-33XgQ5bscHFwqxBbEAja6CDY2-HRGg_hQnx8Lb6J9vkLhDQBi1SAugijEey5J3H40nzKFLzcWhzzfd8AF5zA6Y2frXC3pv5F-vBKlP75VAW-QMZgg63-crPSwXU0x9bRpi919Njfk13OrRSkADpmOM2XUL' }
];

const HotelsView: React.FC = () => {
  return (
    <div className="bg-[#fcfaf8] min-h-screen pt-32 pb-20">
      {/* Search Header Style from reference */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl md:rounded-full shadow-2xl border border-gray-100 p-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex-1 flex items-center px-6 py-2 border-b md:border-b-0 md:border-r border-gray-50 w-full">
            <span className="material-symbols-outlined text-primary mr-3">location_on</span>
            <div className="flex flex-col text-left flex-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Destination</span>
              <input type="text" placeholder="Where are you heading?" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-bold placeholder:text-gray-300" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-6 py-2 border-b md:border-b-0 md:border-r border-gray-50 w-full">
            <span className="material-symbols-outlined text-primary mr-3">calendar_today</span>
            <div className="flex flex-col text-left flex-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Check-in/out</span>
              <input type="text" placeholder="Add dates" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-bold placeholder:text-gray-300" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-6 py-2 w-full">
            <span className="material-symbols-outlined text-primary mr-3">groups</span>
            <div className="flex flex-col text-left flex-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Travelers</span>
              <input type="text" placeholder="Who's coming?" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-bold placeholder:text-gray-300" />
            </div>
          </div>
          <button className="w-full md:w-auto bg-primary text-white p-4 rounded-xl md:rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Category Icons matching reference spacing and effects */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 pt-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-3 min-w-[75px] group">
              <div className={`size-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:-translate-y-1 ${cat.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-gray-400 border border-gray-100 group-hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <span className={`text-[11px] font-black uppercase tracking-widest ${cat.active ? 'text-primary' : 'text-gray-400'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>

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
          {STAYS.map((stay) => (
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
                <button className="bg-primary text-white font-black py-4 px-10 rounded-full hover:scale-105 transition-transform active:scale-95 text-[11px] uppercase tracking-widest shadow-xl shadow-primary/30">
                  Get a Quote Now
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white font-black py-4 px-10 rounded-full border border-white/20 hover:bg-white/20 transition-all text-[11px] uppercase tracking-widest flex items-center justify-center gap-3">
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
