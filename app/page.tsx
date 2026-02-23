
"use client";

import HeroSection from "../components/HeroSection";
import ProductsSlider from "../components/ProductsSliderComponent";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import FeaturesSection from "../components/FeaturesSection";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
   <>
  <HeroSection />

  <div className="md:pl-40">

    <section className="py-40 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/bag-6.jpg"
              alt="Elegant handmade crochet piece styled for modern interior decor"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className={`${playfair.className} text-5xl md:text-6xl font-semibold leading-[1.1]`}>
              Featured Piece
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed mt-8 max-w-md">
              A refined crochet statement designed
              for modern, confident styling.
            </p>

            <Link href="/shop" className="inline-block mt-10 underline underline-offset-4 hover:opacity-70 transition">
              Explore →
            </Link>
          </div>

        </div>
      </div>
    </section>

  </div>

  {/* 👇 مهم — السلايدر بره الـ container */}
  <ProductsSlider />
  <FeaturesSection />
</>
  );
}