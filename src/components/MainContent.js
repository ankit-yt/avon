import Link from "next/link";
import IBAContent from "./slug/IbaContent";
import PackersContent from "./slug/PackersContent";
import { CITIES_BY_STATE, LOCAL_AREAS } from "@/lib/cities";

// ── City data per state ──────────────────────────────────────────────────────


// ── Local areas per city ─────────────────────────────────────────────────────
// Key = exact city name from CITIES_BY_STATE
// Values = local area slugs (kebab-case, used directly in URLs)


// ── Helpers ──────────────────────────────────────────────────────────────────
function toSlug(city) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

// Format a kebab-slug into readable label: "guru-nanak-nagar" → "Guru Nanak Nagar"
function formatLocalArea(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ── Sub-components ───────────────────────────────────────────────────────────
function CityGrid({ cities, urlPrefix }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {cities.map((city) => (
        <li key={city}>
          <Link
            href={`/${urlPrefix}-${toSlug(city)}`}
            className="group flex items-center gap-2 bg-white border border-slate-200 rounded-[14px] px-4 py-3 shadow-sm hover:shadow-md hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform duration-200 shrink-0" />
            <span className="text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
              {city}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LocalAreaGrid({ areas, urlPrefix ,citySlug}) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {areas.map((area) => (
        <li key={area}>
          <Link
            href={`/${urlPrefix}-${area}-${citySlug}`}
            className="group flex items-center gap-2 bg-white border border-slate-200 rounded-[14px] px-4 py-3 shadow-sm hover:shadow-md hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-200 shrink-0" />
            <span className="text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
              {formatLocalArea(area)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ComingSoon({ formattedCity }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 bg-orange-50 border border-orange-200 rounded-[20px] flex items-center justify-center text-3xl mb-6">
        🚚
      </div>
      <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
        Coming Soon to {formattedCity}
      </h4>
      <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
        We're expanding rapidly! Our services will be available in {formattedCity} very soon.
        Stay tuned or contact us directly for assistance.
      </p>
      <div className="inline-flex items-center gap-2 mt-6 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
        <span className="text-orange-500 text-base">📞</span>
        <span className="text-xs font-bold text-slate-700">Call us: +91 98145-56375</span>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function MainContent({ city, service }) {
  const formattedCity = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const isIBA = service === "IBA Packers and Movers";

  // Get city list for this state
  const stateCities = CITIES_BY_STATE[city] ?? null;

  // Get local areas for this city (city prop could also be a specific city slug)
  // Match against LOCAL_AREAS keys by converting city name to slug and comparing
  const localAreaEntry = Object.entries(LOCAL_AREAS).find(
    ([cityName]) => toSlug(cityName) === city
  );
  const localAreas = localAreaEntry ? localAreaEntry[1] : null;

  const urlPrefix = isIBA ? "iba-approved-packers-and-movers-in" : "packers-and-movers-in";

  return (
    <div className="relative bg-[#FAFAF8] overflow-hidden">

      {/* ── Warm blob top-right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14 py-6 md:py-10 space-y-20">

        {/* ══════════════════════════════════════════════
            SECTION 1 — Cities grid (state-level page)
        ══════════════════════════════════════════════ */}
        {stateCities && (
          <section aria-labelledby="cities-heading">
            <header className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
                <span className="w-10 h-px bg-orange-600" />
                {isIBA ? "Government Certified" : "Explore by City"}
                <span className="w-10 h-px bg-orange-600" />
              </h2>
              <h3
                id="cities-heading"
                className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4"
              >
                {isIBA ? "IBA APPROVED PACKERS &" : "PACKERS &"}{" "}
                <span className="text-orange-500">MOVERS</span>
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {isIBA
                  ? `IBA-certified movers for bank & government employee relocations across ${formattedCity}.`
                  : `Select your city to find verified packers & movers near you — transparent pricing, zero hidden costs.`}
              </p>
              {isIBA && (
                <div className="inline-flex items-center gap-2 mt-5 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                  <span className="text-orange-500 text-base">✅</span>
                  <span className="text-xs font-bold text-slate-700">IBA Certified &amp; Government Registered</span>
                </div>
              )}
            </header>
             {isIBA ? <IBAContent formattedCity={formattedCity} /> : <PackersContent formattedCity={formattedCity} />}

            <CityGrid cities={stateCities} urlPrefix={urlPrefix} />
          </section>
        )}

        {!stateCities && (
          <>
            {/* Divider blob */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/20 blur-[120px]"
            />

            <section aria-labelledby="local-heading">
              <header className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
                  <span className="w-10 h-px bg-orange-600" />
                  {isIBA ? "Government Certified" : "Explore Nearby Areas"}
                  <span className="w-10 h-px bg-orange-600" />
                </h2>
                <h3
                  id="local-heading"
                  className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4"
                >
                  {isIBA ? "IBA APPROVED MOVERS" : "PACKERS & MOVERS"}{" "}
                  <br />
                  <span className="text-orange-500">ACROSS {formattedCity.toUpperCase()}</span>
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {isIBA
                    ? `Find IBA-approved packers & movers serving every neighbourhood in ${formattedCity}.`
                    : `Find trusted packers & movers serving every neighbourhood and locality in ${formattedCity}.`}
                </p>
                {isIBA && (
                  <div className="inline-flex items-center gap-2 mt-5 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                    <span className="text-orange-500 text-base">✅</span>
                    <span className="text-xs font-bold text-slate-700">IBA Certified &amp; Government Registered</span>
                  </div>
                )}
              </header>
               {isIBA ? <IBAContent formattedCity={formattedCity} /> : <PackersContent formattedCity={formattedCity} />}
              {localAreas ? (
                <LocalAreaGrid areas={localAreas} urlPrefix={urlPrefix} citySlug={city} />
              ) : (
                // <ComingSoon formattedCity={formattedCity} /> 
                null
              )}
            </section>
          </>
        )}

      </div>
    </div>
  );
}