
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-32 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-primary size-8 rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-xl">travel_explore</span>
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">Smart Tourism</h2>
            </div>
            <p className="text-gray-400 text-sm font-medium max-w-sm mb-10 leading-relaxed">
              Voted as the best travel agency for India and international holiday packages. 
              We curate high-fidelity domestic tours, luxury escapes, and adventure treks 
              backed by 24/7 expert human support.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube', 'linkedin'].map((icon) => (
                <a key={icon} href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                   <span className="material-symbols-outlined text-lg opacity-40 group-hover:opacity-100">{icon === 'instagram' ? 'camera' : icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Trending Tours</h5>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li><a className="hover:text-primary transition-colors" href="#">Kashmir Holiday Packages</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Dubai Luxury Specials</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bali Vibe Check Tours</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Kerala Backwaters Trip</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Rajasthan Heritage Tours</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Services</h5>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li><a className="hover:text-primary transition-colors" href="#">Boutique Stay Curation</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Premium Flight Booking</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bespoke Itinerary Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Corporate Travel Smart</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Join the Squad</h5>
            <p className="text-xs text-white/60 mb-8 font-bold leading-relaxed">Get curated travel drops every Monday.</p>
            <div className="flex bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-primary transition-all">
               <input type="email" placeholder="Your aesthetic email" className="bg-transparent border-none focus:ring-0 text-xs px-5 flex-grow" />
               <button className="bg-primary text-white size-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                 <span className="material-symbols-outlined text-lg">arrow_forward</span>
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
          <p>© 2024 Smart Tourism India. The best travel agency for India & international trips.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
