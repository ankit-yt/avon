import Image from "next/image";
import Link from "next/link";
import Andaman from "/Images/State/Andaman and Nicobar Islands.png";
import AndhraPradesh from "/Images/State/Andhra Pradesh.png";
import ArunachalPradesh from "/Images/State/Arunachal Pradesh.png";
import Assam from "/Images/State/Assam.png";
import Bihar from "/Images/State/Bihar.png";
import Chandigarh from "/Images/State/Chandigarh.png";
import Chhattisgarh from "/Images/State/Chhattisgarh.png";
import DadraDiu from "/Images/State/Dadra and Nagar Haveli and Daman and Diu.png";
import Delhi from "/Images/State/Delhi.png";
import Goa from "/Images/State/Goa.png";
import Gujarat from "/Images/State/Gujarat.png";
import Haryana from "/Images/State/Haryana.png";
import HimachalPradesh from "/Images/State/Himachal Pradesh.png";
import JammuKashmir from "/Images/State/Jammu and Kashmir.png";
import Jharkhand from "/Images/State/Jharkhand.png";
import Karnataka from "/Images/State/Karnataka.png";
import Kerala from "/Images/State/Kerala.png";
import Ladakh from "/Images/State/Ladakh.png";
import Lakshadweep from "/Images/State/Lakshadweep.png";
import MadhyaPradesh from "/Images/State/Madhya Pradesh.png";
import Maharashtra from "/Images/State/Maharashtra.png";
import Manipur from "/Images/State/Manipur.png";
import Meghalaya from "/Images/State/Meghalaya.png";
import Mizoram from "/Images/State/Mizoram.png";
import Nagaland from "/Images/State/Nagaland.png";
import Odisha from "/Images/State/Odisha.png";
import Puducherry from "/Images/State/Puducherry.png";
import Punjab from "/Images/State/Punjab.png";
import Rajasthan from "/Images/State/Rajasthan.png";
import Sikkim from "/Images/State/Sikkim.png";
import TamilNadu from "/Images/State/Tamil Nadu.png";
import Telangana from "/Images/State/Telangana.png";
import Tripura from "/Images/State/Tripura.png";
import UttarPradesh from "/Images/State/Uttar Pradesh.png";
import Uttarakhand from "/Images/State/Uttarakhand.png";
import WestBengal from "/Images/State/West Bengal.png";

const states = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-and-nicobar-islands", img: Andaman },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", img: AndhraPradesh },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", img: ArunachalPradesh },
  { name: "Assam", slug: "assam", img: Assam },
  { name: "Bihar", slug: "bihar", img: Bihar },
  { name: "Chandigarh", slug: "chandigarh", img: Chandigarh },
  { name: "Chhattisgarh", slug: "chhattisgarh", img: Chhattisgarh },
  { name: "Dadra and Nagar Haveli and Daman and Diu", slug: "dadra-nagar-haveli-daman-diu", img: DadraDiu },
  { name: "Delhi", slug: "delhi", img: Delhi },
  { name: "Goa", slug: "goa", img: Goa },
  { name: "Gujarat", slug: "gujarat", img: Gujarat },
  { name: "Haryana", slug: "haryana", img: Haryana },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", img: HimachalPradesh },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir", img: JammuKashmir },
  { name: "Jharkhand", slug: "jharkhand", img: Jharkhand },
  { name: "Karnataka", slug: "karnataka", img: Karnataka },
  { name: "Kerala", slug: "kerala", img: Kerala },
  { name: "Ladakh", slug: "ladakh", img: Ladakh },
  { name: "Lakshadweep", slug: "lakshadweep", img: Lakshadweep },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", img: MadhyaPradesh },
  { name: "Maharashtra", slug: "maharashtra", img: Maharashtra },
  { name: "Manipur", slug: "manipur", img: Manipur },
  { name: "Meghalaya", slug: "meghalaya", img: Meghalaya },
  { name: "Mizoram", slug: "mizoram", img: Mizoram },
  { name: "Nagaland", slug: "nagaland", img: Nagaland },
  { name: "Odisha", slug: "odisha", img: Odisha },
  { name: "Puducherry", slug: "puducherry", img: Puducherry },
  { name: "Punjab", slug: "punjab", img: Punjab },
  { name: "Rajasthan", slug: "rajasthan", img: Rajasthan },
  { name: "Sikkim", slug: "sikkim", img: Sikkim },
  { name: "Tamil Nadu", slug: "tamil-nadu", img: TamilNadu },
  { name: "Telangana", slug: "telangana", img: Telangana },
  { name: "Tripura", slug: "tripura", img: Tripura },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", img: UttarPradesh },
  { name: "Uttarakhand", slug: "uttarakhand", img: Uttarakhand },
  { name: "West Bengal", slug: "west-bengal", img: WestBengal },
];

export default function City() {
  return (
    <section className="bg-white p-10 pt-5 px-4 md:px-10 lg:px-20 overflow-hidden relative">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-5">
        
            <h1 className="text-7xl mx-auto w-full flex justify-center  font-extrabold tracking-[0.25em] text-slate-900 uppercase mb-3">
              Pan India <span className="text-orange-500">&nbsp;Network</span>
            </h1>
           
        <div className="mt-10 h-px bg-neutral-100 w-full" />
      </div>

      {/* City Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {states.map((city, i) => (
          <Link
            key={i}
            href={""}
            className="group relative overflow-hidden rounded-xl  h-60 block"
          >
            {/* Image */}
            <Image
            width={100}
            height={100}
              src={city.img}
              quality={100}
  alt={city.img}
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