import type { LucideIcon } from "lucide-react";

// Banner/Image Types
export interface BannerImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface Product {
  src: string;
  alt: string;
  title: string;
  location: string;
}

// News Types
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

// Services Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

// Team Types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  location: string;
  expertise: string[];
}

// Navigation Types
export interface NavigationItem {
  to: string;
  label: string;
}

// Form Types
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  urgency: "low" | "normal" | "high";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// SEO Types
export interface ContactAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface SEOData {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  siteKeywords: string;
  contactPhone: string;
  contactAddress: ContactAddress;
  socialLinks: string[];
  defaultImage: string;
  logoImage: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
}

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
  canonical: string;
  structuredData: any;
}

export interface SEOConfigs {
  homepage: PageSEOConfig;
  products: PageSEOConfig;
  contact: PageSEOConfig;
}

// Route Types
export interface Route {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  title: string;
  description: string;
}

// Contact Information Types
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

// Hero Section Types
export interface HeroSectionProps {
  slideDuration?: number;
}

// Quality Products Types
export interface QualityProductsProps {
  products: Product[];
}

// Constants Types
export interface AppConstants {
  bannerImages: BannerImage[];
  products: Product[];
  newsData: NewsItem[];
  servicesData: Service[];
  teamData: TeamMember[];
  navigationItems: NavigationItem[];
  contactInfo: ContactInfo;
  faqData: FAQItem[];
} 