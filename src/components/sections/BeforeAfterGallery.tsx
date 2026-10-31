"use client";

import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { images, type ImageAsset } from "@/config/images";
import { cn } from "@/lib/utils";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/* ---------- Drag-to-compare slider ---------- */

type ComparisonSliderProps = {
  before: ImageAsset;
  after: ImageAsset;
  label: string;
};

function ComparisonSlider({ before, after, label }: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="glass rounded-2xl p-1.5">
      <div className="relative aspect-[16/10] select-none overflow-hidden rounded-xl focus-within:ring-2 focus-within:ring-aqua">
        <div className="absolute inset-0">
          <SiteImage image={after} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <SiteImage image={before} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-aqua px-3 py-1 text-xs font-semibold text-navy">
          After
        </span>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg">
            <ChevronsLeftRight size={18} />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`${label}: drag to compare before and after`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          style={{ touchAction: "pan-y" }}
        />
      </div>
    </div>
  );
}

/* ---------- Moving photo strip ---------- */

type Tone = "before" | "after" | "neutral";

type Tile = { image: ImageAsset; label: string; tone: Tone };

const tiles: Tile[] = [
  { image: images.gallery.before1, label: "Before", tone: "before" },
  { image: images.gallery.after1, label: "After", tone: "after" },
  { image: images.gallery.process, label: "Cleaning in progress", tone: "neutral" },
  { image: images.gallery.before2, label: "Before", tone: "before" },
  { image: images.gallery.after2, label: "After", tone: "after" },
  { image: images.gallery.equipment, label: "Equipment", tone: "neutral" },
];

const toneStyles: Record<Tone, string> = {
  before: "bg-navy/80 text-soft",
  after: "bg-aqua text-navy",
  neutral: "glass text-soft",
};

function GalleryTile({ image, label, tone }: Tile) {
  return (
    <figure className="glass relative mr-3 h-44 w-60 shrink-0 overflow-hidden rounded-xl sm:h-52 sm:w-72">
      <SiteImage image={image} sizes="288px" />
      <figcaption
        className={cn(
          "absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
          toneStyles[tone]
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}

/* ---------- Section ---------- */

export function BeforeAfterGallery() {
  return (
    <section id="our-work" aria-labelledby="work-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Work"
          title={
            <span id="work-heading">
              See the <span className="text-water">difference</span>
            </span>
          }
          description="Slider ko drag karke tank ka before aur after compare karo."
        />

        {/* Remove this note once you replace the demonstration photos with your own work */}
        <Reveal>
          <p className="mt-3 text-xs text-soft/50">
            Photos shown are demonstration visuals, not completed customer projects.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <ComparisonSlider
              before={images.gallery.before1}
              after={images.gallery.after1}
              label="Tank cleaning comparison one"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ComparisonSlider
              before={images.gallery.before2}
              after={images.gallery.after2}
              label="Tank cleaning comparison two"
            />
          </Reveal>
        </div>
      </div>

      <div
        className="marquee mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        role="region"
        aria-label="Moving gallery of demonstration photographs"
        tabIndex={0}
      >
        <div className="marquee-track">
          <div className="flex">
            {tiles.map((tile) => (
              <GalleryTile key={`a-${tile.image.src}`} {...tile} />
            ))}
          </div>
          <div className="flex" aria-hidden="true">
            {tiles.map((tile) => (
              <GalleryTile key={`b-${tile.image.src}`} {...tile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}