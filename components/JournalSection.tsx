
// "use client";

// import Image from "next/image";

// export default function JournalSection() {
//   return (
//     <section className="w-full bg-[#f5f3ef] py-[120px]">
//       <div className="max-w-[1320px] mx-auto">

//         <h2 className="text-[48px] font-serif mb-[80px]">
//           Journal Our Story
//         </h2>

//         <div className="grid grid-cols-[1.15fr_1px_0.85fr] gap-[70px]">

//           {/* LEFT BIG ARTICLE */}
//           <div>
//             <div className="relative w-full h-[520px] overflow-hidden">
//               <Image
//                 src="/images/post-img-2.jpg"
//                 alt=""
//                 fill
//                 className="object-cover"
//               />
//               <span className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-sm">
//                 18 May
//               </span>
//             </div>

//             <div className="mt-[40px]">
//               <p className="text-[14px] text-gray-500 mb-[18px]">
//                 Handmade
//               </p>

//               <h3 className="text-[34px] font-serif mb-[22px]">
//                 Explore our custom made techniques
//               </h3>

//               <p className="text-gray-600 mb-[28px] leading-[1.8] max-w-[520px]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>

//               <button className="border-b border-black pb-[3px]">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="bg-[#e5e5e5] w-[1px]"></div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col gap-[70px]">

//             {/* SMALL POST 1 */}
//             <div>
//               <div className="relative w-full h-[300px] overflow-hidden">
//                 <Image
//                   src="/images/post-img-1.jpg"
//                   alt=""
//                   fill
//                   className="object-cover"
//                 />
//                 <span className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-sm">
//                   19 May
//                 </span>
//               </div>

//               <div className="mt-[28px]">
//                 <p className="text-[14px] text-gray-500 mb-[12px]">
//                   Creative
//                 </p>

//                 <h3 className="text-[24px] font-serif mb-[14px]">
//                   Crochet learning
//                 </h3>

//                 <p className="text-gray-600 mb-[20px] leading-[1.7]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>

//                 <button className="border-b border-black pb-[3px]">
//                   Read More
//                 </button>
//               </div>
//             </div>

//             {/* SMALL POST 2 */}
//             <div>
//               <div className="relative w-full h-[300px] overflow-hidden">
//                 <Image
//                   src="/images/post-list-1-img-3-294x300.jpg"
//                   alt=""
//                   fill
//                   className="object-cover"
//                 />
//                 <span className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-sm">
//                   19 May
//                 </span>
//               </div>

//               <div className="mt-[28px]">
//                 <p className="text-[14px] text-gray-500 mb-[12px]">
//                   Creative
//                 </p>

//                 <h3 className="text-[24px] font-serif mb-[14px]">
//                   Natural wool cloth
//                 </h3>

//                 <p className="text-gray-600 mb-[20px] leading-[1.7]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>

//                 <button className="border-b border-black pb-[3px]">
//                   Read More
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

export default function JournalSection() {
  return (
    <section className="w-full bg-[#f5f3ef] py-16 lg:py-[120px]">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif mb-12 lg:mb-[80px]">
          Journal Our Story
        </h2>

        {/* Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1px_0.85fr] lg:gap-[70px]">

          {/* LEFT BIG ARTICLE */}
          <div>
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[520px] overflow-hidden">
              <Image
                src="/images/post-img-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <span className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-sm">
                18 May
              </span>
            </div>

            <div className="mt-8 lg:mt-[40px]">
              <p className="text-[14px] text-gray-500 mb-3 lg:mb-[18px]">
                Handmade
              </p>

              <h3 className="text-[24px] sm:text-[28px] lg:text-[34px] font-serif mb-4 lg:mb-[22px]">
                Explore our custom made techniques
              </h3>

              <p className="text-gray-600 mb-6 lg:mb-[28px] leading-[1.8] max-w-[520px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link href="/journal/1" className="border-b border-black pb-[3px] inline-block hover:opacity-70 transition">
                Read More
              </Link>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block bg-[#e5e5e5] w-[1px]"></div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-12 lg:gap-[70px]">

            {/* SMALL POST 1 */}
            <div>
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
                <Image
                  src="/images/post-img-1.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <span className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-sm">
                  19 May
                </span>
              </div>

              <div className="mt-6 lg:mt-[28px]">
                <p className="text-[14px] text-gray-500 mb-2 lg:mb-[12px]">
                  Creative
                </p>

                <h3 className="text-[20px] lg:text-[24px] font-serif mb-3 lg:mb-[14px]">
                  Crochet learning
                </h3>

                <p className="text-gray-600 mb-4 lg:mb-[20px] leading-[1.7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <Link href="/journal/2" className="border-b border-black pb-[3px] inline-block hover:opacity-70 transition">
                  Read More
                </Link>
              </div>
            </div>

            {/* SMALL POST 2 */}
            <div>
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
                <Image
                  src="/images/post-list-1-img-3-294x300.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <span className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-sm">
                  19 May
                </span>
              </div>

              <div className="mt-6 lg:mt-[28px]">
                <p className="text-[14px] text-gray-500 mb-2 lg:mb-[12px]">
                  Creative
                </p>

                <h3 className="text-[20px] lg:text-[24px] font-serif mb-3 lg:mb-[14px]">
                  Natural wool cloth
                </h3>

                <p className="text-gray-600 mb-4 lg:mb-[20px] leading-[1.7]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <Link href="/journal/3" className="border-b border-black pb-[3px] inline-block hover:opacity-70 transition">
                  Read More
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}