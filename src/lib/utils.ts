import { business } from "@/config/business";

// Joins class names and skips empty values.
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// WhatsApp link, optionally with a prefilled message.
export function whatsappLink(message?: string) {
  if (!message) return business.whatsappUrl;
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

// Service-specific enquiry message used by the "Enquire Now" buttons.
export function serviceEnquiryMessage(serviceName: string) {
  return `Hello ${business.name}, I am interested in ${serviceName}. Please share the details.`;
}