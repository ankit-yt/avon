"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  User,
  Search,
  MessageCircle,
  PhoneCall,
  Building2,
  ChevronDown,
  Map,
  Navigation,
} from "lucide-react";
import Footer from "@/components/sections/Footer";

// ── Dummy Data ────────────────────────────────────────────────────────────────

const BRANCHES = [
  {
    id: 1,
    city: "Ludhiana",
    state: "Punjab",
    label: "Avon in Ludhiana",
    manager: "Parmod Kumar",
    phone: "9814556375",
    whatsapp: "9814556375",
    address: "123, Near Bus Stand, Model Town, Ludhiana, Punjab – 141002",
    mapUrl: "https://maps.google.com/?q=Ludhiana+Punjab",

    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",

    tag: "Head Office",
  },

  {
    id: 2,
    city: "Amritsar",
    state: "Punjab",
    label: "Avon in Amritsar",
    manager: "Rajesh Sharma",
    phone: "9876543210",
    whatsapp: "9876543210",
    address: "45, Lawrence Road, Near Golden Temple, Amritsar, Punjab – 143001",
    mapUrl: "https://maps.google.com/?q=Amritsar+Punjab",

    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",

    tag: null,
  },

  {
    id: 3,
    city: "Chandigarh",
    state: "Chandigarh",
    label: "Avon in Chandigarh",
    manager: "Gurpreet Singh",
    phone: "9856789012",
    whatsapp: "9856789012",
    address: "Plot 14, Sector 22-B, Near ISBT, Chandigarh – 160022",
    mapUrl: "https://maps.google.com/?q=Chandigarh",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

    tag: null,
  },

  {
    id: 4,
    city: "Delhi",
    state: "Delhi",
    label: "Avon in Delhi",
    manager: "Sunil Verma",
    phone: "9812345678",
    whatsapp: "9812345678",
    address: "78, Rohini Sector 9, Near Metro Station, New Delhi – 110085",
    mapUrl: "https://maps.google.com/?q=Rohini+New+Delhi",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",

    tag: null,
  },

  {
    id: 5,
    city: "Jaipur",
    state: "Rajasthan",
    label: "Avon in Jaipur",
    manager: "Deepak Agarwal",
    phone: "9867890123",
    whatsapp: "9867890123",
    address: "88, Malviya Nagar, Near C-Scheme, Jaipur, Rajasthan – 302017",
    mapUrl: "https://maps.google.com/?q=Malviya+Nagar+Jaipur",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",

    tag: null,
  },
];

// ── Image Placeholder ─────────────────────────────────────────────────────────

function BranchImagePlaceholder({ city }) {
  return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
        <MapPin size={26} className="text-orange-400" />
      </div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{city}</p>
      <p className="text-[10px] text-slate-600">Image coming soon</p>
    </div>
  );
}

// ── Single Accordion Row ──────────────────────────────────────────────────────

function BranchRow({ branch, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 border ${
        isOpen
          ? "border-orange-400 shadow-lg shadow-orange-500/10"
          : "border-slate-200 hover:border-orange-200"
      }`}
    >
      {/* ── Clickable header ── */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-slate-900" : "bg-white hover:bg-slate-50"
        }`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
              isOpen ? "bg-orange-500" : "bg-orange-50 border border-orange-100"
            }`}
          >
            <MapPin size={15} className={isOpen ? "text-white" : "text-orange-500"} />
          </div>

          <div className="min-w-0">
            <p
              className={`text-sm font-black tracking-tight truncate transition-colors duration-200 ${
                isOpen ? "text-white" : "text-slate-900"
              }`}
            >
              {branch.label}
            </p>
            <p className="text-[11px] font-semibold text-slate-400">{branch.state}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {branch.tag && (
            <span className="hidden sm:inline-flex text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white px-2.5 py-1 rounded-lg">
              {branch.tag}
            </span>
          )}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 text-orange-400" : "text-slate-400"
            }`}
          />
        </div>
      </button>

      {/* ── Expanded details — animated with max-height + opacity ── */}
      <div
        className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[600px] opacity-100 border-t border-slate-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* Left — info */}
          <div className="p-6 flex flex-col gap-5">

            {/* Manager */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                <User size={15} className="text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Branch Manager</p>
                <p className="text-sm font-black text-slate-900 mt-0.5">{branch.manager}</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                <Navigation size={15} className="text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Address</p>
                <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{branch.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                <Phone size={15} className="text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</p>
                <a
                  href={`tel:${branch.phone}`}
                  className="text-sm font-black text-orange-500 hover:text-orange-600 transition-colors mt-0.5 block"
                >
                  +91 {branch.phone}
                </a>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={`tel:${branch.phone}`}
                className="flex items-center gap-1.5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-orange-600 transition-colors active:scale-[0.99]"
              >
                <PhoneCall size={12} />
                Call Now
              </a>
              <a
                href={`https://wa.me/91${branch.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-emerald-600 transition-colors active:scale-[0.99]"
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors active:scale-[0.99]"
              >
                <Map size={12} />
                View on Map
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative h-56 sm:h-auto sm:min-h-60 border-t sm:border-t-0 sm:border-l border-slate-100 overflow-hidden">
            {branch.image ? (
              <Image
                src={branch.image}
                alt={`${branch.label} office`}
                fill
                className="object-cover"
              />
            ) : (
              <BranchImagePlaceholder city={branch.city} />
            )}

            {/* City badge over image */}
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-sm border border-slate-700 rounded-xl px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
                <span className="text-[11px] font-bold text-white">{branch.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BranchesPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = BRANCHES.filter(
    (b) =>
      b.label.toLowerCase().includes(query.toLowerCase()) ||
      b.state.toLowerCase().includes(query.toLowerCase())
  );

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-[#FCFCFB] font-sans">

      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      {/* Hero header */}
      <header className="relative bg-slate-900 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-600/10 blur-[80px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-14 md:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-orange-400 font-semibold">Our Branches</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <Building2 size={55} className="text-orange-500" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Pan-India Network
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Our <span className="text-orange-400">Branches</span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                With offices across India, we're always close to you. Click any
                branch to see full details, directions, and contact options.
              </p>
            </div>
          </div>

          
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">All Branches</h2>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              {filtered.length} location{filtered.length !== 1 ? "s" : ""} — click any to expand
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search city or state…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenId(null);
              }}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all placeholder:text-slate-400 text-slate-900"
            />
          </div>
        </div>

        {/* Accordion list */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filtered.map((branch) => (
              <BranchRow
                key={branch.id}
                branch={branch}
                isOpen={openId === branch.id}
                onToggle={() => toggle(branch.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-slate-400" />
            </div>
            <p className="text-slate-900 font-black text-lg">No branch found</p>
            <p className="text-slate-400 text-sm mt-1">Try a different city or state name.</p>
            <button
              onClick={() => setQuery("")}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-500 hover:text-orange-600 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

      
      </main>

      <Footer />
    </div>
  );
}