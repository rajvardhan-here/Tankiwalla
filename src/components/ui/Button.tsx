import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "outline";
type Size = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean; // opens in a new tab (WhatsApp, etc.)
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition duration-300 active:scale-95 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-aqua to-blue text-navy shadow-lg shadow-blue/30 " +
    "hover:-translate-y-0.5 hover:shadow-aqua/40",
  glass: "glass text-soft hover:-translate-y-0.5 hover:bg-white/15",
  outline: "border border-aqua/60 text-aqua hover:bg-aqua/10",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-7 py-4 text-base",
};

export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}