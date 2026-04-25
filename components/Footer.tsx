
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ece8e3] text-[#2b2b2b] mt-24 md:mt-40">

      {/* ===== TOP SECTION ===== */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-[120px] py-16 md:py-[110px]">

        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-14 md:gap-[90px]">

          {/* LEFT - Newsletter */}
          <div>
            <h3 className="text-3xl md:text-[38px] mb-4 md:mb-5 [font-family:var(--font-playfair)]">
              Stay Up to Date
            </h3>

            <p className="text-[15px] md:text-[17px] text-[#6c6c6c] mb-8 md:mb-10">
              Keep up to date with new collections and design.
            </p>

            <div className="relative border border-[#2b2b2b] h-[52px] md:h-[58px] flex items-center px-5 md:px-6 max-w-[520px]">
              <input
                type="email"
                placeholder="hello@examples.com"
                className="bg-transparent outline-none w-full text-[15px] md:text-[16px]"
              />

              <button className="absolute right-5 md:right-6 text-[15px] md:text-[16px] underline">
                Send
              </button>
            </div>
          </div>

          {/* CENTER - STORE */}
          <div className="border-l border-[#d7d2cc] pl-6 md:pl-[80px]">

            <h4 className="text-[12px] tracking-[0.25em] mb-6 md:mb-8">
              STORE
            </h4>

            <ul className="space-y-4 md:space-y-5 text-[15px] md:text-[16px] text-[#6c6c6c]">
              <li><Link href="/" className="hover:text-black transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-black transition">About</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">Shop</Link></li>
              <li><Link href="/blog" className="hover:text-black transition">Blog</Link></li>
            </ul>

          </div>

          {/* RIGHT - USEFUL LINKS */}
          <div className="border-l border-[#d7d2cc] pl-6 md:pl-[80px]">

            <h4 className="text-[12px] tracking-[0.25em] mb-6 md:mb-8">
              USEFUL LINKS
            </h4>

            <ul className="space-y-4 md:space-y-5 text-[15px] md:text-[16px] text-[#6c6c6c]">
              <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
              <li><Link href="/account" className="hover:text-black transition">My Account</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-black transition">Refund Policy</Link></li>
            </ul>

          </div>

        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="border-t border-[#d7d2cc]" />

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-[120px] py-10 md:py-[45px] flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT TEXT */}
        <div className="text-[14px] md:text-[15px] text-[#6c6c6c] text-center md:text-left">
          2023{" "}
          <span className="font-medium text-[#2b2b2b]">
            Qode Interactive
          </span>
          , All Rights Reserved
        </div>

        {/* CENTER LOGO */}
        <div className="w-[66px] h-[66px] md:w-[76px] md:h-[76px] border border-[#2b2b2b] rounded-full flex items-center justify-center text-[22px] md:text-[24px] [font-family:var(--font-playfair)]">
          F:t
        </div>

        {/* RIGHT - PAYMENTS */}
        <div className="opacity-80">
          <Image
            src="/images/footer-bottom-payments-logo-x2.png"
            alt="Payments"
            width={160}
            height={22}
            className="object-contain"
          />
        </div>

      </div>

    </footer>
  );
}