
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

{/* DESKTOP NAVBAR يظهر فقط في الصفحة الرئيسية */}

{pathname === "/" && (

<div className="hidden md:flex items-start justify-between w-full px-12 py-6 absolute top-[60px] left-0 text-white z-[90]">

<div className="flex flex-col gap-6 text-sm tracking-[0.35em]">

{/* HOME */}

<div>

<button
onClick={() => setHomeOpen(!homeOpen)}
className="flex items-center gap-2 hover:opacity-70"
>

HOME
{homeOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
</button>

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

<button
onClick={() => setPagesOpen(!pagesOpen)}
className="flex items-center gap-2 hover:opacity-70"
>

PAGES
{pagesOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
</button>

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

<button
onClick={() => setShopOpen(!shopOpen)}
className="flex items-center gap-2 hover:opacity-70"
>

SHOP
{shopOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
</button>

{shopOpen && (

<div className="flex flex-col gap-3 mt-4 ml-4 text-[13px] tracking-[0.25em] text-white/80">

<Link href="/shop">Shop List</Link>
<Link href="/product">Product Single</Link>

</div>
)}

</div>

{/* BLOG */}

<div>

<button
onClick={() => setBlogOpen(!blogOpen)}
className="flex items-center gap-2 hover:opacity-70"
>

BLOG
{blogOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
</button>

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

<div className="fixed top-0 left-0 h-full w-[300px] bg-white text-black z-[200] overflow-y-auto">

<div className="px-6 pt-20 pb-10 space-y-6">

<Link href="/">HOME</Link>
<Link href="/about">ABOUT</Link>
<Link href="/shop">SHOP</Link>
<Link href="/blog">BLOG</Link>

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