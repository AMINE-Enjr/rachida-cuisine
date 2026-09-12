import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  CONTACT_MESSAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-900 text-stone-100">
      <div className="zellige-line opacity-40" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl font-bold">رشيدة كويزين</h2>
          <p className="mt-1 text-sm text-gold">Rachida Cuisine</p>
          <p className="mt-4 leading-7 text-stone-300">
            شهيوات الدار بأكادير. طبخ نقي، طلب مسبق، وتوصيل أو استلام حسب الاتفاق.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
            أكادير: حي السلام، الداخلة، الهدى، تليلا، والمناطق المجاورة
          </p>
          <p className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
            حسب الطلب: من 24 حتى 72 ساعة قبل الموعد · التواصل من 9:00 إلى 21:00
          </p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
            واتساب:{" "}
            <a href="tel:+212660862522" className="hover:text-gold" dir="ltr">
              +212 660 862 522
            </a>
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-200 hover:text-gold"
          >
            <InstagramIcon className="size-4" />
            <span dir="ltr">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div>
          <p className="font-semibold">بغيتي تكوموندي؟</p>
          <p className="mt-2 text-sm leading-7 text-stone-300">
            صيفط لينا فالواتساب العدد، التاريخ، ونوع الشهيوات. توصيل في أكادير أو استلام مباشر بالطلب المسبق.
          </p>
          <WhatsAppButton message={CONTACT_MESSAGE} className="mt-4">
            تواصل معنا دابا
          </WhatsAppButton>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-stone-400">
        © 2026 Rachida Cuisine | رشيدة كويزين — أكادير. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
