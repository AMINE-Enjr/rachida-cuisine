import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { FoodImage } from "@/components/FoodImage";

export function About() {
  return (
    <section id="about" className="bg-cream/70 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-3xl border border-stone-200/80 shadow-lg">
          <FoodImage
            src="/dishes/Pastilla.jpeg"
            alt="بسطيلة ملكية محضّرة بعناية في رشيدة كويزين"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-saffron">قصة الطبخ</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            لالة رشيدة… الطبخ بحال للعائلة
          </h2>
          <SectionDivider />
          <p className="mt-4 leading-8 text-stone-600">
            مرحبا بيكم عند رشيدة كويزين. أنا لالة رشيدة، وكنطبخ من القلب: وصفات العائلة، لمسة الدار المغربية،
            وإتقان كيبان فالتقديم وفي النكهة. كل طبق كنوجدو وكأنو لولادي ولضيوفي، ما كنرضى بأقل من الجودة والنظافة.
          </p>
          <p className="mt-4 leading-8 text-stone-600">
            من حي السلام بأكادير، كنخدمو المناسبات، الطلبات المنزلية، والبوفيهات الصغيرة والكبيرة. الهدف بسيط:
            توصل عندك الماكلة سخونة، أصيلة، ومحضرة بضمير.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone-700">
              <Heart className="mt-0.5 size-5 shrink-0 text-terracotta" />
              وصفات بلدية موروثة ولمسة عصرية للمناسبات
            </li>
            <li className="flex items-start gap-3 text-sm text-stone-700">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-olive" />
              نظافة دقيقة وتحضير يوم الطلب باش تبقى الطراوة
            </li>
            <li className="flex items-start gap-3 text-sm text-stone-700">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-gold" />
              تقديم مرتب كيشرف المائدة والضيف
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
