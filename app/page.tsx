
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

  return (
    <main className="w-full overflow-x-hidden relative">

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[500]">

        <div className="bg-[#cbb8ae] text-white text-center text-[12px] py-2">
          Products Made With Love.
        </div>

        <div className="flex items-center justify-between px-4 py-4 bg-[#f5f3ef]">

          <div className="flex items-center gap-2 text-sm">
            CART {totalItems}
          </div>

          <Link
            href="/"
            className="w-10 h-10 border rounded-full flex items-center justify-center"
          >
            F:t
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <NavbarHome />

      <Link
        href="/"
        className="hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 border border-white rounded-full items-center justify-center text-white tracking-[0.25em] z-[300]"
      >
        F:t
      </Link>

      <div className="hidden md:flex absolute top-10 right-12 items-center gap-6 text-white text-[13px] tracking-[0.3em] z-[300]">

        <CurrencyDropdown />

        <button className="flex items-center gap-2 hover:opacity-70">
          LOGIN <User size={14} />
        </button>

        <Link href="/cart" className="relative">
          CART
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

      </div>

      {/* HERO */}
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