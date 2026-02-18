
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

export default function ProductCard(props: ProductCardProps) {
  const { id, name, image, price } = props;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">

      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={`Handmade crochet product: ${name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-medium text-lg tracking-tight">{name}</h3>

        <p className="text-gray-900 font-semibold text-sm">
          ${price}
        </p>

        <div className="flex items-center justify-between">
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
            className="bg-black text-white text-xs px-5 py-2 rounded-full hover:scale-105 transition-all duration-300"
          >
            {added ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
