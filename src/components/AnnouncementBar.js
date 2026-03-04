// Server Component — no 'use client' needed
import { SITE } from "@/lib/data";

const items = [
  `📦 Standard Rates Available`,
  `IBA Approved Packers & Movers`,
  `Call ${SITE.phoneDisplay}`,
  `365 × 24 Service Available`,
  `Nationwide Coverage Across India`,
];

export default function AnnouncementBar() {
  return (
    <div
      aria-label="Site announcements"
      className="bg-[#111827] text-gray-200 h-10 w-full overflow-hidden flex items-center border-b border-[#1F2933]"
    >
      <div className="marquee-track flex whitespace-nowrap text-[12px] font-mono tracking-[0.2em] uppercase">
        
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