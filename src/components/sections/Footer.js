import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/Home/Logo.png"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pay Online", href: "/pay-online" },
  { label: "News & Events", href: "/news" },
  { label: "Tracking", href: "/tracking" },
  { label: "Regular Update", href: "/updates" },
  { label: "Bill For Claim", href: "/bill-claim" },
  { label: "Video Call Survey", href: "/video-survey" },
  { label: "Booking Process", href: "/booking" },
  { label: "Get Your City", href: "/cost-calculator" },
];

const services = [
  { label: "Household Goods Shifting", href: "/services/household" },
  { label: "Car Transport Services", href: "/services/car" },
  { label: "Bike Transport Services", href: "/services/bike" },
  { label: "Activa Transport Services", href: "/services/activa" },
  { label: "Office Shifting Services", href: "/services/office" },
  { label: "Truck & Tempo Hire", href: "/services/truck" },
  { label: "Gallery & Testimonial", href: "/gallery" },
  { label: "Our History & Certificate", href: "/about" },
  { label: "Why Avon Express", href: "/why-us" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer relative z-10  text-neutral-400 border-t border-neutral-800">
 <div className="absolute inset-0 z-1 
                bg-black/70 
                backdrop-blur-sm 
                border border-white/20 
                shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
</div>
      {/* Top CTA bar */}
      <div className="relative z-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className=" text-white font-medium tracking-wide">
            Ready To Moving? Get A Free Quotation in 60 Seconds.
          </p>
          <a
            href="tel:+919814556375"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-amber-300 text-neutral-950 font-black  tracking-widest uppercase px-6 py-2.5 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now · 98145-56375
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="flex flex-col z-20 gap-6">
          <Link href="#home" className="shrink-0 group" aria-label="Home">
            <div className="relative w-40 transition-transform duration-500 group-hover:scale-105">
              <Image src={logo} alt="Avon Express Logo" priority />
            </div>
          </Link>

          <p className=" text-netural-200 leading-relaxed">
            Indias most trusted moving company. We handle your belongings with care, delivering them safely — anywhere across the country.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-neutral-500 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Google Play */}
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-neutral-800 hover:border-neutral-600 rounded-xl px-4 py-3 w-64 transition-colors duration-200 group"
          >
            <svg className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2 2 0 001.06-.31l11.84-6.84-2.95-2.95-9.95 10.1zM.1 1.08A2 2 0 000 1.8v20.4a2 2 0 00.1.72L12.6 10.5.1 1.08zM20.44 10.5l-2.6-1.5-3.22 3.22 3.22 3.22 2.63-1.52a2 2 0 000-3.42zM4.24.55L16.08 7.4l-2.95 2.95L3.18.3A2 2 0 004.24.55z" />
            </svg>
            <div>
              <p className="text-[9px] text-netural-200 uppercase tracking-wider">Get it on</p>
              <p className="text-xs font-semibold text-neutral-300 leading-tight">Google Play</p>
            </div>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-5">
            Quick Links
          </p>
          <div className="h-px w-8 bg-amber-400 mb-6" />
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className=" text-netural-200 hover:text-white flex items-center gap-2 group transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-amber-400 transition-colors duration-200 flex-shrink-0" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-5">
            Services
          </p>
          <div className="h-px w-8 bg-amber-400 mb-6" />
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className=" text-netural-200 hover:text-white flex items-center gap-2 group transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-amber-400 transition-colors duration-200 flex-shrink-0" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-2xl  font-bold tracking-[0.2em] uppercase text-white mb-5">
            Contact Info
          </p>
          <div className="h-px w-8 bg-amber-400 mb-6" />

          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className=" text-netural-200 leading-relaxed">
                  Avon House, Transport Area, Sector 26 East, Chandigarh (India) — 160019 <a href="#" className="text-xs ml-2 text-amber-400 hover:text-amber-300 mt-1 inline-block transition-colors">
                  View in Map
                </a>
                </p>
                
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:info@avonexpresspackersandmovers.com" className=" text-neutral-400 hover:text-white transition-colors break-all">
                info@avonexpresspackersandmovers.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a href="tel:+919814556375" className=" text-neutral-200 hover:text-white font-medium transition-colors">
                +91 981-455-6375
              </a>
            </div>

            {/* 24/7 badge */}
            <div className="mt-2 inline-flex items-center gap-2 border border-neutral-800 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className=" text-white font-medium tracking-wide">Available 24 / 7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="z-20 border-t border-neutral-700 relative">
       
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Avon Express Packers & Movers. All rights reserved. DMCA Protected.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {["Trademark", "Disclaimer", "Privacy Policy", "Terms & Conditions", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[11px] text-white hover:text-neutral-400 transition-colors tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}