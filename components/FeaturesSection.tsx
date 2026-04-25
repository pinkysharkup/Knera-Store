"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"]
});

export default function FeaturesSection() {

  const items = [
    { title: "Biodegradable", icon: "/icons/icon1.png" },
    { title: "Handmade Art", icon: "/icons/icon2.png" },
    { title: "No mulesing", icon: "/icons/icon3.png" },
    { title: "Softness", icon: "/icons/icon4.png" },
  ];

  return (
    <section className="py-40 bg-[#f5f3ef] text-center">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className={`${playfair.className} text-5xl`}>
          Best of Handmade Goods
        </h2>

        <div className="w-28 h-[1px] bg-black/40 mx-auto mt-6 mb-8"/>

        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mt-20">

          {items.map((item,i)=>(
            <div key={i} className="flex flex-col items-center">

              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="text-lg">{item.title}</h4>

              <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
                Reerit in voluptate velit suis amet.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}