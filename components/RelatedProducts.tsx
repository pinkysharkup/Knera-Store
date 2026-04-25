
"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Semi-sheer Knit",
    price: "180$",
    image: "/images/shop-img-7-600x733.jpg",
    category: "Wool / Knitted",
  },
  {
    id: 2,
    name: "Wool cardigan",
    price: "128$",
    image: "/images/shop-img-6-600x733.jpg",
    category: "Wool / Knitted",
  },
  {
    id: 3,
    name: "Thick muffler",
    price: "145$",
    image: "/images/shop-img-5-600x733.jpg",
    category: "Wool / Knitted",
  },
];

export default function RelatedProducts() {
  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        <h2 className="text-xl md:text-2xl text-center mb-12 md:mb-16">
          Related products
        </h2>


        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {products.map((product) => (

            <div key={product.id} className="group">

              {/* Image */}
              <div className="relative bg-[#f3f1ee] aspect-[600/733] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Hover Button */}
                <Link
                  href="/product"
                  className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  bg-white
                  px-6 md:px-8
                  py-2 md:py-3
                  opacity-100 md:opacity-0
                  md:group-hover:opacity-100
                  transition
                  text-sm
                  "
                >
                  Select options
                </Link>

              </div>


              {/* Content */}
              <div className="mt-4 flex justify-between items-start">

                <div>

                  <h3 className="text-base md:text-lg">
                    {product.name}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500">
                    {product.category}
                  </p>

                </div>


                <p className="text-sm">
                  {product.price}
                </p>

              </div>


              {/* Colors */}
              <div className="flex gap-2 mt-3">

                <span className="w-3 h-3 bg-[#b9b29b] rounded-full"></span>
                <span className="w-3 h-3 bg-[#cfc4bb] rounded-full"></span>
                <span className="w-3 h-3 bg-[#8e8e8e] rounded-full"></span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}