"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import logo from "@/assets/images/Home/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const router = useRouter();
  const pathname = usePathname();

   const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ── Scroll shadow ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active-section tracker ─────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) =>
        l.href.replace("#", "")
      );
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Hash-on-load: scroll to section after navigating from another page ─────
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [pathname]);

  // ── Helpers ────────────────────────────────────────────────────────────────
 

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (pathname !== "/") {
        router.push("/" + href); // go home first, hash handled by useEffect above
        return;
      }
      scrollToSection(id);
    } else {
      router.push(href);
      // Scroll to top for plain page links (e.g. Home → "/")
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const closeMobile = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ===== TOP UTILITY BAR ===== */}
      <div className="hidden lg:block bg-slate-900 text-white py-2 border-b border-slate-800">
        <div className="px-10 mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.15em]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-400">
              <HiOutlineLocationMarker className="text-orange-500 text-sm" />
              <span>Any where, any time</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <HiOutlineMail className="text-orange-500 text-sm" />
              <span>info@avonexpresspackersandmovers.co.in</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-slate-700 pr-6">
              <span>Udyam registered • UDYAM-CH-01-0044520</span>
            </div>
            <a
              href="/Trademark-Registered-Certificate.pdf"
              download
              className="text-orange-500 font-medium tracking-wide cursor-pointer"
            >
              Trademark Registered • 4481215
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        role="banner"
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-2 shadow-xl shadow-slate-200/50"
            : "bg-white py-4"
        }`}
      >
        <div className="px-10 mx-auto flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0 group" aria-label="Home">
            <div className="relative w-40 transition-transform duration-500 group-hover:scale-105">
              <Link href={"/"}>
              <Image src={logo} alt="Avon Express Logo" priority />
              </Link>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center grow gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.startsWith("#") ? href.replace("#", "") : "";
              const isActive =
                (href === "/" && pathname === "/" && !active) ||
                (id && active === id);

              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="relative px-5 py-3 group flex items-center gap-1"
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-2 left-5 right-5 h-[2px] bg-orange-500 origin-left transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Cluster */}
          <div className="flex items-center gap-4">

            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Pulsing WhatsApp */}
            <a
              href="https://wa.me/919814556375"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-3 bg-green-50 px-4 py-2 rounded-lg border border-green-100 hover:bg-green-100 transition-all group"
            >
              <div className="relative flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <FaWhatsapp className="relative text-green-600 text-xl" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-black text-green-700 uppercase tracking-tighter">
                  Live&nbsp;&nbsp;&nbsp;&nbsp;Chat
                </span>
                <span className="text-xs font-bold text-slate-900">98145-56375</span>
              </div>
            </a>

            {/* CTA */}
            <a
              href={SITE.whatsapp.quote}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 transition-all duration-500 shadow-lg shadow-slate-200"
            >
              Get a Quotation
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <div className={`h-0.5 bg-slate-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <div className={`h-0.5 bg-slate-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <div className={`h-0.5 bg-slate-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-900 transition-all duration-700 ease-in-out lg:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-10 pt-32">
          <button onClick={closeMobile} className="absolute top-10 right-10 text-white text-4xl">
            ×
          </button>

          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map(({ label, href }, i) => (
              <button
                key={href}
                onClick={() => {
                  handleNavClick(href);
                  closeMobile();
                }}
                className="text-4xl font-black text-white hover:text-orange-500 transition-all transform hover:translate-x-4 text-left"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-auto grid grid-cols-2 gap-4 pb-10">
            <div className="flex flex-col gap-2">
              <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Office</span>
              <p className="text-white text-sm">Baddowal, Ludhiana</p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Email</span>
              <p className="text-white text-sm">info@avonexpresspackersandmovers.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}