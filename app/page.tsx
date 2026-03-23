
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

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[500]">

        {/* Top Bar */}
        <div className="bg-[#cbb8ae] text-white text-center text-[12px] py-2 tracking-[0.2em]">
          Products Made With Love.{" "}
          <span className="underline">Check our store.</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#f5f3ef]">

          {/* CART */}
          <div className="flex items-center gap-2 text-sm tracking-[0.2em]">
            CART
            {totalItems > 0 && (
              <span className="bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-sm tracking-[0.2em]"
          >
            F:t
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 w-full bg-white z-[999]">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">

              <div className="text-sm tracking-[0.2em]">
                CART {totalItems}
              </div>

              <Link
                href="/"
                className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-sm"
              >
                F:t
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="text-xl"
              >
                ✕
              </button>

            </div>

            {/* MENU */}
            <div className="p-6 space-y-6 text-[14px] tracking-[0.3em]">

              {/* HOME */}
              <div className="flex justify-between items-center">
                <Link href="/">HOME</Link>
                <span>›</span>
              </div>

              {/* PAGES */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  <span>PAGES</span>
                  <span>{pagesOpen ? "⌄" : "›"}</span>
                </div>

                {pagesOpen && (
                  <div className="mt-4 ml-4 space-y-3 text-[13px] tracking-[0.2em] text-black/70">
                    <Link href="/about">About Me</Link>
                    <Link href="/team">Our Team</Link>
                    <Link href="/services">What We Do</Link>
                    <Link href="/contact">Contact Us</Link>
                  </div>
                )}
              </div>

              {/* SHOP */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setShopOpen(!shopOpen)}
                >
                  <span>SHOP</span>
                  <span>{shopOpen ? "⌄" : "›"}</span>
                </div>

                {shopOpen && (
                  <div className="mt-4 ml-4 space-y-3 text-[13px] tracking-[0.2em] text-black/70">
                    <Link href="/shop">Shop List</Link>
                    <Link href="/product">Product Single</Link>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setBlogOpen(!blogOpen)}
                >
                  <span>BLOG</span>
                  <span>{blogOpen ? "⌄" : "›"}</span>
                </div>

                {blogOpen && (
                  <div className="mt-4 ml-4 space-y-3 text-[13px] tracking-[0.2em] text-black/70">
                    <Link href="/blog/sidebar">Right Sidebar</Link>
                    <Link href="/blog/masonry">Blog Masonry</Link>
                  </div>
                )}
              </div>

              {/* LANDING */}
              <div className="flex justify-between items-center">
                <Link href="/">LANDING</Link>
              </div>

            </div>
          </div>
        </>
      )}

      {/* ================= DESKTOP ================= */}
      <NavbarHome />

      <Link
        href="/"
        className="hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 border border-white rounded-full items-center justify-center text-white tracking-[0.25em] z-[100]"
      >
        F:t
      </Link>

      <div className="hidden md:flex absolute top-10 right-12 items-center gap-6 text-white text-[13px] tracking-[0.3em] z-[100]">
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

      {/* باقي الصفحة */}
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