
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Menu, User, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CurrencyDropdown from "./CurrencyDropdown";
import AuthModal from "./AuthModal";

export default function Navbar() {

const { totalItems } = useCart();
const pathname = usePathname();

const [mobileOpen, setMobileOpen] = useState(false);
const [isAuthOpen, setIsAuthOpen] = useState(false);

const [homeOpen, setHomeOpen] = useState(false);
const [pagesOpen, setPagesOpen] = useState(false);
const [shopOpen, setShopOpen] = useState(false);
const [blogOpen, setBlogOpen] = useState(false);

return (
<>

{/* MOBILE HEADER */}

<div className="fixed top-[40px] left-0 right-0 w-full h-[70px] flex items-center justify-between px-4 bg-[#f5f3ef] text-[#2b2b2b] z-[100] md:hidden">

{/* MENU ICON */}

<button onClick={() => setMobileOpen(true)}>
<Menu size={26}/>
</button>


{/* LOGO */}

<Link
href="/"
className="w-10 h-10 border border-[#2b2b2b] rounded-full flex items-center justify-center tracking-[0.2em]"
>
F:t
</Link>


{/* CART */}

<Link href="/cart" className="flex items-center gap-2 text-[13px] tracking-[0.25em] relative">

CART

{totalItems > 0 && (

<span className="absolute -top-2 -right-3 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">

{totalItems}

</span>

)}

</Link>

</div>


{/* DESKTOP NAVBAR */}

{pathname === "/" && (

<div className="hidden md:flex items-start justify-between w-full px-12 py-6 absolute top-[60px] left-0 text-white z-[90]">

<div className="flex flex-col gap-6 text-sm tracking-[0.35em]">

{/* HOME */}

<div>

          <div className="flex items-center gap-2 hover:opacity-70">
            <Link href="/">HOME</Link>
            <button onClick={() => setHomeOpen(!homeOpen)}>
              {homeOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{homeOpen && (

<div className="flex flex-col gap-3 mt-4 ml-4 text-[13px] tracking-[0.25em] text-white/80">

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

          <div className="flex items-center gap-2 hover:opacity-70">
            <Link href="/about">ABOUT</Link>
            <button onClick={() => setPagesOpen(!pagesOpen)}>
              {pagesOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{pagesOpen && (

<div className="flex flex-col gap-3 mt-4 ml-4 text-[13px] tracking-[0.25em] text-white/80">

<Link href="/about">About Me</Link>
<Link href="/team">Our Team</Link>
<Link href="/services">What We Do</Link>
<Link href="/contact">Contact Us</Link>

</div>

)}

</div>


{/* SHOP */}

<div>

          <div className="flex items-center gap-2 hover:opacity-70">
            <Link href="/shop">SHOP</Link>
            <button onClick={() => setShopOpen(!shopOpen)}>
              {shopOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{shopOpen && (

<div className="flex flex-col gap-3 mt-4 ml-4 text-[13px] tracking-[0.25em] text-white/80">

<Link href="/shop">Shop List</Link>
<Link href="/product">Product Single</Link>

</div>

)}

</div>


{/* BLOG */}

<div>

          <div className="flex items-center gap-2 hover:opacity-70">
            <Link href="/blog">BLOG</Link>
            <button onClick={() => setBlogOpen(!blogOpen)}>
              {blogOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{blogOpen && (

<div className="flex flex-col gap-3 mt-4 ml-4 text-[13px] tracking-[0.25em] text-white/80">

<Link href="/blog/sidebar">Right Sidebar</Link>
<Link href="/blog/masonry">Blog Masonry</Link>

</div>

)}

</div>

<Link href="/" className="hover:opacity-70">
LANDING
</Link>

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

LOGIN <User size={14}/>

</button>

<Link href="/cart" className="relative">

CART

{totalItems > 0 && (

<span className="absolute -top-2 -right-3 bg-[#3b2f2a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">

{totalItems}

</span>

)}

</Link>

</div>

</div>

)}


{/* MOBILE MENU */}

{mobileOpen && (

<>

<div
className="fixed inset-0 bg-black/60 z-[150]"
onClick={() => setMobileOpen(false)}
/>

<div className="fixed top-0 left-0 h-full w-[320px] bg-white text-[#2b2b2b] z-[200] overflow-y-auto">

<div className="px-8 pt-24 pb-12 space-y-6 text-[14px] tracking-[0.25em]">


<div>

          <div className="w-full flex items-center justify-between">
            <Link href="/" className="hover:opacity-70">HOME</Link>
            <button onClick={() => setHomeOpen(!homeOpen)}>
              {homeOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{homeOpen && (

<div className="flex flex-col gap-4 mt-5 ml-3 text-[13px] text-[#6a6a6a]">

<Link href="/">Knitwear Home</Link>
<Link href="/">Leather Home</Link>
<Link href="/">Ceramics Home</Link>
<Link href="/">Soapmaking Home</Link>
<Link href="/">Bakery Home</Link>
<Link href="/">Carpentry Home</Link>

</div>

)}

</div>


<div>

          <div className="w-full flex items-center justify-between">
            <Link href="/about" className="hover:opacity-70">ABOUT</Link>
            <button onClick={() => setPagesOpen(!pagesOpen)}>
              {pagesOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{pagesOpen && (

<div className="flex flex-col gap-4 mt-5 ml-3 text-[13px] text-[#6a6a6a]">

<Link href="/about">About Me</Link>
<Link href="/team">Our Team</Link>
<Link href="/services">What We Do</Link>
<Link href="/contact">Contact Us</Link>

</div>

)}

</div>


<div>

          <div className="w-full flex items-center justify-between">
            <Link href="/shop" className="hover:opacity-70">SHOP</Link>
            <button onClick={() => setShopOpen(!shopOpen)}>
              {shopOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{shopOpen && (

<div className="flex flex-col gap-4 mt-5 ml-3 text-[13px] text-[#6a6a6a]">

<Link href="/shop">Shop Lists</Link>
<Link href="/shop">Shop Layouts</Link>
<Link href="/shop">Shop Pages</Link>
<Link href="/product">Product Types</Link>

</div>

)}

</div>


<div>

          <div className="w-full flex items-center justify-between">
            <Link href="/blog" className="hover:opacity-70">BLOG</Link>
            <button onClick={() => setBlogOpen(!blogOpen)}>
              {blogOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
            </button>
          </div>

{blogOpen && (

<div className="flex flex-col gap-4 mt-5 ml-3 text-[13px] text-[#6a6a6a]">

<Link href="/blog/sidebar">Right Sidebar</Link>
<Link href="/blog/masonry">Blog Masonry</Link>

</div>

)}

</div>


<Link href="/" className="block pt-2">
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
