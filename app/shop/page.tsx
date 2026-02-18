
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredItems = useMemo(() => {
    let filtered = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [search, sort]);

  return (
    <section className="space-y-24">

      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          The Collection
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          A curated selection of handmade pieces created thoughtfully.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center">

        <input
          type="text"
          placeholder="Search pieces..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 px-6 py-3 rounded-full w-full md:w-1/3 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-200 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
             
              <Image
                src={item.image}
                alt={`Handmade crochet product: ${item.name}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

            </div>

            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.price} EGP</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
