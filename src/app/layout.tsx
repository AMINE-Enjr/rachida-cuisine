import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachida Cuisine | رشيدة كويزين — أكل بيتي بأكادير",
  description:
    "شهيوات الدار الأصيلة بأكادير: بسطيلة، دجاج محمر، شباكية، مسمن ومملحات. طلب مسبق من 24 حتى 72 ساعة. حي السلام والنواحي.",
  keywords: [
    "رشيدة كويزين",
    "Rachida Cuisine",
    "أكل بيتي أكادير",
    "بسطيلة",
    "حي السلام",
    "كاترينغ أكادير",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className={`${cairo.className} min-h-full flex flex-col bg-background font-sans text-foreground`}>
        {children}
      </body>
    </html>
  );
}
