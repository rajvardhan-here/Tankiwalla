import Link from "next/link";
import { Droplets, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, navLinks, services } from "@/config/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua to-blue text-navy">
              <Droplets size={20} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-wide">{business.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-soft/70">{business.tagline}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-aqua">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-soft/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={`/${link.href}`} className="hover:text-aqua">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-aqua">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-soft/75">
            {services.map((service) => (
              <li key={service.id}>
                <a href="/#services" className="hover:text-aqua">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-aqua">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-soft/75">
            <li>
              <a href={business.phoneUrl} className="inline-flex items-center gap-2 hover:text-aqua">
                <Phone size={16} aria-hidden="true" /> {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-aqua"
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={business.emailUrl} className="inline-flex items-center gap-2 hover:text-aqua">
                <Mail size={16} aria-hidden="true" /> {business.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {business.city}, {business.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-soft/60 sm:px-6 md:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-aqua">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-aqua">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}