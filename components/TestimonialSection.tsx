
"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

/* البيانات */
const testimonials = [
  {
    text: "Beautiful craftsmanship. You can feel the love in every stitch.",
    name: "Nico Roots",
    role: "artisan",
  },
  {
    text: "Absolutely stunning pieces. The quality exceeded my expectations.",
    name: "Sara Ahmed",
    role: "customer",
  },
  {
    text: "Unique and elegant designs. I always get compliments!",
    name: "Mona Ali",
    role: "designer",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const t = testimonials[index];

  return (
    <section className="bg-white py-20 md:py-40">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[420px_1fr_120px] gap-10 items-center">

          {/* LEFT SHAPE */}
          <div className="relative flex justify-center">
            <div className="w-[200px] md:w-[260px] h-[150px] md:h-[190px] bg-[#e7e1d7] rounded-[55%_45%_60%_40%]" />

            <svg
              className="absolute top-[-18px] left-1/2 -translate-x-1/2 w-[40px] md:w-[54px] text-[#4a4a4a]"
              viewBox="0 0 52.798 47.992"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z" transform="translate(8.276 0.596) rotate(10)" />
              <path d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z" transform="translate(34.086 0.596) rotate(10)" />
            </svg>
          </div>

          {/* TEXT */}
          <div className="max-w-[560px] text-center md:text-left">

            <p
              key={index}
              className={`${playfair.className} italic text-lg md:text-[23px] leading-[1.9] text-[#2b2b2b] transition-opacity duration-500`}
            >
              {t.text}
            </p>

            {/* AUTHOR */}
            <div className="mt-8 md:mt-12 text-center md:text-left">
              <p className="text-[15px] font-medium text-[#1a1a1a]">
                {t.name},
              </p>

              <p className="text-sm text-gray-500">
                {t.role}
              </p>
            </div>

          </div>

          {/* ARROWS */}
          <div className="flex md:flex-col justify-center items-center gap-6 text-gray-500">

            <button
              onClick={prev}
              className="text-2xl hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="text-2xl hover:text-black transition"
            >
              →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}