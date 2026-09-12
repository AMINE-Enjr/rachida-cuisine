import { Leaf, Clock3, MapPin, ChefHat, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FoodImage } from "@/components/FoodImage";
import { GENERAL_ORDER_MESSAGE } from "@/lib/whatsapp";

const BADGES = [
  {
    icon: Leaf,
    title: "مكوّنات طازجة ومختارة بعناية",
    text: "خضرة، لحم، ولوز كيتشرى نقي قبل كل طلب.",
  },
  {
    icon: Clock3,
    title: "طلب مسبق من 24 حتى 72 ساعة لضمان الطراوة",
    text: "كل طبق كيتوجد نهارو، ما كاينش تجميد للضيافة.",
  },
  {
    icon: MapPin,
    title: "متواجدين في أكادير - حي السلام والنواحي",
    text: "توصيل أو استلام مباشر حسب الاتفاق.",
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden moroccan-wash">
      <div className="zellige-line" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-3 py-1 text-xs font-semibold text-saffron">
            <ChefHat className="size-3.5" />
            طبخ الدار · أكادير
          </p>
          <h1 className="font-display text-3xl leading-snug font-bold text-stone-900 sm:text-4xl lg:text-5xl">
            شهيوات الدار الأصيلة، محبوبة ومحضرة بأعلى جودة وإتقان
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            من البسطيلة الفاسية والبلدي المعتبر حتى للمملحات والحلاويات ديال المناسبات.. خدمة نقية وطبخ من القلب بأكادير (حي السلام والنواحي).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-md shadow-terracotta/25 hover:bg-[#9a3412]"
            >
              شوف القائمة وكوموندي
            </a>
            <WhatsAppButton message={GENERAL_ORDER_MESSAGE} variant="ghost" className="px-6 py-3">
              <MessageCircle className="size-4" />
              تواصل في واتساب مباشرة
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-900/10 sm:h-96">
            <FoodImage
              src="/dishes/main.jpeg"
              alt="بوفيه ضيافة من رشيدة كويزين بأكادير"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
          <div className="absolute -bottom-5 start-4 rounded-2xl border border-gold/40 bg-white/95 px-4 py-3 shadow-lg sm:start-8">
            <p className="text-xs text-stone-500">التوصيل والاستلام</p>
            <p className="text-sm font-semibold text-stone-800">أكادير · طلب مسبق 24–72 ساعة</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-3">
        {BADGES.map((badge) => (
          <article
            key={badge.title}
            className="rounded-2xl border border-stone-200/80 bg-white/80 p-5 shadow-sm"
          >
            <badge.icon className="mb-3 size-6 text-olive" aria-hidden />
            <h2 className="text-sm font-bold leading-6 text-stone-900">{badge.title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{badge.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
