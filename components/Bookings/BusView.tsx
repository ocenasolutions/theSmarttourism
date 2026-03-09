import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { API_URL } from '@/config/api';

interface BookingRoute {
  route: string;
  busType: string;
  price: string;
  departure: string;
}

interface BookingForm {
  name: string;
  mobile: string;
}

const BusView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<BookingRoute | null>(null);
  const [form, setForm] = useState<BookingForm>({ name: '', mobile: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleBookClick = (route: BookingRoute) => {
    setSelectedRoute(route);
    setForm({ name: '', mobile: '' });
    setError('');
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedRoute(null);
    setSubmitted(false);
    setError('');
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.mobile)) { setError('Please enter a valid 10-digit mobile number.'); return; }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/bookings/bus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.mobile.trim(),
          route: selectedRoute?.route,
          busType: selectedRoute?.busType,
          price: selectedRoute?.price,
          departure: selectedRoute?.departure,
          bookedAt: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Booking failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const routes = [
    {
      id: 'delhi-nainital',
      route: 'Delhi ↔ Nainital',
      departure: 'Departure at Night · Overnight Journey',
      badge: 'Nightly Departure',
      busTypes: [
        { type: '2×2 AC Bus', desc: 'Recliner seats · Air conditioned', icon: 'weekend', price: '₹650' },
        { type: 'Sleeper Bus', desc: 'Full-flat berths · Premium comfort', icon: 'airline_seat_flat', price: '₹800' },
      ],
    },
  ];

  return (
    <div className="bg-[#f8f6f6] min-h-screen pt-20">
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 pt-10">
          <div className="relative w-full h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAUHKDI9--zMRRZ5S2JO2sCWG05jFY4oeE40ogc2xk7mHdg9_bhRU4bazbyhRqdAbY_r1z8IzQukzyMHTTNdEZiHK5wWwJxplM1dIsap_DWoy981vUnciY2-T9kkdPzqNlmrIRFdHGlRoUEQBVlUw2otjIgbuQzSVbbcwXRbNT2oWQ6hW_YuCdE7QClWgippBnODpAbTUcFpro_WapA7754qYmlrUXlTTjzP6VKGfpoo0EHGkz_kjBjHK_F2vZPB6hrjNnw8HyyAc3")',
              }}
            ></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 gap-6">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-md max-w-4xl">
                Travel in Comfort — <span className="italic text-primary">Premium Bus</span> Journeys
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow">
                Experience the ultimate road trip with luxury sleeper amenities tailored for your group.
              </h2>
            </div>
          </div>

          <div className="relative -mt-16 z-10 mx-auto max-w-5xl px-4">
            <SearchBox type="bus" />
          </div>
        </div>

        {/* Popular Routes Section */}
        <section className="w-full max-w-6xl px-4 pt-32 pb-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black tracking-tighter text-charcoal mb-3">Popular Overnight Routes</h2>
            <p className="text-gray-500 font-medium text-base max-w-xl mx-auto">
              Handpicked night journeys with the best comfort-to-price ratio across top destinations.
            </p>
          </div>

          {routes.map((r) => (
            <div key={r.id} className="bg-white rounded-[2rem] shadow-xl overflow-hidden mb-8">
              {/* Card Header */}
              <div className="bg-primary/5 border-b border-primary/10 px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 size-12 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">directions_bus</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-charcoal">{r.route}</h3>
                    <p className="text-gray-500 text-sm font-medium">{r.departure}</p>
                  </div>
                </div>
                <span className="bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  {r.badge}
                </span>
              </div>

              {/* Bus Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {r.busTypes.map((bus) => (
                  <div key={bus.type} className="px-10 py-8 flex items-center justify-between gap-6 group hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="bg-primary/5 size-14 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-primary text-2xl">{bus.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-base font-black uppercase tracking-widest text-charcoal">{bus.type}</h4>
                        <p className="text-gray-400 text-sm font-medium mt-0.5">{bus.desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <p className="text-2xl font-black text-charcoal">{bus.price}</p>
                      <p className="text-gray-400 text-xs font-medium mb-1">per person</p>
                      <button
                        onClick={() =>
                          handleBookClick({
                            route: r.route,
                            busType: bus.type,
                            price: bus.price,
                            departure: r.departure,
                          })
                        }
                        className="bg-primary text-white font-black px-5 py-2 rounded-full uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-md flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-sm">confirmation_number</span>
                        Book This
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cancellation Policy */}
              <div className="border-t border-gray-100 px-10 py-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-xl">policy</span>
                  <h4 className="text-sm font-black uppercase tracking-widest text-charcoal">Cancellation Policy</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { time: 'Within 12 Hours', charge: '100%', icon: 'cancel', color: 'text-red-400' },
                    { time: 'Within 1 Day', charge: '60%', icon: 'hourglass_top', color: 'text-amber-400' },
                    { time: 'Within 45 Days', charge: '30%', icon: 'event_available', color: 'text-green-500' },
                  ].map((policy) => (
                    <div key={policy.time} className="bg-gray-50 rounded-2xl px-6 py-5 flex flex-col gap-2">
                      <span className={`material-symbols-outlined text-xl ${policy.color}`}>{policy.icon}</span>
                      <p className="text-xs font-medium text-gray-400 leading-snug">{policy.time}</p>
                      <p className="text-xl font-black text-charcoal">
                        {policy.charge} <span className="text-xs font-medium text-gray-400">charge</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: 'airline_seat_flat', title: 'Premium Sleepers', desc: 'Fully reclinable beds with luxury bedding and climate control for every guest.' },
            { icon: 'verified_user', title: 'Safe & Verified', desc: 'All operators undergo rigorous safety checks and background verification.' },
            { icon: 'support_agent', title: '24/7 Concierge', desc: 'A dedicated travel assistant for your group from departure to destination.' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center space-y-6 group">
              <div className="bg-primary/5 size-20 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">{f.icon}</span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest">{f.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="w-full max-w-5xl px-4 mb-24">
          <div className="bg-charcoal text-white rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <h2 className="text-4xl font-black tracking-tighter mb-4">Planning a large group trip?</h2>
              <p className="text-gray-400 font-medium">Get exclusive discounts on luxury bus charters for wedding squads or corporate off-sites.</p>
            </div>
            <a
              href="https://wa.me/918679090502"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-black px-10 py-5 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl"
            >
              Inquire Now
            </a>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary px-8 pt-8 pb-6">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-white text-3xl">confirmation_number</span>
                <h2 className="text-white text-2xl font-black tracking-tight">Book This Route</h2>
              </div>
              <p className="text-white/80 text-sm font-medium">{selectedRoute?.route}</p>
              <p className="text-white/60 text-xs mt-1">{selectedRoute?.departure}</p>
            </div>

            {submitted ? (
              <div className="px-8 py-10 flex flex-col items-center text-center gap-4">
                <div className="bg-green-100 size-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-500 text-3xl">check_circle</span>
                </div>
                <h3 className="text-xl font-black text-charcoal">Booking Confirmed!</h3>
                <p className="text-gray-500 text-sm font-medium">
                  Your details have been saved. Our team will contact you shortly at <span className="text-primary font-bold">{form.mobile}</span>.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 bg-primary text-white font-black px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="px-8 py-8 flex flex-col gap-5">
                <div className="bg-gray-50 rounded-2xl px-5 py-4 flex flex-col gap-1">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Selected Route</p>
                  <p className="text-charcoal font-black text-base">{selectedRoute?.route}</p>
                  <p className="text-gray-500 text-xs">{selectedRoute?.busType} &nbsp;·&nbsp; {selectedRoute?.price}</p>
                </div>

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
                  className="mt-2 bg-primary text-white font-black px-8 py-4 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                      Saving…
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      Confirm Booking
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  By booking, you agree to our{' '}
                  <span className="text-primary font-semibold cursor-pointer">Terms & Conditions</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusView;