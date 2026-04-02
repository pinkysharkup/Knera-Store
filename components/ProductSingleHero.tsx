"use client";

import Image from "next/image";

export default function ProductSingleHero() {
  return (
    <div className="relative w-full h-[180px] mt-[40px]">

      <Image
        src="/images/shop-title-img-2.jpg"
        alt="Product Single"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute left-12 bottom-6 text-white">
        <p className="italic text-[14px] tracking-[0.1em]">
          Home / Shop / Wool / Wool Socks
        </p>
      </div>

    </div>
  );
}