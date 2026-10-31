// All image paths live here. To replace a photo, save your file in the same
// folder with the same filename. No code changes are needed.
// width/height are the recommended sizes (see the README image guide).

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const asset = (
  src: string,
  alt: string,
  width: number,
  height: number
): ImageAsset => ({ src, alt, width, height });

export const images = {
  hero: asset(
    "/images/hero/hero-water-tank-cleaning.webp",
    "Professional water tank cleaning",
    1920,
    1080
  ),
  about: asset(
    "/images/about/about-tankiwalla.webp",
    "The TANKIWALLA water tank cleaning team at work",
    1200,
    1400
  ),
  gallery: {
    before1: asset("/images/gallery/before-cleaning-01.webp", "Water tank before cleaning", 1200, 900),
    after1: asset("/images/gallery/after-cleaning-01.webp", "Water tank after cleaning", 1200, 900),
    before2: asset("/images/gallery/before-cleaning-02.webp", "Water tank before cleaning", 1200, 900),
    after2: asset("/images/gallery/after-cleaning-02.webp", "Water tank after cleaning", 1200, 900),
    process: asset("/images/gallery/tank-cleaning-process.webp", "Water tank cleaning in progress", 1200, 900),
    equipment: asset("/images/gallery/professional-cleaning-equipment.webp", "Tank cleaning equipment", 1200, 900),
  },
  services: {
    residential: asset("/images/services/residential-cleaning.webp", "Residential water tank cleaning", 1000, 750),
    underground: asset("/images/services/underground-tank-cleaning.webp", "Underground water tank cleaning", 1000, 750),
    commercial: asset("/images/services/commercial-tank-cleaning.webp", "Commercial water tank cleaning", 1000, 750),
    institutional: asset("/images/services/institutional-cleaning.webp", "Institutional water tank cleaning", 1000, 750),
    industrial: asset("/images/services/industrial-tank-cleaning.webp", "Industrial water tank cleaning", 1000, 750),
  },
  process: {
    contact: asset("/images/process/step-contact.webp", "Contact TANKIWALLA", 800, 600),
    discuss: asset("/images/process/step-discuss.webp", "Discuss your requirements", 800, 600),
    schedule: asset("/images/process/step-schedule.webp", "Schedule the service", 800, 600),
    service: asset("/images/process/step-service.webp", "Water tank cleaning service", 800, 600),
  },
  backgrounds: {
    contact: asset("/images/backgrounds/contact-water-background.webp", "", 1920, 1080),
    footer: asset("/images/backgrounds/footer-water-texture.webp", "", 1920, 600),
  },
} as const;