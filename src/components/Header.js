"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import logo from "@/assets/images/Home/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useRouter, usePathname } from "next/navigation";
import { cities } from "@/lib/cities";

function formatName(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [active, setActive]           = useState("");
  const [query, setQuery]             = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const searchWrapperRef = useRef(null);
  const inputRef         = useRef(null);

  const router   = useRouter();
  const pathname = usePathname();

  // ── Scroll to section ─────────────────────────────────────────────────────
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

  // ── Hash-on-load ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [pathname]);

  // ── Close dropdown on outside click ───────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Filter suggestions ─────────────────────────────────────────────────────
  useEffect(() => {
    const q = query.trim().toLowerCase().replace(/\s+/g, "-");
    if (q.length < 2) { setSuggestions([]); return; }
    setSuggestions(cities.filter((c) => c.includes(q)).slice(0, 8));
  }, [query]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
    setDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (citySlug) => {
    setQuery("");
    setSuggestions([]);
    setDropdownOpen(false);
    router.push(`/search/${citySlug}`);
  };

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    const q = query.trim().toLowerCase().replace(/\s+/g, "-");
    if (!q) return;
    setQuery("");
    setSuggestions([]);
    setDropdownOpen(false);
    router.push(`/search/${q}`);
  };

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (pathname !== "/") { router.push("/" + href); return; }
      scrollToSection(id);
    } else {
      router.push(href);
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

  // ── Reusable Search Bar ────────────────────────────────────────────────────
  // dark=true → used inside the dark mobile menu
  // dark=false → used in the header (desktop + mobile row)
  const SearchBar = ({ dark = false, compact = false }) => {
    const [localQuery, setLocalQuery] = useState("");
    const [localSuggestions, setLocalSuggestions] = useState([]);

    useEffect(() => {
      const q = localQuery.trim().toLowerCase().replace(/\s+/g, "-");
      if (q.length < 2) { setLocalSuggestions([]); return; }
      setLocalSuggestions(cities.filter((c) => c.includes(q)).slice(0, 8));
    }, [localQuery]);

    const submitLocal = (e) => {
      e?.preventDefault();
      const q = localQuery.trim().toLowerCase().replace(/\s+/g, "-");
      if (!q) return;
      setLocalQuery("");
      setLocalSuggestions([]);
      if (dark) closeMobile();
      router.push(`/search/${q}`);
    };

    const clickSuggestion = (slug) => {
      setLocalQuery("");
      setLocalSuggestions([]);
      if (dark) closeMobile();
      router.push(`/search/${slug}`);
    };

    return (
      <div className="relative w-full">
        <form
          onSubmit={submitLocal}
          className={`flex items-center gap-2 rounded-full border transition-all duration-300 ${
            compact ? "px-3 py-1.5" : "px-4 py-2.5"
          } ${
            dark
              ? "bg-white/10 border-white/20 focus-within:border-white/50"
              : "bg-slate-50 border-slate-200 focus-within:border-orange-400 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-orange-100/60"
          }`}
        >
          <HiMagnifyingGlass
            className={`shrink-0 text-base ${dark ? "text-white/60" : "text-slate-400"} ${compact ? "hidden" : ""}`}
          />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder={compact ? "Search city…" : "Search city, state or area…"}
            className={`flex-1 text-sm font-medium outline-none bg-transparent min-w-0 ${
              dark
                ? "text-white placeholder-white/40"
                : "text-slate-800 placeholder-slate-400"
            }`}
          />
          {localQuery && (
            <button
              type="button"
              onClick={() => { setLocalQuery(""); setLocalSuggestions([]); }}
              className={`shrink-0 transition-colors ${
                dark ? "text-white/50 hover:text-white" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <HiXMark className="text-base" />
            </button>
          )}
          {compact ? (
            <button
              type="submit"
              className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                dark
                  ? "text-orange-400 hover:text-orange-300"
                  : "text-slate-500 hover:text-orange-500"
              }`}
              aria-label="Search"
            >
              <HiMagnifyingGlass className="text-sm" />
            </button>
          ) : (
            <button
              type="submit"
              className={`shrink-0 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${
                dark
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-slate-900 text-white hover:bg-orange-500"
              }`}
            >
              Go
            </button>
          )}
        </form>

        {/* Suggestions dropdown — only for the header search (non-dark) */}
        {!dark && localQuery.trim().length >= 2 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden z-[200]">
            {localSuggestions.length > 0 ? (
              <>
                <div className="px-4 py-2 border-b border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Locations
                  </span>
                </div>
                <ul>
                  {localSuggestions.map((citySlug) => (
                    <li key={citySlug}>
                      <button
                        onClick={() => clickSuggestion(citySlug)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors group text-left"
                      >
                        <HiOutlineLocationMarker className="text-orange-400 text-sm shrink-0 group-hover:text-orange-500" />
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors truncate">
                            {formatName(citySlug)}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            Packers &amp; Movers
                          </span>
                        </div>
                        <span className="ml-auto text-orange-400 font-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                          →
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-2.5 border-t border-slate-50 bg-slate-50/60">
                  <button
                    onClick={submitLocal}
                    className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    See all results for &quot;{localQuery}&quot; →
                  </button>
                </div>
              </>
            ) : (
              <div className="px-4 py-5 text-center">
                <p className="text-sm font-bold text-slate-500">No results for &quot;{localQuery}&quot;</p>
                <p className="text-[11px] text-slate-400 mt-1">Try a different spelling</p>
              </div>
            )}
          </div>
        )}

        {/* Dark mode (mobile menu) suggestions */}
        {dark && localSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-2xl border border-white/10 overflow-hidden z-[200]">
            <ul>
              {localSuggestions.map((citySlug) => (
                <li key={citySlug}>
                  <button
                    onClick={() => clickSuggestion(citySlug)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors group text-left"
                  >
                    <HiOutlineLocationMarker className="text-orange-400 text-sm shrink-0" />
                    <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                      {formatName(citySlug)}
                    </span>
                    <span className="ml-auto text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ===== TOP UTILITY BAR — desktop only ============================= */}
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

      {/* ===== MAIN HEADER ================================================= */}
      <header
        role="banner"
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 bg-white ${
          scrolled ? "shadow-xl shadow-slate-200/50" : ""
        }`}
      >
        {/* ── Single Row: Logo + Desktop Nav + Search + Actions ───────────── */}
        <div className="px-4 sm:px-6 lg:px-10 mx-auto flex items-center justify-between gap-3 py-3">

          {/* Logo */}
          <Link href="/" className="shrink-0 group" aria-label="Home">
            <div className="relative w-28 sm:w-32 lg:w-40 transition-transform duration-500 group-hover:scale-105">
              <Image src={logo} alt="Avon Express Logo" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.startsWith("#") ? href.replace("#", "") : "";
              const isActive =
                (href === "/" && pathname === "/" && !active) ||
                (id && active === id);
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="relative px-4 py-3 group flex items-center"
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-[2px] bg-orange-500 origin-left transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ── Inline Search — desktop: fixed width, mobile: grows between logo & hamburger ── */}
          <div className="flex-1 lg:flex-none lg:w-56 xl:w-72 min-w-0">
            <SearchBar compact />
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* Language — desktop only */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* WhatsApp pill — xl only */}
            <a
              href="https://wa.me/919814556375"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2.5 bg-green-50 px-3 py-2 rounded-lg border border-green-100 hover:bg-green-100 transition-all group"
            >
              <div className="relative flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <FaWhatsapp className="relative text-green-600 text-xl" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-black text-green-700 uppercase tracking-tighter">
                  Live Chat
                </span>
                <span className="text-xs font-bold text-slate-900">98145-56375</span>
              </div>
            </a>

            {/* Hamburger — mobile/tablet */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

      </header>

      {/* ===== MOBILE FULLSCREEN MENU ===================================== */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-900 flex flex-col transition-all duration-700 ease-in-out lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <Link href="/" onClick={closeMobile} className="w-28">
            <Image src={logo} alt="Avon Express Logo" priority />
          </Link>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-7">

          {/* Search */}
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">
              Search Location
            </p>
            <SearchBar dark />
          </div>

          {/* Nav */}
          <nav className="flex flex-col">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">
              Navigate
            </p>
            {NAV_LINKS.map(({ label, href }, i) => (
              <button
                key={href}
                onClick={() => { handleNavClick(href); closeMobile(); }}
                className="flex items-center justify-between py-4 border-b border-white/10 text-left group"
              >
                <span className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">
                  {label}
                </span>
                <span className="text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 font-bold text-sm">
                  →
                </span>
              </button>
            ))}
          </nav>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919814556375"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-4 hover:bg-green-500/20 transition-colors"
          >
            <div className="relative flex shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <FaWhatsapp className="relative text-green-400 text-2xl" />
            </div>
            <div>
              <p className="text-white font-black text-sm">Chat on WhatsApp</p>
              <p className="text-green-400 text-xs font-bold">98145-56375</p>
            </div>
          </a>

          {/* Language */}
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">
              Language
            </p>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10 grid grid-cols-2 gap-4 shrink-0">
          <div>
            <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest block mb-1">
              Office
            </span>
            <p className="text-white text-sm font-medium">Chandigarh , India</p>
          </div>
          <div className="text-right">
            <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest block mb-1">
              Email
            </span>
            <p className="text-white text-[11px] font-medium break-all">
              info@avonexpress<wbr />packersandmovers.co.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
}