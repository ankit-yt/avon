// components/PolicyLayout.jsx
// Shared shell for every policy / legal page.
// Matches the site design system: slate-900 dark, orange-500/600 accents, #FAFAF8 bg.

import Link from "next/link";
import Footer from "./sections/Footer";

const NAV_LINKS = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-and-cancellation", label: "Refund & Cancellation" },
  { href: "/insurance", label: "Insurance" },
];

export default function PolicyLayout({ children, title, subtitle, icon, activeHref }) {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans">
      {/* ── Top accent bar ── */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      {/* ── Hero header ── */}
      <header className="relative bg-slate-900 overflow-hidden">
        {/* Warm blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-600/10 blur-[80px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-orange-400 font-semibold">{title}</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            {icon && (
              <div
    aria-hidden="true"
    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1"
  >
    {icon}
  </div>
            )}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Legal &amp; Policies
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Policy navigation pills ── */}
      <nav
        aria-label="Policy pages"
        className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14">
          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === activeHref;
              return (
                <li key={href} className="flex-shrink-0">
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                        : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Page content ── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">
        {children}
      </main>

      <Footer/>
    </div>
  );
}