
"use client";
import Image from "next/image";

export default function HeroFashion() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[720px] overflow-hidden">

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

      {/* LEFT CARD */}
      <div className="
      absolute
      left-4
      top-6
      md:left-10
      md:top-10
      bg-white
      p-4
      md:p-6
      shadow-xl
      ">

        <div className="relative w-[160px] h-[200px] sm:w-[200px] sm:h-[260px] md:w-[260px] md:h-[320px]">
          <Image
            src="/images/winter.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <p className="text-center mt-3 md:mt-4 text-sm md:text-lg">
          Winter Season
        </p>

      </div>


      {/* RIGHT CARD */}
      <div className="
      absolute
      right-4
      bottom-6
      md:right-16
      md:bottom-16
      bg-white
      p-4
      md:p-6
      shadow-xl
      ">

        <div className="relative w-[160px] h-[210px] sm:w-[200px] sm:h-[260px] md:w-[260px] md:h-[330px]">
          <Image
            src="/images/girl.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <p className="text-center mt-3 md:mt-4 text-sm md:text-lg">
          Discover Beautiful
        </p>

      </div>


      {/* TEXT */}
      <div className="
      absolute
      left-4
      bottom-20
      md:left-10
      md:bottom-32
      text-white
      max-w-[320px]
      ">

        <h2 className="text-2xl md:text-3xl leading-tight font-light">
          Explore New Arrivals
        </h2>

        <p className="mt-2 md:mt-3 text-white/80 text-sm md:text-base">
          Lorem ipsum dolor sit amet, contetur
        </p>

      </div>

    </section>
  );
}