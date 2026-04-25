"use client";

import Image from "next/image";
import Link from "next/link";

export default function FormartaOffers() {
  return (
    <section className="w-full bg-[#f5f3ef] py-28 flex justify-center">

      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

        {/* IMAGE */}
        <div className="w-[700px] h-[560px] relative">
          <Image
            src="/images/p5-img-4-600x480.jpg"
            alt="Formarta"
            fill
            className="object-cover"
          />
        </div>

   
        {/* CONTENT */}
        <div className="max-w-[480px]">

          <h2
            className="text-[34px] mb-6 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Formarta Offers
          </h2>

          <p className="text-[#6a6a6a] text-[14px] leading-[1.9] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisc d tempor et dolore.
            Ut enim ad minim veniam, quis nostrud exercitation knd knisi ut
            commodo consequat. Duis aute iruren voluptate velit.
          </p>


          {/* ITEM 1 */}
          <div className="mb-6">

            <h3
              className="text-[20px] mb-2 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Monthly Discounts
            </h3>

            <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et
              dolore. Ut enim ad minim veniam, quis nostrud.
            </p>

          </div>


          {/* ITEM 2 */}
          <div className="mb-8">

            <h3
              className="text-[20px] mb-2 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Gift Vouchers
            </h3>

            <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>


          {/* BUTTON */}
          <Link href="/shop" className="inline-block bg-[#e9e6e2] px-8 py-3 text-[13px] tracking-wide hover:bg-[#dcd8d3] transition">
            Shop Now
          </Link>

        </div>

      </div>

    </section>
  );
}