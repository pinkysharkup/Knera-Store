
"use client";

import HeroSection from "../components/HeroSection";
import ProductsSlider from "../components/ProductsSliderComponent";
import FeaturesSection from "../components/FeaturesSection";
import HeroFashion from "../components/HeroFashion";
import CategoriesGrid from "../components/CategoriesGrid";
import TestimonialSection from "../components/TestimonialSection";
import JournalSection from "../components/JournalSection";
import HeroKnitwear from "../components/HeroKnitwear";
import InstagramStory from "../components/InstagramStory";


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      <HeroSection />

      <div className="space-y-24 md:space-y-32 lg:space-y-40">

        <ProductsSlider />

        <FeaturesSection />

        <HeroFashion />

        <CategoriesGrid />

        <TestimonialSection />

        <JournalSection />

        <HeroKnitwear />

        <InstagramStory />

       

      </div>

    </main>
  );
}