import Image from "next/image";

const clients = [
  { name: "Tata Group", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/37.jpg" },
  { name: "Infosys", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/38.png" },
  { name: "Wipro", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/39.png" },
  { name: "Reliance", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/40.jpg" },
  { name: "HCL", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/41.jpg" },
  { name: "Mahindra", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/42.png" },
  { name: "Bajaj", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/43.png" },
  { name: "Airtel", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/44.jpg" },
  { name: "HDFC Bank", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/45.jpg" },
  { name: "Asian Paints", img: "https://www.avonexpresspackersandmovers.co.in/images/clients/46.png" },
];

export default function CompanyClints() {
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-white  border-y border-neutral-100  overflow-hidden">
   
        <div className="max-w-7xl mx-auto">

          <h1 className="text-7xl mb-10 mx-auto w-full flex justify-center  font-bold tracking-widest text-red-600 uppercase mb-3">
            OUR VALUABLE CLIENTS
          </h1>

        <div className="marquee-track  flex items-center  py-4">
          {doubled.map((client, i) => (
            <div
              key={i}
              className=" shrink-0 flex  overflow-hidden items-center justify-center px-2 group"
            >
              <div className="flex items-center justify-center h-32 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img
                  src={client.img}
                  alt={client.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    
     
    </section>
  );
}