
// "use client";

// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import { Menu, User } from "lucide-react";
// import { useState } from "react";
// import CurrencyDropdown from "./CurrencyDropdown";
// import AuthModal from "./AuthModal";

// export default function Navbar() {

// const { totalItems } = useCart();

// const [mobileOpen, setMobileOpen] = useState(false);
// const [isAuthOpen, setIsAuthOpen] = useState(false);

// const [homeOpen, setHomeOpen] = useState(false);
// const [pagesOpen, setPagesOpen] = useState(false);
// const [shopOpen, setShopOpen] = useState(false);
// const [blogOpen, setBlogOpen] = useState(false);

// return (
// <>
// {/* MOBILE HEADER */} <div className="fixed top-[60px] left-0 w-full flex items-center px-4 py-3 text-white z-[100] md:hidden relative">

// ```
//     <button onClick={() => setMobileOpen(true)}>
//       <Menu size={24} />
//     </button>

//     <Link
//       href="/"
//       className="absolute left-1/2 -translate-x-1/2 w-9 h-9 border border-white rounded-full flex items-center justify-center tracking-[0.2em]"
//     >
//       Kn
//     </Link>

//   </div>

//   {/* DESKTOP NAVBAR */}
//   <div className="hidden md:flex items-start justify-between w-full px-12 py-6 absolute top-[60px] left-0 text-white z-[90]">

//     {/* LEFT MENU */}
//     <div className="flex flex-col gap-6 text-sm tracking-[0.35em]">

//       {/* HOME */}
//       <div>

//         <button
//           onClick={() => setHomeOpen(!homeOpen)}
//           className="hover:opacity-70 transition block"
//         >
//           HOME
//         </button>

//         {homeOpen && (
//           <div className="flex flex-col gap-4 mt-4 ml-4 text-[14px] tracking-[0.25em] text-white/80">

//             <Link href="/">Knitwear Home</Link>
//             <Link href="/">Leather Home</Link>
//             <Link href="/">Ceramics Home</Link>
//             <Link href="/">Soapmaking Home</Link>
//             <Link href="/">Bakery Home</Link>
//             <Link href="/">Carpentry Home</Link>

//           </div>
//         )}

//       </div>

//       {/* PAGES */}
//       <div>

//         <button
//           onClick={() => setPagesOpen(!pagesOpen)}
//           className="hover:opacity-70 transition block"
//         >
//           PAGES
//         </button>

//         {pagesOpen && (
//           <div className="flex flex-col gap-4 mt-4 ml-4 text-[14px] tracking-[0.25em] text-white/80">

//             <Link href="/about">About Me</Link>
//             <Link href="/team">Our Team</Link>
//             <Link href="/services">What We Do</Link>
//             <Link href="/contact">Contact Us</Link>

//           </div>
//         )}

//       </div>

//       {/* SHOP */}
//       <div>

//         <button
//           onClick={() => setShopOpen(!shopOpen)}
//           className="hover:opacity-70 transition block"
//         >
//           SHOP
//         </button>

//         {shopOpen && (
//           <div className="flex flex-col gap-4 mt-4 ml-4 text-[14px] tracking-[0.25em] text-white/80">

//             <Link href="/shop">Shop List</Link>
//             <Link href="/product">Product Single</Link>

//           </div>
//         )}

//       </div>

//       {/* BLOG */}
//       <div>

//         <button
//           onClick={() => setBlogOpen(!blogOpen)}
//           className="hover:opacity-70 transition block"
//         >
//           BLOG
//         </button>

//         {blogOpen && (
//           <div className="flex flex-col gap-4 mt-4 ml-4 text-[14px] tracking-[0.25em] text-white/80">

//             <Link href="/blog/sidebar">Right Sidebar</Link>
//             <Link href="/blog/masonry">Blog Masonry</Link>

//           </div>
//         )}

//       </div>

//       <Link href="/" className="hover:opacity-70 transition block">
//         LANDING
//       </Link>

//     </div>

//     {/* LOGO */}
//     <Link
//       href="/"
//       className="w-12 h-12 border border-white rounded-full flex items-center justify-center tracking-[0.25em]"
//     >
//       Kn
//     </Link>

//     {/* RIGHT SIDE */}
//     <div className="flex items-center gap-6 text-sm tracking-[0.25em]">

//       <CurrencyDropdown />

//       <button
//         onClick={() => setIsAuthOpen(true)}
//         className="flex items-center gap-2 hover:opacity-70"
//       >
//         LOGIN <User size={14} />
//       </button>

//       <Link href="/cart" className="relative">
//         CART
//         {totalItems > 0 && (
//           <span className="absolute -top-2 -right-3 bg-[#3b2f2a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
//             {totalItems}
//           </span>
//         )}
//       </Link>

//     </div>

//   </div>

//   {/* MOBILE MENU */}
//   {mobileOpen && (
//     <>
//       <div
//         className="fixed inset-0 bg-black/70 z-[150]"
//         onClick={() => setMobileOpen(false)}
//       />

//       <div className="fixed top-0 left-0 h-full w-[260px] bg-[#1c1c1c] text-white flex flex-col gap-8 pt-24 pl-8 z-[200]">

//         <Link href="/" onClick={() => setMobileOpen(false)}>
//           Home
//         </Link>

//         <Link href="/" onClick={() => setMobileOpen(false)}>
//           Pages
//         </Link>

//         <Link href="/" onClick={() => setMobileOpen(false)}>
//           Shop
//         </Link>

//         <Link href="/" onClick={() => setMobileOpen(false)}>
//           Blog
//         </Link>

//         <Link href="/" onClick={() => setMobileOpen(false)}>
//           Landing
//         </Link>

//       </div>
//     </>
//   )}

//   <AuthModal
//     isOpen={isAuthOpen}
//     onClose={() => setIsAuthOpen(false)}
//   />

// </>


// );
// }
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Menu, User, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import AuthModal from "./AuthModal";

export default function Navbar() {

const { totalItems } = useCart();

const [mobileOpen, setMobileOpen] = useState(false);
const [isAuthOpen, setIsAuthOpen] = useState(false);

const [homeOpen, setHomeOpen] = useState(false);
const [pagesOpen, setPagesOpen] = useState(false);
const [shopOpen, setShopOpen] = useState(false);
const [blogOpen, setBlogOpen] = useState(false);

return (
<>

{/* MOBILE HEADER */}

<div className="fixed top-[60px] left-0 w-full flex items-center px-4 py-3 text-white z-[100] md:hidden relative">

<button onClick={() => setMobileOpen(true)}>

<Menu size={24}/>
</button>

<Link
href="/"
className="absolute left-1/2 -translate-x-1/2 w-9 h-9 border border-white rounded-full flex items-center justify-center tracking-[0.2em]"
>
Kn
</Link>

</div>

{/* DESKTOP NAVBAR */}

<div className="hidden md:flex items-start justify-between w-full px-12 py-6 absolute top-[60px] left-0 text-white z-[90]">

<div className="flex flex-col gap-6 text-sm tracking-[0.35em]">

<Link href="/">HOME</Link>
<Link href="/">PAGES</Link>
<Link href="/">SHOP</Link>
<Link href="/">BLOG</Link>
<Link href="/">LANDING</Link>

</div>

<Link
href="/"
className="w-12 h-12 border border-white rounded-full flex items-center justify-center tracking-[0.25em]"
>
Kn
</Link>

<div className="flex items-center gap-6 text-sm tracking-[0.25em]">

<CurrencyDropdown/>

<button
onClick={() => setIsAuthOpen(true)}
className="flex items-center gap-2 hover:opacity-70"

>

LOGIN <User size={14}/> </button>

<Link href="/cart" className="relative">

CART

{totalItems > 0 && ( <span className="absolute -top-2 -right-3 bg-[#3b2f2a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
{totalItems} </span>
)}

</Link>

</div>

</div>

{/* MOBILE MENU */}
{mobileOpen && (
<>

<div
className="fixed inset-0 bg-black/60 z-[150]"
onClick={() => setMobileOpen(false)}
/>

<div className="fixed top-0 left-0 h-full w-[300px] bg-white text-black z-[200] overflow-y-auto">

<div className="px-6 pt-20 pb-10 space-y-6">

{/* HOME */}

<div>

<button
onClick={() => setHomeOpen(!homeOpen)}
className="flex justify-between items-center w-full font-medium"

>

HOME
{homeOpen ? <ChevronDown size={18}/> : <ChevronRight size={18}/>} </button>

{homeOpen && (

<div className="flex flex-col gap-4 mt-4 text-gray-600">

<Link href="/">Knitwear Home</Link>
<Link href="/">Leather Home</Link>
<Link href="/">Ceramics Home</Link>
<Link href="/">Soapmaking Home</Link>
<Link href="/">Bakery Home</Link>
<Link href="/">Carpentry Home</Link>

</div>
)}

</div>

{/* PAGES */}

<div>

<button
onClick={() => setPagesOpen(!pagesOpen)}
className="flex justify-between items-center w-full font-medium"

>

PAGES
{pagesOpen ? <ChevronDown size={18}/> : <ChevronRight size={18}/>} </button>

{pagesOpen && (

<div className="flex flex-col gap-4 mt-4 text-gray-600">

<Link href="/about">About Me</Link>
<Link href="/team">Our Team</Link>
<Link href="/services">What We Do</Link>
<Link href="/contact">Contact Us</Link>

</div>
)}

</div>

{/* SHOP */}

<div>

<button
onClick={() => setShopOpen(!shopOpen)}
className="flex justify-between items-center w-full font-medium"

>

SHOP
{shopOpen ? <ChevronDown size={18}/> : <ChevronRight size={18}/>} </button>

{shopOpen && (

<div className="flex flex-col gap-4 mt-4 text-gray-600">

<Link href="/shop">Shop List</Link>
<Link href="/product">Product Single</Link>

</div>
)}

</div>

{/* BLOG */}

<div>

<button
onClick={() => setBlogOpen(!blogOpen)}
className="flex justify-between items-center w-full font-medium"

>

BLOG
{blogOpen ? <ChevronDown size={18}/> : <ChevronRight size={18}/>} </button>

{blogOpen && (

<div className="flex flex-col gap-4 mt-4 text-gray-600">

<Link href="/blog/sidebar">Right Sidebar</Link>
<Link href="/blog/masonry">Blog Masonry</Link>

</div>
)}

</div>

<Link
href="/"
className="block font-medium"
onClick={() => setMobileOpen(false)}
>
LANDING
</Link>

</div>

</div>

</>
)}

<AuthModal
isOpen={isAuthOpen}
onClose={() => setIsAuthOpen(false)}
/>

</>
);
}
