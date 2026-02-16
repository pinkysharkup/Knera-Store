
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { totalItems } = useCart();

//   // منع السكرول لما المينيو يفتح
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   // معرفة هل المستخدم عمل scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// const textColor = scrolled ? "text-[#3b2f2a]" : "text-white";
// const lineColor = scrolled ? "bg-[#3b2f2a]" : "bg-white";
// const borderColor = scrolled ? "border-[#3b2f2a]" : "border-white";


//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         // scrolled
//           // ? "backdrop-blur-lg bg-white/80 shadow-sm py-3"
//           // : "bg-transparent py-6"
//           scrolled
//          ? "backdrop-blur-lg bg-[#c7b1a6]/90 shadow-sm py-3"
//          : "bg-transparent py-6"
  
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

//         {/* LEFT MENU */}
//         <ul className={`hidden md:flex items-center gap-10 text-sm font-medium ${textColor}`}>
//           {["Home", "Shop", "About"].map((item) => (
//             <li key={item} className="relative group">
//               <Link
//                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="transition"
//               >
//                 {item}
//               </Link>

//               <span
//                 className={`absolute left-0 -bottom-2 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${lineColor}`}
//               />
//             </li>
//           ))}
//         </ul>

//         {/* LOGO CENTER */}
//         <Link
//           href="/"
//           className={`absolute left-1/2 -translate-x-1/2 text-xl font-semibold tracking-widest border rounded-full w-12 h-12 flex items-center justify-center transition ${textColor} ${borderColor}`}
//         >
//           Kn
//         </Link>

//         {/* RIGHT SIDE */}
//         <div className={`flex items-center gap-6 text-sm font-medium ${textColor}`}>

//           <Link href="/cart" className="relative transition">
//             Cart
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-4 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {totalItems}
//               </span>
//             )}
//           </Link>

//           {/* MOBILE BUTTON */}
//           <button onClick={() => setOpen(!open)} className="md:hidden ml-3">
//             <div className="space-y-1">
//               <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "rotate-45 translate-y-2" : ""}`} />
//               <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "opacity-0" : ""}`} />
//               <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
//             </div>
//           </button>

//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 text-2xl z-40">
//           <Link href="/" onClick={() => setOpen(false)}>Home</Link>
//           <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
//           <Link href="/about" onClick={() => setOpen(false)}>About</Link>
//           <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  /* منع السكرول لما المينيو يفتح */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* معرفة هل المستخدم عمل scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ألوان تتغير حسب السكرول */
  const textColor = "text-[#3b2f2a]";
  const lineColor = "bg-[#3b2f2a]";
  const borderColor = "border-[#3b2f2a]";


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-[#c7b1a6]/90 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

        {/* ================= LEFT MENU ================= */}
        <ul className={`hidden md:flex items-center gap-10 text-[13px] tracking-wide font-medium ${textColor}`}>
          {["Home", "Shop", "About"].map((item) => (
            <li key={item} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="transition"
              >
                {item.toUpperCase()}
              </Link>

              <span
                className={`absolute left-0 -bottom-2 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${lineColor}`}
              />
            </li>
          ))}
        </ul>

        {/* ================= LOGO CENTER ================= */}
        <Link
          href="/"
          className={`absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-[0.25em] border rounded-full w-12 h-12 flex items-center justify-center transition ${textColor} ${borderColor}`}
        >
          Kn
        </Link>

        {/* ================= RIGHT SIDE ================= */}
        <div className={`flex items-center gap-8 text-[13px] tracking-wide font-medium ${textColor}`}>

          {/* LOGIN */}
          {/* <Link
            href="/login"
            className={`flex items-center gap-2 uppercase transition ${
              scrolled
                ? "text-[#3b2f2a]"
                : "text-white drop-shadow-md"
            } hover:opacity-80`}
          > */}
          <Link
  href="/login"
  className={`flex items-center gap-2 uppercase transition ${textColor} hover:opacity-80`}
>

            LOGIN
            <User size={15} strokeWidth={1.8} />
          </Link>

          {/* CART */}
          <Link href="/cart" className="relative transition hover:opacity-80">
            CART
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden ml-3">
            <div className="space-y-1">
              <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] transition ${lineColor} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 text-2xl z-40">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      )}
    </header>
  );
}

