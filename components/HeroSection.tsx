
"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const images = [
  "/images/bag-1.jpg",
  "/images/bag-6.jpg",
  "/images/bag-5.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hero background"
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1600ms]
            ${i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-[#3b2f2a]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2f2a]/30 via-transparent to-[#3b2f2a]/40" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">

          <h1 className={`${playfair.className} text-6xl md:text-8xl font-semibold text-[#f8f5f2] leading-[1.05]`}>
            Handmade <br /> With Soul
          </h1>

          <p className="text-[#f8f5f2]/90 mt-8 text-lg max-w-2xl mx-auto">
            Timeless crochet pieces designed for calm, expressive living.
          </p>

          <div className="w-24 h-[1px] bg-[#f8f5f2]/60 mx-auto mt-8" />

          <Link
            href="/shop"
            className="inline-block mt-12 border border-[#f8f5f2] text-[#f8f5f2] px-10 py-4 rounded-full hover:bg-[#f8f5f2] hover:text-[#3b2f2a] transition-all duration-300 backdrop-blur-sm"
          >
            Discover Collection
          </Link>

        </div>
      </div>
    </section>
  );
}