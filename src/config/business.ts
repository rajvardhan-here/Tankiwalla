// All business information lives here. Change it once and the whole site updates.

export type ServiceImageKey =
  | "residential"
  | "commercial"
  | "institutional"
  | "industrial";

export const business = {
  name: "TANKIWALLA",
  tagline: "Clean Tanks. Safer Water. Healthier Spaces.",
  heroDescription:
    "Professional water tank cleaning solutions for homes, businesses, commercial properties and institutions.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  phoneDisplay: "+91 92441 04593",
  phoneUrl: "tel:+919244104593",
  whatsappUrl: "https://wa.me/919244104593",
  email: "tankiwalla@gmail.com",
  emailUrl: "mailto:tankiwalla@gmail.com",

  city: "Indore",
  region: "Madhya Pradesh",
  country: "India",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: ServiceImageKey;
};

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Water Tank Cleaning",
    description:
      "Careful cleaning for the tanks that supply your home, so your family's water storage stays hygienic.",
    points: ["Home tanks", "Overhead tanks", "Underground tanks"],
    image: "residential",
  },
  {
    id: "commercial",
    title: "Commercial Water Tank Cleaning",
    description:
      "Convenient tank cleaning for businesses that need clean water storage without disrupting daily work.",
    points: ["Shops", "Offices", "Commercial buildings"],
    image: "commercial",
  },
  {
    id: "institutional",
    title: "Government & Institutional Cleaning",
    description:
      "Tank cleaning for places where many people depend on safe, clean water every day.",
    points: ["Schools", "Colleges", "Government institutions"],
    image: "institutional",
  },
  {
    id: "industrial",
    title: "Industrial & Corporate Cleaning",
    description:
      "Tank cleaning support for larger facilities with bigger storage and tighter schedules.",
    points: ["Factories", "Companies", "Industrial facilities"],
    image: "industrial",
  },
];  