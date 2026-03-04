const badges = [
  {
    img: "https://deluxecargopackers.com//assets/images/services/satisfaction.png",
    title: "100% Customer Satisfaction",
    desc: "Every move is backed by our satisfaction guarantee. We don't stop until you're happy.",
  },
  {
    img: "https://deluxecargopackers.com//assets/images/services/iso.png",
    title: "ISO Certified",
    desc: "Certified processes ensure your goods are packed, handled, and delivered to global standards.",
  },
  {
    img: "https://deluxecargopackers.com//assets/images/services/customer.png",
    title: "24/7 Customer Support",
    desc: "Our team is always on call. Day or night, we're here to guide your move every step of the way.",
  },
  {
    img: "https://deluxecargopackers.com//assets/images/services/trust.png",
    title: "Trusted",
    desc: "10,000+ families have trusted us with their most valuable possessions. We've earned every review.",
  },
];

export default function Selection1() {
  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-orange-500 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
            Built on Trust,<br className="hidden md:block" /> Driven by Excellence.
          </h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            Four pillars that make Avon Express the most reliable name in relocation across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div
              key={b.title}
              className="group flex flex-col items-center text-center gap-5 p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Badge image */}
              <div className="w-28 h-28 flex items-center justify-center">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-orange-400 rounded-full" />

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-neutral-900 tracking-tight leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}