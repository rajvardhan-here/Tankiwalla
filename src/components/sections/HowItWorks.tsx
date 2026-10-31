import { images } from "@/config/images";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Contact Us",
    text: "Call us, message us on WhatsApp or fill in the contact form.",
    image: images.process.contact,
  },
  {
    title: "Discuss Requirements",
    text: "Tell us about your property and tank so we understand what is needed.",
    image: images.process.discuss,
  },
  {
    title: "Schedule Service",
    text: "We agree on a convenient time for the cleaning.",
    image: images.process.schedule,
  },
  {
    title: "Cleaning Service",
    text: "Your tank is cleaned and you are left with cleaner water storage.",
    image: images.process.service,
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="process-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <span id="process-heading">
              Four simple <span className="text-water">steps</span>
            </span>
          }
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className="relative h-32">
                    <SiteImage
                      image={step.image}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-aqua to-blue font-display text-sm font-bold text-navy">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-soft/70">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}