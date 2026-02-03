
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Ananya', city: 'Bangalore', quote: 'Booked my Goa trip in 2 minutes. Super smooth experience!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Rahul', city: 'Delhi', quote: 'Loved the UI and instant support. Way better than other apps.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sneha', city: 'Mumbai', quote: 'The aesthetic hotels they recommended were literally Instagram gold.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Ishan', city: 'Pune', quote: 'Saved ₹2000 on my Manali stay compared to MMT. Smart Tourism is legit.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-black text-charcoal tracking-tighter">Social Proof.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col justify-between">
              <p className="text-lg font-bold italic leading-relaxed text-charcoal mb-8">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden shadow-lg border-2 border-primary">
                   <img src={r.img} className="w-full h-full object-cover" alt={r.name} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-charcoal">{r.name}</h5>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
