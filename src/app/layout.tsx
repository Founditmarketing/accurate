import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import ScrollProgress from "@/components/ScrollProgress";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accurateshoring.foundation"),
  title: "Accurate Shoring & Foundation — Setting the Standards in Foundation Repairs",
  description:
    "30 years of expert foundation repair, house leveling, crawlspace repair, shoring, drainage, and concrete repair in Alexandria, Baton Rouge, and Lafayette, Louisiana.",
  keywords: ["foundation repair", "house leveling", "crawlspace repair", "shoring", "drainage", "concrete repair", "Louisiana", "Alexandria", "Baton Rouge", "Lafayette"],
  openGraph: {
    title: "Accurate Shoring & Foundation",
    description: "Setting the Standards in Foundation Repairs. 30 years of experience serving Louisiana.",
    type: "website",
    siteName: "Accurate Shoring & Foundation",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#c41230",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Accurate Shoring & Foundation",
              description: "Foundation repair, house leveling, and structural support services in Louisiana.",
              url: "https://accurateshoring.foundation",
              telephone: "(318) 321-3000",
              address: [
                { "@type": "PostalAddress", streetAddress: "2002 Melrose Street", addressLocality: "Pineville", addressRegion: "LA", postalCode: "71360" },
                { "@type": "PostalAddress", streetAddress: "310 E Gloria Switch Rd", addressLocality: "Lafayette", addressRegion: "LA", postalCode: "70507" },
                { "@type": "PostalAddress", streetAddress: "11940 Industriplex Blvd. Suite 2", addressLocality: "Baton Rouge", addressRegion: "LA", postalCode: "70809" },
              ],
              areaServed: ["Alexandria", "Baton Rouge", "Lafayette", "Louisiana"],
            }),
          }}
        />
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
