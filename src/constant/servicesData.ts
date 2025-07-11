import type { Service } from "./types";
import { Leaf, Droplets, Sun, Truck, Users, Shield } from "lucide-react";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Organic Crop Production",
    description: "We specialize in growing high-quality organic crops using sustainable farming practices that protect the environment and produce nutritious food.",
    icon: Leaf,
    features: ["Certified organic", "Sustainable practices", "Quality assurance", "Traceability"]
  },
  {
    id: 2,
    title: "Irrigation Systems",
    description: "Advanced irrigation solutions that optimize water usage and ensure optimal crop growth throughout the growing season.",
    icon: Droplets,
    features: ["Smart irrigation", "Water conservation", "Automated systems", "Monitoring"]
  },
  {
    id: 3,
    title: "Greenhouse Management",
    description: "State-of-the-art greenhouse facilities for year-round production of vegetables and specialty crops.",
    icon: Sun,
    features: ["Climate control", "Year-round production", "Specialty crops", "Technology integration"]
  },
  {
    id: 4,
    title: "Distribution & Logistics",
    description: "Efficient delivery services ensuring fresh produce reaches markets and customers in optimal condition.",
    icon: Truck,
    features: ["Fresh delivery", "Cold chain", "Timely service", "Quality maintenance"]
  },
  {
    id: 5,
    title: "Agricultural Consulting",
    description: "Expert advice and consulting services for farmers looking to improve their operations and sustainability.",
    icon: Users,
    features: ["Expert guidance", "Best practices", "Sustainability", "Technology adoption"]
  },
  {
    id: 6,
    title: "Quality Assurance",
    description: "Comprehensive quality control measures ensuring all products meet the highest standards of safety and quality.",
    icon: Shield,
    features: ["Safety standards", "Quality control", "Certification", "Testing"]
  }
]; 