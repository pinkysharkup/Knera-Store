"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[420px] max-w-[90%] shadow-2xl z-10">

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-4 text-center ${
              activeTab === "login"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-4 text-center ${
              activeTab === "register"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        <div className="p-8">

          {activeTab === "login" ? (
            <>
              <input
                type="text"
                placeholder="User Name *"
                className="w-full border px-4 py-3 mb-4 outline-none focus:border-black"
              />

              <input
                type="password"
                placeholder="Password *"
                className="w-full border px-4 py-3 mb-4 outline-none focus:border-black"
              />

              <div className="flex justify-between items-center text-sm mb-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button className="underline">
                  Lost Your password?
                </button>
              </div>

              <button className="w-full border py-3 font-medium hover:bg-black hover:text-white transition">
                Login
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="User Name *"
                className="w-full border px-4 py-3 mb-4 outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full border px-4 py-3 mb-4 outline-none focus:border-black"
              />

              <input
                type="password"
                placeholder="Password *"
                className="w-full border px-4 py-3 mb-6 outline-none focus:border-black"
              />

              <button className="w-full border py-3 font-medium hover:bg-black hover:text-white transition">
                Register
              </button>
            </>
          )}
        </div>

        {/* Bottom bar */}
        {activeTab === "login" && (
          <div className="bg-[#b9a7a3] text-white text-center py-4 text-sm">
            Not a member yet?{" "}
            <button
              onClick={() => setActiveTab("register")}
              className="underline"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}