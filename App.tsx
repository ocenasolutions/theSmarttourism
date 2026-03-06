import React, { useState, useEffect } from 'react';
import Navbar from './components/Layouts/Navbar';
import Hero from './components/Hero';
import PopularStays from './components/PopularStays';
import Promotions from './components/Promotions';
import TrustBuilder from './components/TrustBuilder';
import Recommended from './components/Recommended';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Layouts/Footer';

import HotelsView from './components/Bookings/HotelsView';
import FlightsView from './components/Bookings/FlightsView';
import BusView from './components/Bookings/BusView';
import TrainView from './components/Bookings/TrainView';

import TourPackagesView from './components/TourPackagesView';
import RideRentalsView from './components/RideRentalsView';
import AdventureView from './components/AdventureView';
import Support from './components/Support';
import TermsView from './components/TermsView';
import PrivacyPolicyView from './components/PrivacyPolicyView';


// ------------------
// View Types
// ------------------
type ViewType =
  | 'home'
  | 'hotels'
  | 'flights'
  | 'bus'
  | 'train'
  | 'tour-packages'
  | 'ride-rentals'
  | 'adventure'
  | 'support'
  | 'terms'
  | 'privacy';


// ------------------
// Home View
// ------------------
interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <PopularStays />
    <Promotions />
    <TrustBuilder />
    <Recommended />
    <Experiences />
    <Testimonials />

    <section className="bg-primary py-32 px-6 overflow-hidden relative text-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-black blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
          Ready to unlock your trip?
        </span>

        <h2 className="display-header text-white text-6xl md:text-8xl mb-12">
          Stop Scrolling.<br />Start Booking.
        </h2>

        <button
          onClick={() => onNavigate('support')}
          className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform"
        >
          Get My Free Quote
        </button>
      </div>
    </section>
  </>
);


// ------------------
// App Component
// ------------------
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Dark background pages
  const darkViews: ViewType[] = ['tour-packages', 'adventure'];

  const backgroundClass =
    darkViews.includes(currentView)
      ? 'bg-background-dark'
      : currentView === 'ride-rentals'
      ? 'bg-[#f8f6f6]'
      : 'bg-white';

  return (
    <div className={`flex flex-col min-h-screen ${backgroundClass}`}>
      
      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view as ViewType)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'hotels' && <HotelsView />}
        {currentView === 'flights' && <FlightsView />}
        {currentView === 'bus' && <BusView />}
        {currentView === 'train' && <TrainView />}
        {currentView === 'tour-packages' && <TourPackagesView />}
        {currentView === 'ride-rentals' && <RideRentalsView />}
        {currentView === 'adventure' && <AdventureView />}
        {currentView === 'support' && <Support />}
        {currentView === 'terms' && <TermsView />}
        {currentView === 'privacy' && <PrivacyPolicyView />}
      </main>

      {/* Footer (Hidden only on dark immersive pages if needed) */}
      {!darkViews.includes(currentView) && currentView !== 'ride-rentals' && (
        <Footer onNavigate={(view) => setCurrentView(view as ViewType)} />
      )}

{/* WhatsApp Floating Button */}
<div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://wa.me/918679090502"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all transform border-4 border-white">
      <svg
        viewBox="-1 -1 18 18"
        className="w-18 h-18 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    </button>
  </a>
</div>
    </div>
  );
};

export default App;