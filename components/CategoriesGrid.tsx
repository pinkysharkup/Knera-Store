
"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function CategoriesGrid() {
  return (
    <section className="py-20 md:py-32">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Title */}
        <div className="text-center mb-16 md:mb-24">

          <h2
            className={`${playfair.className}
            text-3xl
            md:text-5xl
            lg:text-6xl
            leading-tight`}
          >
            Explore New Arrivals
          </h2>

          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, adipiscing elit
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Big card */}
          <Link href="/shop" className="block lg:col-span-1 relative rounded-xl overflow-hidden group cursor-pointer">

            <div className="relative w-full h-[420px] md:h-[520px]">
              <Image
                src="/images/shop-img-4.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <Overlay
              big
              title="Best Source of Handmade Sweaters"
              tags={["Water Repellent", "Outwear"]}
            />

          </Link>

          {/* Small cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <Card img="/images/shop-img-7.jpg" title="Accessories" tags={["Cotton", "Handmade"]} />
            <Card img="/images/shop-img-8.jpg" title="Hats & Scarfs" tags={["Repellent", "Alpaca"]} />
            <Card img="/images/shop-img-9.jpg" title="Knitted" tags={["Repellent", "Alpaca"]} />
            <Card img="/images/shop-img-10.jpg" title="Blankets" tags={["Repellent", "Padded"]} />

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({ img, title, tags }: any) {
  return (
    <Link href="/shop" className="block relative rounded-xl overflow-hidden group cursor-pointer">

      <div className="relative w-full h-[260px] md:h-[320px]">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <Overlay title={title} tags={tags} />

    </Link>
  );
}

function Overlay({ title, tags, big }: any) {
  return (
    <div
      className="
      absolute inset-0
      flex flex-col justify-end
      p-5
      text-white
      bg-gradient-to-t
      from-black/70
      via-black/20
      to-transparent
      "
    >

      <h3 className={big ? "text-xl md:text-2xl leading-snug" : "text-base md:text-lg"}>
        {title}
      </h3>

      <div className="flex gap-4 text-sm mt-2 opacity-90 flex-wrap">
        {tags.map((t: string, i: number) => (<span key={i}>{t}</span>))}
      </div>

    </div>
  );
}
