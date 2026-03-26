
// "use client";

// import Image from "next/image";

// export default function ShopLayout() {
//   return (
  
//     <div className="px-12 py-16 bg-white">

//       <div className="grid grid-cols-[1fr_320px] gap-16">
      

//         {/* LEFT SIDE */}
//         <div className="flex justify-center">

//           <div className="w-full max-w-[900px]">

//             {/* Top */}
//             <div className="flex justify-between items-center mb-10">

//               <p className="text-[14px]">
//                 Showing 1–8 of 45 results
//               </p>

//               {/* Sorting */}
//               <div className="relative group">

//                 <div className="border px-8 py-3 text-[14px] cursor-pointer bg-white w-[220px]">
//                   Default sorting
//                 </div>

//                 <div className="absolute hidden group-hover:block w-[220px] bg-white border shadow-md z-50">

//                   <div className="p-3 hover:bg-[#f5f5f5]">Default sorting</div>
//                   <div className="p-3 hover:bg-[#f5f5f5]">Sort by popularity</div>
//                   <div className="p-3 hover:bg-[#f5f5f5]">Sort by average rating</div>
//                   <div className="p-3 hover:bg-[#f5f5f5]">Sort by latest</div>
//                   <div className="p-3 hover:bg-[#f5f5f5]">Sort by price: low to high</div>
//                   <div className="p-3 hover:bg-[#f5f5f5]">Sort by price: high to low</div>

//                 </div>

//               </div>

//             </div>


//             {/* Products */}
//             <div className="grid grid-cols-2 gap-8">

//               {/* Product 1 */}
//               <div className="group">

//                 <div className="relative bg-[#f6f4f2]">

//                   <Image
//                     src="/images/shop-img-2-768x938.jpg"
//                     width={600}
//                     height={750}
//                     alt=""
//                     className="w-full h-[520px] object-cover"
//                   />

//                   <div className="absolute top-5 left-5 bg-white px-4 py-1 text-xs rounded-full">
//                     Sale
//                   </div>

//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

//                     <button className="bg-white px-10 py-3 shadow text-[14px]">
//                       Add to cart
//                     </button>

//                   </div>

//                 </div>

//                 <div className="mt-5">

//                   <h3 className="text-[16px]">
//                     Cotton Cloth
//                   </h3>

//                   <p className="text-[13px] text-gray-500">
//                     Accessories / Hats & Scarfs
//                   </p>

//                   <div className="flex gap-3 mt-2">

//                     <span className="line-through text-gray-400">
//                       45$
//                     </span>

//                     <span>
//                       35$
//                     </span>

//                   </div>

//                 </div>

//               </div>


//               {/* Product 2 */}
//               <div className="group">

//                 <div className="relative bg-[#f6f4f2]">

//                   <Image
//                     src="/images/shop-img-3-768x938.jpg"
//                     width={600}
//                     height={750}
//                     alt=""
//                     className="w-full h-[520px] object-cover"
//                   />

//                   <div className="absolute top-5 left-5 bg-white px-4 py-1 text-xs rounded-full">
//                     Sale
//                   </div>

//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

//                     <button className="bg-white px-10 py-3 shadow text-[14px]">
//                       Select options
//                     </button>

//                   </div>

//                 </div>

//                 <div className="mt-5">

//                   <h3 className="text-[16px]">
//                     Knit Sweater
//                   </h3>

//                   <p className="text-[13px] text-gray-500">
//                     Knitted / Wool
//                   </p>

//                   <div className="flex gap-3 mt-2">

//                     <span className="line-through text-gray-400">
//                       189$
//                     </span>

//                     <span>
//                       170$
//                     </span>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>



//         {/* RIGHT SIDEBAR */}
//         <div className="border-l pl-10">

//           {/* Filter by price */}
//           <h3 className="text-[22px] mb-6">
//             Filter by Price
//           </h3>

//           <div className="mb-8">

//             <div className="h-[2px] bg-gray-300 relative">

//               <div className="absolute left-0 w-3 h-3 bg-black rounded-full -top-1"></div>
//               <div className="absolute right-0 w-3 h-3 bg-black rounded-full -top-1"></div>

//             </div>

//             <div className="flex justify-between mt-3 text-[13px]">
//               <span>10$ — 290$</span>
//               <button className="underline">
//                 Apply
//               </button>
//             </div>

//           </div>


//           {/* Categories */}
//           <h3 className="text-[22px] mb-6">
//             Categories
//           </h3>

//           <div className="space-y-3 text-[14px]">

//             <p>Bags /</p>
//             <p>Belts /</p>
//             <p>Premium /</p>
//             <p>Shoes /</p>
//             <p>Bath Products /</p>
//             <p>Bubble Bar /</p>
//             <p>Organic Herbs /</p>
//             <p>Craft Bread /</p>
//             <p>Rye bread /</p>
//             <p>Sourdough /</p>
//             <p>Sweet Passtiries /</p>
//             <p>Woodwork /</p>
//             <p>Wool /</p>
//             <p>Accessories /</p>
//             <p>Hats & Scarfs /</p>
//             <p>Knitted /</p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
"use client";

import Image from "next/image";

export default function ShopLayout() {
  return (
  
    <div className="px-12 py-16 bg-white">

      <div className="grid grid-cols-[1fr_320px] gap-16">
      

        {/* LEFT SIDE */}
        <div className="flex justify-center">

          <div className="w-full max-w-[900px]">

            {/* Top */}
            <div className="flex justify-between items-center mb-10">

              <p className="text-[14px]">
                Showing 1–8 of 45 results
              </p>

              {/* Sorting */}
              <div className="relative group">

                <div className="border px-8 py-3 text-[14px] cursor-pointer bg-white w-[220px]">
                  Default sorting
                </div>

                <div className="absolute hidden group-hover:block w-[220px] bg-white border shadow-md z-50">

                  <div className="p-3 hover:bg-[#f5f5f5]">Default sorting</div>
                  <div className="p-3 hover:bg-[#f5f5f5]">Sort by popularity</div>
                  <div className="p-3 hover:bg-[#f5f5f5]">Sort by average rating</div>
                  <div className="p-3 hover:bg-[#f5f5f5]">Sort by latest</div>
                  <div className="p-3 hover:bg-[#f5f5f5]">Sort by price: low to high</div>
                  <div className="p-3 hover:bg-[#f5f5f5]">Sort by price: high to low</div>

                </div>

              </div>

            </div>


            {/* Products Row 1 */}
            <div className="grid grid-cols-2 gap-8">

              {/* Product 1 */}
              <div className="group">

                <div className="relative bg-[#f6f4f2]">

                  <Image
                    src="/images/shop-img-2-768x938.jpg"
                    width={600}
                    height={750}
                    alt=""
                    className="w-full h-[520px] object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-white px-4 py-1 text-xs rounded-full">
                    Sale
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

                    <button className="bg-white px-10 py-3 shadow text-[14px]">
                      Add to cart
                    </button>

                  </div>

                </div>

                <div className="mt-5">

                  <h3 className="text-[16px]">
                    Cotton Cloth
                  </h3>

                  <p className="text-[13px] text-gray-500">
                    Accessories / Hats & Scarfs
                  </p>

                  <div className="flex gap-3 mt-2">

                    <span className="line-through text-gray-400">
                      45$
                    </span>

                    <span>
                      35$
                    </span>

                  </div>

                </div>

              </div>


              {/* Product 2 */}
              <div className="group">

                <div className="relative bg-[#f6f4f2]">

                  <Image
                    src="/images/shop-img-3-768x938.jpg"
                    width={600}
                    height={750}
                    alt=""
                    className="w-full h-[520px] object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-white px-4 py-1 text-xs rounded-full">
                    Sale
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

                    <button className="bg-white px-10 py-3 shadow text-[14px]">
                      Select options
                    </button>

                  </div>

                </div>

                <div className="mt-5">

                  <h3 className="text-[16px]">
                    Knit Sweater
                  </h3>

                  <p className="text-[13px] text-gray-500">
                    Knitted / Wool
                  </p>

                  <div className="flex gap-3 mt-2">

                    <span className="line-through text-gray-400">
                      189$
                    </span>

                    <span>
                      170$
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* Products Row 2 */}
            <div className="grid grid-cols-2 gap-8 mt-14">

              {/* Product 3 */}
              <div className="group">

                <div className="relative bg-[#f6f4f2]">

                  <Image
                    src="/images/shop-img-5-600x733.jpg"
                    width={600}
                    height={733}
                    alt=""
                    className="w-full h-[520px] object-cover"
                  />

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

                    <button className="bg-white px-10 py-3 shadow text-[14px]">
                      Add to cart
                    </button>

                  </div>

                </div>

                <div className="mt-5 flex justify-between items-start">

                  <div>
                    <h3 className="text-[16px]">
                      Wool Socks
                    </h3>

                    <p className="text-[13px] text-gray-500">
                      Knitted / Wool
                    </p>
                  </div>

                  <span className="text-[14px]">
                    49$
                  </span>

                </div>

              </div>


              {/* Product 4 */}
              <div className="group">

                <div className="relative bg-[#f6f4f2]">

                  <Image
                    src="/images/shop-img-6-600x733.jpg"
                    width={600}
                    height={733}
                    alt=""
                    className="w-full h-[520px] object-cover"
                  />

                  <div className="absolute top-5 right-5 bg-white px-4 py-1 text-xs rounded-full">
                    New
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

                    <button className="bg-white px-10 py-3 shadow text-[14px]">
                      Add to cart
                    </button>

                  </div>

                </div>

                <div className="mt-5 flex justify-between items-start">

                  <div>
                    <h3 className="text-[16px]">
                      Knitted Scarf
                    </h3>

                    <p className="text-[13px] text-gray-500">
                      Knitted / Wool
                    </p>
                  </div>

                  <span className="text-[14px]">
                    89$
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* RIGHT SIDEBAR */}
        {/* <div className="border-l pl-10">

          <h3 className="text-[22px] mb-6">
            Filter by Price
          </h3>

          <div className="mb-8">

            <div className="h-[2px] bg-gray-300 relative">

              <div className="absolute left-0 w-3 h-3 bg-black rounded-full -top-1"></div>
              <div className="absolute right-0 w-3 h-3 bg-black rounded-full -top-1"></div>

            </div>

            <div className="flex justify-between mt-3 text-[13px]">
              <span>10$ — 290$</span>
              <button className="underline">Apply</button>
            </div>

          </div>


          <h3 className="text-[22px] mb-6">
            Categories
          </h3>

          <div className="space-y-3 text-[14px]">

            <p>Bags /</p>
            <p>Belts /</p>
            <p>Premium /</p>
            <p>Shoes /</p>
            <p>Bath Products /</p>
            <p>Bubble Bar /</p>
            <p>Organic Herbs /</p>
            <p>Craft Bread /</p>
            <p>Rye bread /</p>
            <p>Sourdough /</p>
            <p>Sweet Passtiries /</p>
            <p>Woodwork /</p>
            <p>Wool /</p>
            <p>Accessories /</p>
            <p>Hats & Scarfs /</p>
            <p>Knitted /</p>

          </div>

        </div>

      </div>

    </div> */}
    {/* RIGHT SIDEBAR */}
<div className="border-l pl-10">

  {/* Filter by price */}
  <h3 className="text-[22px] mb-6">
    Filter by Price
  </h3>

  <div className="mb-8">

    <div className="h-[2px] bg-gray-300 relative">
      <div className="absolute left-0 w-3 h-3 bg-black rounded-full -top-1"></div>
      <div className="absolute right-0 w-3 h-3 bg-black rounded-full -top-1"></div>
    </div>

    <div className="flex justify-between mt-3 text-[13px]">
      <span>10$ — 290$</span>
      <button className="underline">Apply</button>
    </div>

  </div>


  {/* Categories */}
  <h3 className="text-[22px] mb-6">
    Categories
  </h3>

  <div className="space-y-3 text-[14px] mb-14">

    <p>Bags /</p>
    <p>Belts /</p>
    <p>Premium /</p>
    <p>Shoes /</p>
    <p>Bath Products /</p>
    <p>Bubble Bar /</p>
    <p>Organic Herbs /</p>
    <p>Craft Bread /</p>
    <p>Rye bread /</p>
    <p>Sourdough /</p>
    <p>Sweet Passtiries /</p>
    <p>Woodwork /</p>
    <p>Wool /</p>
    <p>Accessories /</p>
    <p>Hats & Scarfs /</p>
    <p>Knitted /</p>

  </div>



  {/* Related Products */}
  <h3 className="text-[22px] mb-6">
    Related Products
  </h3>


  {/* Bag 1 */}
  <div className="flex gap-4 mb-6">

    <Image
      src="/images/h6-shop-slider-img-2-768x938.jpg"
      width={80}
      height={100}
      alt=""
      className="object-cover"
    />

    <div>

      <p className="text-[15px]">
        Mini Bag
      </p>

      <span className="text-[14px]">
        120$
      </span>

    </div>

  </div>


  {/* Bag 2 */}
  <div className="flex gap-4 mb-10">

    <Image
      src="/images/h6-shop-slider-img-3-768x938.jpg"
      width={80}
      height={100}
      alt=""
      className="object-cover"
    />

    <div>

      <p className="text-[15px]">
        Crossbody Bag
      </p>

      <span className="text-[14px]">
        158$
      </span>

    </div>

  </div>



  {/* Tags */}
  <h3 className="text-[22px] mb-4">
    Tags
  </h3>

  <div className="text-[14px] leading-8 text-gray-600">

    Basics / Bread / Handmade / Knit / Leather /
    Soaps / Special / Wood

  </div>

</div>
</div>
</div>
  );
}