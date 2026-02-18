
"use client";

import { useState } from "react";
import { products, Product } from "../../../data/products";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { Playfair_Display } from "next/font/google";
import { use } from "react";   

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);   // ⭐ نفك الـ Promise هنا

  const { addToCart } = useCart();

  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <section className="py-40 text-center">
        <h1 className="text-3xl font-semibold mb-6">
          This piece is no longer available
        </h1>
        <Link href="/shop" className="underline">
          Back to Collection
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* IMAGE SIDE */}
        <div className="space-y-8">

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src={product.images[activeImage]}
              alt={`Detailed view of handmade product: ${product.name}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex gap-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative w-20 aspect-square rounded-xl overflow-hidden transition ${
                  activeImage === index
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Additional view of handmade product: ${product.name}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="lg:sticky lg:top-40 flex flex-col justify-center space-y-10">

          <div>
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-semibold leading-[1.05]`}>
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-medium">
              {product.price} EGP
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg max-w-md">
            {product.description}
          </p>

          <div className="space-y-4 text-sm text-gray-500">
            <p>• Handcrafted with premium yarn</p>
            <p>• Limited handmade edition</p>
            <p>• Designed for calm, refined spaces</p>
          </div>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
              })
            }
            className="bg-black text-white px-10 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
          >
            Add to Cart
          </button>

          <Link
            href="/shop"
            className="text-sm text-gray-500 underline underline-offset-4 hover:opacity-70 transition"
          >
            Back to collection
          </Link>

        </div>

      </div>

    </section>
  );
}
