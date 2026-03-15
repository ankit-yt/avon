import React from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import mediaImage from "/images/Home/News.png"
import Image from 'next/image';

const NEWS_ITEMS = [
  {
    date: "March 2026",
    category: "Corporate",
    title: "Avon Express Expands Fleet with Next-Gen Electric Carriers",
    description: "In a move toward sustainable logistics, we are proud to introduce zero-emission transport vehicles to our Ludhiana hub."
  },
  {
    date: "Jan 2026",
    category: "Award",
    title: "Recognized as India's Most Reliable Relocation Partner",
    description: "Avon Express receives the 2026 Excellence in Logistics Award for maintaining a 99% safety rating."
  }
];

function Media() {
  return (
    <section className="py-10 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* --- Section Header --- */}
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
  {/* Primary Button moved to the left for layout balance */}
  <div className="order-2 md:order-1">
    <button className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-2 transition-all hover:text-orange-600 hover:border-orange-600">
      View All Updates <HiOutlineExternalLink className="text-lg" />
    </button>
  </div>

  {/* Headline moved to the right to anchor the larger image side */}
  <div className="max-w-xl text-left md:text-right order-1 md:order-2">
    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 flex items-center justify-start md:justify-end gap-2">
       Newsroom <span className="w-8 h-[1px] bg-orange-600" />
    </h2>
    <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
      PRESS 
      <span className="text-slate-300"> & MEDIA.</span>
    </h3>
  </div>
</div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: News Feed (Now on the left side) --- */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            {NEWS_ITEMS.map((item, index) => (
              <div key={index} className="group cursor-pointer border-b border-slate-100 pb-8 last:border-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {item.date} — {item.category}
                  </span>
                  <HiOutlineArrowRight className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-2 transition-all" />
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h5>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
            
            {/* Newsletter Space Filler */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mt-12">
              <h6 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-2">Media Inquiries</h6>
              <p className="text-xs text-slate-500 font-medium mb-6">For interviews, high-res assets, or official statements, contact our PR team.</p>
              <a href="mailto:media@avonexpress.com" className="text-xs font-black text-orange-600 uppercase tracking-widest hover:underline">
                media@avonexpress.com
              </a>
            </div>
          </div>

          {/* --- RIGHT: Featured Press Release (Now on the right side) --- */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 mb-8 relative border border-slate-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] z-10" />
                
                <Image 
                  className='object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out' 
                  src={mediaImage} 
                  alt="Featured News"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-orange-600">
                  <span>Press Release</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-slate-400">March 05, 2026</span>
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight group-hover:text-orange-600 transition-colors tracking-tighter">
                  Redefining Relocation: Avon Express Integrates AI-Driven Tracking.
                </h4>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                  Our latest technological integration allows customers to monitor their household goods with real-time telemetry, ensuring total transparency and peace of mind during the transition.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HiOutlineArrowRight({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export default Media;