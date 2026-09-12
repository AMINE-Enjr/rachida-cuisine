import type { ReactNode } from "react";
import {
  GENERAL_ORDER_MESSAGE,
  inquiryMessage,
  whatsappLink,
} from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children: ReactNode;
  message?: string;
  dishTitle?: string;
  className?: string;
  variant?: "primary" | "whatsapp" | "ghost";
};

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-[#9a3412] shadow-md shadow-terracotta/20",
  whatsapp:
    "bg-whatsapp text-white hover:bg-[#1ebe57] shadow-md shadow-emerald-500/20",
  ghost:
    "border border-terracotta/30 bg-white/70 text-terracotta hover:bg-cream",
};

export function WhatsAppButton({
  children,
  message,
  dishTitle,
  className = "",
  variant = "whatsapp",
}: WhatsAppButtonProps) {
  const text = dishTitle ? inquiryMessage(dishTitle) : (message ?? GENERAL_ORDER_MESSAGE);

  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
