
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '15k+', label: 'Trips Planned' },
    { value: '120', label: 'Destinations' },
    { value: '98%', label: 'Happy Travelers' },
    { value: '24/7', label: 'Expert Support' },
  ];

  return (
    <section className="py-20 bg-primary overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-black">{stat.value}</span>
              <span className="text-white/70 text-sm font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Background shapes */}
      <div className="absolute -right-20 -bottom-20 size-64 bg-white/10 rounded-full"></div>
      <div className="absolute -left-20 -top-20 size-96 bg-black/5 rounded-full"></div>
    </section>
  );
};

export default Stats;
