import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { images } from "@/config/images";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const title = `${business.name} | Water Tank Cleaning in ${business.city}`;
const description = `${business.heroDescription} Serving ${business.city}, ${business.region}.`;

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: title, template: `%s | ${business.name}` },
  description,
  keywords: [
    "water tank cleaning Indore",
    "tank cleaning service Indore",
    "overhead tank cleaning",
    "underground tank cleaning",
    "commercial water tank cleaning",
    "TANKIWALLA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: business.siteUrl,
    siteName: business.name,
    title,
    description,
    images: [
      {
        url: images.hero.src,
        width: images.hero.width,
        height: images.hero.height,
        alt: images.hero.alt,
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b2c",
};

// LocalBusiness structured data for Google. No address, ratings or reviews are
// included because none have been provided.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description,
  url: business.siteUrl,
  telephone: "+919244104593",
  email: business.email,
  areaServed: { "@type": "City", name: business.city },
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}