import { RevealInit } from "@/components/RevealInit";
import About from "@/components/sections/About";
import City from "@/components/sections/City";
import CompanyClints from "@/components/sections/CompanyClints";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Selection1 from "@/components/sections/Selection1";
import Service from "@/components/sections/Service";
import Social from "@/components/sections/Social";


export default function Home() {
  return (
    <>
      <RevealInit />
      <Hero />
      <Selection1/>
      <City/>
      <Gallery/>
      <Service/>
      <CompanyClints/>
      <Footer/>
      <Social/>
      {/* <About/> */}
      {/* <TickerSection /> */}
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <WhyUsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ClientsSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </>
  );
}
