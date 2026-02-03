
import React from 'react';

const ADVENTURES = [
  {
    id: 'dubai',
    title: 'Skydiving in Dubai',
    desc: 'Experience the thrill of a lifetime over the iconic Palm islands.',
    tag: 'Pure Adrenaline',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHF5ZXEocQhGvMEyMiMReCTcuiw0W1V4IKWPJZm4-yN9Ws9HdwjkC-TeO_QAE8Jip-QJqW0NMAQ-4vTL6ejDOBfKTBOEqL6VeBwGTPcA4-RKbMV27N4g0s6yipu7vLZ6XPRKO59Hdkg_CAimSkXT6fsp2bTk-8SBlhWEdFlroeyIFAVevRQVM0-FK0xbwN4P-ZeUHNDSNys7z14sF7G5-JY6aFHBGtUXDD6AVa_RY9hRwcGH6hSeIlL-rjYfCL3IN_j3JcI06-LWZg'
  },
  {
    id: 'himachal',
    title: 'Trekking in Himachal',
    desc: 'Hike through the majestic Himalayas and touch the stars.',
    tag: 'Cloud Nine',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7NJ0dsNDQx2XzvRO-ewz94cJB6sH0NRVIYw0e-G-IdTV2tnmUBFE_imggaBD525-zcHbJt3F2yYeADFjDawK7gF6UO_4Em8BshOQsw3szulpQzpeMvS3iTEKxYuGRLVzzOwNNHOHJ-eyaY1i9Jbeh9rauv_c77ax3huH87TX_y6F2KPSU43zDt7KsIGulqUL91KeBxY7i4yaLBdTQL-iCznEgMNUWLaQPgeeu1X3Jb0mxMMGiGUFHu8Ixxw4G1wtlrCivFEJtLknt'
  },
  {
    id: 'bali',
    title: 'Surfing in Bali',
    desc: "Ride the world's most famous breaks in the island of gods.",
    tag: 'Wave Master',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeoHtN6S79mwSo3aLPUGGzVuDcdphgmtscFf11kUj9DwSBI4Zx5VgynRk186sapSgvonFkXqgJo51N0fwsEThTZKq3MY8kG7fxXejUrVkTMg_LRlILkl77TNVWqEBdDPcCYnCrcEQh8GNscjI2A7m3bzBMPmvFPYKcHNhDvJDuMXjrodEdOC3ggBO8krZGhwMJdznqSq5mNNbLxMUv-EZrO6qd5zhPfQNi550HjNq6WuJM2JlI00eBxNzL5FsUnOuGUbPXGZ_MQ01K'
  }
];

const TourPackagesView: React.FC = () => {
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
          <span className="material-symbols-outlined text-[100px] text-primary/30 blur-[1px]">paragliding</span>
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
              Watch Vibe Film
            </button>
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">High-Energy <br/><span className="text-primary italic">Destinations</span></h2>
            <p className="text-white/50 mt-6 max-w-md font-medium">The world’s most intense spots curated for the true thrill-seekers.</p>
          </div>
          <div className="flex gap-4">
            <button className="size-14 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300">
              <span className="material-symbols-outlined text-white">west</span>
            </button>
            <button className="size-14 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300">
              <span className="material-symbols-outlined text-white">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* Adventure Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ADVENTURES.map((adv) => (
            <div key={adv.id} className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4">
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

      {/* Footer */}
      <footer className="bg-background-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="text-primary size-10">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill-rule="evenodd"></path>
                  <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill-rule="evenodd"></path>
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Epic Adventure</span>
            </div>
            <p className="text-white/40 max-w-sm mb-12 font-medium leading-relaxed uppercase tracking-widest text-[10px]">
              Experience curator for those who live life on the edge. Smart Tourism presents Epic Adventure — join the movement.
            </p>
            <div className="flex gap-6">
              {['public', 'camera', 'smart_display'].map((icon) => (
                <a key={icon} className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-primary transition-all duration-300 group" href="#">
                  <span className="material-symbols-outlined text-xl opacity-40 group-hover:opacity-100">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-10 text-primary">Experience</h4>
            <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-widest">
              <li><a className="hover:text-white transition-colors" href="#">Destinations</a></li>
              <li><a className="hover:text-white transition-colors" href="#">How it Works</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Adventure Map</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Vibe Report</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-10 text-primary">Support</h4>
            <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-widest">
              <li><a className="hover:text-white transition-colors" href="#">Safety Protocols</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Community</a></li>
              <li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Quote Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 text-center text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
          © 2024 Smart Tourism India • Epic Adventure Division. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TourPackagesView;
