import React, { useState } from 'react';
import RIDES, { getCars, getBikes, getScooters, getCaravan, RideData } from '../data/RideData';
import { API_URL } from '@/config/api';

type CategoryType = 'all' | 'cars' | 'bikes' | 'scooters' | 'caravan';

const RideRentalsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState<RideData | null>(null);
  const [form, setForm] = useState({ name: '', mobile: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleQuoteClick = (ride: RideData) => {
    setSelectedRide(ride);
    setForm({ name: '', mobile: '' });
    setError('');
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedRide(null);
    setSubmitted(false);
    setError('');
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.mobile)) { setError('Please enter a valid 10-digit mobile number.'); return; }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/bookings/ride-rental`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.mobile.trim(),
          vehicleName: selectedRide?.title,
          vehicleDesc: selectedRide?.desc,
          vehiclePrice: selectedRide?.price,
          vehicleTag: selectedRide?.tag,
          vehicleVibe: selectedRide?.vibe,
          vehicleCategory: selectedRide?.category,
          bookedAt: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  // Get filtered rides based on active category
  const getFilteredRides = () => {
    switch (activeCategory) {
      case 'cars':
        return getCars();
      case 'bikes':
        return getBikes();
      case 'scooters':
        return getScooters();
      case 'caravan':
        return getCaravan();
      default:
        return RIDES;
    }
  };

  const filteredRides = getFilteredRides();

  const categories = [
    { label: 'All Vehicles', icon: 'grid_view', value: 'all' as CategoryType },
    { label: 'Cars', icon: 'directions_car', value: 'cars' as CategoryType },
    { label: 'Bikes', icon: 'two_wheeler', value: 'bikes' as CategoryType },
    { label: 'Scooters', icon: 'pedal_bike', value: 'scooters' as CategoryType },
    { label: 'caravan', icon: 'terrain', value: 'caravan' as CategoryType },
  ];

  return (
    <div className="bg-[#f8f6f6] min-h-screen pt-20">
      <main className="max-w-[1400px] mx-auto pb-20">
        {/* Hero Section */}
        <div className="p-4 md:p-10">
          <div 
            className="relative min-h-[520px] rounded-[3rem] overflow-hidden flex items-end p-8 md:p-16 group" 
            style={{
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfdg2J1fyLUQ6vK6mbbICD26QwXTCcXAD7WQiW81NbC4XNWL2w24IFtoaXYeEcBFZKzo9ymbWaiy6spWxFZTFYp4Wck49QSdMRopQFFvOczL4AV4k1qtsef5i9je0DJi2s1puE7sgazAg_BahPXSMOXf8jX0jmAsk6NPKf_uyTIrGmHt3F0Eg6mb3Exe3gTseN9xXJEPYprTkqRdI2QULjGkC52jqYWnxyMMg_byKLUeGVsEJyqaPxd6lSc45dTv8V_c56PH4SkOMv")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col gap-6 max-w-2xl text-white relative z-10">
              <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] py-2 px-5 rounded-full w-fit">Summer Collection 2024</span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter italic uppercase">
                Ride In<br/><span className="text-primary not-italic">Style</span>
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-lg leading-relaxed">
                Experience ultimate freedom with our curated collection of luxury convertibles and vintage cruisers. High-fashion, higher vibes.
              </p>
              <div className="flex gap-4 mt-4">
                <span className="text-primary font-black text-xs uppercase tracking-widest cursor-pointer hover:opacity-80 transition">
                  Browse Collection
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 md:px-10 mb-12 sticky top-[64px] z-40 bg-[#f8f6f6]/80 backdrop-blur-md py-6">
          <div className="flex items-center gap-12 overflow-x-auto hide-scrollbar border-b border-gray-200">
            {categories.map((cat) => (
              <button 
                key={cat.value} 
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-3 pb-6 border-b-2 transition-all whitespace-nowrap ${
                  activeCategory === cat.value 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-400 hover:text-charcoal'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="px-4 md:px-10 flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-charcoal uppercase">
              {activeCategory === 'all' ? 'Curated for the Vibe' : 
               activeCategory === 'cars' ? 'Cars' :
               activeCategory === 'bikes' ? 'Power Bikes' :
               activeCategory === 'scooters' ? 'City Scooters' :
               'caravan'}
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">
              {filteredRides.length} {filteredRides.length === 1 ? 'vehicle' : 'vehicles'} available
            </p>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
            Show all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Ride Grid */}
{/* Ride Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
  {filteredRides.map((ride) => (
    <div key={ride.id} className="group cursor-pointer flex flex-col"> {/* ADD flex flex-col */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 shadow-xl bg-gray-200">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
          style={{ backgroundImage: `url("${ride.img}")` }}
        ></div>
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-charcoal shadow-sm">
          {ride.tag}
        </div>
        <button className="absolute top-6 right-6 size-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-primary transition-colors shadow-md">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>

      {/* ADD flex-1 so this section stretches to fill available space */}
      <div className="flex justify-between items-start px-2 flex-1">
        <div>
          <h3 className="text-2xl font-black text-charcoal tracking-tight mb-1">{ride.title}</h3>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-2">{ride.desc}</p>
          <p className="text-primary font-black text-[10px] uppercase tracking-widest">Vibe: {ride.vibe}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimated</p>
          <p className="text-xl font-black text-charcoal tracking-tight">{ride.price}</p>
        </div>
      </div>

      {/* mt-auto pushes button to bottom, aligning across all cards */}
      <button
        onClick={() => handleQuoteClick(ride)}
        className="mt-auto w-full mt-8 bg-white border-2 border-charcoal text-charcoal py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl"
      >
        Request Rental Quote
      </button>
    </div>
  ))}
</div>

        {/* Empty State */}
        {filteredRides.length === 0 && (
          <div className="text-center py-20 px-4">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
            <h3 className="text-2xl font-black text-charcoal mb-2">No vehicles found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Instant Support Section */}
        <div className="mt-32 px-4 md:px-10">
          <div className="bg-charcoal rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Need help with <br/><span className="text-primary italic">your vibe?</span></h2>
              <p className="text-gray-400 font-medium text-lg max-w-md">Our ride experts are online now to help you pick the perfect vehicle for your destination.</p>
            </div>
            <button className="bg-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40">
              Start Chat with Expert
            </button>
          </div>
        </div>

        {/* Footer info for Ride page */}
        <div className="mt-32 border-t border-gray-200 pt-10 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">© 2024 PREMIUM RIDES GLOBAL • A SMART TOURISM EXPERIENCE</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Fleet Info</a>
          </div>
        </div>
      </main>

      {/* Instant Support Float */}
      <div className="fixed bottom-6 right-6 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
          <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200 min-w-[240px]">
            <p className="font-bold text-sm mb-1 text-charcoal">Need help with your vibe?</p>
            <p className="text-xs text-gray-400 mb-3">Our ride experts are online now.</p>
            <button className="w-full bg-[#25D366] text-white text-xs font-black py-2 rounded-lg uppercase tracking-widest">Start WhatsApp Chat</button>
          </div>
        </div>
        <button className="bg-[#25D366] text-white size-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>

      {/* ── Rental Quote Modal ──────────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="bg-charcoal px-8 pt-8 pb-6 relative">
              <button onClick={handleClose} className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
                <h2 className="text-white text-2xl font-black tracking-tight">Request Rental Quote</h2>
              </div>
              {selectedRide && (
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 mt-2">
                  <div>
                    <p className="text-white font-black text-base">{selectedRide.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{selectedRide.desc} &nbsp;·&nbsp; <span className="text-primary font-bold">{selectedRide.price}</span></p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Vibe: {selectedRide.vibe}</p>
                  </div>
                </div>
              )}
            </div>

            {submitted ? (
              <div className="px-8 py-10 flex flex-col items-center text-center gap-4">
                <div className="bg-green-100 size-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-500 text-3xl">check_circle</span>
                </div>
                <h3 className="text-xl font-black text-charcoal">Quote Request Sent!</h3>
                <p className="text-gray-500 text-sm font-medium">
                  Our ride expert will call you at <span className="text-primary font-bold">{form.mobile}</span> shortly.
                </p>
                <button onClick={handleClose} className="mt-4 bg-charcoal text-white font-black px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Done
                </button>
              </div>
            ) : (
              <div className="px-8 py-8 flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-charcoal">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm text-charcoal placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-charcoal">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">phone</span>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={form.mobile}
                      maxLength={10}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                      className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm text-charcoal placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <span className="material-symbols-outlined text-red-400 text-base">error</span>
                    <p className="text-red-500 text-xs font-medium">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="mt-2 bg-charcoal text-white font-black px-8 py-4 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">send</span>
                      Send Quote Request
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">Our team will contact you within a few hours.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RideRentalsView;