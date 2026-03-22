// Server Component — no 'use client' needed
import { SITE } from "@/lib/data";

const items = [
  "365 × 24 Services Available.",
  "Nationwide Coverage Across India.",
  "IBA & ISO & Government Registered.",
  "Standard Rates Available.",
  "Providing World Class Packing & Moving Services",
];

export default function AnnouncementBar() {
  return (
    <div
      aria-label="Site announcements"
      className="bg-white text-black h-10 w-full overflow-hidden flex items-center border-b-[1px] border-[#1f293327]"
    >
      <div className="marquee-track flex whitespace-nowrap text-md font-mono tracking-[0.2em] uppercase">
        
        {/* First Set */}
        {items.map((item, i) => (
          <span key={`first-${i}`} className="flex items-center gap-4 mx-6 shrink-0">
            {item}
            <span className="text-[#F97316]">•</span>
          </span>
        ))}

        {items.map((item, i) => (
          <span key={`second-${i}`} className="flex items-center gap-4 mx-6 shrink-0">
            {item}
            <span className="text-[#F97316]">•</span>
          </span>
        ))}

      </div>
    </div>
  );
}