import React, { useState, useEffect, useCallback } from 'react';
import Footer from './Layouts/Footer';
import CustomisePackageModal from './CustomisePackageModal';
import { API_URL } from '@/config/api';

// Duration options matching backend schema
const DURATION_OPTIONS = [
  { label: '2N 3D', nights: 2 },
  { label: '3N 4D', nights: 3 },
  { label: '4N 5D', nights: 4 },
  { label: '5N 6D', nights: 5 },
  { label: '6N 7D', nights: 6 },
  { label: '7N 8D', nights: 7 },
  { label: '8N 9D', nights: 8 },
  { label: '9N 10D', nights: 9 },
];

interface TourPackagesViewProps {
  onNavigate?: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => void;
}

const TourPackagesView: React.FC<TourPackagesViewProps> = ({ onNavigate }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  // ── Filters ────────────────────────────────────────────────
  const [pkgType, setPkgType] = useState<'Domestic' | 'International' | ''>('');
  const [selectedNights, setSelectedNights] = useState<number[]>([]);

  // ── Modal ──────────────────────────────────────────────────
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  // ── Quick Enquiry (Book Now) ───────────────────────────────
  const [enquiryPkg, setEnquiryPkg] = useState<any>(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '' });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryDone, setEnquiryDone] = useState(false);

  // ── Fetch packages ─────────────────────────────────────────
  const fetchPackages = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (pkgType) params.append('type', pkgType);
      if (selectedNights.length > 0) params.append('nights', selectedNights.join(','));

      const res = await fetch(`${API_URL}/tour-packages?${params}`);
      const data = await res.json();
      if (data.success) {
        setPackages(data.packages);
        setTotal(data.total);
      }
    } catch (err) {
      console.error('Failed to fetch packages:', err);
    }
    setLoading(false);
  }, [pkgType, selectedNights]);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const toggleNight = (n: number) => {
    setSelectedNights((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]
    );
  };

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('adventure-scroll');
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -440 : 440, behavior: 'smooth' });
    }
  };

  const openCustomise = (pkg = null) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  const openEnquiry = (pkg: any) => {
    setEnquiryPkg(pkg);
    setEnquiryForm({ name: '', phone: '', email: '' });
    setEnquiryDone(false);
  };

  const submitEnquiry = async () => {
    if (!enquiryForm.name || !enquiryForm.phone) return;
    setEnquiryLoading(true);
    try {
      await fetch(`${API_URL}/tour-packages/${enquiryPkg._id}/enquire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: enquiryForm.name,
          phone: enquiryForm.phone,
          email: enquiryForm.email,
        }),
      });
      setEnquiryDone(true);
    } catch (err) {
      console.error('Enquiry failed:', err);
    }
    setEnquiryLoading(false);
  };

  const handleNavigate = (view: any) => {
    if (onNavigate) onNavigate(view);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background-dark text-white font-sans overflow-x-hidden min-h-screen">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6b2et9xcEe7dc9hEa-BqZYhK98iyz1H6QPXtFxRtZD0fAcgQGS7ikobrpQRgx-DIEC4LXaqeh9nvlDXBVi46AcFGDt0MPyKdJy3y0l50fKP4OFmpHgN-jVl160gw-v-iShj0fyk4fmWFIw8WRPRsAZLagv57w0obaZ7L8elfqn8YnAH72mExVegZKVnzCIhgtw9vZQNl5KLVdL4lwR8heLUsfhGRZ3lppmjEVfrlCwgclwHa7SBdwR434TpF72ntNoIjPfyx3qnXG"
            alt="Epic Adventures"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-background-dark" />
        </div>

        <div className="absolute top-1/4 left-10 opacity-60 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-[120px] text-primary/30 blur-[1px]">terrain</span>
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-60 animate-pulse hidden md:block">
          <span className="material-symbols-outlined text-[100px] text-primary/30 blur-[1px]">paragliding</span>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-8 text-primary">
            Explore the Unseen
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-10 uppercase italic">
            Epic <br/><span className="text-primary not-italic">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Curated paragliding, trekking & cultural experiences designed for the next generation of explorers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-red-600 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/40"
            >
              Explore Packages
            </button>
            <button
              onClick={() => openCustomise()}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all"
            >
              ✨ Customise Trip
            </button>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────── */}
      <section id="packages-section" className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col gap-6">

          {/* Package type filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                High-Energy <br/><span className="text-primary italic">Destinations</span>
              </h2>
              <p className="text-white/50 mt-6 max-w-md font-medium">
                {total} packages found. Filter to find your perfect trip.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Type pills */}
              <div className="flex gap-2">
                {(['', 'Domestic', 'International'] as const).map((t) => (
                  <button
                    key={t || 'all'}
                    onClick={() => setPkgType(t)}
                    className={`px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all border
                      ${pkgType === t
                        ? 'bg-primary border-primary text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
                      }`}
                  >
                    {t || 'All'}
                  </button>
                ))}
              </div>

              {/* Scroll arrows */}
              <button onClick={() => scrollContainer('left')} className="size-12 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300">
                <span className="material-symbols-outlined text-white text-sm">west</span>
              </button>
              <button onClick={() => scrollContainer('right')} className="size-12 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300">
                <span className="material-symbols-outlined text-white text-sm">east</span>
              </button>
            </div>
          </div>

          {/* Duration filter chips */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[11px] text-white/40 font-black uppercase tracking-wider self-center mr-2">Duration:</span>
            {DURATION_OPTIONS.map((opt) => (
              <button
                key={opt.nights}
                onClick={() => toggleNight(opt.nights)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-black transition-all border
                  ${selectedNights.includes(opt.nights)
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/25'
                  }`}
              >
                {opt.label}
              </button>
            ))}
            {selectedNights.length > 0 && (
              <button onClick={() => setSelectedNights([])} className="px-4 py-1.5 rounded-full text-[11px] font-black bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all">
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Package Cards ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-32 text-white/40">
            <span className="material-symbols-outlined text-6xl mb-4 block">luggage</span>
            <p className="text-xl font-black">No packages found</p>
            <p className="text-sm mt-2">Try changing your filters</p>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <style dangerouslySetInnerHTML={{__html: `
              #adventure-scroll::-webkit-scrollbar { display: none; }
              #adventure-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
            <div id="adventure-scroll" className="flex gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">
              {packages.map((pkg: any) => (
                <div
                  key={pkg._id}
                  className="group relative aspect-[3/4] min-w-[380px] max-w-[380px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 snap-center flex-shrink-0"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={pkg.coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
                    alt={pkg.name}
                    onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                      {pkg.tag || pkg.packageType}
                    </div>
                    {pkg.isFeatured && (
                      <div className="bg-primary/80 backdrop-blur-xl px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  {pkg.rating > 0 && (
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-white text-[11px] font-bold">{pkg.rating}</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Duration badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-white/50 font-black uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                        {pkg.durationLabel}
                      </span>
                      <span className="text-[10px] text-white/50 font-black uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                        {pkg.startLocation} → {pkg.endLocation}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase italic leading-tight">{pkg.name}</h3>
                    <p className="text-white/50 mb-4 text-xs font-medium leading-relaxed line-clamp-2">{pkg.description}</p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className="text-[10px] text-white/40 font-black uppercase tracking-wider">Starting from</span>
                        <p className="text-2xl font-black text-white">₹{pkg.basePrice?.toLocaleString('en-IN')}</p>
                        <span className="text-[10px] text-white/30">per person</span>
                      </div>
                      {pkg.reviewCount > 0 && (
                        <span className="text-[10px] text-white/30">{pkg.reviewCount} reviews</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEnquiry(pkg)}
                        className="flex-1 bg-primary hover:bg-red-600 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/20"
                      >
                        Book Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                      <button
                        onClick={() => openCustomise(pkg)}
                        className="px-4 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10"
                        title="Customise Package"
                      >
                        <span className="material-symbols-outlined text-sm">tune</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Customise Package CTA Section ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent" />
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">tune</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
              Can't find your <span className="text-primary">perfect trip?</span>
            </h3>
            <p className="text-white/60 max-w-lg mx-auto mb-8 font-medium">
              Tell us your dream itinerary — dates, destinations, budget. Our travel experts will craft a bespoke package just for you.
            </p>
            <button
              onClick={() => openCustomise()}
              className="bg-primary hover:bg-red-600 text-white px-14 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
            >
              ✨ Customise My Tour Package
            </button>
          </div>
        </div>
      </section>

      {/* ── Ticker ────────────────────────────────────────────── */}
      <div className="w-full bg-primary/10 border-t border-white/5 py-8 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-infinite-scroll text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
          {['Just quoted: 2 explorers for Himachal', 'New: Iceland Paragliding', 'Just quoted: Group of 4 for Dubai', '1,200 adventurers live now', 'New: Bali Honeymoon Special'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="material-symbols-outlined text-primary text-sm">flash_on</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <Footer onNavigate={handleNavigate} />

      {/* ── Quick Enquiry Modal ────────────────────────────────── */}
      {enquiryPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setEnquiryPkg(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div
            className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8"
            onClick={(e: any) => e.stopPropagation()}
          >
            <button onClick={() => setEnquiryPkg(null)} className="absolute top-5 right-5 size-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {enquiryDone ? (
              <div className="text-center py-8">
                <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">We'll Call You!</h3>
                <p className="text-white/50 text-sm">Our team will reach out within 24 hours with package details.</p>
              </div>
            ) : (
              <>
                <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-1">Book Now</p>
                <h3 className="text-xl font-black text-white mb-1 tracking-tight">{enquiryPkg.name}</h3>
                <p className="text-white/40 text-xs mb-6">{enquiryPkg.durationLabel} · ₹{enquiryPkg.basePrice?.toLocaleString('en-IN')} per person</p>

                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={enquiryForm.name}
                    onChange={(e: any) => setEnquiryForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                  <div className="flex gap-2">
                    <span className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/50 text-sm w-16 text-center">+91</span>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={enquiryForm.phone}
                      onChange={(e: any) => setEnquiryForm(f => ({ ...f, phone: e.target.value }))}
                      maxLength={10}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={enquiryForm.email}
                    onChange={(e: any) => setEnquiryForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                </div>

                <button
                  onClick={submitEnquiry}
                  disabled={enquiryLoading || !enquiryForm.name || !enquiryForm.phone}
                  className="w-full mt-5 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  {enquiryLoading ? (
                    <><svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...</>
                  ) : '🚀 Send Enquiry'}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Customise Package Modal ────────────────────────────── */}
      <CustomisePackageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        package={selectedPkg}
      />
    </div>
  );
};

export default TourPackagesView;