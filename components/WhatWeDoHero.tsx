"use client";

import Image from "next/image";

export default function WhatWeDoHero() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* IMAGE */}
      <Image
        src="/images/p5-title-area-img.jpg"
        alt="what we do"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        <h1
          className="text-[38px] md:text-[56px] italic font-normal mb-4"
          style={{
            fontFamily: "var(--font-playfair), Playfair Display, serif",
          }}
        >
          What We Do
        </h1>

        <p className="text-[13px] md:text-[14px] tracking-[0.2em] mb-6 text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* WAVY LINE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="4"
          viewBox="0 0 67.85 4.324"
        >
          <path
            d="M438.6,4846.108s24.544.81,27.829,0,.966,1.133,5.218,0,10.049-2.105,16.041,0,18.746,2.105,18.746,2.105"
            transform="translate(-438.584 -4844.39)"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

      </div>

    </section>
  );
}