"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductTabs() {

  const [activeTab, setActiveTab] = useState("description");

  return (

    <section className="w-full bg-white py-24">

      <div className="max-w-[1400px] mx-auto px-10">


        {/* Tabs */}
        <div className="flex gap-14 text-lg font-medium mb-10">

          <button
            onClick={() => setActiveTab("description")}
            className={`font-medium ${
              activeTab === "description"
                ? "border-b border-black"
                : ""
            } pb-2`}
          >
            Description
          </button>


          <button
            onClick={() => setActiveTab("additional")}
            className={`${
              activeTab === "additional"
                ? "border-b border-black"
                : ""
            } pb-2`}
          >
            Additional information
          </button>


          <button
            onClick={() => setActiveTab("reviews")}
            className={`${
              activeTab === "reviews"
                ? "border-b border-black"
                : ""
            } pb-2`}
          >
            Reviews (1)
          </button>

        </div>



        {/* Description */}
        {activeTab === "description" && (

          <p className="text-gray-600 leading-relaxed max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris. Duis 
            at tellus at urna condimentum mattis pellentesque id nibh. Integer malesuada nunc 
            vel risus commodo viverra maecenas accumsan lacus. Libero volutpat sed cras ornare 
            arcu. Potenti nullam ac tortor vitae purus faucibus ornare. Nisl vel pretium lectus 
            quam id leo. Fringilla est ullamcorper eget nulla. Morbi tincidunt augue interdum 
            velit euismod in pellentesque. Nulla aliquet porttitor lacus luctus accumsan tortor 
            posuere ac.
          </p>

        )}



        {/* Additional Info */}
        {activeTab === "additional" && (

          <div className="border">

            <div className="grid grid-cols-2 border-b">

              <div className="p-6 border-r">
                Weight
              </div>

              <div className="p-6">
                0.2 kg
              </div>

            </div>


            <div className="grid grid-cols-2">

              <div className="p-6 border-r">
                Dimensions
              </div>

              <div className="p-6">
                15 × 15 × 30 cm
              </div>

            </div>

          </div>

        )}



        {/* Reviews */}
        {activeTab === "reviews" && (

          <div className="space-y-10">

            <div>
              <h3 className="text-lg mb-6">
                1 review for Wool Socks
              </h3>


              <div className="flex gap-6">

                <Image
                  src="/images/review.jpg"
                  alt="review"
                  width={70}
                  height={70}
                  className="rounded-full"
                />


                <div>

                  <div className="flex items-center gap-2 mb-2">
                    ★☆☆☆☆
                  </div>

                  <p className="font-medium">
                    Anna Avilant
                    <span className="text-gray-500 ml-2 text-sm">
                      | May 15, 2023
                    </span>
                  </p>

                  <p className="text-gray-600 mt-2 max-w-3xl">
                    Habitant morbi tristique senectus et. Netus et malesuada fames 
                    ac turpis egestas sed. Tellus orci ac auctor augue mauris. 
                    Nunc vel risus commodo viverra maecenas accumsan.
                  </p>

                </div>

              </div>

            </div>



            {/* Add Review */}
            <div>

              <h3 className="text-lg mb-4">
                Add a review
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Your email address will not be published. Required fields are marked *
              </p>


              <p className="mb-2">
                Your Rating *
              </p>

              <div className="mb-6">
                ☆☆☆☆☆
              </div>


              <textarea
                placeholder="Your Review *"
                className="w-full border p-4 h-40 mb-4"
              />


              <input
                placeholder="Your Name *"
                className="w-full border p-3 mb-4"
              />


              <input
                placeholder="Your Email *"
                className="w-full border p-3 mb-4"
              />


              <div className="flex items-center gap-2 mb-6">
                <input type="checkbox"/>
                <p className="text-sm">
                  Save my name, email, and website in this browser for the next time I comment.
                </p>
              </div>


              <button className="border px-8 py-2">
                Submit
              </button>

            </div>

          </div>

        )}


      </div>

    </section>

  );
}