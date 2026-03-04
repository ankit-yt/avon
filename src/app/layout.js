import Script from "next/script"
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "@/lib/styles/truck.css"



const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});


export default function RootLayout({ children }) {


  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins} font-body bg-stone-50 text-stone-900 antialiased`}>
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