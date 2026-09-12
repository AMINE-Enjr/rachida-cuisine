"use client";

import { INSTAGRAM_URL, GENERAL_ORDER_MESSAGE, whatsappLink } from "@/lib/whatsapp";
import { ChefHat, Menu, MessageCircle, X } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { useId, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#menu", label: "قائمة الأطباق" },
  { href: "#order", label: "كيفاش كنوصلو" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#FDFBF7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-white shadow-sm sm:inline-flex">
            <ChefHat className="size-5" aria-hidden />
          </span>
          <span>
            <p className="truncate font-display text-lg font-bold text-terracotta sm:text-xl">
              Rachida Cuisine | رشيدة كويزين
            </p>
            <p className="hidden text-xs text-stone-500 sm:block">أكل بيتي أصيل — أكادير</p>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="إنستغرام رشيدة كويزين"
            className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:border-terracotta/40 hover:text-terracotta"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={whatsappLink(GENERAL_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="كوموندي عبر الواتساب"
            className="inline-flex size-10 items-center justify-center rounded-full bg-whatsapp text-white ring-2 ring-terracotta/35 hover:bg-[#1ebe57] sm:hidden"
          >
            <MessageCircle className="size-5" />
          </a>
          <a
            href={whatsappLink(GENERAL_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-sm ring-2 ring-terracotta/35 hover:bg-[#1ebe57] sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            كوموندي عبر الواتساب
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="border-t border-stone-200 bg-[#FDFBF7] px-4 py-4 lg:hidden"
          aria-label="قائمة الجوال"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-stone-800 hover:bg-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(GENERAL_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white ring-2 ring-terracotta/35"
            >
              <MessageCircle className="size-4" />
              كوموندي عبر الواتساب
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
