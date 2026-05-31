// app/transport/[slug]/page.js

import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import RouteDetailContent from "@/components/transport/RouteDetailContent";
import CityHubContent from "@/components/transport/CityHubContent";
import { transport } from "@/lib/transportData";
import CityHero from "@/components/CityHero";

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
export function formatName(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseTransportSlug(slug) {
  const toIndex = slug.indexOf("-to-");
  if (toIndex !== -1) {
    const from = slug.slice(0, toIndex);
    const to = slug.slice(toIndex + 4);
    if (transport.includes(slug)) {
      return { type: "route", from, to, slug };
    }
    return null;
  }
  if (transport.includes(slug)) {
    return { type: "city", city: slug };
  }
  return null;
}

// ─────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────
export async function generateStaticParams() {
  return transport.map((slug) => ({ slug }));
}

export const dynamicParams = true;
export const revalidate = false;

// ─────────────────────────────────────────────
// DYNAMIC METADATA
// ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseTransportSlug(slug);

  if (!parsed) return { title: "Page Not Found" };

  // ── CITY HUB PAGE ──
  if (parsed.type === "city") {
    const cityName = formatName(parsed.city);
    const url = `https://www.avonexpresspackersandmovers.co.in/transport/${parsed.city}`;

    return {
      title: `Transport Services from ${cityName} | Avon Express Packers and Movers | Official Website`,
      description: `Explore all transport routes from ${cityName}. Safe, reliable and affordable goods transport, car transport, bike transport and household shifting across India by Avon Express.`,
      keywords: [
        `Transport from ${cityName}`,
        `Goods Transport from ${cityName}`,
        `Packers and Movers from ${cityName}`,
        `Car Transport from ${cityName}`,
        `Avon Express Packers and Movers ${cityName}`,
      ],
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        url,
        siteName: "Avon Express Packers and Movers",
        title: `Transport Services from ${cityName} | Avon Express Packers and Movers`,
        description: `Safe, reliable and affordable transport from ${cityName} across India.`,
        locale: "en_IN",
        images: [
          {
            url: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
            width: 253,
            height: 257,
            alt: `Transport from ${cityName}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@avon_express",
        creator: "@avon_express",
        title: `Transport Services from ${cityName} | Avon Express`,
        description: `Safe and affordable transport from ${cityName} across India.`,
        images: ["https://www.avonexpresspackersandmovers.co.in/images/og-image.png"],
      },
      robots: { index: true, follow: true },
    };
  }

  // ── ROUTE PAGE ──
  const fromName = formatName(parsed.from);
  const toName = formatName(parsed.to);
  const url = `https://www.avonexpresspackersandmovers.co.in/transport/${parsed.slug}`;

  return {
    title: `Transport from ${fromName} to ${toName} | Avon Express Packers and Movers | Official Website`,
    description: `Book reliable transport services from ${fromName} to ${toName}. Best rates, safe delivery, door-to-door household shifting, car and bike transport by Avon Express Packers and Movers.`,
    keywords: [
      `Transport from ${fromName} to ${toName}`,
      `Packers and Movers from ${fromName} to ${toName}`,
      `Car Transport from ${fromName} to ${toName}`,
      `Bike Transport from ${fromName} to ${toName}`,
      `Avon Express Packers and Movers`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Avon Express Packers and Movers",
      title: `Transport from ${fromName} to ${toName} | Avon Express Packers and Movers`,
      description: `Best transport from ${fromName} to ${toName}. Safe, fast and affordable door-to-door service.`,
      locale: "en_IN",
      images: [
        {
          url: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
          width: 253,
          height: 257,
          alt: `Transport from ${fromName} to ${toName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@avon_express",
      creator: "@avon_express",
      title: `Transport from ${fromName} to ${toName} | Avon Express`,
      description: `Best transport from ${fromName} to ${toName}. Safe and affordable.`,
      images: ["https://www.avonexpresspackersandmovers.co.in/images/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

// ─────────────────────────────────────────────
// SCHEMA MARKUP COMPONENT
// ─────────────────────────────────────────────
function SchemaMarkup({ parsed }) {

  // ── CITY HUB SCHEMA ──
  if (parsed.type === "city") {
    const cityName = formatName(parsed.city);
    const url = `https://www.avonexpresspackersandmovers.co.in/transport/${parsed.city}`;

    const schemas = [
      {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.avonexpresspackersandmovers.co.in" },
          { "@type": "ListItem", position: 2, name: `Transport Services from ${cityName} | Avon Express Packers and Movers | Official Website`, item: url },
          { "@type": "ListItem", position: 3, name: `Transport from ${cityName}`, item: url },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "MovingCompany",
        name: `Avon Express Packers and Movers - Transport from ${cityName}`,
        url,
        description: `Safe, reliable and affordable transport from ${cityName} across India by Avon Express Packers and Movers.`,
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
          name: `Transport Services from ${cityName}`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Household Goods Transport from ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Car Transport from ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Bike Transport from ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Office Shifting from ${cityName}` } },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How to book transport from ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Call Avon Express at +91 981-455-6375 or WhatsApp to book transport services from ${cityName} across India.` } },
          { "@type": "Question", name: `What is the cost of transport from ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `The cost depends on distance, route and items. Call +91 981-455-6375 for an exact quote from ${cityName}.` } },
          { "@type": "Question", name: `Is Avon Express IBA Approved for transport from ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Yes, Avon Express Packers and Movers are IBA Approved and certified for transport services from ${cityName}.` } },
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

  // ── ROUTE SCHEMA ──
  const fromName = formatName(parsed.from);
  const toName = formatName(parsed.to);
  const url = `https://www.avonexpresspackersandmovers.co.in/transport/${parsed.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.avonexpresspackersandmovers.co.in" },
       { "@type": "ListItem", position: 2, name: `Transport Services from ${cityName} | Avon Express Packers and Movers | Official Website`, item: url },
        { "@type": "ListItem", position: 3, name: `Transport from ${fromName}`, item: `https://www.avonexpresspackersandmovers.co.in/transport/${parsed.from}` },
        { "@type": "ListItem", position: 4, name: `Transport from ${fromName} to ${toName} | Avon Express Packers and Movers | Official Website`, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      additionalType: "MovingCompany",
      name: `Transport from ${fromName} to ${toName} - Avon Express`,
      url,
      description: `Book reliable transport from ${fromName} to ${toName}. Household shifting, car transport, bike transport and office shifting by Avon Express Packers and Movers.`,
      telephone: "+9198145-56375",
      email: "avonexpresspackersandmovers@gmail.com",
      image: "https://www.avonexpresspackersandmovers.co.in/images/og-image.png",
      logo: "https://www.avonexpresspackersandmovers.co.in/images/New_Logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avon House, Transport Area, Sector 26 East",
        addressLocality: fromName,
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
        name: `Transport Services from ${fromName} to ${toName}`,
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Household Goods Transport from ${fromName} to ${toName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Car Transport from ${fromName} to ${toName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Bike Transport from ${fromName} to ${toName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Office Shifting from ${fromName} to ${toName}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: `Truck and Tempo Hire from ${fromName} to ${toName}` } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: `How to book transport from ${fromName} to ${toName}?`, acceptedAnswer: { "@type": "Answer", text: `Call Avon Express at +91 981-455-6375 to book transport from ${fromName} to ${toName}. Door-to-door service available.` } },
        { "@type": "Question", name: `What is the cost of transport from ${fromName} to ${toName}?`, acceptedAnswer: { "@type": "Answer", text: `The cost depends on distance and items. Call +91 981-455-6375 for an exact quote for the ${fromName} to ${toName} route.` } },
        { "@type": "Question", name: `How many days does transport from ${fromName} to ${toName} take?`, acceptedAnswer: { "@type": "Answer", text: `Transit time from ${fromName} to ${toName} depends on the distance and route. Contact us at +91 981-455-6375 for the exact delivery timeline.` } },
        { "@type": "Question", name: `Is Avon Express IBA Approved for transport from ${fromName} to ${toName}?`, acceptedAnswer: { "@type": "Answer", text: `Yes, Avon Express Packers and Movers are IBA Approved for all transport routes including ${fromName} to ${toName}.` } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Transport from ${fromName} to ${toName}`,
      description: `Best and affordable transport from ${fromName} to ${toName} by Avon Express Packers and Movers. Safe, fast and door-to-door service.`,
      provider: {
        "@type": "Organization",
        name: "Avon Express Packers and Movers",
        url: "https://www.avonexpresspackersandmovers.co.in",
      },
      areaServed: [
        { "@type": "City", name: fromName },
        { "@type": "City", name: toName },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "32205", bestRating: "5" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Transport from ${fromName} to ${toName} | Avon Express`,
      url,
      description: `Best transport from ${fromName} to ${toName} by Avon Express Packers and Movers.`,
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
export default async function TransportPage({ params }) {
  const { slug } = await params;
  const parsed = parseTransportSlug(slug);

  if (!parsed) notFound();

  if (parsed.type === "city") {
    return (
      <>
        <SchemaMarkup parsed={parsed} />
        <Hero />
        <CityHero city={parsed.city} service="Packers and Movers" />
        <CityHubContent city={parsed.city} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <SchemaMarkup parsed={parsed} />
      <Hero />
      <CityHero city={parsed.from} to={parsed.to} service="Transport" />
      <RouteDetailContent from={parsed.from} to={parsed.to} />
      <Footer />
    </>
  );
}