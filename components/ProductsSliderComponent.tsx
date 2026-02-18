
"use client";

import { useRef } from "react";
import ProductCard from "./ProductCardComponent";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Cotton Cloth", image: "/images/bag-1.jpg", price: 35 },
  { id: 2, name: "Knit Sweater", image: "/images/bag-2.jpg", price: 170 },
  { id: 3, name: "Knitted Scarf", image: "/images/bag-4.jpg", price: 89 },
  { id: 4, name: "Crochet Bag", image: "/images/bag-5.jpg", price: 120 },
];

export default function ProductsSlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    ref.current.scrollBy({
      left: dir === "left" ? -width / 1.2 : width / 1.2,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-4xl font-semibold">Explore New Arrivals</h2>
            <p className="text-gray-500 mt-2">
              Shop our newest crochet pieces
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={ref}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-[280px] md:min-w-[320px] lg:min-w-[340px]"
            >
              <ProductCard
                id={p.id as number}
                name={p.name}
                image={p.image}
                price={p.price}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
