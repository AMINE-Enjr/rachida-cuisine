"use client";

import { useMemo, useState } from "react";
import { Clock3, MessageCircle } from "lucide-react";
import { MENU_ITEMS, type MenuCategory } from "@/lib/menu";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionDivider } from "@/components/SectionDivider";
import { FoodImage } from "@/components/FoodImage";

const FILTERS: { id: "all" | MenuCategory; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "occasions", label: "أطباق المناسبات" },
  { id: "traditional", label: "التقليدي والحلويات" },
  { id: "savory", label: "مملحات وفطائر" },
];

export function MenuSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const items = useMemo(() => {
    if (filter === "all") return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="menu" className="bg-cream/70 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold tracking-wide text-saffron">القائمة</p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          شهيوات رشيدة كويزين
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
          كل طلب كيتوجد بالطلب المسبق، باش يوصلك سخون، نقي، وعلى حقّو وطريقو.
        </p>
        <SectionDivider />

        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="تصنيف الأطباق">
          {FILTERS.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-terracotta text-white shadow-sm"
                    : "border border-stone-200 bg-white text-stone-700 hover:border-terracotta/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <FoodImage
                  src={item.image}
                  alt={item.imageAlt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 start-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-terracotta shadow-sm">
                  <Clock3 className="size-3.5" />
                  {item.notice}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="mt-0.5 text-sm text-saffron">{item.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">{item.description}</p>
                <WhatsAppButton dishTitle={item.title} className="mt-5 w-full">
                  <MessageCircle className="size-4" />
                  كوموندي دابا
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
