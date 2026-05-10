import Footer from "@/components/sections/Footer";
import Link from "next/link";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/avonexpresspackersandmovers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/avon_express",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16H20L8.267 4z" /><path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/avonexpresspackersandmovers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5v.001" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@avonexpresspackersandmovers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="4" /><path d="m10 9 5 3-5 3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9814556735",   // ← replace with your number
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10c0 5 3.5 7.5 7.43 5" />
      </svg>
    ),
  },
];

export default function SocialUpdates() {
  return (
    <>
    <section className="relative bg-slate-900 overflow-hidden py-14 px-5 sm:px-8 lg:px-14">

      {/* Warm blobs — matches your payment page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-orange-500/20 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 rounded-full bg-orange-600/10 blur-[70px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-orange-500 inline-block" />
          Stay Connected
          <span className="w-8 h-px bg-orange-500 inline-block" />
        </p>

        {/* Accent line */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mb-5" />

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tighter mb-3">
          Contact Us for{" "}
          <span className="text-orange-400">Regular Updates</span>
        </h2>

        <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Follow us across platforms — we post the latest news, offers &amp;
          announcements.
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {socials.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300
                hover:bg-orange-500/15 hover:border-orange-500/40 hover:text-orange-400
                transition-all duration-300 hover:-translate-y-0.5"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
      
    </section>
    <Footer/>
    </>
  );
}