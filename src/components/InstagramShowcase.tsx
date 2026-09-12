import { Quote } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/whatsapp";
import { SectionDivider } from "@/components/SectionDivider";
import { FoodImage } from "@/components/FoodImage";

const PHOTOS = [
  {
    src: "/dishes/Pastilla.jpeg",
    alt: "بسطيلة ملكية بفواكه البحر",
  },
  {
    src: "/dishes/chabakia.jpg",
    alt: "شباكية فاسلية بلدية",
  },
  {
    src: "/dishes/Msemen.jpg",
    alt: "مسمن الدار مع العسل",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا ومملحات للبوفيه",
  },
  {
    src: "/dishes/main.jpeg",
    alt: "بوفيه ضيافة أنيق",
  },
  {
    src: "/dishes/Pastilla.jpeg",
    alt: "تقديم راقي للمناسبات",
  },
];

const REVIEWS = [
  {
    quote:
      "البسطيلة جات على حقها وطريقها، والتقديم كان كيشرّف الضيوف. لالة رشيدة محترمة فالمواعيد.",
    name: "سعاد · حي الداخلة",
  },
  {
    quote:
      "الشباكية والمسمن بنة الدار بصح. طلبت قبل بيومين ووصل كلشي سخون ومنظم.",
    name: "كريم · حي السلام",
  },
  {
    quote:
      "خدمة نقية والذوق أصيل. للبوفيه ديال عيد الميلاد كانت المملحات ممتازة.",
    name: "إيمان · الهدى",
  },
];

export function InstagramShowcase() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-saffron">شوفو الخدمة</p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          من إنستغرام ومن قلوب الزبناء
        </h2>
        <SectionDivider />

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {PHOTOS.map((photo) => (
            <a
              key={photo.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-40 overflow-hidden rounded-2xl sm:h-52"
            >
              <FoodImage
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-stone-900/0 transition-colors group-hover:bg-stone-900/25" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 hover:border-terracotta/40 hover:text-terracotta"
          >
            <InstagramIcon className="size-4" />
            تابعونا <span dir="ltr">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm"
            >
              <Quote className="size-6 text-gold" aria-hidden />
              <blockquote className="mt-3 leading-7 text-stone-700">“{review.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-terracotta">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
