import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import FenixMethod from "@/components/FenixMethod";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <FenixMethod />
        <ServicesSection />
        <Testimonials />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
