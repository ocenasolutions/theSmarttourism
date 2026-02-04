import React from 'react';
import packageData from '../data/packagedata';
import Footer from './Layouts/Footer';

interface TourPackagesViewProps {
  onNavigate?: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => void;
}

const TourPackagesView: React.FC<TourPackagesViewProps> = ({ onNavigate }) => {
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('adventure-scroll');
    if (container) {
      const scrollAmount = 420; // Card width + gap
      const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
      container.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }
  };

  const handleNavigate = (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => {
    // If parent provides navigation handler, use it
    if (onNavigate) {
      onNavigate(view);
    } else {
      // Fallback: scroll to top and you can add your routing logic here
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log('Navigate to:', view);
      // Add your navigation logic:
      // - For React Router: navigate(`/${view}`)
      // - For Next.js: router.push(`/${view}`)
      // - For plain navigation: window.location.href = `/${view}`
    }
  };

  return (
    <div className="bg-background-dark text-white font-sans overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6b2et9xcEe7dc9hEa-BqZYhK98iyz1H6QPXtFxRtZD0fAcgQGS7ikobrpQRgx-DIEC4LXaqeh9nvlDXBVi46AcFGDt0MPyKdJy3y0l50fKP4OFmpHgN-jVl160gw-v-iShj0fyk4fmWFIw8WRPRsAZLagv57w0obaZ7L8elfqn8YnAH72mExVegZKVnzCIhgtw9vZQNl5KLVdL4lwR8heLUsfhGRZ3lppmjEVfrlCwgclwHa7SBdwR434TpF72ntNoIjPfyx3qnXG" 
            alt="Cinematic Paragliding" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-background-dark"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 opacity-60 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-[120px] text-primary/30 blur-[1px]">terrain</span>
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-60 animate-pulse hidden md:block">
          <span className="material-symbols-outlined text-primary text-[100px] text-primary/30 blur-[1px]">paragliding</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-8 text-primary">
            Explore the Unseen
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-10 uppercase italic">
            Epic <br/><span className="text-primary not-italic">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Immersive paragliding and mountain trekking experiences designed for the next generation of explorers. No fixed paths, just vibes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-primary hover:bg-red-600 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/40">
              Explore Packages
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all">
              Watch Film
            </button>
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">High-Energy <br/><span className="text-primary italic">Destinations</span></h2>
            <p className="text-white/50 mt-6 max-w-md font-medium">The world's most intense spots curated for the true thrill-seekers.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollContainer('left')}
              className="size-14 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300"
            >
              <span className="material-symbols-outlined text-white">west</span>
            </button>
            <button 
              onClick={() => scrollContainer('right')}
              className="size-14 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300"
            >
              <span className="material-symbols-outlined text-white">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* Adventure Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            #adventure-scroll::-webkit-scrollbar {
              display: none;
            }
            #adventure-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />
          <div 
            id="adventure-scroll" 
            className="flex gap-10 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
          >
            {packageData.map((adv) => (
              <div key={adv.id} className="group relative aspect-[3/4] min-w-[400px] max-w-[400px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 snap-center flex-shrink-0">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src={adv.img} 
                  alt={adv.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/20 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                    {adv.tag}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">{adv.title}</h3>
                  <p className="text-white/60 mb-8 text-sm font-medium leading-relaxed">{adv.desc}</p>
                  <button className="w-full bg-primary hover:bg-red-600 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/20">
                    Get Adventure Quote
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ticker */}
      <div className="w-full bg-primary/10 border-t border-white/5 py-8 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-infinite-scroll text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">verified</span>
            Just quoted: 2 explorers for Himachal
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">flash_on</span>
            New vibe added: Iceland Paragliding
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">verified</span>
            Just quoted: Group of 4 for Dubai Skydiving
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">group</span>
            1,200 adventurers live now
          </div>
          {/* Duplicate for infinite effect if needed, but Tailwind doesn't have it by default. We'll use simple flex layout */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">verified</span>
            Just quoted: 2 explorers for Himachal
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-sm font-variation-fill">flash_on</span>
            New vibe added: Iceland Paragliding
          </div>
        </div>
      </div>

      {/* Footer - Now with proper navigation */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default TourPackagesView;