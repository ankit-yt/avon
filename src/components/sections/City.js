import Image from "next/image";
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
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  },
  {
    name: "Pune",
    slug: "pune",
    label: "Oxford of the East",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
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
    <section className="bg-white p-10 px-4 md:px-10 lg:px-20 overflow-hidden relative">

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
            <Image
            width={100}
            height={100}
              src={city.img}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover tint */}
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500" />

          

           

            {/* City Info */}
            <div className="absolute bg-black/60 bottom-0 left-0 right-0 p-4">
              
              <h3 className="text-lg  font-black tracking-tight text-white leading-none">
                {city.name}
              </h3>
            </div>

            {/* Bottom border accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}

        {/* CTA Card */}
       
      </div>

      
    </section>
  );
}