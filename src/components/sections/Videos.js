import React from "react";

// 👉 Update these paths according to your videos in /public/videos
const PORTRAIT_VIDEOS = [
  { id: 1, title: "Market Trend Analysis", src: "/videos/6.mp4" },
  { id: 2, title: "Cinematic Reel 01", src: "/videos/12.mp4" },
  { id: 3, title: "Stop-Loss Strategies", src: "/videos/13.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/11.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/9.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/5.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/0.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/4.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/2.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/3.mp4" },
  { id: 4, title: "Nostalgia Edit", src: "/videos/1.mp4" },
];

const LANDSCAPE_VIDEOS = [
  {
    id: 1,
    title: "The Complete Moving Experience",
    src: "/videos/14.mp4",
  },
  {
    id: 1,
    title: "The Complete Moving Experience",
    src: "/videos/7.mp4",
  },
];

function Videos() {
  return (
    <section className="p-10 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-2">
            Digital Content
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            FEATURED <span className="text-slate-300">MEDIA.</span>
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">

          {/* 🔴 LANDSCAPE VIDEO */}
          {LANDSCAPE_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="col-span-2 row-span-2 h-[360px] relative overflow-hidden rounded-[24px] 
bg-black border-2 border-[#0F172B]  shadow-[0_10px_40px_rgba(30,58,138,0.3)]"
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Hover Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {video.title}
              </div>
            </div>
          ))}

          {/* 🔵 PORTRAIT VIDEOS */}
          {PORTRAIT_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="col-span-1 aspect-[9/16] relative overflow-hidden rounded-[24px] 
bg-black border-2 border-[#0F172B] shadow-[0_10px_40px_rgba(30,58,138,0.3)]"
            >
              <video
                src={video.src}
                
                loop
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Hover Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs font-bold p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {video.title}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Videos;