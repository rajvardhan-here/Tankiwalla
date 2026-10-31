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
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft floating water glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue/30 blur-3xl"
        animate={reduce ? undefined : { y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-aqua/20 blur-3xl"
        animate={reduce ? undefined : { y: [0, 28, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-14 lg:pt-10">
        <motion.div
          className="lg:col-span-7"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-aqua"
          >
            <Droplets size={14} aria-hidden="true" />
            Water tank cleaning in {business.city}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl"
          >
            Clean Tanks. <span className="text-water">Safer Water.</span> Healthier Spaces.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-sm leading-relaxed text-soft/80 sm:text-base"
          >
            {business.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phoneUrl} size="lg" className="w-full sm:w-auto">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </Button>
            <WhatsAppButton
              size="lg"
              className="w-full sm:w-auto"
              message={`Hello ${business.name}, I would like to know more about your water tank cleaning service.`}
            >
              WhatsApp Now
            </WhatsAppButton>
          </motion.div>
        </motion.div>

        {/* Hero photograph */}
        <motion.div
          className="relative lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="glass relative h-60 overflow-hidden rounded-3xl p-1.5 sm:h-72 lg:h-[22rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <SiteImage image={images.hero} sizes="(min-width: 1024px) 40vw, 100vw" priority />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
              />
            </div>
          </div>

          <motion.div
            className="glass absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl px-3 py-2 sm:left-6"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua to-blue text-navy">
              <Droplets size={18} aria-hidden="true" />
            </span>
            <span className="text-xs font-medium leading-tight">
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