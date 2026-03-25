import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickerTypes from "@/components/StickerTypes";
import PriceCalculator from "@/components/PriceCalculator";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StickerTypes />
      <PriceCalculator />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
