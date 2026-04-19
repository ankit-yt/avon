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
import { cities, states } from "@/lib/cities";
import MainContent from "@/components/MainContent";
import Videos from "@/components/sections/Videos/Video";
import { notFound } from "next/navigation";
import StateContent from "@/components/slug/StateContent";
export async function generateStaticParams() {
 

  const slugs = [];
 const topCities = cities.slice(0, 250);

  topCities.forEach(city => {
    slugs.push({ slug: `packers-and-movers-in-${city}` });
    slugs.push({ slug: `iba-approved-packers-and-movers-in-${city}` });
  });

    states.forEach(state => {
    slugs.push({ slug: state });
  });

  return slugs;
}
export const dynamicParams = true;
export const revalidate = false;
function formatCityName(slug) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseSlug(slug) {
  // ✅ IBA
  if (slug.startsWith("iba-approved-packers-and-movers-in-")) {
    const city = slug.replace("iba-approved-packers-and-movers-in-", "");

    if (!cities.includes(city)) return null;

    return {
      type: "iba",
      service: "IBA Packers and Movers",
      city
    };
  }

  if (slug.startsWith("packers-and-movers-in-")) {
    const city = slug.replace("packers-and-movers-in-", "");

    if (!cities.includes(city)) return null;

    return {
      service: "Packers and Movers",
      city
    };

    
  }

  if (states.includes(slug)) {
    return { type: "state", state: slug };
  }

  return null;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const parsed = parseSlug(resolvedParams.slug);

  if (!parsed) {
    return {
      title: "Page Not Found"
    };
  }

  if (parsed.type === "state") {
    const stateName = formatCityName(parsed.state);
    return {
      title: `Welcome To ${stateName} | Avon Express Packers and Movers | Official Website`,
      description: `Find the best packers and movers services across ${stateName}.`,
    };
  }
    const cityName = formatCityName(parsed.city);
    if (parsed.type === "iba") {
    return {
      title: `IBA Approved Packers and Movers in ${cityName} | Avon Express Packers and Movers | Official Website`,
      description: `IBA certified and government approved packers & movers in ${cityName}. Insured, verified and trusted relocation services.`,
    };
  }


  return {
    title: `Packers and Movers in ${cityName} | Avon Express Packers and Movers | Official Website`,
    description: `Best packers and movers services in ${cityName}. Fast, safe and affordable.`,
  };
}


export default async function CityPage({ params }) {
  const { slug } = await params;
const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

    if (parsed.type === "state") {
    return (
      <>
        <Hero />
        <MainPhoto />
        <StateContent state={parsed.state} />   {/* ← new component, see below */}
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

  // existing city pages — unchanged
  return (
    <>
      <Hero />
      <MainPhoto />
      <MainContent slug={slug} city={parsed.city} service={parsed.service} />
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