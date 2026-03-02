
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { User } from "lucide-react";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isAuthOpen, setIsAuthOpen] = useState(false); // 👈 جديد

  return (
    <>
      {/* ===== LEFT MENU ===== */}
      <div className="absolute left-12 top-[50vh] -translate-y-1/2 z-[90] hidden md:flex flex-col gap-6 text-white">
        {["Home", "Pages", "Shop", "Blog", "Landing"].map((item) => (
          <Link
            key={item}
            href="/"
            className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity"
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* ===== LOGO ===== */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[90]">
        <Link
          href="/"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/70 text-white backdrop-blur-sm tracking-[0.25em] font-semibold hover:bg-white/10 transition-colors"
        >
          Kn
        </Link>
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="absolute top-20 right-12 flex items-center gap-6 text-sm tracking-[0.25em] text-white z-[90]">
        
        <CurrencyDropdown />

        {/* 👇 بدل Link خليناه Button */}
        <button
          onClick={() => setIsAuthOpen(true)}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          LOGIN <User size={14} strokeWidth={1.8} />
        </button>

        <Link
          href="/cart"
          className="relative hover:opacity-70 transition-opacity"
        >
          CART
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-[#3b2f2a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* 👇 المودال هنا */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}