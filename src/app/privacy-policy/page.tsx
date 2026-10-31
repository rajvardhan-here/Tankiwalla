import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

// Order matches the header: Home, About, Services, Our Work, Reviews, Contact, then FAQ
export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <About />
      <Services />
      <HowItWorks />
      <BeforeAfterGallery />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
}