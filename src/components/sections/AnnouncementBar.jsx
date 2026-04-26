// Server Component — no 'use client' needed
import { SITE } from "@/lib/data";

const items = [
  "365 × 24 Services Available",
  "Providing World Class Packing and Moving Services",
  "IBA and ISO and Government Registered",
  "Experienced Team of Professionals",
  "Safety and Security",
  "On Time Delivery",
  "Trust and Security",
  "Secure and Damage-Free Shifting",
  "Trained and Uniformed Employees",
  "See Packing Process on YouTube",
  "Top Quality Packaging Material"
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