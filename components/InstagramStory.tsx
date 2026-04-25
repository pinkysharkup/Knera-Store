
"use client";

import Image from "next/image";

export default function InstagramStory() {
  const images = [
    "/images/macrame1.jpg",
    "/images/macrame2.jpg",
    "/images/post-img-1.jpg",
    "/images/post-img-2.jpg",
    "/images/room.jpg",
    "/images/shop-img-1.jpg",
    "/images/shop-img-4.jpg",
  ];

  return (
    
    <section className="bg-white py-[100px] overflow-hidden">
      {/* Title */}
      <div className="text-center mb-[60px]">
        <h2 className="text-[36px] font-normal [font-family:var(--font-playfair)] mb-4">
          Instagram story
        </h2>

        <div className="flex justify-center">
          <Image
            src="/icons/icon.png"
            alt="icon"
            width={28}
            height={28}
          />
        </div>
      </div>

      {/* Moving Strip */}
      <div className="relative overflow-hidden px-[60px]">
        <div className="flex gap-[24px] animate-scroll">

          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative h-[360px] w-[270px] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt="Instagram"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-[60px] text-[15px] text-[#6c6c6c]">
        @ Beautiful Products Made With Love
      </div>
    </section>
  );
}