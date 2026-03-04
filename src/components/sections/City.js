import Link from "next/link";

const cities = [
  {
    name: "Mumbai",
    slug: "mumbai",
    label: "Financial Capital",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  },
  {
    name: "Delhi",
    slug: "delhi",
    label: "National Capital",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  },
  {
    name: "Bangalore",
    slug: "bangalore",
    label: "Silicon Valley of India",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
  },
  {
    name: "Chennai",
    slug: "chennai",
    label: "Gateway of the South",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
  },
  {
    name: "Hyderabad",
    slug: "hyderabad",
    label: "City of Pearls",
    img: "https://images.unsplash.com/photo-1626014303762-5fa8a6ee7fd7?w=800&q=80",
  },
  {
    name: "Pune",
    slug: "pune",
    label: "Oxford of the East",
    img: "https://images.unsplash.com/photo-1622397394662-b08c8dc0dee3?w=800&q=80",
  },
  {
    name: "Kolkata",
    slug: "kolkata",
    label: "City of Joy",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80",
  },
  {
    name: "Ahmedabad",
    slug: "ahmedabad",
    label: "Manchester of India",
    img: "https://images.unsplash.com/photo-1618478594486-c65b899c4936?w=800&q=80",
  },
  {
    name: "Ludhiana",
    slug: "ludhiana",
    label: "Manchester of Punjab",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
  {
    name: "Jaipur",
    slug: "jaipur",
    label: "Pink City",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
  },
];

export default function City() {
  return (
    <section className="bg-white py-24 px-4 md:px-10 lg:px-20 overflow-hidden relative">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14">
        
            <h1 className="text-7xl mx-auto w-full flex justify-center  font-bold tracking-[0.25em] text-gray-600 uppercase mb-3">
              Pan India Network
            </h1>
           
        <div className="mt-10 h-px bg-neutral-100 w-full" />
      </div>

      {/* City Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {cities.map((city, i) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="group relative overflow-hidden rounded-xl  h-60 block"
          >
            {/* Image */}
            <img
              src={city.img}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover tint */}
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500" />

            {/* Index number */}
            <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest text-white/40 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Arrow icon */}
            <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
              <svg className="w-3.5 h-3.5 text-neutral-900 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* City Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {city.label}
              </p>
              <h3 className="text-lg font-black tracking-tight text-white leading-none">
                {city.name}
              </h3>
            </div>

            {/* Bottom border accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}

        {/* CTA Card */}
       
      </div>

      {/* Bottom stat strip */}
      <div className="max-w-7xl mx-auto mt-14 pt-10 border-t border-neutral-100 grid grid-cols-3 gap-4 text-center">
        {[
          { value: "50+", label: "Cities Covered" },
          { value: "10K+", label: "Moves Completed" },
          { value: "4.9★", label: "Average Rating" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl md:text-3xl font-black text-neutral-950 tracking-tight">{stat.value}</p>
            <p className="text-xs text-neutral-400 mt-1 tracking-wide uppercase font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}