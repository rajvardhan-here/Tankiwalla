"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Droplets, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { business, navLinks } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="border-b border-white/10 bg-navy/90 text-xs text-soft/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
          <p className="hidden md:block">
            Water tank cleaning in {business.city}, {business.region}
          </p>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <a href={business.phoneUrl} className="inline-flex items-center gap-1.5 py-1 hover:text-aqua">
              <Phone size={14} aria-hidden="true" /> {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 hover:text-aqua"
            >
              <MessageCircle size={14} aria-hidden="true" /> WhatsApp
            </a>
            <a href={business.emailUrl} className="hidden items-center gap-1.5 py-1 hover:text-aqua sm:inline-flex">
              <Mail size={14} aria-hidden="true" /> {business.email}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky glass header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label={`${business.name} home`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua to-blue text-navy">
              <Droplets size={20} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-wide">{business.name}</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/${link.href}`}
                className="text-sm text-soft/80 transition hover:text-aqua"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/#contact" className="hidden md:inline-flex">
              Book Now
            </Button>
            <button
              type="button"
              className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-white/10 bg-navy/95 px-4 pb-5 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3.5 text-base text-soft/90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="/#contact" size="lg" className="mt-4 w-full" >
              Book Now
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}