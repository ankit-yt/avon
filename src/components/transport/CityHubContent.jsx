import { formatName } from "@/app/transport/[slug]/page";
import RouteCard from "./RouteCard";
import { from_to } from "@/lib/transportData";

 function CityHubContent({ city }) {
  const formattedCity = formatName(city);
  const destinations = from_to[city] ?? [];

  return (
    <div className="relative bg-[#FAFAF8] overflow-hidden">
      {/* Blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-10 md:py-16 space-y-16">

        {/* Header */}
        <section>
          <header className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Transport Routes
              <span className="w-10 h-px bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4">
              TRANSPORT FROM{" "}
              <span className="text-orange-500">{formattedCity.toUpperCase()}</span>
            </h3>
            
          </header>

          

          {/* Route cards */}
          {destinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {destinations.map((dest) => (
                <RouteCard key={dest} from={formattedCity} to={formatName(dest)} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-orange-50 border border-orange-200 rounded-[20px] flex items-center justify-center text-3xl mb-6">
                🚚
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                Routes Coming Soon
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
                We're adding more routes from {formattedCity}. Contact us directly for transport assistance.
              </p>
            </div>
          )}
        </section>

        <section>
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-orange-600" /> Transport Services from {formattedCity}
            </h4>
            <p className="text-xl font-extrabold text-slate-900 tracking-tight mb-4">
              Reliable Goods Transport from{" "}
              <span className="text-orange-500">{formattedCity}</span>
            </p>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Avon Express Packers and Movers offers comprehensive transport services from {formattedCity} to all major cities across India.
              Whether you need to move household goods, office equipment, or commercial cargo — our fleet of GPS-tracked vehicles ensures
              safe and timely delivery. We own our vehicles and employ our own trained drivers, maintaining complete transparency and
              accountability throughout the journey. Our team handles everything from pickup at your door to final delivery at the destination,
              making your transport experience completely hassle-free. With same-day booking available and 24/7 customer support, we are
              your most trusted transport partner from {formattedCity}.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 flex items-center gap-2">
            <span className="w-6 h-px bg-orange-600" /> Frequently Asked Questions
          </h4>
          {[
            {
              q: `How much does transport from ${formattedCity} cost?`,
              a: `Transport costs from ${formattedCity} depend on the destination, volume of goods, and type of service. Contact our team for a free quote.`,
            },
            {
              q: `How long does delivery from ${formattedCity} take?`,
              a: `Delivery timelines vary by destination. Local routes are typically 1-2 days while long-distance routes take 3-7 days. We provide tracking so you always know where your goods are.`,
            },
            {
              q: `Is door-to-door transport available from ${formattedCity}?`,
              a: `Yes, we offer complete door-to-door transport services from ${formattedCity}. Our team picks up from your location and delivers directly to your destination address.`,
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-[20px] p-6 shadow-sm">
              <p className="text-sm font-extrabold text-slate-900 tracking-tight mb-2">Q: {q}</p>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">A: {a}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}


export default CityHubContent