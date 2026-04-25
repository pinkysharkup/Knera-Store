
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function ProductCard({
  id,
  name,
  image,
  price,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">

      {/* الصورة الطويلة زي الموقع */}
      <Link href={`/product/${id}`} className="block relative w-full h-[520px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </Link>

      {/* المحتوى */}
      <div className="p-7 space-y-4">

        <h3 className="text-lg font-medium tracking-tight">
          {name}
        </h3>

        <p className="text-black font-semibold text-sm">
          ${price}
        </p>

        <div className="flex items-center justify-between pt-2">

          <Link
            href={`/product/${id}`}
            className="text-sm text-gray-500 hover:text-black transition"
          >
            View →
          </Link>

          <button
            onClick={() => {
              addToCart({ id, name, price, image });
              setAdded(true);
              setTimeout(() => setAdded(false), 1200);
            }}
            className="bg-black text-white text-xs px-5 py-2 rounded-full hover:scale-105 transition-all"
          >
            {added ? "Added ✓" : "Add"}
          </button>

        </div>
      </div>
    </div>
  );
}