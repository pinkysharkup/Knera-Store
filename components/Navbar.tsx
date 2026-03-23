"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <div className="w-full">

      {/* TOP BAR */}
      <div className="w-full bg-[#cbb8ae] text-center text-[12px] tracking-[0.2em] py-2 text-white">
        Products Made With Love.{" "}
        <span className="underline cursor-pointer">Check our store.</span>
      </div>

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-12 py-6 bg-[#f5f3ef] text-[#2b2b2b]">

        {/* LOGO */}
        <Link
          href="/"
          className="w-12 h-12 border border-[#2b2b2b] rounded-full flex items-center justify-center tracking-[0.2em] text-sm"
        >
          F:t
        </Link>

        {/* CENTER */}
        <div className="flex items-center gap-10 text-[13px] tracking-[0.35em]">
          <Link href="/">HOME</Link>
          <Link href="/team">PAGES</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/">LANDING</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-[13px] tracking-[0.3em]">
          <button className="flex items-center gap-2">
            LOGIN <User size={14} />
          </button>

          <Link href="/cart" className="relative">
            CART
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </div>
  );
}