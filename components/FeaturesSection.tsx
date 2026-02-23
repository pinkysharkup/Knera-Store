
"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function FeaturesSection() {
  return (
    <section className="py-36 bg-[#f5f3ef] text-center">

      {/* ===== TITLE ===== */}
      <h2 className={`${playfair.className} text-[48px] md:text-[58px] leading-tight`}>
        Best of Handmade Goods
      </h2>

      {/* underline بتاع Formarta */}
      <div className="w-[120px] h-[2px] bg-[#cfc9bf] mx-auto mt-6 mb-8 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-2px] w-[160px] h-[2px] bg-[#cfc9bf] opacity-40"></div>
      </div>

      {/* النص */}
      <p className="max-w-3xl mx-auto text-[#6e6e6e] leading-relaxed text-[15px] px-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit.
      </p>


      {/* ===== FEATURES ===== */}
      <div className="mt-20 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">

        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <Image src="/icons/icon1.png" alt="Biodegradable" width={70} height={70} />
          <h3 className="mt-6 text-lg font-medium">Biodegradable</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-[180px]">
            Reerit in voluptate velit suis amet.
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <Image src="/icons/icon2.png" alt="Handmade Art" width={70} height={70} />
          <h3 className="mt-6 text-lg font-medium">Handmade Art</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-[180px]">
            Reerit in voluptate velit suis amet.
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          <Image src="/icons/icon3.png" alt="No mulesing" width={70} height={70} />
          <h3 className="mt-6 text-lg font-medium">No mulesing</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-[180px]">
            Reerit in voluptate velit suis amet.
          </p>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center">
          <Image src="/icons/icon4.png" alt="Softness" width={70} height={70} />
          <h3 className="mt-6 text-lg font-medium">Softness</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-[180px]">
            Reerit in voluptate velit suis amet.
          </p>
        </div>

      </div>

    </section>
  );
}