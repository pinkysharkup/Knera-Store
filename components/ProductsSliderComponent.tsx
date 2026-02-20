
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
  badge?: "sale" | "sold";
};

const products: Product[] = [
  {
    id: 1,
    name: "Knit Cardigan",
    image: "/images/bag-1.jpg",
    price: 195,
    category: "Knitted / Wool",
  },
  {
    id: 2,
    name: "Soft-wool Hat",
    image: "/images/bag-2.jpg",
    price: 58,
    category: "Accessories / Wool",
  },
  {
    id: 3,
    name: "Thick Sweater",
    image: "/images/bag-4.jpg",
    price: 145,
    category: "Knitted / Wool",
  },
  {
    id: 4,
    name: "Patterned Socks",
    image: "/images/bag-5.jpg",
    price: 58,
    category: "Accessories / Knitted",
    badge: "sold",
  },
  {
    id: 5,
    name: "Cotton Cloth",
    image: "/images/bag-6.jpg",
    price: 35,
    oldPrice: 45,
    category: "Accessories / Hats & Scarfs",
    badge: "sale",
  },
];

export default function ProductsSlider() {
  const ref = useRef<HTMLDivElement>(null);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const interval = setInterval(() => {
      const cardWidth = el.firstElementChild?.clientWidth || 0;

      el.scrollBy({
        left: cardWidth + 50,
        behavior: "smooth",
      });

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const width = ref.current.firstElementChild?.clientWidth || 0;
    ref.current.scrollBy({
      left: dir === "left" ? -(width + 50) : width + 50,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-44 bg-[#f5f3ef] relative overflow-hidden">

      {/* decorative circle */}
      <div className="pointer-events-none absolute right-[-300px] top-[-150px] w-[900px] h-[900px] rounded-full border border-[#e7e1da]" />

      <div className="max-w-[1500px] mx-auto px-10 relative">

        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-24">

          <div>
            <h2 className="text-[48px] font-semibold tracking-tight">
              Explore New Arrivals
            </h2>

            <button className="mt-4 text-sm underline underline-offset-4">
              Shop now
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-[#dcd6cf] flex items-center justify-center hover:bg-white transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-[#dcd6cf] flex items-center justify-center hover:bg-white transition"
            >
              →
            </button>
          </div>

        </div>

        {/* ===== SLIDER ===== */}
        <div
          ref={ref}
          className="flex gap-12 overflow-x-auto scroll-smooth no-scrollbar pb-6"
        >
          {products.map((p) => (
            <div key={p.id} className="min-w-[520px] max-w-[520px]">

              <div className="bg-[#efeae4] rounded-3xl p-6 transition hover:shadow-md">

                {/* IMAGE */}
                <div className="relative aspect-square rounded-2xl overflow-hidden group">

                  {p.badge && (
                    <div className="absolute top-6 left-6 bg-white text-xs px-4 py-1 rounded-full shadow-sm z-10">
                      {p.badge === "sale" ? "Sale" : "Sold"}
                    </div>
                  )}

                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />

                  {/* hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* add button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-white px-8 py-3 rounded shadow text-sm hover:shadow-md transition">
                      Add to cart
                    </button>
                  </div>

                </div>

                {/* INFO */}
                <div className="mt-7 space-y-1">

                  <h3 className="text-[18px] font-medium">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {p.category}
                  </p>

                  <div className="text-sm mt-1">
                    {p.oldPrice && (
                      <span className="line-through mr-2 opacity-60">
                        ${p.oldPrice}
                      </span>
                    )}
                    <span>${p.price}</span>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}