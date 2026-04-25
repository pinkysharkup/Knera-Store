"use client";

import PageWrapper from "../../components/PageWrapper";
import Link from "next/link";

export default function AccountPage() {
  return (
    <PageWrapper>
      <div className="w-full pt-[140px] md:pt-[180px] pb-20 md:pb-32 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold [font-family:var(--font-playfair)] text-[#2b2b2b]">
              My Account
            </h1>
            <p className="mt-4 text-[#6c6c6c]">Manage your orders, wishlist, and settings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-10">
            {/* Sidebar */}
            <div className="flex flex-col space-y-4 text-[15px] md:text-[16px]">
              <Link href="/account" className="font-semibold text-[#2b2b2b] border-l-2 border-[#2b2b2b] pl-4">Dashboard</Link>
              <Link href="/account" className="text-[#6c6c6c] hover:text-[#2b2b2b] pl-4 border-l-2 border-transparent transition">Orders</Link>
              <Link href="/account" className="text-[#6c6c6c] hover:text-[#2b2b2b] pl-4 border-l-2 border-transparent transition">Wishlist</Link>
              <Link href="/account" className="text-[#6c6c6c] hover:text-[#2b2b2b] pl-4 border-l-2 border-transparent transition">Settings</Link>
              <button className="text-left text-[#6c6c6c] hover:text-[#2b2b2b] pl-4 border-l-2 border-transparent transition mt-4">Log Out</button>
            </div>

            {/* Content */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm space-y-8">
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b]">Welcome back, User</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-[#d7d2cc] p-6 rounded-2xl">
                  <h3 className="text-[#6c6c6c] text-sm mb-1 tracking-wider">NAME</h3>
                  <p className="text-[#2b2b2b] font-medium">Jane Doe</p>
                </div>
                <div className="border border-[#d7d2cc] p-6 rounded-2xl">
                  <h3 className="text-[#6c6c6c] text-sm mb-1 tracking-wider">EMAIL</h3>
                  <p className="text-[#2b2b2b] font-medium">jane@example.com</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#d7d2cc]">
                <h3 className="text-xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Recent Orders</h3>
                <p className="text-[#6c6c6c] text-[15px]">You haven't placed any orders yet.</p>
                <Link href="/shop" className="inline-block mt-4 bg-[#e9e6e2] px-8 py-3 text-[13px] tracking-wide hover:bg-[#dcd8d3] transition text-[#2b2b2b]">
                  Start Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
