
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
    <section className="relative h-screen w-full overflow-hidden pt-[90px]">

      {/* Background Images */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hero background"
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1600ms]
          ${i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3b2f2a]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2f2a]/30 via-transparent to-[#3b2f2a]/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full px-6">

        <div className="max-w-4xl mx-auto">

          <h1
            className={`${playfair.className}
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            font-semibold
            text-[#f8f5f2]
            leading-[1.05]
            `}
          >
            Handmade <br /> With Soul
          </h1>

          <p className="text-[#f8f5f2]/90 mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Timeless crochet pieces designed for calm, expressive living.
          </p>

          <div className="w-16 md:w-24 h-[1px] bg-[#f8f5f2]/60 mx-auto mt-6" />

          <Link
            href="/shop"
            className="
            inline-block
            mt-8
            border border-[#f8f5f2]
            text-[#f8f5f2]
            px-7 py-3
            sm:px-8 sm:py-3
            md:px-10 md:py-4
            text-sm sm:text-base
            rounded-full
            hover:bg-[#f8f5f2]
            hover:text-[#3b2f2a]
            transition-all
            duration-300
            backdrop-blur-sm
            "
          >
            Discover Collection
          </Link>

        </div>

      </div>

    </section>
  );
}