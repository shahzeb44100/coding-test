import { Suspense } from 'react';
import HeroSection from "../components/HeroSection";
import { QualityProducts } from "../components/product/QualityProducts";
import { useSEO } from "../hooks/useSEO";
import { PAGE_SEO_CONFIG } from "../constant";

export default function HomePage() {
  useSEO(PAGE_SEO_CONFIG.homepage);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HeroSection />
      <QualityProducts />
    </Suspense>
  );
} 