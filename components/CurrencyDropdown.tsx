
"use client";

import { useState, useRef, useEffect } from "react";

export default function CurrencyDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div ref={ref} className="relative z-[999]">

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          border border-white/60
          text-white
          px-3 py-1
          text-xs
          tracking-widest
          backdrop-blur-sm
          hover:bg-white hover:text-black
          transition
        "
      >
        USD, $
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-48
            bg-white text-black
            shadow-xl
            rounded-sm
            border
            overflow-hidden
          "
        >

          <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
            <div className="font-medium">USD, $</div>
            <div className="text-xs text-gray-500">USA dollar</div>
          </button>

          <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
            <div className="font-medium">EUR, €</div>
            <div className="text-xs text-gray-500">European Euro</div>
          </button>

        </div>
      )}
    </div>
  );
}