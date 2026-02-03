
import React from 'react';

const TrainView: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background-light">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMt8sdRXgxT4zwV-Kq52W-g81oPxoJXWN2O0DULb0iJKpj0yLOS6tlrMeRVBEdVaaM8zvXAvpsBSfU3sjGAI4Z4GgAqwsyR-S-uPEkXeMVX682mabnzoXz03WWBS_WT_9pHUVQTM0xrgVOwsFVsEPTpFKO8PRW9N0qqS7VMHojijL6R8zUxY7LT5eJwAteZqeezOCzJZALZ3uTE0gkx0jvw6J-E8MmlFuuEnalHXRnAyp8nZvk6PAmOWCpYgrU3wQNnDELHh6efC6R")' 
          }}
        ></div>
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] uppercase italic">
                Experience the <br/> <span className="text-primary not-italic">Magic of Rail</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-lg">
                Tailor-made luxury journeys through the world's most breathtaking landscapes. Discover the art of slow travel with elite amenities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-sm text-primary font-variation-fill">verified</span>
                <span className="text-xs font-black uppercase tracking-widest">Curated Experts</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-sm text-primary font-variation-fill">price_check</span>
                <span className="text-xs font-black uppercase tracking-widest">No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Glassmorphism Form Container */}
          <div className="w-full max-w-[520px] relative">
            {/* Subtle floating elements */}
            <div className="absolute -top-10 -right-10 size-32 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
            
            <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-3xl border border-white/30">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-charcoal tracking-tight">Plan Your Journey</h2>
                <p className="text-gray-500 font-medium text-sm mt-2">Fill in the details to receive a custom quote within 24 hours.</p>
              </div>

              <form className="space-y-6">
                {/* Origin & Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Where from?</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">location_on</span>
                      <input 
                        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-charcoal font-bold placeholder:text-gray-300" 
                        placeholder="Origin city"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Where to?</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">near_me</span>
                      <input 
                        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-charcoal font-bold placeholder:text-gray-300" 
                        placeholder="Destination city"
                      />
                    </div>
                  </div>
                </div>

                {/* Date and Class */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">When?</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">calendar_month</span>
                      <input 
                        type="text"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-charcoal font-bold placeholder:text-gray-300" 
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Travel Class</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">stars</span>
                      <select className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none appearance-none transition-all text-charcoal font-bold">
                        <option>Luxury Class</option>
                        <option>First Class</option>
                        <option>Boutique Class</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 pt-4">
                  <button type="button" className="w-full bg-primary hover:bg-[#d62b34] text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                    <span className="material-symbols-outlined text-xl">description</span>
                    Request Rail Quote
                  </button>
                  <button type="button" className="w-full bg-white border border-gray-100 hover:bg-gray-50 text-charcoal font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Talk to an Expert
                  </button>
                </div>
                
                <p className="text-center text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] mt-2">
                  No commitment required to request
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Branding Overlay */}
      <footer className="absolute bottom-10 left-0 right-0 z-20 hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-20 flex justify-between items-center text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
          <div className="flex gap-10">
            <span>© 2024 SCENIC RAIL JOURNEYS</span>
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
          </div>
          <div className="flex gap-6 items-center">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>English (US)</span>
            <span className="opacity-20">|</span>
            <span>Premium Rail Network</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainView;
