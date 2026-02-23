
"use client";
import Image from "next/image";

export default function HeroFashion() {
  return (
    <section className="relative w-full h-[760px] overflow-hidden">

      {/* BG */}
      <Image
        src="/images/h1-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#e7e1da]/35" />


      {/* LEFT CARD — نفس px الموقع */}
      <div className="absolute left-[37px] top-[40px] bg-white p-6 shadow-xl">
        <div className="relative w-[281px] h-[360px]">
          <Image src="/images/winter.jpg" alt="" fill className="object-cover"/>
        </div>
        <p className="text-center mt-4 text-[19px]">
          Winter Season
        </p>
      </div>


      {/* RIGHT CARD — نفس px الموقع */}
      <div className="absolute right-[111px] bottom-[68px] bg-white p-6 shadow-xl">
        <div className="relative w-[277px] h-[380px]">
          <Image src="/images/girl.jpg" alt="" fill className="object-cover"/>
        </div>
        <p className="text-center mt-4 text-[19px]">
          Discover Beautiful
        </p>
      </div>


      {/* TEXT — نفس px الموقع */}
      <div className="absolute left-[32px] bottom-[133px] text-white">
        <h2 className="text-[30px] leading-[35px] font-light">
          Explore New Arrivals
        </h2>

        <p className="mt-3 text-white/80 text-[17px]">
          Lorem ipsum dolor sit amet, contetur
        </p>
      </div>

    </section>
  );
}