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
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <span id="services-heading">
              Tank cleaning for <span className="text-water">every property</span>
            </span>
          }
          description="Choose the service that fits your property, then message us on WhatsApp to get started."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const pictures = serviceImages[service.image];

            return (
              <Reveal key={service.id} delay={(index % 2) * 0.1}>
                <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl">
                  <div
                    className={cn(
                      "grid h-56 gap-1 sm:h-64",
                      pictures.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    )}
                  >
                    {pictures.map((picture) => (
                      <div key={picture.src} className="relative overflow-hidden">
                        <SiteImage
                          image={picture}
                          sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="font-display text-sm font-semibold text-aqua">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-soft/75 sm:text-base">
                      {service.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-soft/80"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <WhatsAppButton
                        variant="primary"
                        message={serviceEnquiryMessage(service.title)}
                        className="w-full sm:w-auto"
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