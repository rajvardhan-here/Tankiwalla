import { CalendarCheck, Building2, House, ShieldCheck, Sparkles, ThumbsUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    icon: ShieldCheck,
    title: "Professional cleaning approach",
    text: "A careful, step-by-step process to clean your tank thoroughly.",
  },
  {
    icon: House,
    title: "Residential solutions",
    text: "Cleaning for home overhead and underground water tanks.",
  },
  {
    icon: Building2,
    title: "Commercial solutions",
    text: "Service for shops, offices and commercial buildings.",
  },
  {
    icon: ThumbsUp,
    title: "Customer convenience",
    text: "Reach us by call, WhatsApp or the contact form, whichever is easiest.",
  },
  {
    icon: Sparkles,
    title: "Hygiene-focused service",
    text: "Our focus is cleaner water storage and safer water for everyone.",
  },
  {
    icon: CalendarCheck,
    title: "Easy booking",
    text: "Get in touch, tell us what you need, and we arrange a suitable time.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Why TANKIWALLA"
            title={
              <span id="trust-heading">
                Cleaner tanks, <span className="text-water">made simple</span>
              </span>
            }
            description="A focused water tank cleaning service built around hygiene and convenience."
          />
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={(index % 2) * 0.08}>
              <div className="flex gap-3 border-t border-white/15 pt-4">
                <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-aqua">
                  <point.icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-soft/70">{point.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}