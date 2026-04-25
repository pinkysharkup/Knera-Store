// "use client";

// import Image from "next/image";
// import { Check } from "lucide-react";

// export default function AboutCEO() {
//   return (
//     <section className="w-full bg-[#f5f3ef] py-28 relative overflow-hidden">

//       {/* background shape */}
//       <div className="absolute right-[35%] top-10 opacity-20 hidden lg:block">
//         <Image
//           src="/images/p2-background-img-1.jpg"
//           alt="bg"
//           width={500}
//           height={500}
//         />
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//         {/* LEFT CONTENT */}
//         <div className="max-w-[520px]">

//           <h2
//             className="text-[34px] mb-6 text-[#2b2b2b]"
//             style={{
//               fontFamily: "var(--font-playfair)",
//             }}
//           >
//             About Our CEO
//           </h2>

//           <p className="text-[#6a6a6a] leading-[1.9] text-[14px] mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et
//             dolore. Ut enim ad minim veniam, quis nostrud laboris nisi ut
//             commodo consequat. Duis aute irure dolor.
//           </p>

//           <h3
//             className="text-[22px] mb-6 text-[#2b2b2b]"
//             style={{
//               fontFamily: "var(--font-playfair)",
//             }}
//           >
//             Anne Smith
//           </h3>


//           {/* LIST */}
//           <div className="space-y-5">

//             <div className="flex items-start gap-3">
//               <Check size={18} className="mt-1 text-[#a38b7b]" />
//               <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <Check size={18} className="mt-1 text-[#a38b7b]" />
//               <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
//                 Nincididunt ut labore et dolore ad minim eniam, quis nostrud
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <Check size={18} className="mt-1 text-[#a38b7b]" />
//               <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
//                 Ipsum dolor sit amet, consectetur adipiscing elit
//               </p>
//             </div>

//           </div>

//         </div>


//         {/* RIGHT IMAGES */}
//         <div className="relative">

//           {/* BIG IMAGE */}
//           <div className="relative w-full h-[520px]">
//             <Image
//               src="/images/p6-team-img-2.jpg"
//               alt="ceo"
//               fill
//               className="object-cover"
//             />
//           </div>


//           {/* SMALL IMAGE */}
//           <div className="absolute -left-16 bottom-[-40px] w-[260px] h-[320px] shadow-lg">
//             <Image
//               src="/images/p6-team-img-1.jpg"
//               alt="ceo small"
//               fill
//               className="object-cover"
//             />
//           </div>

//         </div>


//       </div>

//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutCEO() {
  return (
    <section className="w-full bg-[#f5f3ef] py-28 relative overflow-hidden">

      {/* Background Shape */}
      <div className="absolute right-[38%] top-10 opacity-20 hidden lg:block">
        <Image
          src="/images/p2-background-img-1.jpg"
          alt="background"
          width={450}
          height={450}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div className="max-w-[520px]">

          <h2
            className="text-[34px] mb-6 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            About Our CEO
          </h2>

          <p className="text-[#6a6a6a] leading-[1.9] text-[14px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et
            dolore. Ut enim ad minim veniam, quis nostrud laboris nisi ut
            commodo consequat. Duis aute irure dolor.
          </p>

          <h3
            className="text-[22px] mb-6 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Anne Smith
          </h3>


          {/* LIST */}
          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <Check size={18} className="mt-1 text-[#b79b8c]" />
              <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check size={18} className="mt-1 text-[#b79b8c]" />
              <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
                Nincididunt ut labore et dolore ad minim eniam, quis nostrud
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check size={18} className="mt-1 text-[#b79b8c]" />
              <p className="text-[#6a6a6a] text-[14px] leading-[1.8]">
                Ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGES */}
        <div className="relative">

          {/* BIG IMAGE */}
          <div className="relative w-full h-[620px] lg:h-[680px]">
            <Image
              src="/images/p5-img-2-768x588 copy.jpg"
              alt="ceo"
              fill
              className="object-cover"
            />
          </div>


          {/* SMALL IMAGE */}
          <div className="absolute -left-16 bottom-[-40px] w-[260px] h-[320px] shadow-xl">
            <Image
              src="/images/p6-team-img-2.jpg"
              alt="ceo small"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}