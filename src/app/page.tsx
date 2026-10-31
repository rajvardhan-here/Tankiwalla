import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <BeforeAfterGallery />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
}