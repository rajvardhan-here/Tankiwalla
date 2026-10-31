import { Droplets, MessageCircle, Sparkles } from "lucide-react";
import { business } from "@/config/business";
import { images } from "@/config/images";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const values = [
  { icon: Droplets, title: "Hygiene first", text: "Clean storage means safer water for everyone." },
  { icon: MessageCircle, title: "Clear communication", text: "Simple talk by call or WhatsApp." },
  { icon: Sparkles, title: "Every property", text: "Homes, institutions and industry." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="glass relative h-64 overflow-hidden rounded-3xl p-1.5 sm:h-80">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <SiteImage image={images.about} sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Us"
            title={
              <span id="about-heading">
                Water tank cleaning, <span className="text-water">done with care</span>
              </span>
            }
          />

          <Reveal delay={0.1}>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-soft/75 sm:text-base">
              <p>
                {business.name} is a water tank cleaning service based in {business.city},{" "}
                {business.region}. We help homes, businesses, institutions and industrial
                facilities keep their water storage clean.
              </p>
              <p>
                A tank is easy to forget because it is out of sight. Our goal is to make cleaning
                it just as easy: get in touch, tell us what you need, and we take care of the rest.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={0.1 + index * 0.08}>
                <div className="border-t border-white/15 pt-3">
                  <value.icon size={20} className="text-aqua" aria-hidden="true" />
                  <h3 className="mt-2 font-display text-sm font-semibold">{value.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-soft/70">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={business.phoneUrl} className="w-full sm:w-auto">
                Call Now
              </Button>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}