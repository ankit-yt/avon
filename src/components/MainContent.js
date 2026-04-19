import Link from "next/link";
import IBAContent from "./slug/IbaContent";
import PackersContent from "./slug/PackersContent";
import { CITIES_BY_STATE } from "@/lib/cities";

// ── City data per state ──────────────────────────────────────────────────────


// ── Local areas per city ─────────────────────────────────────────────────────
// Key = exact city name from CITIES_BY_STATE
// Values = local area slugs (kebab-case, used directly in URLs)
const LOCAL_AREAS = {
  Ludhiana: [
    "sarabha-nagar", "brs-nagar", "model-town", "gurdev-nagar", "shastri-nagar",
    "rajguru-nagar", "dugri", "pakhowal-road", "ferozepur-road", "gill-road",
    "mundian-khurd", "jamalpur", "sukhdev-nagar", "guru-nanak-nagar",
    "field-ganj", "civil-lines", "ghumar-mandi", "haibowal", "sherpur",
    "sundar-nagar",
  ],
  Amritsar: [
    "lawrence-road", "ranjit-avenue", "green-avenue", "majitha-road",
    "batala-road", "gt-road", "sultan-wind", "kot-khalsa", "basant-avenue",
    "friends-colony", "islamabad", "queens-road", "hall-bazar", "katra-jaimal-singh",
  ],
  Jalandhar: [
    "model-town", "civil-lines", "lajpat-nagar", "basti-sheikh", "urban-estate",
    "guru-nanak-mission-chowk", "paragpur", "rama-mandi", "nakodar-road",
    "phagwara-road", "garha", "preet-nagar",
  ],
  Patiala: [
    "urban-estate", "model-town", "sanauri-adda", "tripuri", "rajpura-road",
    "nabha-road", "bhupindra-road", "new-lal-bagh", "baradari",
    "leela-bhawan", "thapar-nagar",
  ],
  Mohali: [
    "phase-1", "phase-2", "phase-3a", "phase-3b", "phase-4", "phase-5",
    "phase-6", "phase-7", "phase-8", "phase-9", "phase-10", "phase-11",
    "sector-66", "sector-68", "sector-70", "sector-71", "aerocity",
    "airport-road", "it-city", "sunny-enclave",
  ],
  Bathinda: [
    "civil-lines", "model-town", "abhohar-road", "chandigarh-road",
    "gobind-nagar", "sector-1", "sector-2", "sector-3", "surya-city",
    "new-abadi",
  ],
  Pathankot: [
    "smt-nagar", "arjun-nagar", "defence-colony", "mamun-cantt",
    "shahpur-kandi", "dalhousie-road", "chakki-bank",
  ],
  Gurdaspur: [
    "civil-lines", "kalanaur-road", "batala-road", "dera-baba-nanak-road",
    "purana-shalla",
  ],
  Hoshiarpur: [
    "tanda-road", "mukerian-road", "model-town", "civil-lines",
    "hajipur-road", "una-road",
  ],
  Kapurthala: [
    "phagwara-road", "jalandhar-road", "sultanpur-lodhi-road",
    "guru-nanak-nagar", "new-housing-board",
  ],
  // Haryana
  Gurugram: [
    "dlf-city", "sohna-road", "mg-road", "golf-course-road", "sector-14",
    "sector-15", "sector-29", "sector-31", "sector-45", "sector-56",
    "udyog-vihar", "cyber-city", "palam-vihar", "south-city",
  ],
  Faridabad: [
    "sector-14", "sector-15", "sector-16", "sector-21", "nhbc-colony",
    "nit", "old-faridabad", "neelam-bata-road", "ballabhgarh",
  ],
  Panipat: [
    "model-town", "civil-lines", "sector-11", "sector-12", "sector-13",
    "assandh-road", "gt-road",
  ],
  Ambala: [
    "ambala-cantt", "ambala-city", "model-town", "civil-lines",
    "baldev-nagar", "prem-nagar",
  ],
  // Delhi
  "New Delhi": [
    "connaught-place", "karol-bagh", "lajpat-nagar", "saket", "vasant-kunj",
    "rohini", "pitampura", "janakpuri", "dwarka", "mayur-vihar",
  ],
  Dwarka: [
    "sector-1", "sector-2", "sector-3", "sector-4", "sector-5", "sector-6",
    "sector-7", "sector-8", "sector-9", "sector-10", "sector-11", "sector-12",
    "sector-13", "sector-14", "sector-17", "sector-18", "sector-19", "sector-21",
  ],
  Rohini: [
    "sector-1", "sector-2", "sector-3", "sector-4", "sector-5", "sector-6",
    "sector-7", "sector-8", "sector-9", "sector-10", "sector-11",
    "sector-15", "sector-16", "sector-17",
  ],
  // Rajasthan
  Jaipur: [
    "malviya-nagar", "vaishali-nagar", "mansarovar", "jagatpura", "tonk-road",
    "ajmer-road", "bani-park", "civil-lines", "c-scheme", "sodala",
    "pratap-nagar", "sitapura",
  ],
  Jodhpur: [
    "sardarpura", "ratanada", "shastri-nagar", "new-pali-road", "pal-road",
    "bhati-circle", "chopasni-housing-board",
  ],
  // Himachal Pradesh
  Shimla: [
    "mall-road", "lakkar-bazar", "sanjauli", "chhota-shimla", "new-shimla",
    "vikas-nagar", "kasumpti",
  ],
  Dharamshala: [
    "mcleod-ganj", "kotwali-bazar", "sidhpur", "ramnagar", "forsyth-ganj",
  ],
  // Uttarakhand
  Dehradun: [
    "rajpur-road", "ec-road", "race-course", "patel-nagar", "ballupur",
    "dharampur", "dalanwala", "vasant-vihar", "chakrata-road", "sahastradhara-road",
  ],
  Haridwar: [
    "jwalapur", "shivalik-nagar", "bhel", "ranipur-more", "kankhal",
    "sidcul",
  ],
  // Uttar Pradesh
  Lucknow: [
    "gomti-nagar", "hazratganj", "alambagh", "aliganj", "indira-nagar",
    "jankipuram", "mahanagar", "rajajipuram", "vikas-nagar", "chinhat",
    "faizabad-road", "kanpur-road",
  ],
  Noida: [
    "sector-18", "sector-27", "sector-50", "sector-62", "sector-63",
    "sector-76", "sector-77", "sector-93", "sector-100", "sector-110",
    "sector-120", "sector-137", "sector-142", "sector-150",
    "greater-noida", "noida-extension",
  ],
  Agra: [
    "fatehabad-road", "taj-nagri", "sanjay-place", "shahganj", "civil-lines",
    "kamla-nagar", "bodla", "dayalbagh",
  ],
  Kanpur: [
    "civil-lines", "swaroop-nagar", "kidwai-nagar", "arya-nagar",
    "vikas-nagar", "kakadeo", "govind-nagar", "panki",
  ],
};

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