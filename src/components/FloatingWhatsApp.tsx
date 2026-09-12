import { MessageCircle } from "lucide-react";
import { GENERAL_ORDER_MESSAGE, whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(GENERAL_ORDER_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="كوموندي عبر الواتساب"
      className="fixed end-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-emerald-700/30 ring-2 ring-terracotta/40"
    >
      <span className="ping-soft pointer-events-none absolute inset-0 rounded-full bg-whatsapp" />
      <MessageCircle className="relative size-7" />
    </a>
  );
}
