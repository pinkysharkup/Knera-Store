
"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    items,
    subtotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-40 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          Discover handcrafted pieces made with care.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-24">

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Shopping Cart
        </h1>
        <p className="text-gray-500">
          Review your selected handmade pieces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Products */}
        <div className="lg:col-span-2 space-y-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-8 border-b border-gray-200 pb-10"
            >
              <div className="relative w-32 aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">

                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.price} EGP
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-6">

                  {/* Quantity */}
                  <div className="flex items-center border rounded-full px-4 py-2 gap-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-lg"
                    >
                      –
                    </button>

                    <span className="text-sm">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-gray-400 hover:text-red-500 transition"
                  >
                    Remove
                  </button>

                </div>

              </div>

              <div className="text-lg font-medium">
                {(item.price * item.quantity).toFixed(2)} EGP
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border border-gray-200 rounded-3xl p-10 h-fit shadow-sm">

          <h3 className="text-xl font-semibold mb-8">
            Order Summary
          </h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} EGP</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-8 pt-6 border-t">
            <span>Total</span>
            <span>{subtotal.toFixed(2)} EGP</span>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-full mt-10 hover:scale-105 transition-all duration-300">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </section>
  );
}
