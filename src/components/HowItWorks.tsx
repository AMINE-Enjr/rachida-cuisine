import { ClipboardList, MessageCircle, Truck } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const STEPS = [
  {
    icon: ClipboardList,
    title: "الخطوة 1",
    text: "اختار الشهيوات ديالك من القائمة",
  },
  {
    icon: MessageCircle,
    title: "الخطوة 2",
    text: "تواصل معنا فالواتساب لتأكيد العدد وتحديد موعد الاستلام (من 24 حتى 72 ساعة قبل)",
  },
  {
    icon: Truck,
    title: "الخطوة 3",
    text: "التوصيل حتى لباب دارك بأكادير أو استلام الطلب من عندنا بحي السلام",
  },
];

export function HowItWorks() {
  return (
    <section id="order" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-saffron">طريقة الطلب</p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          كيفاش كنوصلو؟
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
          توصيل في أكادير أو استلام مباشر بالطلب المسبق. بسيطة، واضحة، ومن القلب.
        </p>
        <SectionDivider />

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm"
            >
              <span className="absolute -top-3 start-5 rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-stone-900">
                {index + 1}
              </span>
              <step.icon className="mb-4 size-8 text-terracotta" aria-hidden />
              <h3 className="font-bold text-stone-900">{step.title}</h3>
              <p className="mt-2 leading-7 text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
