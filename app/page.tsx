
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Playfair_Display } from "next/font/google";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// export default function Home() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

//   return (
//     <div className="overflow-hidden">

//       {/* ================= HERO ================= */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
//       >

//         {/* Parallax Background */}
//         <motion.div
//           style={{ y: smoothY }}
//           className="absolute inset-0 -z-10"
//         >
//           <Image
//             src="/images/bag-1.jpg"
//             alt=""
//             fill
//             priority
//             className="object-cover brightness-[.65]"
//           />
//         </motion.div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 -z-10"></div>

//         {/* Content */}
//         <div className="max-w-5xl px-6">

//           <h1
//             className={`${playfair.className} text-6xl md:text-8xl font-semibold text-white leading-[1.05]`}
//           >
//             Handmade <br /> With Soul
//           </h1>

//           <p className="text-white/80 mt-8 text-lg max-w-2xl mx-auto">
//             Artistic crochet pieces blending timeless elegance
//             with contemporary fashion.
//           </p>

//           <Link
//             href="/shop"
//             className="inline-block mt-12 border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
//           >
//             Discover Collection
//           </Link>

//         </div>
//       </section>

//       {/* ================= STATEMENT ================= */}
//       <section className="relative -mt-32 py-40 bg-white text-center z-10 rounded-t-[60px]">

//         <h2
//           className={`${playfair.className} text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight`}
//         >
//           Each piece is a slow expression of craft, texture,
//           and modern femininity.
//         </h2>

//       </section>

//       {/* ================= FLOATING BLOCK ================= */}
//       <section className="relative bg-white py-32">

//         <div className="max-w-7xl mx-auto px-6 relative">

//           {/* Floating Image */}
//           <div className="absolute -top-20 right-10 w-60 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
//             <Image
//               src="/images/bag-4.jpg"
//               alt=""
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

//             <div>
//               <h3
//                 className={`${playfair.className} text-4xl md:text-5xl font-semibold leading-tight`}
//               >
//                 Where Craft <br /> Meets Expression
//               </h3>
//             </div>

//             <div>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Each design blends texture, softness, and intentional
//                 detail to create statement pieces that feel personal
//                 and refined.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ================= FEATURED ARTISTIC ================= */}
//       <section className="relative py-40 bg-[#f5f3ef] -mt-20 z-0">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto px-6">

//           {/* Big Image breaking layout */}
//           <div className="md:col-span-2 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl -ml-6 md:-ml-16">
//             <Image
//               src="/images/bag-6.jpg"
//               alt=""
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text Block */}
//           <div className="flex flex-col justify-center space-y-8">

//             <h3
//               className={`${playfair.className} text-4xl font-semibold`}
//             >
//               Featured Piece
//             </h3>

//             <p className="text-gray-600 leading-relaxed">
//               A statement crochet bag designed for bold,
//               confident styling.
//             </p>

//             <Link
//               href="/shop"
//               className="underline underline-offset-4 hover:opacity-70 transition"
//             >
//               Explore →
//             </Link>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ProductsSlider from "../components/ProductsSlider";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bag-1.jpg"
            alt=""
            fill
            priority
            className="object-cover brightness-[.65]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 -z-10"></div>

        <div className="max-w-5xl px-6">

          <h1
            className={`${playfair.className} text-6xl md:text-8xl font-semibold text-white leading-[1.05]`}
          >
            Handmade <br /> With Soul
          </h1>

          <p className="text-white/80 mt-8 text-lg max-w-2xl mx-auto">
            Timeless crochet pieces designed for calm,
            expressive living.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-12 border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover Collection
          </Link>

        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="py-40 bg-white text-center">
        <h2
          className={`${playfair.className} text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight`}
        >
          Each piece is a slow expression of craft,
          texture, and quiet elegance.
        </h2>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-40 bg-[#f5f3ef]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/bag-6.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div>

              <h3
                className={`${playfair.className} text-5xl md:text-6xl font-semibold leading-[1.1]`}
              >
                Featured Piece
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed mt-8 max-w-md">
                A refined crochet statement designed
                for modern, confident styling.
              </p>

              <Link
                href="/shop"
                className="inline-block mt-10 underline underline-offset-4 hover:opacity-70 transition"
              >
                Explore →
              </Link>

            </div>

          </div>

        </div>

      </section>
      {/* ================= PRODUCTS SLIDER ================= */}
     <ProductsSlider />
    </div>
  );
}
