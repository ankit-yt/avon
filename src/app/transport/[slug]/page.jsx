import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Social from "@/components/sections/Social";
import Faq from "@/components/sections/Faq";
import Enquiry from "@/components/sections/enquiry/Enquiry";
import Map from "@/components/sections/Map";
import RouteDetailContent from "@/components/transport/RouteDetailContent";
import CityHubContent from "@/components/transport/CityHubContent";
import { transport } from "@/lib/transportData";
import CityHero from "@/components/CityHero";



export function formatName(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseTransportSlug(slug) {
  // Pattern: "city-to-city" — e.g. "chandigarh-to-agra"
  const toIndex = slug.indexOf("-to-");
  if (toIndex !== -1) {
    const from = slug.slice(0, toIndex);
    const to = slug.slice(toIndex + 4);
    if (transport.includes(slug)) {
      return { type: "route", from, to, slug };
    }
    return null;
  }

  // Pattern: single city hub — e.g. "chandigarh"
  if (transport.includes(slug)) {
    return { type: "city", city: slug };
  }

  return null;
}

// ── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return transport.map((slug) => ({ slug }));
}

export const dynamicParams = true;
export const revalidate = false;

// ── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseTransportSlug(slug);

  if (!parsed) return { title: "Page Not Found" };

  if (parsed.type === "city") {
    const city = formatName(parsed.city);
    return {
      title: `Transport Services from ${city} | Avon Express Packers and Movers`,
      description: `Explore all transport routes from ${city}. Safe, reliable and affordable goods transport across India.`,
    };
  }

  const from = formatName(parsed.from);
  const to = formatName(parsed.to);
  return {
    title: `Transport from ${from} to ${to} | Avon Express Packers and Movers`,
    description: `Book reliable transport services from ${from} to ${to}. Best rates, safe delivery, door-to-door service.`,
  };
}


// ── Page ──────────────────────────────────────────────────────────────────────
export default async function TransportPage({ params }) {
  const { slug } = await params;
  const parsed = parseTransportSlug(slug);

  if (!parsed) notFound();

  if (parsed.type === "city") {
    return (
      <>
        <Hero />
        <CityHero city={parsed.city} service="Packers and Movers" />
        <CityHubContent city={parsed.city} />
        <Footer />
      </>
    );
  }

  // type === "route"
  return (
    <>
      <Hero />
      <CityHero city={parsed.from} to={parsed.to} service="Transport" />
      <RouteDetailContent from={parsed.from} to={parsed.to} />
     
      <Footer />
    </>
  );
}