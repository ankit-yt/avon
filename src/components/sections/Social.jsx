import { FaWhatsapp, FaPhone } from "react-icons/fa";
import gif from "@/assets/images/Home/Mobile.gif";
import Image from "next/image";

export default function Social() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end">

      {/* ── Call Now ── */}
     <a
          href="tel:+919814556375"
          className="call-island flex items-center gap-2.5   shadow-lg shadow-red-200 hover:scale-105 transition-transform duration-200"
        >
            <Image src={gif} width={100} height={100} alt="packer and mover contact number" className="w-52" />
         
        </a>
      {/* ── WhatsApp ── */}
      <a
              href="https://wa.me/919814556375"
              target="_blank"
              rel="noopener noreferrer"
              className=" xl:flex items-center gap-3 bg-green-500 px-2 py-2 rounded-full border border-green-100 hover:bg-green-100 transition-all group"
            >
              <div className="relative flex">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 "></span>
                 <FaWhatsapp className="relative text-white text-4xl" />
              </div>
             
            </a>

    </div>
  );
}