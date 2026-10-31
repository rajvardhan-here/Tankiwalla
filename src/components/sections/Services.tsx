import { images, type ImageAsset } from "@/config/images";
import { services, type ServiceImageKey } from "@/config/business";
import { cn, serviceEnquiryMessage } from "@/lib/utils";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// Residential shows two photos (home tanks and underground tanks).
const serviceImages: Record<ServiceImageKey, ImageAsset[]> = {
  residential: [images.services.residential, images.services.underground],
  commercial: [images.services.commercial],
  institutional: [images.services.institutional],
  industrial: [images.services.industrial],
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <span id="services-heading">
              Tank cleaning for <span className="text-water">every property</span>
            </span>
          }
          description="Apni property ke hisaab se service chuno, phir WhatsApp par message karo."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const pictures = serviceImages[service.image];

            return (
              <Reveal key={service.id} delay={(index % 4) * 0.08} className="h-full">
                <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl">
                  <div
                    className={cn(
                      "grid h-36 gap-0.5",
                      pictures.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    )}
                  >
                    {pictures.map((picture) => (
                      <div key={picture.src} className="relative overflow-hidden">
                        <SiteImage
                          image={picture}
                          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-bold leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft/75">
                      {service.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-soft/80"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4">
                      <WhatsAppButton
                        message={serviceEnquiryMessage(service.title)}
                        className="w-full"
                      >
                        Enquire Now
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}