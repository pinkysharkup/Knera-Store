
"use client";

import Image from "next/image";
import Link from "next/link";
import StatsSection from "../../components/StatsSection";

export default function AboutPage() {

return(
<div className="w-full pt-[160px] md:pt-[90px]">

  {/* NAVBAR */}

  <div className="hidden md:flex w-full bg-[#f5f3ef] h-[90px] items-center justify-between px-[20px] md:px-[120px]">

    <div className="w-[60px] h-[60px] border border-[#2b2b2b] rounded-full flex items-center justify-center text-[18px] tracking-[0.2em]">
      F:t
    </div>

    <div className="hidden md:flex gap-10 text-[13px] tracking-[0.35em]">
      <Link href="/">HOME</Link>
      <Link href="/">PAGES</Link>
      <Link href="/">SHOP</Link>
      <Link href="/">BLOG</Link>
      <Link href="/">LANDING</Link>
    </div>

    <div className="flex items-center gap-6 text-[13px] tracking-[0.25em]">
      <span className="hidden md:block">LOGIN</span>

      <div className="flex items-center gap-2">
        CART
        <span className="w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
          0
        </span>
      </div>
    </div>

  </div>


  {/* HERO */}

  <section className="relative w-full h-[430px]">

    <Image
      src="/images/p2-title-area-img.jpg"
      alt="about"
      fill
      className="object-cover"
      priority
    />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 md:px-0">

      <h1 className="text-[40px] md:text-[64px] font-serif mb-3 md:mb-4">
        About Me
      </h1>

      <p className="text-[13px] md:text-[14px] tracking-wide mb-4 md:mb-6 max-w-[320px] md:max-w-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="4" viewBox="0 0 67.85 4.324">
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


  {/* STORY SECTION */}

  <section className="w-full bg-[#f5f3ef] py-[80px] md:py-[140px]">

    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[120px] items-center px-[20px] md:px-0">

      {/* IMAGE */}

      <div>
        <Image
          src="/images/p2-img-1.jpg"
          alt="Anne"
          width={650}
          height={750}
          className="w-full object-cover"
        />
      </div>


      {/* TEXT */}

      <div className="flex flex-col items-center text-center">

        <h2 className="text-[32px] md:text-[42px] font-serif text-[#2b2b2b] mb-4">
          Story of Anne Smith
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="4"
          viewBox="0 0 67.85 4.324"
          className="mb-8"
        >
          <path
            d="M438.6,4846.108s24.544.81,27.829,0,.966,1.133,5.218,0,10.049-2.105,16.041,0,18.746,2.105,18.746,2.105"
            transform="translate(-438.584 -4844.39)"
            fill="none"
            stroke="#2b2b2b"
            strokeWidth="1"
          />
        </svg>

        <p className="text-[14px] md:text-[15px] text-[#6a6a6a] leading-[26px] md:leading-[28px] mb-6 max-w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor et dolore.
        </p>

        <p className="text-[14px] md:text-[15px] text-[#6a6a6a] leading-[26px] md:leading-[28px] mb-10 max-w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>


        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">

          <div className="flex items-center gap-3">
            <img src="/icons/p2-icon-1-x2.png" className="w-[34px]" />
            <span className="text-[14px] text-[#2b2b2b]">
              Formarta CEO
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img src="/icons/p2-icon-2-x2.png" className="w-[34px]" />
            <span className="text-[14px] text-[#2b2b2b]">
              Artisan
            </span>
          </div>

        </div>

        <img src="/images/p2-signature-img-ver-2.png" className="w-[160px]" />

      </div>

    </div>

  </section>

  <StatsSection />


</div>

);
}