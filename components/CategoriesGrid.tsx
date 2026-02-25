
"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"]
});

export default function CategoriesGrid() {
  return (
    <section className="py-40">

      {/* container نفس عرض الموقع */}
      <div className="max-w-[1440px] mx-auto px-8">

        {/* title */}
        <div className="text-center mb-28">
          <h2 className={`${playfair.className} text-[56px] leading-tight`}>
            Explore New Arrivals
          </h2>
          <p className="text-gray-500 mt-5">
            Lorem ipsum dolor sit amet, adipiscing elit
          </p>
        </div>

        {/* grid الحقيقي */}
        <div className="grid grid-cols-[433px_1fr] gap-7 justify-center">

          {/* LEFT BIG */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative w-[480px] aspect-[480/700]">
              <Image src="/images/shop-img-4.jpg" alt="" fill className="object-cover"/>
            </div>
            <Overlay
              big
              title="Best Source of Handmade Sweaters"
              tags={["Water Repellent","Outwear"]}
            />
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-7">

            <Card img="/images/shop-img-7.jpg" title="Accessories" tags={["Cotton","Handmade"]}/>
            <Card img="/images/shop-img-8.jpg" title="Hats & Scarfs" tags={["Repellent","Alpaca"]}/>
            <Card img="/images/shop-img-9.jpg" title="Knitted" tags={["Repellent","Alpaca"]}/>
            <Card img="/images/shop-img-10.jpg" title="Blankets" tags={["Repellent","Padded"]}/>

          </div>

        </div>

      </div>
    </section>
  );
}

function Card({ img, title, tags }: any) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="relative w-full aspect-[1/1] min-h-[340px]">
        <Image src={img} alt="" fill className="object-cover"/>
      </div>
      <Overlay title={title} tags={tags}/>
    </div>
  );
}

function Overlay({ title, tags, big }: any) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white
                    bg-gradient-to-t from-black/70 via-black/20 to-transparent">

      <h3 className={big ? "text-[26px] leading-snug" : "text-[18px]"}>
        {title}
      </h3>

      <div className="flex gap-5 text-sm mt-3 opacity-90">
        {tags.map((t:string,i:number)=>(<span key={i}>{t}</span>))}
      </div>

    </div>
  );
}