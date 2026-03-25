"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function MobileNavbar() {
  const { totalItems } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      
      <div className="md:hidden relative w-full z-[500]">

        {/* Top Bar */}
        <div className="bg-[#cbb8ae] text-white text-center text-[12px] py-2 tracking-[0.2em]">
          Products Made With Love.{" "}
          <span className="underline">Check our store.</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#f5f3ef]">

          {/* CART */}
          <div className="flex items-center gap-2 text-sm tracking-[0.2em]">
            CART
            {totalItems > 0 && (
              <span className="bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-sm"
          >
            F:t
          </Link>

          {/* BUTTON */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>
      </div>
      <div className="h-[110px] md:hidden"></div>
      {/* MENU */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 left-0 w-full bg-white z-[999]">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">

              <div className="text-sm">CART {totalItems}</div>

              <Link
                href="/"
                className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-sm"
              >
                F:t
              </Link>

              <button onClick={() => setMobileOpen(false)}>✕</button>

            </div>

            {/* Menu */}
            <div className="p-6 space-y-6 text-[14px] tracking-[0.3em]">

              <Link href="/">HOME</Link>

              {/* PAGES */}
              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  PAGES <span>{pagesOpen ? "⌄" : "›"}</span>
                </div>

                {pagesOpen && (
                  <div className="mt-3 ml-4 space-y-2 text-black/70">
                    <Link href="/about">About Me</Link>
                    <Link href="/team">Our Team</Link>
                  </div>
                )}
              </div>

              {/* SHOP */}
              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShopOpen(!shopOpen)}
                >
                  SHOP <span>{shopOpen ? "⌄" : "›"}</span>
                </div>

                {shopOpen && (
                  <div className="mt-3 ml-4 space-y-2 text-black/70">
                    <Link href="/shop">Shop List</Link>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setBlogOpen(!blogOpen)}
                >
                  BLOG <span>{blogOpen ? "⌄" : "›"}</span>
                </div>

                {blogOpen && (
                  <div className="mt-3 ml-4 space-y-2 text-black/70">
                    <Link href="/blog">Blog</Link>
                  </div>
                )}
              </div>

              <Link href="/">LANDING</Link>

            </div>
          </div>
        </>
      )}
    </>
  );
}