
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ece8e3] text-[#2b2b2b] mt-40">

      {/* ===== TOP SECTION ===== */}
      <div className="max-w-[1700px] mx-auto px-[120px] py-[110px]">

        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-[90px]">

          {/* LEFT - Newsletter */}
          <div>
            <h3 className="text-[38px] mb-5 [font-family:var(--font-playfair)]">
              Stay Up to Date
            </h3>

            <p className="text-[17px] text-[#6c6c6c] mb-10">
              Keep up to date with new collections and design.
            </p>

            <div className="relative border border-[#2b2b2b] h-[58px] flex items-center px-6 max-w-[520px]">
              <input
                type="email"
                placeholder="hello@examples.com"
                className="bg-transparent outline-none w-full text-[16px]"
              />
              <button className="absolute right-6 text-[16px] underline">
                Send
              </button>
            </div>
          </div>

          {/* CENTER - STORE */}
          <div className="border-l border-[#d7d2cc] pl-[80px]">
            <h4 className="text-[12px] tracking-[0.25em] mb-8">
              STORE
            </h4>

            <ul className="space-y-5 text-[16px] text-[#6c6c6c]">
              <li className="hover:text-black transition">Home</li>
              <li className="hover:text-black transition">About</li>
              <li className="hover:text-black transition">Shop</li>
              <li className="hover:text-black transition">Blog</li>
            </ul>
          </div>

          {/* RIGHT - USEFUL LINKS */}
          <div className="border-l border-[#d7d2cc] pl-[80px]">
            <h4 className="text-[12px] tracking-[0.25em] mb-8">
              USEFUL LINKS
            </h4>

            <ul className="space-y-5 text-[16px] text-[#6c6c6c]">
              <li className="hover:text-black transition">Contact</li>
              <li className="hover:text-black transition">My Account</li>
              <li className="hover:text-black transition">Privacy Policy</li>
              <li className="hover:text-black transition">Refund Policy</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="border-t border-[#d7d2cc]" />

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-[1700px] mx-auto px-[120px] py-[45px] flex items-center justify-between">

        {/* LEFT TEXT */}
        <div className="text-[15px] text-[#6c6c6c]">
          2023{" "}
          <span className="font-medium text-[#2b2b2b]">
            Qode Interactive
          </span>
          , All Rights Reserved
        </div>

        {/* CENTER LOGO */}
        <div className="w-[76px] h-[76px] border border-[#2b2b2b] rounded-full flex items-center justify-center text-[24px] [font-family:var(--font-playfair)]">
          F:t
        </div>

        {/* RIGHT - ORIGINAL PAYMENT IMAGE */}
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