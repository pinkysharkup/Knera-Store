"use client";

import Image from "next/image";

export default function JoinTeam() {
  return (
    <section className="w-full py-24 bg-[#f5f3ef] flex justify-center">

      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative w-full h-[420px] md:h-[500px]">
          <Image
            src="/images/p6-img-1.jpg"
            alt="join team"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-[#9b8582] text-white flex flex-col justify-center px-10 md:px-16 py-12 md:py-0">

          <h2
            className="text-[28px] md:text-[34px] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Join Our Team
          </h2>

          <p className="text-[14px] leading-[1.8] text-white/90 max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod et dolore. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco ommodo consequat. Duis aute irure dolor in reprerit in.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-3 text-[13px] tracking-[0.2em] w-fit hover:opacity-80 transition">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}