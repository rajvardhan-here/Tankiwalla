import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business";

// Contains two things:
// 1) a sticky CALL NOW | WHATSAPP bar for phones
// 2) a floating WhatsApp button for tablets and desktops
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
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-navy active:scale-95"
          >
            <MessageCircle size={18} aria-hidden="true" /> WHATSAPP
          </a>
        </div>
      </div>

      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TANKIWALLA on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-navy shadow-xl shadow-black/40 transition hover:scale-110 md:flex"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
        <MessageCircle size={26} className="relative" aria-hidden="true" />
      </a>
    </>
  );
}