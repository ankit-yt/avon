import Image from "next/image";
import Link from "next/link";
import Andaman from "@/assets/images/State/Andaman-and-Nicobar-Islands.webp";
import AndhraPradesh from "@/assets/images/State/Andhra-Pradesh.webp";
import ArunachalPradesh from "@/assets/images/State/Arunachal-Pradesh.webp";
import Assam from "@/assets/images/State/Assam.webp";
import Bihar from "@/assets/images/State/Bihar.webp";
import Chandigarh from "@/assets/images/State/Chandigarh.webp";
import Chhattisgarh from "@/assets/images/State/Chhattisgarh.webp";
import DadraDiu from "@/assets/images/State/Dadra-and-Nagar-Haveli-and-Daman-and-Diu.webp";
import Delhi from "@/assets/images/State/Delhi.webp";
import Goa from "@/assets/images/State/Goa.webp";
import Gujarat from "@/assets/images/State/Gujarat.webp";
import Haryana from "@/assets/images/State/Haryana.webp";
import HimachalPradesh from "@/assets/images/State/Himachal-Pradesh.webp";
import JammuKashmir from "@/assets/images/State/Jammu-and-Kashmir.webp";
import Jharkhand from "@/assets/images/State/Jharkhand.webp";
import Karnataka from "@/assets/images/State/Karnataka.webp";
import Kerala from "@/assets/images/State/Kerala.webp";
import Ladakh from "@/assets/images/State/Ladakh.webp";
import Lakshadweep from "@/assets/images/State/Lakshadweep.webp";
import MadhyaPradesh from "@/assets/images/State/Madhya-Pradesh.webp";
import Maharashtra from "@/assets/images/State/Maharashtra.webp";
import Manipur from "@/assets/images/State/Manipur.webp";
import Meghalaya from "@/assets/images/State/Meghalaya.webp";
import Mizoram from "@/assets/images/State/Mizoram.webp";
import Nagaland from "@/assets/images/State/Nagaland.webp";
import Odisha from "@/assets/images/State/Odisha.webp";
import Puducherry from "@/assets/images/State/Puducherry.webp";
import Punjab from "@/assets/images/State/Punjab.webp";
import Rajasthan from "@/assets/images/State/Rajasthan.webp";
import Sikkim from "@/assets/images/State/Sikkim.webp";
import TamilNadu from "@/assets/images/State/Tamil-Nadu.webp";
import Telangana from "@/assets/images/State/Telangana.webp";
import Tripura from "@/assets/images/State/Tripura.webp";
import UttarPradesh from "@/assets/images/State/Uttar-Pradesh.webp";
import Uttarakhand from "@/assets/images/State/Uttarakhand.webp";
import WestBengal from "@/assets/images/State/West-Bengal.webp";

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
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
         <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />


      {/* Section Header */}
      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14 mb-6">

        <header className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px tracking-[0.4rem] bg-orange-600" />
            Pan India Network
            <span className="w-10 h-px bg-orange-600" />
          </h2>
          <h1 className="text-4xl md:text-6xl  font-extrabold tracking-[0.6rem] text-slate-900 uppercase leading-tight">
            Pan India <span className="text-orange-500">Network</span>
          </h1>
        </header>

        <div className="h-px bg-slate-200 w-full" />
      </div>

      {/* City Grid */}
      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {states.map((city, i) => (
            <Link
              key={i}
              href={`/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-[20px] h-60 block shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-orange-100 transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={city.img}
                alt={city.name}
                fill
               
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover tint */}
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500" />

              {/* City Info */}
              <div className="absolute bg-black/60 bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-black tracking-tighter text-white leading-tight">
                  {city.name}
                </h3>
              </div>

              {/* Bottom border accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}