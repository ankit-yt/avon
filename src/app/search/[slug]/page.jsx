// app/search/[slug]/page.jsx

import Link from "next/link";
import { cities } from "@/lib/cities";
import { HiCheckBadge } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Footer from "@/components/sections/Footer";

const NAV_LINKS = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-and-cancellation", label: "Refund & Cancellation" },
  { href: "/insurance", label: "Insurance" },
];

function formatName(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const keyword = formatName(slug);
  return {
    title: `Packers and Movers in ${keyword} | Avon Express`,
    description: `Find all packers and movers services in ${keyword}. View IBA approved and standard packers & movers links.`,
  };
}

export default async function SearchPage({ params }) {
  const { slug } = await params;
  const keyword = slug.toLowerCase().replace(/\s+/g, "-");
  const matches = cities.filter((city) => city.includes(keyword));

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans">

      {/* ── Top accent bar ── */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      {/* ── Hero header ── */}
      <header className="relative bg-slate-900 overflow-hidden">
        {/* Warm blobs */}
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
              <li className="text-orange-400 font-semibold">Search Results</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="text-4xl md:text-5xl flex-shrink-0 mt-1">
              📦
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Search Results
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Packers &amp; Movers in{" "}
                <span className="text-orange-400">{formatName(keyword)}</span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                {matches.length > 0
                  ? `Found ${matches.length} location${matches.length > 1 ? "s" : ""} matching "${formatName(keyword)}"`
                  : `No locations found matching "${formatName(keyword)}"`}
              </p>
            </div>
          </div>
        </div>
      </header>

    

      {/* ── Page content ── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">
        {matches.length === 0 ? (
          /* ── Empty State ── */
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-2xl font-black text-slate-800 mb-3">
              No results found
            </h2>
            <p className="text-slate-500 font-medium mb-8">
              We couldn&apos;t find any location matching &quot;{formatName(keyword)}&quot;.
              <br />Try searching with a different city name.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md shadow-orange-200"
            >
              Go Back Home
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {matches.map((citySlug) => {
              const displayName = formatName(citySlug);
              const packersLink = `/packers-and-movers-in-${citySlug}`;
              const ibaLink = `/iba-approved-packers-and-movers-in-${citySlug}`;

              return (
                <div
                  key={citySlug}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50/60">
                    <HiOutlineLocationMarker className="text-orange-500 text-lg shrink-0" />
                    <h2 className="text-sm font-black text-slate-800 uppercase tracking-wide">
                      {displayName}
                    </h2>
                  </div>

                  {/* Two Links */}
                  <div className="divide-y divide-slate-50">
                    {/* Standard Packers & Movers */}
                    <Link
                      href={packersLink}
                      className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors shrink-0">
                          <span className="text-xs font-black text-slate-500 group-hover:text-orange-600">PM</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                            Packers and Movers in {displayName}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                            Avon Express • Trusted Relocation Services
                          </p>
                        </div>
                      </div>
                      <span className="text-orange-400 font-black text-lg opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 duration-200">
                        →
                      </span>
                    </Link>

                    {/* IBA Approved */}
                    <Link
                      href={ibaLink}
                      className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors shrink-0">
                          <HiCheckBadge className="text-orange-500 text-base" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                            IBA Approved Packers and Movers in {displayName}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                            Avon Express • Government Certified &amp; Insured
                          </p>
                        </div>
                      </div>
                      <span className="text-orange-400 font-black text-lg opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 duration-200">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer/>
    </div>
  );
}