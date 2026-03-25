
"use client";

import Image from "next/image";

export default function IdeaToProduct() {
  return (
    <section className="w-full bg-white py-28">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">

          <h2
            className="text-[36px] md:text-[42px] text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            From Idea to Product
          </h2>

          {/* LINE */}
          <div className="flex justify-center mt-4">
            <div className="w-[90px] h-[1px] bg-[#2b2b2b] relative">
              <span className="absolute left-1/2 -translate-x-1/2 top-[-1px] w-[40px] h-[1px] bg-[#2b2b2b]"></span>
            </div>
          </div>

        </div>


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">


          {/* ITEM 1 */}
          <div>

            <div className="flex justify-center mb-6">
              <Image
                src="/icons/inner-icon-1.png"
                alt="planning"
                width={90}
                height={90}
              />
            </div>

            <h3
              className="text-[20px] mb-3 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Planning
            </h3>

            <p className="text-[14px] text-[#6a6a6a] leading-[1.8] max-w-[260px] mx-auto">
              Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
            </p>

          </div>


          {/* ITEM 2 */}
          <div>

            <div className="flex justify-center mb-6">
              <Image
                src="/icons/inner-icon-2.png"
                alt="execution"
                width={90}
                height={90}
              />
            </div>

            <h3
              className="text-[20px] mb-3 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Execution
            </h3>

            <p className="text-[14px] text-[#6a6a6a] leading-[1.8] max-w-[260px] mx-auto">
              Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
            </p>

          </div>


          {/* ITEM 3 */}
          <div>

            <div className="flex justify-center mb-6">
              <Image
                src="/icons/p5-icon-3.png"
                alt="management"
                width={90}
                height={90}
              />
            </div>

            <h3
              className="text-[20px] mb-3 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Management
            </h3>

            <p className="text-[14px] text-[#6a6a6a] leading-[1.8] max-w-[260px] mx-auto">
              Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
            </p>

          </div>


          {/* ITEM 4 */}
          <div>

            <div className="flex justify-center mb-6">
              <Image
                src="/icons/p5-icon-4-300x209.png"
                alt="product"
                width={90}
                height={90}
              />
            </div>

            <h3
              className="text-[20px] mb-3 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Product
            </h3>

            <p className="text-[14px] text-[#6a6a6a] leading-[1.8] max-w-[260px] mx-auto">
              Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}