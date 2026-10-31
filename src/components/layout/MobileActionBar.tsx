import { Phone } from "lucide-react";
import { business } from "@/config/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// 1) Sticky CALL NOW | WHATSAPP bar for phones
// 2) Floating WhatsApp button for tablets and desktops
export function MobileActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/90 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={business.phoneUrl}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua to-blue text-sm font-bold text-navy active:scale-95"
          >
            <Phone size={18} aria-hidden="true" /> CALL NOW
          </a>
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white active:scale-95"
          >
            <WhatsAppIcon size={20} /> WHATSAPP
          </a>
        </div>
      </div>

      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TANKIWALLA on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition hover:scale-110 md:flex"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
        <WhatsAppIcon size={32} className="relative" />
      </a>
    </>
  );
}