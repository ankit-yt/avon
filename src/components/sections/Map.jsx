

import React from 'react';
import { 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineClock,
  HiOutlineExternalLink
} from "react-icons/hi";
import { GlowingLine } from '../GlowingLine';

function Map() {
  return (
    <section className=" bg-slate-50 border-t border-slate-100 overflow-hidden">

<GlowingLine height={20} speed="5s" />    
  {/* Booking information strip */}
  <div className="bg-slate-900 text-white border-y border-slate-700 relative overflow-hidden">
    <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-orange-500" />
    <div aria-hidden="true" className="absolute -right-16 -top-20 w-56 h-56 rounded-full bg-orange-500/10 blur-3xl" />
    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
      <a
        href="tel:+919814556375"
        className="flex items-center gap-3 shrink-0 group"
      >
        <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
          <HiOutlinePhone className="w-5 h-5" />
        </span>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">Give Missed Call To Book</p>
          <p className="text-lg font-black tracking-tight leading-tight">98145-56375</p>
        </div>
      </a>

      <div className="hidden lg:block w-px h-11 bg-white/15" />

      <div className="flex-1">
        <p className="text-xs sm:text-sm font-extrabold leading-relaxed">
          Online Booking <span className="font-black">(24 Hours)</span> — Our executive will call you within 2–7 minutes.
        </p>
        <p className="text-[11px] sm:text-xs font-semibold text-slate-300 leading-relaxed mt-1">
          We firmly believe in four fundamental principles of success: integrity, prompt decision-making, accountability, and reliability.
        </p>
      </div>
    </div>
  </div>

  {/* FULL WIDTH MAP */}
  <div className="relative w-screen h-60 lg:h-70 left-1/2 -translate-x-1/2 overflow-hidden group">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.454994242355!2d75.87770069999999!3d30.901903899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838caee95853%3A0x8ad41b271d419544!2sAvon%20Express%20Packers%20%26%20Movers%20in%20Ludhiana%20-%20Ludhiana%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1792916144449!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0 contrast-125 group-hover:contrast-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
      allowFullScreen
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

</section>
  );
}

export default Map;
