"use client";

import Image from "next/image";

export default function WhatWeMade() {
  return (
    
    <section className="w-full bg-[#f5f3ef] py-24 mt-24 md:mt-32 flex justify-center">
      {/* <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> */}
      <div className="w-[92%] max-w-[1400px] grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-24 items-center">
        {/* IMAGE */}
        {/* <div className="relative w-full h-[420px] md:h-[520px]"> */}
        <div className="relative w-full h-[480px] md:h-[620px]">
          <Image
            src="/images/p5-img-1-768x614.jpg"
            alt="what we made"
            fill
            className="object-cover"
          />
          
        </div>

        {/* CONTENT */}
        <div className="max-w-[520px]">

          {/* TITLE */}
          <h2
            className="text-[30px] md:text-[36px] mb-6 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            What We Made
          </h2>

          {/* TEXT */}
          <p className="text-[14px] leading-[1.9] text-[#6a6a6a] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mod tempor et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut commodo consequat. Duis aute irure dolor in reprerit in voluptate velit.
          </p>

          <p className="text-[14px] leading-[1.9] text-[#6a6a6a] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

        
         
    {/* SiGNATURE */}
<div className="mb-6">
  <Image
    src="/icons/p2-signature.png"
    alt="signature"
    width={120}
    height={50}
  />
</div>

{/* USER */}
<div className="flex items-center gap-3">

  <Image
    src="/icons/user.png"
    alt="user"
    width={40}
    height={40}
    className="rounded-full"
  />

  <span className="text-[14px] text-[#2b2b2b]">
    Anne Smith
  </span>

</div>
</div>
</div>
    </section>
  );
}