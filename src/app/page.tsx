import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <HowItWorks />
        <About />
        <InstagramShowcase />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
