"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Droplets, Phone } from "lucide-react";
import { business } from "@/config/business";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SiteImage } from "@/components/ui/SiteImage";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft floating water glows (hidden from screen readers, still if motion is reduced) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue/30 blur-3xl"
        animate={reduce ? undefined : { y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-aqua/20 blur-3xl"
        animate={reduce ? undefined : { y: [0, 28, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-20">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-aqua"
          >
            <Droplets size={14} aria-hidden="true" />
            Water tank cleaning in {business.city}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Clean Tanks. <span className="text-water">Safer Water.</span> Healthier Spaces.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-soft/80 sm:text-lg"
          >
            {business.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phoneUrl} size="lg" className="w-full sm:w-auto">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </Button>
            <WhatsAppButton
              size="lg"
              variant="glass"
              className="w-full sm:w-auto"
              message={`Hello ${business.name}, I would like to know more about your water tank cleaning service.`}
            >
              WhatsApp Now
            </WhatsAppButton>
          </motion.div>
        </motion.div>

        {/* Hero photograph */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2 sm:aspect-[4/3] lg:aspect-[4/5]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <SiteImage
                image={images.hero}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"
              />
            </div>
          </div>

          <motion.div
            className="glass absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aqua to-blue text-navy">
              <Droplets size={20} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium leading-tight">
              Homes &middot; Businesses
              <br />
              <span className="text-soft/70">Institutions &middot; Industry</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}