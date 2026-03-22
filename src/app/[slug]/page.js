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
import HowItWorks from "@/components/sections/How it work/HowItWorks";
import MainPhoto from "@/components/sections/MainPhoto";
import Map from "@/components/sections/Map";
import Media from "@/components/sections/Media";
import OurFacilities from "@/components/sections/OurFacilities";
import Service from "@/components/sections/Service";
import Social from "@/components/sections/Social";
import Versus from "@/components/sections/Versus";
import Videos from "@/components/sections/Videos";

function formatCityName(slug) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    console.log(params)
  const cityName = formatCityName(resolvedParams.slug);

  return {
    title: `Packers and Movers in ${cityName} | Avon Express Packers and Movers`,
    description: `Best packers and movers services in ${cityName}. Fast, safe and affordable.`,
  };
}

// 👇 YOUR EXTRA COMPONENT
import MainContent from "@/components/MainContent";

export default function CityPage({ params }) {
  const { slug } = params;

  return (
    <>
      <Hero />
      <MainPhoto />
       <MainContent slug={slug} />
      <About />
      <Award />

      <Media />
      <Versus />
      <City />
      <HowItWorks />
      <Service />
      <OurFacilities />
      <Gallery />
      <Videos />
      <Charges />
      <Faq />
      <CostCalculator />
      <Enquiry />
      <Map />
      <CompanyClints />
      <Footer />
      <Social />
    </>
  );
}