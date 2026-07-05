import LazyVideo from "./LazyVideo";
import p2 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-1.webp";
import p1 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-2.webp";
import p7 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-3.webp";
import p4 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-4.webp";
import p5 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-5.webp";
import p6 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-6.webp";
import p3 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-7.webp";
import p8 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-8.webp";
import p9 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-9.webp";
import p10 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-10.webp";
import p11 from "@/assets/images/Video-Thumbnail/Video-Thumbnail-Images-11.webp";

const LANDSCAPE_VIDEOS = [
  { id: "l1", title: "The Complete Moving Experience", src: "/videos/14-compressed.mp4", thumb: p1 },
  { id: "l2", title: "Behind the Move",               src: "/videos/7-compressed.mp4",  thumb: p2 },
];

const PORTRAIT_VIDEOS = [
  { id: "p1",  title: "Market Trend Analysis", src: "/videos/6-compressed.mp4",  thumb: p3  },
  { id: "p2",  title: "Cinematic Reel 01",     src: "/videos/12-compressed.mp4", thumb: p10 },
  { id: "p3",  title: "Stop-Loss Strategies",  src: "/videos/13-compressed.mp4", thumb: p9  },
  { id: "p4",  title: "Nostalgia Edit",        src: "/videos/11-compressed.mp4", thumb: p8  },
  { id: "p5",  title: "Reel 05",               src: "/videos/2-compressed.mp4",  thumb: p11 },
  { id: "p6",  title: "Reel 06",               src: "/videos/5-compressed.mp4",  thumb: p6  },
  { id: "p7",  title: "Reel 07",               src: "/videos/4-compressed.mp4",  thumb: p5  },
  { id: "p8",  title: "Reel 08",               src: "/videos/0-compressed.mp4",  thumb: p7  },
  { id: "p10", title: "Reel 10",               src: "/videos/3-compressed.mp4",  thumb: p4  },
  { id: "p11", title: "Reel 11",               src: "/videos/1-compressed.mp4",  thumb: p7  },
];

function LandscapeCard({ video }) {
  return (
    <div className="col-span-2 relative overflow-hidden rounded-[20px] bg-slate-900 border border-slate-200 shadow-2xl aspect-video">
      <LazyVideo
        id={video.id}
        src={video.src}
        poster={video.thumb}
        controls
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
}

function PortraitCard({ video }) {
  return (
    <div className="col-span-1 relative overflow-hidden rounded-[20px] bg-slate-900 border border-slate-200 shadow-sm aspect-[9/16]">
      <LazyVideo
        id={video.id}
        src={video.src}
        poster={video.thumb}
        controls
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
}

export default function Videos() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
         <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />


      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
                Digital Content
              </span>
              <span className="h-px w-10 bg-orange-600" />
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              FEATURED <span className="text-orange-500">MEDIA.</span>
            </h3>
          </div>
        </div>

        {/* ── Landscape videos: 2-col row ── */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {LANDSCAPE_VIDEOS.map((v) => (
            <LandscapeCard key={v.id} video={v} />
          ))}
        </div>

        {/* ── Portrait videos: responsive multi-col grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {PORTRAIT_VIDEOS.map((v) => (
            <PortraitCard key={v.id} video={v} />
          ))}
        </div>

      </div>
    </section>
  );
}