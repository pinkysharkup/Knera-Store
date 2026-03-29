
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

<div className="mt-5 flex justify-between">

<div>
<h3 className="text-[16px]">
Knit Scarf
</h3>

<p className="text-[13px] text-gray-500">
Knitted / Wool
</p>
</div>

<span>49$</span>

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

<div className="mt-5 flex justify-between">

<div>
<h3 className="text-[16px]">
Knit Cardigan
</h3>

<p className="text-[13px] text-gray-500">
Knitted / Wool
</p>
</div>

<span>89$</span>

</div>

</div>

</div>



{/* Products Row 3 */}
<div className="grid grid-cols-2 gap-8 mt-14">

{/* Product 5 */}
<div className="group">

<div className="relative bg-[#f6f4f2]">

<Image
src="/images/img1.jpg"
width={600}
height={733}
alt=""
className="w-full h-[520px] object-cover"
/>

<div className="absolute top-5 left-5 bg-white px-4 py-1 text-xs rounded-full">
Sold
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

<button className="bg-white px-10 py-3 shadow text-[14px]">
Add to cart
</button>

</div>

</div>

<div className="mt-5 flex justify-between">

<div>
<h3>Patterned Socks</h3>
<p className="text-gray-500 text-sm">
Accessories / Knitted
</p>
</div>

<span>58$</span>

</div>

</div>



{/* Product 6 */}
<div className="group">

<div className="relative bg-[#f6f4f2]">

<Image
src="/images/girl-img.jpg"
width={600}
height={733}
alt=""
className="w-full h-[520px] object-cover"
/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">

<button className="bg-white px-10 py-3 shadow text-[14px]">
Add to cart
</button>

</div>

</div>

<div className="mt-5 flex justify-between">

<div>

<h3>Semi-sheer Knit</h3>

<p className="text-gray-500 text-sm">
Knitted / Wool
</p>

<div className="flex gap-2 mt-2">
<span className="w-2 h-2 rounded-full bg-[#c9b9a5]"></span>
<span className="w-2 h-2 rounded-full bg-[#aab6a1]"></span>
<span className="w-2 h-2 rounded-full bg-[#cbb6b0]"></span>
</div>

</div>

<span>180$</span>

</div>

</div>

</div>



{/* Products Row 4 */}
<div className="grid grid-cols-2 gap-8 mt-14">

{/* Product 7 */}
<div className="group">

<div className="relative bg-[#f6f4f2]">

<Image
src="/images/het.jpg"
width={600}
height={733}
alt=""
className="w-full h-[520px] object-cover"
/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">

<button className="bg-white px-10 py-3 shadow text-[14px]">
Add to cart
</button>

</div>

</div>

<div className="mt-5 flex justify-between">

<div>
<h3>Soft-wool Hat</h3>
<p className="text-gray-500 text-sm">
Accessories / Wool
</p>
</div>

<span>58$</span>

</div>

</div>



{/* Product 8 */}
<div className="group">

<div className="relative bg-[#f6f4f2]">

<Image
src="/images/socks.jpg"
width={600}
height={733}
alt=""
className="w-full h-[520px] object-cover"
/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">

<button className="bg-white px-10 py-3 shadow text-[14px]">
Add to cart
</button>

</div>

</div>

<div className="mt-5 flex justify-between">

<div>
<h3>Wool Socks</h3>
<p className="text-gray-500 text-sm">
Knitted / Wool
</p>
</div>

<span>49$</span>

</div>

</div>
{/* Pagination */}
<div className="flex justify-center items-center gap-6 mt-20 text-[14px]">

<button className="border-b border-black pb-1">
01
</button>

<button className="hover:border-b hover:border-black pb-1">
02
</button>

<button className="hover:border-b hover:border-black pb-1">
03
</button>

<button className="hover:border-b hover:border-black pb-1">
04
</button>

<button className="hover:border-b hover:border-black pb-1">
05
</button>

<button className="hover:border-b hover:border-black pb-1">
06
</button>

<button className="text-[18px]">
→
</button>

</div>

</div>
</div>
</div>
  

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
  <div className="flex gap-4 mb-6 items-start">

    <div className="relative w-[100px] h-[130px]">
      <Image
        src="/images/h6-shop-slider-img-2-768x938.jpg"
        alt=""
        fill
        className="object-cover"
      />
    </div>

    <div>

      <p className="text-[16px]">
        Mini Bag
      </p>

      <span className="text-[14px]">
        120$
      </span>

    </div>

  </div>


  {/* Bag 2 */}
  <div className="flex gap-4 mb-10 items-start">

    <div className="relative w-[100px] h-[130px]">
      <Image
        src="/images/h6-shop-slider-img-3-768x938.jpg"
        alt=""
        fill
        className="object-cover"
      />
    </div>

    <div>

      <p className="text-[16px]">
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

  <div className="text-[14px] leading-8 text-gray-600 mb-10">

    Basics / Bread / Handmade / Knit / Leather /
    Soaps / Special / Wood

  </div>



  {/* Instagram */}
  <h3 className="text-[22px] mb-6">
    Instagram
  </h3>

  <div className="relative w-full h-[200px]">

    <Image
      src="/images/insta-gllery-2.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>
  </div>
  </div>
  </div>
  );
}
