

"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ProductsSlider from "../components/ProductsSliderComponent";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div>

      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bag-1.jpg"
            alt="Handmade crochet bag displayed in warm natural setting"
            fill
            priority
            className="object-cover brightness-[.55]"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 -z-10"></div>

        <div className="max-w-5xl px-6">

          <h1 className={`${playfair.className} text-6xl md:text-8xl font-semibold text-white leading-[1.05] drop-shadow-xl`}>
            Handmade <br /> With Soul
          </h1>

          <p className="text-white/90 mt-8 text-lg max-w-2xl mx-auto drop-shadow-md">
            Timeless crochet pieces designed for calm,
            expressive living.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-12 border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Discover Collection
          </Link>

        </div>
      </section>

      <section className="py-40 bg-white text-center">
        <h2 className={`${playfair.className} text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight`}>
          Each piece is a slow expression of craft,
          texture, and quiet elegance.
        </h2>
      </section>

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

              <Link
                href="/shop"
                className="inline-block mt-10 underline underline-offset-4 hover:opacity-70 transition"
              >
                Explore →
              </Link>

            </div>

          </div>

        </div>

      </section>

      <ProductsSlider />

    </div>
  );
}
