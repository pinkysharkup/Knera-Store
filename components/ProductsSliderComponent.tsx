
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "Cotton Cloth", image: "/images/bag-1.jpg", price: 35 },
  { id: 2, name: "Knit Sweater", image: "/images/bag-2.jpg", price: 170 },
  { id: 3, name: "Knitted Scarf", image: "/images/bag-4.jpg", price: 89 },
  { id: 4, name: "Crochet Bag", image: "/images/bag-5.jpg", price: 120 },
];

export default function ProductsSlider() {

  const ref = useRef<HTMLDivElement>(null);

  // ✅ Auto scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({ left: 520, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -520 : 520,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#f5f3ef] overflow-hidden">
      {/* HEADER */}
      <div className="px-20 mb-16 flex justify-between">

        <div>
          <h2 className="text-[48px] font-semibold">
            Explore New Arrivals
          </h2>

          <p className="mt-3 underline cursor-pointer">
            Shop now
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>

      </div>

      {/* FULL WIDTH STRIP */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">

        <div
          ref={ref}
          className="
            flex gap-[30px]
            overflow-x-auto
            scroll-smooth
            pl-[80px]
            pr-[80px]
          "
        >
          {products.map((p) => (
            <div key={p.id} className="min-w-[520px]">

              <div className="relative w-full h-[620px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <div className="text-sm text-gray-500">Knitted / Wool</div>
                <div className="mt-2 font-medium">${p.price}</div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}