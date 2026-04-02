
"use client";

import Image from "next/image";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function ProductSingleSection() {

  const [qty, setQty] = useState(1);
  const [shareOpen, setShareOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("/images/socks.jpg");

  const images = [
    "/images/socks.jpg",
    "/images/socks.jpg",
    "/images/socks.jpg",
    "/images/socks.jpg",
  ];

  const increase = () => setQty((prev) => prev + 1);

  const decrease = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  return (

    <section className="w-full bg-white py-16 md:py-24">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">


          {/* LEFT */}
          <div className="flex gap-4 md:gap-6">

            {/* Thumbnails */}
            <div className="flex flex-col gap-4 md:gap-6">

              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="relative w-[70px] md:w-[100px] aspect-square bg-[#f3f1ee] cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="product"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}

            </div>


            {/* Main Image */}
            <div className="relative w-full aspect-square bg-[#f3f1ee]">

              <Image
                src={activeImage}
                alt="product"
                fill
                className="object-contain p-6 md:p-12"
              />

            </div>

          </div>



          {/* RIGHT */}
          <div className="space-y-6 pt-4">

            <h1 className="text-2xl md:text-3xl font-medium">
              Wool Socks
            </h1>

            <p className="text-lg">
              $49
            </p>

            <div className="flex items-center gap-2 text-sm">
              ★☆☆☆☆
              <span className="text-gray-500">
                (1 customer review)
              </span>
            </div>


            <p className="text-gray-600 leading-relaxed max-w-md text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro 
              quisquam est, qui dolorem
            </p>


            {/* Quantity */}
            <div className="flex items-center gap-4 md:gap-5">

              <div className="flex border border-black">

                <button
                  onClick={decrease}
                  className="px-3 py-2"
                >
                  -
                </button>

                <div className="px-4 md:px-5 py-2">
                  {qty}
                </div>

                <button
                  onClick={increase}
                  className="px-3 py-2"
                >
                  +
                </button>

              </div>


              <button className="border border-black px-6 md:px-10 py-2 hover:bg-black hover:text-white transition">
                Add to cart
              </button>

            </div>



            {/* Info */}
            <div className="pt-6 space-y-2">

              <h3 className="text-lg">
                Info
              </h3>

              <p className="text-sm text-gray-600">
                SKU: <span className="text-black">007</span>
              </p>

              <p className="text-sm text-gray-600">
                Categories:
                <span className="text-black"> Knitted / Wool</span>
              </p>

              <p className="text-sm text-gray-600">
                Tags:
                <span className="italic text-black">
                  {" "}Handmade / Knit / Special
                </span>
              </p>

            </div>



            {/* Share */}
            <div className="pt-4">

              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="flex items-center gap-2"
              >
                Share <Share2 size={15}/>
              </button>


              {shareOpen && (

                <div className="flex mt-3 border w-fit">

                  <button className="px-5 md:px-6 py-2 border-r">
                    <FaFacebookF size={13}/>
                  </button>

                  <button className="px-5 md:px-6 py-2 border-r">
                    <FaTwitter size={13}/>
                  </button>

                  <button className="px-5 md:px-6 py-2">
                    <FaPinterestP size={13}/>
                  </button>

                </div>

              )}

            </div>

          </div>


        </div>

      </div>

    </section>

  );
}