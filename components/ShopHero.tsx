
"use client";

import Image from "next/image";

export default function ShopHero() {
  return (
    <div className="relative w-full h-[150px] mt-[40px]">

      <Image
        src="/images/shop-title-img-2.jpg"
        alt="shop"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute left-12 bottom-6 text-white">
        <p className="italic text-[14px] tracking-[0.1em]">
          Home / Shop
        </p>
      </div>

    </div>
  );
}