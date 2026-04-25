

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "White Crochet Bag", image: "/images/bag-1.jpg", price: 35 },
  {
    id: 2,
    name: "Macramé Table Runner",
    image: "/images/bag-4.jpg",
    price: 95,
  },
  { id: 3, name: "Sun Flower Bag", image: "/images/bag-7.jpg", price: 89 },
  { id: 4, name: "Green Crochet Bag", image: "/images/bag-6.jpg", price: 120 },
];

export default function ProductsSlider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!el) return;

      // لو وصل للآخر يرجع للبداية
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 420, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;

    ref.current.scrollBy({
      left: dir === "left" ? -width * 0.8 : width * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#f5f3ef] overflow-hidden pt-16 md:pt-24">

      {/* HEADER */}
      <div className="px-6 md:px-20 mb-10 md:mb-16 flex justify-between items-start md:items-center">
        <div>
          <h2 className="text-3xl md:text-[48px] font-semibold">
            Explore New Arrivals
          </h2>

          <p className="mt-2 md:mt-3 underline cursor-pointer">
            Shop now
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">

        <div
          ref={ref}
          className="
            flex gap-4 md:gap-[30px]
            overflow-x-auto
            custom-scrollbar
            scroll-smooth
            snap-x snap-mandatory
            pl-6 md:pl-[80px]
            pr-6 md:pr-[80px]
          "
          style={{ scrollPaddingLeft: "80px" }}
        >

          {products.map((p) => (
            <div
              key={p.id}
              className="
                min-w-[45%]
                md:min-w-[420px]
                lg:min-w-[520px]
                snap-start
              "
            >
              <div className="relative w-full h-[260px] md:h-[520px] lg:h-[620px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width:768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 md:mt-6">
                <h3 className="text-sm md:text-lg font-medium">
                  {p.name}
                </h3>

                <div className="text-xs md:text-sm text-gray-500">
                  Knitted / Wool
                </div>

                <div className="mt-1 md:mt-2 font-medium">
                  ${p.price}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}