"use client";
import { FaWhatsapp } from "react-icons/fa";
export default function Social() {
  return (
    <>
      
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">

        {/* Call Now Island */}
        <a
          href="tel:+919801455637"
          className="call-island flex items-center gap-2.5   shadow-lg shadow-red-200 hover:scale-105 transition-transform duration-200"
        >
            <img src="https://www.avonexpresspackersandmovers.co.in/images/mobile-number.gif" />
         
        </a>

        {/* WhatsApp Island */}
       <a
  href="https://wa.me/919814556375"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 p-2 rounded-full 
             bg-[#25D366] hover:bg-[#20bd5a] 
             shadow-lg shadow-green-200 
             hover:scale-105 transition-all duration-300"
>
  {/* WhatsApp Icon */}
  <FaWhatsapp className="text-white text-5xl" />

 
</a>

      </div>
    </>
  );
}