
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <div className="fixed top-[60px] left-0 w-full flex items-center px-4 py-3 text-white z-[100] md:hidden relative">

        {/* menu button */}
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={24} />
        </button>

        {/* centered logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 w-9 h-9 border border-white rounded-full flex items-center justify-center tracking-[0.2em]"
        >
          Kn
        </Link>

      </div>

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden md:flex items-center justify-between w-full px-12 py-6 absolute top-[60px] left-0 text-white z-[90]">

        {/* left menu */}
        <div className="flex gap-8 text-sm tracking-[0.25em]">
          {["Home", "Pages", "Shop", "Blog", "Landing"].map((item) => (
            <Link
              key={item}
              href="/"
              className="hover:opacity-70 transition-opacity"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* logo */}
        <Link
          href="/"
          className="w-12 h-12 border border-white rounded-full flex items-center justify-center tracking-[0.25em]"
        >
          Kn
        </Link>

        {/* right side */}
        <div className="flex items-center gap-6 text-sm tracking-[0.25em]">

          <CurrencyDropdown />

          <button
            onClick={() => setIsAuthOpen(true)}
            className="flex items-center gap-2 hover:opacity-70"
          >
            LOGIN <User size={14} />
          </button>

          <Link href="/cart" className="relative">
            CART
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#3b2f2a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>

      {/* ===== MOBILE SIDE MENU ===== */}
      {mobileOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/70 z-[150]"
            onClick={() => setMobileOpen(false)}
          />

          {/* menu panel */}
          <div className="fixed top-0 left-0 h-full w-[260px] bg-[#1c1c1c] text-white flex flex-col gap-8 pt-24 pl-8 z-[200]">

            {["Home", "Pages", "Shop", "Blog", "Landing"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-lg tracking-[0.2em]"
              >
                {item}
              </Link>
            ))}

            <div className="border-t border-white/20 w-32 my-4"></div>

            <CurrencyDropdown />

            <button
              onClick={() => {
                setMobileOpen(false);
                setIsAuthOpen(true);
              }}
              className="flex items-center gap-2 text-lg tracking-[0.2em]"
            >
              LOGIN <User size={16} />
            </button>

            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="text-lg tracking-[0.2em]"
            >
              CART
            </Link>

          </div>
        </>
      )}

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}