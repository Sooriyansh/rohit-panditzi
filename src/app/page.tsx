import dynamic from "next/dynamic";
import StructuredData from "@/components/StructuredData";
import HomeHero from "@/app/Hero/HomeHero";

const TrustStrip = dynamic(() => import("@/app/Hero/TrustStrip"));
const TempleIntro = dynamic(() => import("@/app/Hero/TempleIntro"));
const PujaServicesSection = dynamic(
  () => import("@/app/Hero/PujaServicesSection"),
);
const JyotishSection = dynamic(() => import("@/app/Hero/JyotishSection"));
const StatsSection = dynamic(() => import("@/app/Hero/StatsSection"));
const BookingProcess = dynamic(() => import("@/app/Hero/BookingProcess"));
const HomeCTA = dynamic(() => import("@/app/Hero/HomeCTA"));
const LocationSection = dynamic(() => import("@/app/Hero/LocationSection"));
const FAQSection = dynamic(() => import("@/app/Hero/FAQSection"));
const ContactSection = dynamic(() => import("@/app/Hero/ContactSection"));
const FloatingWhatsApp = dynamic(() => import("@/app/Hero/FloatingWhatsApp"));

export default function Home() {
  return (
    <>
      <StructuredData />

      <main className="overflow-hidden bg-[#faf7f0] text-[#24100d]">
        <HomeHero />

        <TrustStrip />

        <TempleIntro />

        <PujaServicesSection />

        <JyotishSection />

        <StatsSection />

        <BookingProcess />

        <HomeCTA />

        <LocationSection />

        <FAQSection />

        <ContactSection />
      </main>

      <FloatingWhatsApp />
    </>
  );
}
