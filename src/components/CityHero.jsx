// components/CityHero.jsx

import { CheckCircle, Package, Truck } from "lucide-react";
import Link from "next/link";

export default function CityHero({ city, service, to }) {
  if (!city) return null;

  const formattedCity = city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const formattedTo = to?.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const isIBA = service === "IBA Packers and Movers";
  const isTransport = service === "Transport";

  return (
    <div className="font-sans">
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

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

              {isTransport ? (
                <>
                  <li>
                    <Link href={`/transport/${city}`} className="hover:text-orange-400 transition-colors">
                      Transport from {formattedCity}
                    </Link>
                  </li>
                  {to && (
                    <>
                      <li aria-hidden="true" className="text-slate-600">/</li>
                      <li className="text-orange-400 font-semibold">To {formattedTo}</li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li>
                    <Link href={`/packers-and-movers-in-${city}`} className="hover:text-orange-400 transition-colors">
                      Packers &amp; Movers in {formattedCity}
                    </Link>
                  </li>
                  {isIBA && (
                    <>
                      <li aria-hidden="true" className="text-slate-600">/</li>
                      <li className="text-orange-400 font-semibold">IBA Approved</li>
                    </>
                  )}
                </>
              )}
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span
              aria-hidden="true"
              className="flex-shrink-0 mt-1 flex items-center justify-center"
            >
              {isIBA ? (
                <CheckCircle size={55} className="text-green-500" />
              ) : isTransport ? (
                <Truck size={55} className="text-blue-500" />
              ) : (
                <Package size={55} className="text-orange-500" />
              )}
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                {isIBA ? "Government Certified" : isTransport ? "Transport Route" : "Relocation Services"}
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                {isTransport && to ? (
                  <>
                    {formattedCity} <span className="text-slate-400">→</span> <span className="text-orange-400">{formattedTo}</span>
                  </>
                ) : isTransport ? (
                  <>
                    Transport from <span className="text-orange-400">{formattedCity}</span>
                  </>
                ) : (
                  <>
                    {isIBA ? "IBA Approved Packers & Movers" : "Packers & Movers"}{" "}
                    <br />
                    <span className="text-orange-400">in {formattedCity}</span>
                  </>
                )}
              </h1>

              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                {isTransport && to
                  ? `Safe, affordable and reliable goods transport from ${formattedCity} to ${formattedTo}. GPS-tracked vehicles, zero hidden charges.`
                  : isTransport
                    ? `Explore all transport routes from ${formattedCity}. Safe, reliable and affordable goods transport across India.`
                    : isIBA
                      ? `IBA-certified and government-approved relocation services in ${formattedCity}. Trusted by bank & government employees.`
                      : `Fast, safe & affordable packers and movers in ${formattedCity}. Transparent pricing with zero hidden costs.`}
              </p>

              {isIBA && (
                <div className="inline-flex items-center gap-2 mt-5 bg-white/10 border border-white/20 rounded-full px-5 py-2">
                  <span className="text-orange-400 text-sm">✅</span>
                  <span className="text-xs font-bold text-slate-300">IBA Certified &amp; Government Registered</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}