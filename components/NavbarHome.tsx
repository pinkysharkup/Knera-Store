
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import LoginModal from "./LoginModal";

export default function NavbarHome() {
  const [homeOpen, setHomeOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  // Login Modal
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
    
    <div className="hidden md:flex absolute left-12 top-24 z-[100] text-white">

      <div className="flex flex-col gap-6 text-[13px] tracking-[0.35em]">

        {/* LOGIN */}
        <button
          onClick={() => setOpenLogin(true)}
          className="text-left"
        >
          LOGIN
        </button>


        {/* HOME */}
        <div>
          <button
            onClick={() => setHomeOpen(!homeOpen)}
            className="flex items-center gap-2"
          >
            HOME {homeOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
          </button>

          {homeOpen && (
            <div className="flex flex-col gap-3 mt-3 ml-3 text-[12px] tracking-[0.25em] text-white/80">
              <Link href="/">Knitwear Home</Link>
              <Link href="/">Leather Home</Link>
              <Link href="/">Ceramics Home</Link>
            </div>
          )}
        </div>


        {/* PAGES */}
        <div>
          <button
            onClick={() => setPagesOpen(!pagesOpen)}
            className="flex items-center gap-2"
          >
            PAGES {pagesOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
          </button>

          {pagesOpen && (
            <div className="flex flex-col gap-3 mt-3 ml-3 text-[12px] tracking-[0.25em] text-white/80">
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
            className="flex items-center gap-2"
          >
            SHOP {shopOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
          </button>

          {shopOpen && (
            <div className="flex flex-col gap-3 mt-3 ml-3 text-[12px] tracking-[0.25em] text-white/80">
              <Link href="/shop">Shop List</Link>
              <Link href="/product">Product Single</Link>
            </div>
          )}
        </div>


        {/* BLOG */}
        <div>
          <button
            onClick={() => setBlogOpen(!blogOpen)}
            className="flex items-center gap-2"
          >
            BLOG {blogOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
          </button>

          {blogOpen && (
            <div className="flex flex-col gap-3 mt-3 ml-3 text-[12px] tracking-[0.25em] text-white/80">
              <Link href="/blog/sidebar">Right Sidebar</Link>
              <Link href="/blog/masonry">Blog Masonry</Link>
            </div>
          )}
        </div>

        <Link href="/">LANDING</Link>

      </div>
    </div>


    {/* LOGIN MODAL */}
    <LoginModal open={openLogin} setOpen={setOpenLogin} />

    </>
  );
}