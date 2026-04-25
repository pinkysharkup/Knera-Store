
"use client";

import { useState } from "react";

export default function LoginModal({ open, setOpen }: any) {
  const [activeTab, setActiveTab] = useState("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[420px] bg-white overflow-auto">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-8 py-6">

          <div className="flex gap-10 text-[14px] tracking-[0.2em]">

            <button
              onClick={() => setActiveTab("login")}
              className={`pb-2 ${
                activeTab === "login"
                  ? "border-b border-black"
                  : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setActiveTab("register")}
              className={`pb-2 ${
                activeTab === "register"
                  ? "border-b border-black"
                  : "text-gray-400"
              }`}
            >
              Register
            </button>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            ×
          </button>

        </div>

        {/* Content */}
        <div className="p-8">

          {activeTab === "login" && (
            <>
              <input
                placeholder="User Name *"
                className="w-full border p-4 mb-4"
              />

              <input
                placeholder="Password *"
                className="w-full border p-4 mb-4"
              />

              <div className="flex justify-between text-[13px] mb-6">

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button className="underline">
                  Lost Your password?
                </button>

              </div>

              <button className="w-full border py-4 mb-6">
                Login
              </button>

              <div className="bg-[#cbb8ae] text-white text-center py-4 text-[14px]">
                Not a member yet?{" "}
                <button
                  className="underline"
                  onClick={() => setActiveTab("register")}
                >
                  Sign Up
                </button>
              </div>
            </>
          )}

          {activeTab === "register" && (
            <>
              <input
                placeholder="User Name *"
                className="w-full border p-4 mb-4"
              />

              <input
                placeholder="Email *"
                className="w-full border p-4 mb-4"
              />

              <input
                placeholder="Password *"
                className="w-full border p-4 mb-4"
              />

              <input
                placeholder="Repeat Password *"
                className="w-full border p-4 mb-6"
              />

              <p className="text-[13px] text-gray-600 mb-6">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account,
                and for other purposes described in our privacy policy.
              </p>

              <button className="w-full border py-4">
                Register
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}