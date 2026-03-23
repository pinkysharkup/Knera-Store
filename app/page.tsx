
"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

import HeroSection from "../components/HeroSection";
import ProductsSlider from "../components/ProductsSliderComponent";
import FeaturesSection from "../components/FeaturesSection";
import HeroFashion from "../components/HeroFashion";
import CategoriesGrid from "../components/CategoriesGrid";
import TestimonialSection from "../components/TestimonialSection";
import JournalSection from "../components/JournalSection";
import HeroKnitwear from "../components/HeroKnitwear";
import InstagramStory from "../components/InstagramStory";

import NavbarHome from "../components/NavbarHome";
import CurrencyDropdown from "../components/CurrencyDropdown";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { totalItems } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden relative">

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[500]">

        <div className="bg-[#cbb8ae] text-white text-center text-[12px] py-2">
          Products Made With Love.
        </div>

        <div className="flex items-center justify-between px-4 py-4 bg-[#f5f3ef]">

          <div className="flex items-center gap-2 text-sm">
            CART {totalItems}
          </div>

          <Link href="/" className="w-10 h-10 border rounded-full flex items-center justify-center">
            F:t
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>

        </div>
      </div>

      {/* DESKTOP */}
      <NavbarHome />

      <div className="pt-[120px] md:pt-0">
        <HeroSection />
      </div>

      <div className="space-y-24">
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