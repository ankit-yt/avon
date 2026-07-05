import Script from "next/script"
import "./globals.css";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import { Poppins } from "next/font/google";
import "@/lib/styles/truck.css"
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";

export const viewport= {
  themeColor: "#f97316",
};

export const metadata = {
  title: {
    default: 'Avon Express Packers and Movers | Official Website',
    template: '%s',
  },
  description: 'Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.',
  keywords: ['Avon Express Packers and Movers', 'IBA Approved Packers and Movers'],
  authors: [{ name: 'Avon Express Packers and Movers | Official Website', url: 'https://www.avonexpresspackersandmovers.co.in' }],
  generator: 'https://www.avonexpresspackersandmovers.co.in',
  applicationName: 'Avon Express Packers and Movers | Official Website',
  referrer: 'no-referrer-when-downgrade',
  category: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    languages: {
      'en-IN': 'https://www.avonexpresspackersandmovers.co.in',
      'x-default': 'https://www.avonexpresspackersandmovers.co.in',
    },
    types: {
      'application/sitemap+xml': 'https://www.avonexpresspackersandmovers.co.in/sitemap.xml',
      'application/rss+xml': 'https://www.avonexpresspackersandmovers.co.in/rss.xml',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.avonexpresspackersandmovers.co.in',
    siteName: 'Avon Express Packers and Movers',
    title: 'Avon Express Packers and Movers | Official Website',
    description: 'Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.',
    locale: 'en_US',
    alternateLocale: ['en_IN'],
    images: [
      {
        url: 'https://www.avonexpresspackersandmovers.co.in/images/og-image.webp',
        width: 253,
        height: 257,
        alt: 'Avon Express Packers and Movers | Official Website',
        type: 'image/png',
      },
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=GlF9NnzYVFg',
        width: 1080,
        height: 608,
        type: 'video/mp4',
      },
    ],
    emails: ['avonexpresspackersandmovers@gmail.com'],
    phoneNumbers: ['+919814556375'],
    streetAddress: 'Avon House, Transport Area, Sector 26 East',
    locality: 'Chandigarh',
    region: 'Chandigarh',
    postalCode: '160019',
    countryName: 'India',
  },
  twitter: {
    card: 'summary',
    site: '@avon_express',
    creator: '@avon_express',
    title: 'Avon Express Packers and Movers | Official Website',
    description: 'Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.',
    images: {
      url: 'https://www.avonexpresspackersandmovers.co.in/images/og-image.webp',
      alt: 'Avon Express Packers and Movers | Official Website',
      width: 253,
      height: 257,
    },
  },
  verification: {
    google: 'Y8_pOYBGQbwFKYvGDJCAoZAtZjgcO1v7T-cbKPMKSCY',
    yandex: 'a1c12b0f1fe599a1',
    other: {
      'msvalidate.01': '34D42DC507A3EA35DFD44513A7036399',
      'facebook-site-verification': 'rqca9yapj5ly2zgtq454tfersk17l7',
      'norton-safeweb-site-verification': 'o9-i65fm20qu69ucvbdtlld1f47nxi430yefnlt97pubuxrhfsx5vz9be0lf5o52fe-ptxmde4s8pbnytu-08fvol1dy6n4i25cuptauo3534hph3tgsbi90pgabsrm5',
      'ahrefs-site-verification': 'bade480574db0b58bd97c38352bfd2602e57168cda01fa7ad857971932e65288',
      'dmca-site-verification': 'cC9yUEl5bE9DOFNQRCt0K1c2eWxaZDBEQjJHRk9yM0dyQjZDMzlVeEx1YS8xY1JPWG5wM2ZZaUZUYVZ2UkhKbw2',
      'naver-site-verification': 'naverf54dc81e9945ecd7cea53bac638006d3',
      'p:domain_verify': 'd66aba543cdf1a518432185e86b5a24d',
      'zoho-verification': 'zb62114286',
      'wot-verification': '40b3ce3e3c455fcc6b1a',
      'copyrighted-site-verification': '8bc0975ed00ff3d9',
      'dailymotion-domain-verification': 'dmzm8z1yacmq7n5uu',
      'W3Techs-verification': 'yD2nFxssl909NVHA',
      'rankchecker': 'y6gJmYQF4QuxFpYp',
      'statvooVerification': '442dd31729ffff1c7d65fd847e6732d8',
      'siwecostoken': '277LKaAEAub02B197M0e4UqHWnyBjxw0M7DmOcbQDD9IOqu0nI6kFXtEP303IG29',
      'flattr:id': 'k5261x',
    },
  },
  icons: {
    icon: [{ url: '/images/favicon.webp', sizes: '32x32', type: 'image/png' }],
    shortcut: '/images/favicon.webp',
    apple: '/apple-icon.webp',
  },
  appleWebApp: {
    capable: true,
    title: 'Avon Express Packers Movers',
    statusBarStyle: 'default',
  },
  manifest: '/manifest.json',
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {


  return (

    <html lang="en" suppressHydrationWarning>
      <head>
          {/* ── Primary Meta Tags (not supported by Next.js Metadata API) ── */}
        <meta name="abstract" content="Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services" />
        <meta name="subject" content="Providing Best and World Class Packing and Moving Services On This Website" />
        <meta name="summary" content="Avon Express Packers and Movers | Official Website" />
        <meta name="page-topic" content="Avon Express Packers and Movers | Official Website" />
        <meta name="page-url" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta name="site-name" content="Avon Express Packers and Movers | Official Website" />
        <meta name="site-url" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta name="news_keywords" content="Avon Express Packers and Movers, IBA Approved Packers and Movers" />
        <meta name="headlines" content="Packers and Movers Services in India" />
        <meta name="search-engines" content="all" />
        <meta name="allow-search" content="yes" />
        <meta name="audience" content="all" />
        <meta name="classification" content="Business" />
        <meta name="industry" content="Packers and Movers" />
        <meta name="designer" content="Avon Express Packers and Movers" />
        <meta name="developer" content="Avon Express Packers and Movers" />
        <meta name="expires" content="never" />
        <meta name="cache-control" content="no-cache" />
        <meta name="pragma" content="no-cache" />
        <meta name="copyright" content="Avon Express Packers and Movers" />
        <meta name="rights" content="Avon Express Packers and Movers" />
        <meta name="thumbnail" content="https://www.avonexpresspackersandmovers.co.in/images/og-image.webp" />
        <meta name="doc-type" content="public" />
        <meta name="rating" content="32205" />
        <meta name="rating" content="safe for kids" />
        <meta name="revisit-after" content="daily" />
        <meta name="webcrawler" content="all" />
        <meta name="reply-to" content="avonexpresspackersandmovers@gmail.com" />
        <meta name="revised" content="Saturday, June 7th, 2014, 12:15 PM" />
        <meta name="content-language" content="EN-IN" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <meta name="Identifier-URL" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* ── Per-Bot Robot Tags ── */}
        <meta name="yandexbot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yahooSeeker" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />

        {/* ── Google Adsense & Play ── */}
        <meta name="google-adsense-account" content="ca-pub-8220095171979927" />
        <meta name="google-play-app" content="app-id=com.company.avonexpresspackersandmovers.app" />

        {/* ── Facebook ── */}
        <meta property="fb:app_id" content="1340173969844708" />
        <meta property="fb:pages" content="103280044532106" />

        {/* ── Twitter Extra Tags ── */}
        <meta name="twitter:keywords" content="Avon Express Packers and Movers, IBA Approved Packers and Movers" />
        <meta name="twitter:url" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="253" />
        <meta name="twitter:image:height" content="257" />

        {/* ── Open Graph Extra Tags ── */}
        <meta property="og:keywords" content="Avon Express Packers and Movers, IBA Approved Packers and Movers" />
        <meta property="og:image:url" content="https://www.avonexpresspackersandmovers.co.in/images/og-image.webp" />
        <meta property="og:image:type" content="PNG" />
        <meta property="og:image:width" content="253" />
        <meta property="og:image:height" content="257" />
        <meta property="og:video:secure_url" content="https://www.youtube.com/watch?v=GlF9NnzYVFg" />
        <meta property="og:video:type" content="MP4" />
        <meta property="og:video:width" content="1080" />
        <meta property="og:video:height" content="608" />
        <meta property="og:video:duration" content="01:14" />
        <meta property="og:see_also" content="https://www.ibaapprovedpackersandmovers.in" />
        <meta property="og:see_also" content="https://www.facebook.com/avonexpresspackersandmovers" />
        <meta property="og:see_also" content="https://www.dailymotion.com/ibaapprovedpackersandmovers" />
        <meta property="og:see_also" content="https://www.twitter.com/avon_express" />
        <meta property="og:see_also" content="https://www.instagram.com/avonexpresspackers" />
        <meta property="og:see_also" content="https://www.linkedin.com/in/avon-express-packers-and-movers" />
        <meta property="og:see_also" content="https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g" />
        <meta property="al:web:url" content="https://www.avonexpresspackersandmovers.co.in" />

        {/* ── Article Tags ── */}
        <meta property="article:author" content="Avon Express Packers and Movers | Official Website" />
        <meta property="article:publisher" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta property="article:section" content="Avon Express Packers and Movers | Official Website" />
        <meta property="article:tag" content="Avon Express Packers and Movers | Official Website" />

        {/* ── Business Contact Data ── */}
        <meta property="business:contact_data:business_name" content="Avon Express Packers and Movers" />
        <meta property="business:contact_data:street_address" content="Avon House, Transport Area, Sector 26 East" />
        <meta property="business:contact_data:locality" content="Chandigarh" />
        <meta property="business:contact_data:region" content="Chandigarh" />
        <meta property="business:contact_data:postal_code" content="160019" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:phone_number" content="+9198145-56375" />
        <meta property="business:contact_data:email" content="avonexpresspackersandmovers@gmail.com" />
        <meta property="business:contact_data:latitude" content="30.716777" />
        <meta property="business:contact_data:longitude" content="76.815755" />
        <meta property="business:contact_data:geo.region" content="India-Chandigarh" />
        <meta property="business:contact_data:geo.placename" content="Chandigarh" />
        <meta property="business:contact_data:geo.position" content="30.716777,76.815755" />
        <meta property="business:contact_data:ICBM" content="30.716777,76.815755" />
        <meta property="place:location:latitude" content="30.716777" />
        <meta property="place:location:longitude" content="76.815755" />

        {/* ── Dublin Core ── */}
        <meta name="dcterms.title" content="Avon Express Packers and Movers | Official Website" />
        <meta name="dcterms.description" content="Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services." />
        <meta name="dcterms.creator" content="Avon Express Packers and Movers" />
        <meta name="dcterms.keywords" content="Avon Express Packers and Movers, IBA Approved Packers and Movers" />
        <meta name="dcterms.source" content="https://www.avonexpresspackersandmovers.co.in" />
        <meta name="dcterms.coverage" content="Worldwide" />
        <meta name="dcterms.rights" content="Avon Express Packers and Movers" />

        {/* ── GPS / Geo Tags ── */}
        <meta name="Business-Name" content="Avon Express Packers and Movers" />
        <meta name="country" content="India" />
        <meta name="state" content="Chandigarh" />
        <meta name="city" content="Chandigarh" />
        <meta name="postal-code" content="160019" />
        <meta name="phone-number" content="+919814556375" />
        <meta name="email" content="avonexpresspackersandmovers@gmail.com" />
        <meta name="street-address" content="Avon House, Transport Area, Sector 26 East" />
        <meta name="Google-Place-ID" content="ChIJ0aIjqNDsDzkRMxKeGlzCfgA" />
        <meta name="latitude" content="30.716777" />
        <meta name="longitude" content="76.815755" />
        <meta name="geo.region" content="India-Chandigarh" />
        <meta name="geo.placename" content="Chandigarh" />
        <meta name="geo.position" content="30.716777,76.815755" />
        <meta name="ICBM" content="30.716777,76.815755" />

        {/* ── Canonical / Link Tags ── */}
        <link rel="shortlink" href="https://www.avonexpresspackersandmovers.co.in" />
        <link rel="GoogleBusinessProfile" href="https://goo.gl/maps/SjG9QUfT6J1qD8L69" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/sitemap.xml" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/multiplefirstsitemap.xml" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/blog/sitemap.xml" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/blog/sitemap_index.xml" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/blog/page-sitemap.xml" />
        <link rel="alternate" type="application/sitemap+xml" title="sitemap" href="https://www.avonexpresspackersandmovers.co.in/chandigarh/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="Avon Express Packers and Movers | Official Website" href="rss.xml" />
        <link rel="alternate" type="application/ror+xml" title="Avon Express Packers and Movers | Official Website" href="ror.xml" />

        {/* ── JSON-LD Schema ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Avon Express Packers and Movers | Official Website", "item": "https://www.avonexpresspackersandmovers.co.in" },
            { "@type": "ListItem", "position": 2, "name": "Avon Express Packers and Movers | Official Website", "item": "https://www.avonexpresspackersandmovers.co.in" }
          ]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Avon Express Packers and Movers | Official Website",
              "name": "Avon Express Packers and Movers | Official Website",
              "about": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/og-image.webp", "width": "253", "height": "257" },
              "publisher": { "@type": "Organization", "name": "Avon Express Packers and Movers | Official Website", "url": "https://www.avonexpresspackersandmovers.co.in", "sameAs": "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g", "logo": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/og-image.webp", "width": "253", "height": "257" } }
            },
            {
              "@type": "Book",
              "name": "Avon Express Packers and Movers | Official Website",
              "url": "https://www.avonexpresspackersandmovers.co.in",
              "sameAs": "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/og-image.webp", "width": "253", "height": "257" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "32205", "bestRating": "5" }
            },
            {
              "@type": "LocalBusiness",
              "additionalType": "MovingCompany",
              "name": "Avon Express Packers and Movers",
              "sameAs": "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
              "url": "https://www.avonexpresspackersandmovers.co.in",
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "telephone": "+9198145-56375",
              "contactPoint": { "@type": "ContactPoint", "telephone": "+9198145-56375", "email": "avonexpresspackersandmovers@gmail.com", "url": "https://www.avonexpresspackersandmovers.co.in" },
              "logo": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/New_Logo.webp", "width": "253", "height": "257" },
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/office-image.webp", "width": "608", "height": "608" },
              "geo": { "@type": "GeoCoordinates", "latitude": "30.7164365", "longitude": "76.8160495" },
              "address": { "@type": "PostalAddress", "streetAddress": "Avon House, Transport Area, Sector 26 East", "addressLocality": "Chandigarh", "addressRegion": "Chandigarh", "postalCode": "160019", "addressCountry": "India" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "32205", "bestRating": "5" }
            },
            {
              "@type": "Place",
              "telephone": "+9198145-56375",
              "name": "Avon Express Packers and Movers",
              "url": "https://www.avonexpresspackersandmovers.co.in",
              "geo": { "@type": "GeoCoordinates", "latitude": "30.7164365", "longitude": "76.8160495" },
              "address": { "@type": "PostalAddress", "streetAddress": "Avon House, Transport Area, Sector 26 East", "addressLocality": "Chandigarh", "addressRegion": "Chandigarh", "postalCode": "160019", "addressCountry": "India" },
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/office-image.webp", "width": "608", "height": "608" }
            },
            {
              "@type": "Product",
              "name": "Avon Express Packers and Movers | Official Website",
              "url": "https://www.avonexpresspackersandmovers.co.in",
              "category": "Avon Express Packers and Movers | Official Website",
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/og-image.webp", "width": "253", "height": "257" },
              "brand": { "@type": "Brand", "name": "Avon Express Packers and Movers | Official Website", "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.", "url": "https://www.avonexpresspackersandmovers.co.in" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "32205", "bestRating": "5" }
            },
            {
              "@type": "Service",
              "name": "Avon Express Packers and Movers | Official Website",
              "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.",
              "image": { "@type": "ImageObject", "representativeOfPage": "True", "url": "https://www.avonexpresspackersandmovers.co.in/images/og-image.webp", "width": "253", "height": "257" },
              "brand": { "@type": "Brand", "name": "Avon Express Packers and Movers | Official Website", "description": "Avon Express Packers and Movers Providing Best and World Class Packing and Moving Services.", "url": "https://www.avonexpresspackersandmovers.co.in" }
            },
            {
              "@type": "WebPage",
              "publisher": { "@type": "Corporation", "name": "Avon Express Packers and Movers | Official Website", "url": "https://www.avonexpresspackersandmovers.co.in" }
            }
          ]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How Do Packers and Movers Work?", "acceptedAnswer": { "@type": "Answer", "text": "You Need To Visit The FAQ Page on The Packers and Movers Website." } },
            { "@type": "Question", "name": "What is Packers and Movers?", "acceptedAnswer": { "@type": "Answer", "text": "When You Shift Household Goods, Car, Bike, Activa From one Place To Another, So You Need Packers and Movers." } },
            { "@type": "Question", "name": "What is IBA Approved Packers and Movers?", "acceptedAnswer": { "@type": "Answer", "text": "The Packers and Movers Which Are Approved By The Indian Banks' Association (IBA) Are Known as IBA Approved Packers and Movers." } },
            { "@type": "Question", "name": "Why Packers and Movers Are Needed?", "acceptedAnswer": { "@type": "Answer", "text": "You Cannot Shift Your Household Goods, Car, Bike, Activa Yourself Because it Requires a lot of Facilities, Which You Do Not Have. You Have To Take Help of Packers and Movers To Avoid Any Kind of loss." } },
            { "@type": "Question", "name": "How To Find Packers and Movers?", "acceptedAnswer": { "@type": "Answer", "text": "You Can Get it From Internet, Google, Website, Facebook, Youtube, Instagram, Twitter etc." } },
            { "@type": "Question", "name": "What is The Cost That Packers and Movers Charges?", "acceptedAnswer": { "@type": "Answer", "text": "You can Find out By Calling our Customer Care Number." } }
          ]
        })}} />

      </head>
      <body className={`${manrope.className} font-body bg-stone-50 text-stone-900 antialiased`}>
        <Toaster
  position="top-right"
  richColors
  expand={false}
  visibleToasts={3}
  toastOptions={{
    style: {
      borderRadius: "18px",
      border: "1px solid #e2e8f0",
      padding: "16px",
      fontSize: "14px",
    },
  }}
/>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        {/* Initialize Google Translate */}
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                 
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );

              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element_mobile'
              );
            }
          `,
          }}
        />


        
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}