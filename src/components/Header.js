"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
  <header
    role="banner"
    className={`sticky top-0 z-50 h-20 bg-[#111827]/95 backdrop-blur-xl border-b border-[#1F2933] transition-all duration-300 ${
      scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.4)]" : ""
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">

      {/* ===== Logo ===== */}
      <Link
        href="#home"
        className="flex items-center gap-3 group"
        aria-label="Avon Express Home"
      >
        <div className="w-11 h-11 bg-[#F97316] flex items-center justify-center rounded-md shadow-md transition-all duration-300 group-hover:bg-[#EA580C] group-hover:shadow-lg">
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M1 17l5-9h12l5 9H1zm6-9V5h10v3M7 17v3h10v-3" />
          </svg>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="font-display text-[22px] tracking-wide text-white">
            AVON EXPRESS
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400">
            Packers & Movers
          </span>
        </div>
      </Link>

      {/* ===== Desktop Nav ===== */}
      <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-[12px] tracking-[0.18em] uppercase text-gray-400 hover:text-white relative group transition-all duration-300"
          >
            {label}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>

      {/* ===== Right Section ===== */}
      <div className="flex items-center gap-5">
<div
  id="google_translate_element"
  className="hidden lg:block text-sm font-mono text-gray-300 [&>div]:!bg-transparent [&_select]:bg-[#1F2933] [&_select]:text-white [&_select]:border [&_select]:border-[#374151] [&_select]:px-3 [&_select]:py-2 [&_select]:rounded-md [&_select]:outline-none"
></div>

<LanguageSwitcher />
        {/* Phone */}
        <a
          href={`tel:${SITE.phone}`}
          className="hidden lg:block font-mono text-[13px] font-semibold text-white tracking-wide hover:text-[#F97316] transition-colors"
        >
          {SITE.phoneDisplay}
        </a>
        

        {/* CTA Button */}
        <a
          href={SITE.whatsapp.quote}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-[#F97316] text-white font-mono text-[12px] tracking-[0.18em] uppercase px-7 py-3 rounded-md shadow-lg hover:bg-[#EA580C] hover:shadow-xl transition-all duration-300"
        >
          Get a Quote
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-4 h-4"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </div>
  </header>

  {/* ================= MOBILE MENU ================= */}
  <nav
    className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#111827] border-t border-[#1F2933] flex flex-col p-10 gap-10 transition-all duration-300 lg:hidden ${
      menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  >
    {NAV_LINKS.map(({ label, href }) => (
      <a
        key={href}
        href={href}
        onClick={closeMobile}
        className="font-display text-4xl tracking-wide text-white border-b border-[#1F2933] pb-4 hover:text-[#F97316] transition-colors"
      >
        {label}
      </a>
    ))}

    <a
      href={SITE.whatsapp.quote}
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMobile}
      className="mt-6 flex items-center justify-center gap-2 bg-[#F97316] text-white font-mono text-[13px] tracking-[0.2em] uppercase px-6 py-4 rounded-md shadow-lg hover:bg-[#EA580C] transition-all duration-300"
    >
      Get Free Quote
    </a>
  </nav>
</>
  );
}
