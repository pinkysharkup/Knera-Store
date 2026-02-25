
"use client";

import HeroSection from "../components/HeroSection";
import ProductsSlider from "../components/ProductsSliderComponent";
import FeaturesSection from "../components/FeaturesSection";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import HeroFashion from "../components/HeroFashion";
import CategoriesGrid from "../components/CategoriesGrid";
import TestimonialSection from "../components/TestimonialSection";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function Home() {
  return (
    <div className="space-y-40">
      <HeroSection />
      <ProductsSlider />
      <FeaturesSection />
      <HeroFashion />
      <CategoriesGrid />
      <TestimonialSection />
    </div>
  );
}