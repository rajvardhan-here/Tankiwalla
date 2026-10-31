"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "Water tank saaf karwana kyun zaroori hai?",
    answer:
      "Time ke saath tank ke andar mitti, kaai aur gandagi jam jaati hai. Regular cleaning se stored paani saaf rehta hai aur rozmarra ke use ke liye safer hota hai.",
  },
  {
    question: "Tank kitne time mein saaf karwana chahiye?",
    answer:
      "Ghar ke tanks ke liye aam taur par har 6 mahine mein cleaning suggest ki jaati hai. Sahi time tank, paani ke source aur use par depend karta hai. Aap humse pooch sakte ho.",
  },
  {
    question: "Kya aap overhead aur underground dono tank saaf karte ho?",
    answer:
      "Haan, hum overhead aur underground dono tanks saaf karte hain.",
  },
  {
    question: "Kya business aur institutions ke liye bhi service milti hai?",
    answer:
      "Haan. Ghar ke saath dukaan, office, commercial building, school, college, government institution, factory aur company ke liye bhi service available hai.",
  },
  {
    question: "Booking kaise karein?",
    answer:
      "Hamein call karo, WhatsApp par message karo ya contact form bharo. Apni property aur tank ki detail batao, hum aapke saath suitable time tay kar lenge.",
  },
  {
    question: "Kya bina form bhare phone par booking ho sakti hai?",
    answer:
      "Bilkul. Seedha Call Now ya WhatsApp se baat kar sakte ho, form bharna zaroori nahi hai.",
  },
  {
    question: "Cleaning ka rate kitna hai aur kitna time lagta hai?",
    answer:
      "Ye tank ke type, size aur location par depend karta hai. Apne tank ki detail humein bhejo, hum aapko jaankari de denge.",
  },
  {
    question: "Aap kis area mein service dete ho?",
    answer:
      "Hum Indore, Madhya Pradesh mein based hain. Indore ke bahar ho to WhatsApp par poochho, hum bata denge ki service mil sakti hai ya nahi.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// One column of accordion items. Each column keeps its own open item.
function FaqColumn({ items, offset }: { items: Faq[]; offset: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const id = offset + index;
        const isOpen = open === index;
        return (
          <Reveal key={faq.question} delay={Math.min(index * 0.05, 0.2)}>
            <div className="glass overflow-hidden rounded-2xl">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  id={`faq-button-${id}`}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left font-display text-sm font-semibold sm:px-5 sm:text-base"
                >
                  {faq.question}
                  <Plus
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-aqua transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${id}`}
                    role="region"
                    aria-labelledby={`faq-button-${id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm leading-relaxed text-soft/75 sm:px-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={
            <span id="faq-heading">
              Aksar puche jaane <span className="text-water">wale sawal</span>
            </span>
          }
        />

        {/* Desktop: left and right panels. Mobile: one column. */}
        <div className="mt-8 grid items-start gap-3 md:grid-cols-2 md:gap-5">
          <FaqColumn items={left} offset={0} />
          <FaqColumn items={right} offset={half} />
        </div>
      </div>
    </section>
  );
}