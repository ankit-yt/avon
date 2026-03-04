const galleryItems = [
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Household-Goods-Shifting-Services-All-India.jpg",
    label: "Household Shifting",
    tag: "Packing",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Car-Transport-Services-All-India.jpg",
    label: "Car Transport",
    tag: "Vehicle",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Bike-Transport-Services-All-India.jpg",
    label: "Bike Transport",
    tag: "Vehicle",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Activa-Transport-Services-All-India.jpg",
    label: "Safe Delivery",
    tag: "Express",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Office-Shifting-Services-All-India.jpg",
    label: "Office Moving",
    tag: "Corporate",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Truck-and-Tempo-Hire-Services-All-India.png",
    label: "Truck & Tempo Hire",
    tag: "Fleet",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Packers-and-Movers-Bill-For-Claim.jpg",
    label: "Bill For Claim",
    tag: "Verified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "IBA Approved",
    tag: "Certified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "IBA Approved",
    tag: "Certified",
  },
];

export default function Gallery() {
  return (
    <section className=" py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-orange-500 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
            Packers <span className="text-neutral-300">&</span> Movers
          </h2>
          <div className="mt-4 mx-auto w-10 h-0.5 bg-orange-400 rounded-full" />
          <p className="mt-5 text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            A glimpse into how we handle every move — from packing to final delivery, with care at every step.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              {/* Aspect ratio box */}
              <div className={`relative w-full  overflow-hidden`}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                  {item.tag}
                </div>

                {/* Arrow */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                  <svg className="w-3 h-3 text-neutral-900 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-black text-sm tracking-tight leading-none translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {item.label}
                  </p>
                  <div className="h-0.5 w-0 group-hover:w-8 bg-orange-400 mt-1.5 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

     
       

      </div>
    </section>
  );
}