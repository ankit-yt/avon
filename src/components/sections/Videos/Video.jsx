

import LazyVideo from "./LazyVideo";
import p2 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-1.png";
import p1 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-2.png";
import p7 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-3.png";
import p4 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-4.png";
import p5 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-5.png";
import p6 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-6.png";
import p3 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-7.png";
import p8 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-8.png";
import p9 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-9.png";
import p10 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-10.png";
import p11 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-11.png";

// ─── Data (server-side only, never shipped to client) ────────────────────────

const LANDSCAPE_VIDEOS = [
  {
    id: "l1",
    title: "The Complete Moving Experience",
    src: "/videos/14.mp4",
    thumb: p1, // ✅ first thumbnail
  },
  {
    id: "l2",
    title: "Behind the Move",
    src: "/videos/7.mp4",
    thumb: p2, // ✅ second thumbnail
  },
];
const PORTRAIT_VIDEOS = [
  { id: "p1",  title: "Market Trend Analysis", src: "/videos/6.mp4",  thumb: p3 },
  { id: "p2",  title: "Cinematic Reel 01",     src: "/videos/12.mp4", thumb: p10 },
  { id: "p3",  title: "Stop-Loss Strategies",  src: "/videos/13.mp4", thumb: p9 },
  { id: "p4",  title: "Nostalgia Edit",        src: "/videos/11.mp4", thumb: p8 },
  { id: "p5",  title: "Reel 05",               src: "/videos/2.mp4",  thumb: p11 },
  { id: "p6",  title: "Reel 06",               src: "/videos/5.mp4",  thumb: p6 },
  { id: "p7",  title: "Reel 07",               src: "/videos/4.mp4",  thumb: p5 },
  { id: "p8",  title: "Reel 08",               src: "/videos/0.mp4",  thumb: p7 },
  { id: "p10", title: "Reel 10",               src: "/videos/3.mp4",  thumb: p4 },
  { id: "p11", title: "Reel 11",               src: "/videos/1.mp4",  thumb: p7 }, // reuse if needed
];

// ─── Server-rendered card wrappers ────────────────────────────────────────────

function LandscapeCard({ video }) {
  return (
    <div className="col-span-2 relative overflow-hidden rounded-[24px] 
bg-black/80 backdrop-blur-xl 
border-2 border-[#0F172B] 
shadow-[0_10px_40px_rgba(30,58,138,0.35)] 
aspect-video">
      
      <LazyVideo
       id={video.id}
        src={video.src}
        poster={video.thumb}
        controls
        className="absolute inset-0 w-full h-full object-cover"
      />

    </div>
  );
}

function PortraitCard({ video }) {
  return (
    <div className="col-span-1 relative overflow-hidden rounded-[24px] 
bg-[#0B0F1A]
border-2 border-[#0F172B] 
shadow-lg
aspect-[9/16]">
      
      <LazyVideo
       id={video.id}
        src={video.src}
          poster={video.thumb}
        controls
        className="absolute inset-0 w-full h-full object-cover"
      />

    </div>
  );
}

// ─── Main server component ────────────────────────────────────────────────────

export default function Videos() {
  const totalVideos = LANDSCAPE_VIDEOS.length + PORTRAIT_VIDEOS.length;

  return (
    <section className="py-14 bg-[#FAFAF8] overflow-hidden border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* ── Header — fully static, zero JS ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-orange-600">
                Digital Content
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1]">
              FEATURED <span className="text-slate-300">MEDIA.</span>
            </h3>
          </div>
         
        </div>

        {/* ── Landscape videos: 2-col row ── */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {LANDSCAPE_VIDEOS.map((v) => (
            <LandscapeCard key={v.id} video={v} />
          ))}
        </div>

        {/* ── Portrait videos: responsive multi-col grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {PORTRAIT_VIDEOS.map((v) => (
            <PortraitCard key={v.id} video={v} />
          ))}
        </div>

      </div>
    </section>
  );
}