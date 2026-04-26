import Script from "next/script"
import "./globals.css";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import { Poppins } from "next/font/google";
import "@/lib/styles/truck.css"

import { Manrope } from "next/font/google";

export const metadata = {
  title: "Avon Express Packers and Movers | Official Website",
  description: "Best services in India",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   display: "swap",
// });


export default function RootLayout({ children }) {


  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} font-body bg-stone-50 text-stone-900 antialiased`}>
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