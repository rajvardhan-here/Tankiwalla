"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Review = {
  quote: string;
  name: string;
  detail: string;
  placeholder: boolean;
};

// Replace these placeholders with REAL customer reviews (with their permission).
// Set placeholder to false for each real one. Never invent reviews.
const reviews: Review[] = [
  {
    quote: "Placeholder: a genuine review from a TANKIWALLA customer will appear here.",
    name: "Customer name",
    detail: "Property type, area",
    placeholder: true,
  },
  {
    quote: "Placeholder: real feedback about the cleaning service will replace this text.",
    name: "Customer name",
    detail: "Property type, area",
    placeholder: true,
  },
  {
    quote: "Placeholder: add a real review here once a customer agrees to share it.",
    name: "Customer name",
    detail: "Property type, area",
    placeholder: true,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const review = reviews[index];

  const previous = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Reviews"
          title={
            <span id="reviews-heading">
              What customers <span className="text-water">say</span>
            </span>
          }
        />

        <div className="glass relative mt-8 rounded-3xl p-6 sm:p-8">
          <Quote size={28} className="text-aqua/60" aria-hidden="true" />

          <div aria-live="polite" className="min-h-36">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={index}
                initial={reduce ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="mt-3 font-display text-lg leading-relaxed sm:text-xl">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-soft/60">{review.detail}</span>
                  {review.placeholder && (
                    <span className="rounded-full bg-aqua/15 px-3 py-1 text-xs font-medium text-aqua">
                      Placeholder, not a real review
                    </span>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex">
              {reviews.map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setIndex(dot)}
                  aria-label={`Show review ${dot + 1}`}
                  aria-current={dot === index}
                  className="p-2.5"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      dot === index ? "w-8 bg-aqua" : "w-2.5 bg-white/25"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous review"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/15"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/15"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}