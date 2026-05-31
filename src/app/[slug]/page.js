// app/[slug]/page.tsx

import { cities, states } from "@/lib/cities";
import { notFound } from "next/navigation";

// ── all your imports ──
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
import MainContent from "@/components/MainContent";
import Videos from "@/components/sections/Videos/Video";
import StateContent from "@/components/slug/StateContent";
import VisionMission from "@/components/sections/VisionMission";
import Why from "@/components/sections/Why";
import SwachhBharat from "@/components/sections/SwachhBharat";
import Covid19 from "@/components/sections/Covid19";
import Blog from "@/components/sections/Blog";
import FeedBack from "@/components/sections/FeedBack";
import CityHero from "@/components/CityHero";

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function formatCityName(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseSlug(slug) {
  if (slug.startsWith("iba-approved-packers-and-movers-in-")) {
    const city = slug.replace("iba-approved-packers-and-movers-in-", "");
    if (!cities.includes(city)) return null;
    return { type: "iba", service: "IBA Packers and Movers", city };
  }

  if (slug.startsWith("packers-and-movers-in-")) {
    const city = slug.replace("packers-and-movers-in-", "");
    if (!cities.includes(city)) return null;
    return { type: "city", service: "Packers and Movers", city };
  }

  if (states.includes(slug)) {
    return { type: "state", state: slug };
  }

  return null;
}

// ─────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = [];
  const topCities = cities.slice(0, 250);

  topCities.forEach((city) => {
    slugs.push({ slug: `packers-and-movers-in-${city}` });
    slugs.push({ slug: `iba-approved-packers-and-movers-in-${city}` });
  });

  states.forEach((state) => {
    slugs.push({ slug: state });
  });

  return slugs;
}

export const dynamicParams = true;
export const revalidate = false;

// ─────────────────────────────────────────────
// DYNAMIC METADATA
// ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) return { title: "Page Not Found" };

  // ── STATE PAGE ──
  if (parsed.type === "state") {
    const stateName = formatCityName(parsed.state);
    const url = `https://www.avonexpresspackersandmovers.co.in/${parsed.state}`;

    return {
      title: `Packers and Movers in ${stateName} | Avon Express Packers and Movers | Official Website`,
      description: `Avon Express Packers and Movers provides best and world class packing and moving services across ${stateName}. IBA Approved, trusted and verified.`,
      keywords: [
        `Packers and Movers in ${stateName}`,
        `IBA Approved Packers and Movers in ${stateName}`,
        `Best Packers and Movers ${stateName}`,
        "Avon Express Packers and Movers",
      ],
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        url,
        siteName: "Avon Express Packers and Movers",
        title: `Packers and Movers in ${stateName} | Avon Express Packers and Movers`,
        description: `Best packing and moving services across ${stateName}. IBA Approved, trusted and verified.`,
        locale: "en_IN",
        images: [
          {
            url: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
            width: 253,
            height: 257,
            alt: `Packers and Movers in ${stateName}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@avon_express",
        creator: "@avon_express",
        title: `Packers and Movers in ${stateName} | Avon Express`,
        description: `Best packing and moving services across ${stateName}.`,
        images: ["https://www.avonexpresspackersandmovers.co.in/images/og-image.png"],
      },
      robots: { index: true, follow: true },
    };
  }

  // ── IBA CITY PAGE ──
  if (parsed.type === "iba") {
    const cityName = formatCityName(parsed.city);
    const url = `https://www.avonexpresspackersandmovers.co.in/iba-approved-packers-and-movers-in-${parsed.city}`;

    return {
      title: `IBA Approved Packers and Movers in ${cityName} | Avon Express Packers and Movers | Official Website`,
      description: `IBA certified and government approved packers and movers in ${cityName}. Avon Express provides insured, verified and trusted relocation services in ${cityName}.`,
      keywords: [
        `IBA Approved Packers and Movers in ${cityName}`,
        `IBA Packers and Movers ${cityName}`,
        `Avon Express Packers and Movers ${cityName}`,
        "IBA Approved Packers and Movers",
      ],
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        url,
        siteName: "Avon Express Packers and Movers",
        title: `IBA Approved Packers and Movers in ${cityName} | Avon Express`,
        description: `IBA certified packers and movers in ${cityName}. Insured, verified and trusted.`,
        locale: "en_IN",
        images: [
          {
            url: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
            width: 253,
            height: 257,
            alt: `IBA Approved Packers and Movers in ${cityName}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@avon_express",
        creator: "@avon_express",
        title: `IBA Approved Packers and Movers in ${cityName} | Avon Express`,
        description: `IBA certified packers and movers in ${cityName}.`,
        images: ["https://www.avonexpresspackersandmovers.co.in/images/og-image.png"],
      },
      robots: { index: true, follow: true },
    };
  }

  // ── CITY PAGE ──
  const cityName = formatCityName(parsed.city);
  const url = `https://www.avonexpresspackersandmovers.co.in/packers-and-movers-in-${parsed.city}`;

  return {
    title: `Packers and Movers in ${cityName} | Avon Express Packers and Movers | Official Website`,
    description: `Avon Express Packers and Movers in ${cityName} provides best and world class packing and moving services. Household shifting, car transport, bike transport and office shifting in ${cityName}.`,
    keywords: [
      `Packers and Movers in ${cityName}`,
      `Best Packers and Movers in ${cityName}`,
      `Avon Express Packers and Movers ${cityName}`,
      `Household Shifting in ${cityName}`,
      `Car Transport in ${cityName}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Avon Express Packers and Movers",
      title: `Packers and Movers in ${cityName} | Avon Express Packers and Movers`,
      description: `Best packers and movers in ${cityName}. Fast, safe and affordable relocation services.`,
      locale: "en_IN",
      images: [
        {
          url: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
          width: 253,
          height: 257,
          alt: `Packers and Movers in ${cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@avon_express",
      creator: "@avon_express",
      title: `Packers and Movers in ${cityName} | Avon Express`,
      description: `Best packers and movers in ${cityName}. Fast, safe and affordable.`,
      images: ["https://www.avonexpresspackersandmovers.co.in/images/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

// ─────────────────────────────────────────────
// SCHEMA MARKUP COMPONENT
// ─────────────────────────────────────────────
function SchemaMarkup({ parsed, slug }) {

  // ── STATE SCHEMA ──
  if (parsed.type === "state") {
    const stateName = formatCityName(parsed.state);
    const url = `https://www.avonexpresspackersandmovers.co.in/${parsed.state}`;

    const schemas = [
      {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.avonexpresspackersandmovers.co.in" },
          { "@type": "ListItem", position: 2, name: `Packers and Movers in ${stateName}`, item: url },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "MovingCompany",
        name: `Avon Express Packers and Movers - ${stateName}`,
        url,
        description: `Avon Express Packers and Movers provides best packing and moving services across ${stateName}.`,
        telephone: "+9198145-56375",
        email: "avonexpresspackersandmovers@gmail.com",
        image: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
        logo: "https://www.avonexpresspackersandmovers.co.in/images/New_Logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avon House, Transport Area, Sector 26 East",
          addressLocality: "Chandigarh",
          addressRegion: stateName,
          postalCode: "160019",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: "30.7164365", longitude: "76.8160495" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
        sameAs: [
          "https://www.facebook.com/avonexpresspackersandmovers",
          "https://www.twitter.com/avon_express",
          "https://www.instagram.com/avonexpresspackers",
          "https://www.linkedin.com/in/avon-express-packers-and-movers",
          "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Packers and Movers Services in ${stateName}`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Household Goods Shifting in ${stateName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Car Transport in ${stateName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Bike Transport in ${stateName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Office Shifting in ${stateName}` } },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How to find Packers and Movers in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `You can contact Avon Express Packers and Movers for best services in ${stateName}.` } },
          { "@type": "Question", name: `What is the cost of Packers and Movers in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: "You can find out by calling our customer care number +91 981-455-6375." } },
          { "@type": "Question", name: `Are Avon Express Packers and Movers IBA Approved in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: "Yes, Avon Express Packers and Movers are IBA Approved and certified." } },
        ],
      },
    ];

    return (
      <>
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </>
    );
  }

  // ── IBA CITY SCHEMA ──
  if (parsed.type === "iba") {
    const cityName = formatCityName(parsed.city);
    const url = `https://www.avonexpresspackersandmovers.co.in/iba-approved-packers-and-movers-in-${parsed.city}`;

    const schemas = [
      {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.avonexpresspackersandmovers.co.in" },
          { "@type": "ListItem", position: 2, name: "IBA Approved Packers and Movers", item: "https://www.avonexpresspackersandmovers.co.in" },
          { "@type": "ListItem", position: 3, name: `IBA Approved Packers and Movers in ${cityName}`, item: url },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "MovingCompany",
        name: `IBA Approved Packers and Movers in ${cityName} - Avon Express`,
        url,
        description: `IBA certified and government approved packers and movers in ${cityName}. Insured, verified and trusted relocation services.`,
        telephone: "+9198145-56375",
        email: "avonexpresspackersandmovers@gmail.com",
        image: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
        logo: "https://www.avonexpresspackersandmovers.co.in/images/New_Logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avon House, Transport Area, Sector 26 East",
          addressLocality: cityName,
          addressRegion: "Chandigarh",
          postalCode: "160019",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: "30.7164365", longitude: "76.8160495" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
        sameAs: [
          "https://www.facebook.com/avonexpresspackersandmovers",
          "https://www.twitter.com/avon_express",
          "https://www.instagram.com/avonexpresspackers",
          "https://www.linkedin.com/in/avon-express-packers-and-movers",
          "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `IBA Approved Services in ${cityName}`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `IBA Approved Household Shifting in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `IBA Approved Car Transport in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `IBA Approved Bike Transport in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `IBA Approved Office Shifting in ${cityName}` } },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `What is IBA Approved Packers and Movers in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `IBA Approved Packers and Movers in ${cityName} are certified by the Indian Banks' Association (IBA). Avon Express is IBA approved.` } },
          { "@type": "Question", name: `Why choose IBA Approved Packers and Movers in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `IBA approved movers in ${cityName} are verified, insured and government certified for safe relocation.` } },
          { "@type": "Question", name: `How to book IBA Approved Packers and Movers in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Call us at +91 981-455-6375 or WhatsApp to book IBA approved services in ${cityName}.` } },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `IBA Approved Packers and Movers in ${cityName}`,
        description: `IBA certified relocation services in ${cityName} by Avon Express Packers and Movers.`,
        provider: {
          "@type": "Organization",
          name: "Avon Express Packers and Movers",
          url: "https://www.avonexpresspackersandmovers.co.in",
        },
        areaServed: { "@type": "City", name: cityName },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
      },
    ];

    return (
      <>
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </>
    );
  }

  // ── CITY PAGE SCHEMA ──
  const cityName = formatCityName(parsed.city);
  const url = `https://www.avonexpresspackersandmovers.co.in/packers-and-movers-in-${parsed.city}`;

  const schemas = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.avonexpresspackersandmovers.co.in" },

        { "@type": "ListItem", position: 2, name: `Packers and Movers in dfgfd`, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      additionalType: "MovingCompany",
      name: `Packers and Movers in ${cityName} - Avon Express`,
      url,
      description: `Avon Express Packers and Movers in ${cityName} provides best packing and moving services. Household shifting, car transport, bike transport and office shifting.`,
      telephone: "+9198145-56375",
      email: "avonexpresspackersandmovers@gmail.com",
      image: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
      logo: "https://www.avonexpresspackersandmovers.co.in/images/New_Logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avon House, Transport Area, Sector 26 East",
        addressLocality: cityName,
        addressRegion: "Chandigarh",
        postalCode: "160019",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "30.7164365", longitude: "76.8160495" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
      sameAs: [
        "https://www.facebook.com/avonexpresspackersandmovers",
        "https://www.twitter.com/avon_express",
        "https://www.instagram.com/avonexpresspackers",
        "https://www.linkedin.com/in/avon-express-packers-and-movers",
        "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Packers and Movers Services in ${cityName}`,
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Household Goods Shifting in ${cityName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Car Transport Services in ${cityName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Bike Transport Services in ${cityName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Activa Transport Services in ${cityName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Office Shifting Services in ${cityName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Truck and Tempo Hire in ${cityName}` } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: `How to find best Packers and Movers in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Avon Express is the best packers and movers in ${cityName}. Call +91 981-455-6375 for a free quote.` } },
        { "@type": "Question", name: `What is the cost of Packers and Movers in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `The cost depends on distance and items. Call our customer care at +91 981-455-6375 for exact charges in ${cityName}.` } },
        { "@type": "Question", name: `Are Avon Express Packers and Movers IBA Approved in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Yes, Avon Express Packers and Movers are IBA Approved and government certified for services in ${cityName}.` } },
        { "@type": "Question", name: `What services do Packers and Movers offer in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `We offer household shifting, car transport, bike transport, activa transport, office shifting and truck/tempo hire in ${cityName}.` } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Packers and Movers in ${cityName}`,
      description: `Best packing and moving services in ${cityName} by Avon Express. Fast, safe and affordable relocation.`,
      provider: {
        "@type": "Organization",
        name: "Avon Express Packers and Movers",
        url: "https://www.avonexpresspackersandmovers.co.in",
      },
      areaServed: { "@type": "City", name: cityName },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Packers and Movers in ${cityName} | Avon Express`,
      url,
      description: `Best packers and movers in ${cityName}.`,
      publisher: {
        "@type": "Organization",
        name: "Avon Express Packers and Movers",
        url: "https://www.avonexpresspackersandmovers.co.in",
      },
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default async function CityPage({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) notFound();

  if (parsed.type === "state") {
    return (
      <>
        <SchemaMarkup parsed={parsed} slug={slug} />
        <Hero />
        <MainPhoto />
        <StateContent state={parsed.state} />
        <About />
        <VisionMission />
        <Why />
        <SwachhBharat />
        <Award />
        <Media />
        <Versus />
        <City />
        <HowItWorks />
        <Service />
        <OurFacilities />
        <Gallery />
        <Videos />
        <Covid19 />
        <Blog />
        <Faq />
        <Charges />
        <CostCalculator />
        <FeedBack />
        <Enquiry />
        <Map />
        <CompanyClints />
        <Footer />
        <Social />
      </>
    );
  }

  return (
    <>
      <SchemaMarkup parsed={parsed} slug={slug} />
      <Hero />
      <MainPhoto />
      <CityHero city={parsed.city} service={parsed.service} />
      <MainContent slug={slug} city={parsed.city} service={parsed.service} />
      <About />
      <VisionMission />
      <Why />
      <SwachhBharat />
      <Award />
      <Media />
      <Versus />
      <City />
      <HowItWorks />
      <Service />
      <OurFacilities />
      <Gallery />
      <Videos />
      <Covid19 />
      <Blog />
      <Faq />
      <Charges />
      <CostCalculator />
      <FeedBack />
      <Enquiry />
      <Map />
      <CompanyClints />
      <Footer />
      <Social />
    </>
  );
}