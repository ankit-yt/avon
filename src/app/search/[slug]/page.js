import Link from "next/link";
import { cities } from "@/lib/cities";
import { HiOutlineLocationMarker, HiArrowLeft } from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";

// Format slug → Display Name
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

  // Normalize: convert spaces → dashes, lowercase
  const keyword = slug.toLowerCase().replace(/\s+/g, "-");

  // Filter all cities that contain the keyword
  const matches = cities.filter((city) => city.includes(keyword));

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── Hero / Header ───────────────────────────────────────────────── */}
      <div className="bg-slate-900 pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors mb-8 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlineLocationMarker className="text-orange-500 text-2xl shrink-0" />
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em]">
              Search Results
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Packers &amp; Movers
            <span className="block text-orange-500">{formatName(keyword)}</span>
          </h1>

          <p className="mt-4 text-slate-400 text-sm font-medium">
            {matches.length > 0
              ? `Found ${matches.length} location${matches.length > 1 ? "s" : ""} matching "${formatName(keyword)}"`
              : `No locations found matching "${formatName(keyword)}"`}
          </p>
        </div>
      </div>

      {/* ── Results ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {matches.length === 0 ? (
          /* ── Empty State ── */
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-2xl font-black text-slate-800 mb-3">
              No results found
            </h2>
            <p className="text-slate-500 font-medium mb-8">
              We couldn&apos;t find any location matching &quot;{formatName(keyword)}&quot;.
              <br />Try searching with a different city name.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-orange-600 transition-all duration-300"
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
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                    <HiOutlineLocationMarker className="text-orange-500 text-lg shrink-0" />
                    <h2 className="text-base font-black text-slate-800 uppercase tracking-wide">
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
      </div>
    </main>
  );
}