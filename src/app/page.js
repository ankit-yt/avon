
import About from "@/components/sections/About";
import Award from "@/components/sections/Award";
import Charges from "@/components/sections/Charges";
import City from "@/components/sections/City";
import CompanyClints from "@/components/sections/CompanyClints";
import CostCalculator from "@/components/sections/costCalculator/CostCalculator";
import Enquiry from "@/components/sections/enquiry/Enquiry";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import HowItWorks from "@/components/sections/How it work/HowItWorks";
import MainPhoto from "@/components/sections/MainPhoto";
import Map from "@/components/sections/Map";
import Media from "@/components/sections/Media";
import OurFacilities from "@/components/sections/OurFacilities";
import Selection1 from "@/components/sections/Selection1";
import Service from "@/components/sections/Service";
import Social from "@/components/sections/Social";
import Versus from "@/components/sections/Versus";
import Videos from "@/components/sections/Videos";


export default function Home() {
  return (
    <>
      <Hero />
      <MainPhoto/>
      <About/>
      <Award/>
      <Media/>
      <Versus/>
      <City/>
      <HowItWorks/>
      <Service/>
      <OurFacilities/>
      <Highlights/>
      <Selection1/>
      <Gallery/>
      <Videos/>
      <Charges/>
      <Faq/>
      <CostCalculator/>
      <Enquiry/>
      <Map/>
      <CompanyClints/>
      <Footer/>
      <Social/>
    </>
  );
}
