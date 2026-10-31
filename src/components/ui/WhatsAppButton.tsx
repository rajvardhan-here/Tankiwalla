import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn, whatsappLink } from "@/lib/utils";

type WhatsAppButtonProps = {
  message?: string; // optional prefilled message
  children?: ReactNode;
  size?: "md" | "lg";
  className?: string;
};

// Green WhatsApp-style button with the WhatsApp logo
export function WhatsAppButton({
  message,
  children = "WhatsApp Now",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={whatsappLink(message)}
      external
      variant="outline"
      size={size}
      className={cn(
        "!border-transparent !bg-[#25D366] !text-white shadow-lg shadow-black/30 hover:!bg-[#1ebe5b]",
        className
      )}
    >
      <WhatsAppIcon size={20} />
      {children}
    </Button>
  );
}