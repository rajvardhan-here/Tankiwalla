"use client";

import { useState } from "react";
import Image from "next/image";
import { Droplets } from "lucide-react";
import type { ImageAsset } from "@/config/images";

type SiteImageProps = {
  image: ImageAsset;
  sizes: string; // tells the browser how wide the image is, e.g. "(min-width: 1024px) 50vw, 100vw"
  priority?: boolean; // true only for the hero image
  className?: string;
};

// Fills its parent box (the parent must have a size and "relative").
// If the photo file is missing, it shows a neutral placeholder instead of a broken image.
export function SiteImage({ image, sizes, priority, className }: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt || "Photo placeholder"}
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue/40 via-navy to-aqua/20 text-soft/70"
      >
        <Droplets size={32} aria-hidden="true" />
        <span className="text-xs tracking-wide">Photo coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className ?? "object-cover"}
    />
  );
}