

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
  {/* FULL WIDTH MAP */}
  <div className="relative w-screen h-60 lg:h-70 left-1/2 -translate-x-1/2 overflow-hidden group">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0937761061355!2d76.8150734!3d30.715764000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f933a90e25ebd%3A0x597b0235558aeba1!2sAvon%20Express%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1772972903859!5m2!1sen!2sin"
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