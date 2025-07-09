import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import { QualityProducts } from "./components/QualityProducts";
import { useSEO } from "./hooks/useSEO";
import { PAGE_SEO_CONFIG } from "./constant/seoData";

export default function App() {
  useSEO(PAGE_SEO_CONFIG.homepage);

  return (
    <>
      <Navbar />
      <HeroSection />
      <QualityProducts />
    </>
  )
}