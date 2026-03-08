

import React from 'react';
import Image from 'next/image';
import { HiOutlinePlay, HiOutlineVideoCamera, HiOutlineArrowRight } from "react-icons/hi";
import { FaInstagram, FaYoutube } from "react-icons/fa";

// Placeholder data - reflecting a mix of cinematic features and short-form insights
const PORTRAIT_VIDEOS = [
  { id: 1, title: "Market Trend Analysis", tag: "Shorts", views: "12K" },
  { id: 2, title: "Cinematic Reel 01", tag: "Reels", views: "8.5K" },
  { id: 3, title: "Stop-Loss Strategies", tag: "Insights", views: "15K" },
  { id: 4, title: "Nostalgia Edit", tag: "Reels", views: "22K" },
];
const LANDSCAPE_VIDEOS = [
  { id: 1, title: "Market Trend Analysis", tag: "Shorts", views: "12K" },
  { id: 2, title: "Cinematic Reel 01", tag: "Reels", views: "8.5K" },
  { id: 3, title: "Stop-Loss Strategies", tag: "Insights", views: "15K" },
  { id: 4, title: "Nostalgia Edit", tag: "Reels", views: "22K" },

];

function Videos() {
  return (
    <section className="p-10 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        
        {/* --- Minimalist Typography Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-orange-600" /> Digital Content
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              FEATURED <span className="text-slate-300">MEDIA.</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 pb-1">
             <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">
                <FaYoutube className="text-sm" /> YouTube
             </button>
             <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">
                <FaInstagram className="text-sm" /> Instagram
             </button>
          </div>
        </div>

        {/* --- Next-Gen Bento Video Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          
          {/* 1. Main Square Video (Landscape content cropped to square) */}
          {LANDSCAPE_VIDEOS.map((video , index)=>(
            <div key={index} className="col-span-2  row-span-2 h-90 relative group overflow-hidden rounded-[24px] bg-slate-900 shadow-sm cursor-pointer">
            {/* Background Image/Thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1535016120720-40c746a6580c?w=1200&q=80" 
              alt="Main Feature"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1s] ease-out opacity-70 group-hover:opacity-50"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
            
            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all duration-500">
                  <HiOutlinePlay className="text-3xl md:text-4xl ml-1" />
               </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
               <div className="inline-block px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-3 shadow-lg">
                 Cinematic Feature
               </div>
               <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none mb-2">
                 The Complete Moving Experience.
               </h4>
               <p className="text-sm text-slate-300 font-medium line-clamp-1">
                 Watch our comprehensive landscape documentary detailing our nationwide operations.
               </p>
            </div>
          </div>
          ))}

          {/* 2. Portrait Videos (7 Items) */}
          {PORTRAIT_VIDEOS.map((video, index) => (
            <div 
              key={video.id} 
              className="col-span-1 row-span-1 aspect-[9/16] relative group overflow-hidden rounded-[24px] bg-slate-100 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-slate-200 transition-all duration-300"
            >
              {/* Portrait Thumbnail */}
              <img 
                src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80&auto=format&fit=crop&sig=${index}`} 
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Top Meta Info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                 <span className="text-white text-[8px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                   {video.tag}
                 </span>
                 <HiOutlineVideoCamera className="text-white/70 text-sm" />
              </div>

              {/* Center Play Icon (Subtle) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-2">
                 <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <HiOutlinePlay className="text-xl ml-0.5" />
                 </div>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                 <p className="text-[10px] text-slate-300 font-bold mb-1">{video.views} Views</p>
                 <h5 className="text-white font-black text-xs md:text-sm tracking-tight leading-tight line-clamp-2">
                   {video.title}
                 </h5>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </section>
  );
}

export default Videos;