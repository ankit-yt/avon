

import React from 'react';
import { 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineClock,
  HiOutlineExternalLink
} from "react-icons/hi";

function Map() {
  return (
    <section className="p-10 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        
        {/* --- Minimalist Header Architecture --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600" /> Operational Hub
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
               <span className="text-slate-300">HEADQUARTER.</span>
            </h3>
          </div>
          
        </div>

        {/* --- Next-Gen Map Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[550px]">
          
          {/* Left: Dark Corporate Contact Card */}
          <div className="lg:col-span-4 rounded-[32px] bg-slate-900 text-white p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-600/20 transition-colors duration-700" />

            <div className="relative z-10">
               <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-10 shadow-sm backdrop-blur-md">
                 <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-200">
                   Central Dispatch
                 </span>
               </div>

               <div className="space-y-8">
                 {/* Address */}
                 <div className="flex items-start gap-4">
                    <HiOutlineLocationMarker className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</h4>
                       <p className="text-sm font-medium text-slate-200 leading-relaxed">
                        Avon House, Transport Area, Sector 26 East,<br />
                          Chandigarh (India) — 160019
                       </p>
                    </div>
                 </div>

                 {/* Phone */}
                 <div className="flex items-start gap-4">
                    <HiOutlinePhone className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">24/7 Support</h4>
                       <p className="text-sm font-medium text-slate-200 leading-relaxed">
                         +91 98145 56375<br />
                         
                       </p>
                    </div>
                 </div>

                 {/* Email */}
                 <div className="flex items-start gap-4">
                    <HiOutlineMail className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Digital Desk</h4>
                       <p className="text-sm font-medium text-slate-200 leading-relaxed">
                         info@avonexpresspackersandmovers.com
                       </p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Bottom Accent */}
            <div className="relative z-10 pt-8 mt-8 border-t border-slate-800 flex items-center justify-between">
               <div className="flex items-center gap-2 text-slate-400">
                 <HiOutlineClock className="text-lg" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Mon - Sun : 24 Hrs</span>
               </div>
            </div>
          </div>

          {/* Right: The Filtered Iframe Wrapper */}
          <div className="lg:col-span-8 relative rounded-4xl overflow-hidden bg-slate-200 border border-slate-200 shadow-inner group min-h-[400px] lg:min-h-full">
            
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0937761061355!2d76.8150734!3d30.715764000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f933a90e25ebd%3A0x597b0235558aeba1!2sAvon%20Express%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1772972903859!5m2!1sen!2sin" 
               className="absolute inset-0 w-full h-full border-0  contrast-125  group-hover:contrast-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-6 right-6 z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-6 py-3 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 transition-colors shadow-2xl border border-white/10"
               >
                  Get Directions <HiOutlineExternalLink className="text-sm" />
               </a>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Map;