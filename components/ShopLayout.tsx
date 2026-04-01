
"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  page?: number;
};

export default function ShopLayout({ page = 1 }: Props) {
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


{/* PAGE 1 PRODUCTS */}
{page === 1 && (
<>

{/* Products Row 1 */}
<div className="grid grid-cols-2 gap-8">

{/* Product 1 */}
<ProductCard
image="/images/shop-img-2-768x938.jpg"
title="Cotton Cloth"
category="Accessories / Hats & Scarfs"
price="35$"
/>

{/* Product 2 */}
<ProductCard
image="/images/shop-img-3-768x938.jpg"
title="Knit Sweater"
category="Knitted / Wool"
price="170$"
/>

</div>


{/* Products Row 2 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/shop-img-5-600x733.jpg"
title="Knit Scarf"
category="Knitted / Wool"
price="49$"
/>

<ProductCard
image="/images/shop-img-6-600x733.jpg"
title="Knit Cardigan"
category="Knitted / Wool"
price="89$"
/>

</div>


{/* Products Row 3 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/img1.jpg"
title="Patterned Socks"
category="Accessories / Knitted"
price="58$"
/>

<ProductCard
image="/images/girl-img.jpg"
title="Semi-sheer Knit"
category="Knitted / Wool"
price="180$"
/>

</div>


{/* Products Row 4 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/het.jpg"
title="Soft-wool Hat"
category="Accessories / Wool"
price="58$"
/>

<ProductCard
image="/images/socks.jpg"
title="Wool Socks"
category="Knitted / Wool"
price="49$"
/>

</div>

</>
)}
{page === 2 && (
<>
{/* Products Row 1 */}
<div className="grid grid-cols-2 gap-8">

<ProductCard
image="/images/bag-1.jpg"
title="Mini Crochet Bag"
category="Handmade / Crochet"
price="120$"
/>

<ProductCard
image="/images/bag-2.jpg"
title="Crossbody Crochet Bag"
category="Handmade / Crochet"
price="158$"
/>

</div>


{/* Products Row 2 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/bag-4.jpg"
title="Crochet Macrame"
category="Handmade / Crochet"
price="135$"
/>

<ProductCard
image="/images/bag-5.jpg"
title="Crochet Shoulder Bag"
category="Handmade / Crochet"
price="149$"
/>

</div>


{/* Products Row 3 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/bag-6.jpg"
title="Soft Crochet Bag"
category="Handmade / Crochet"
price="165$"
/>

<ProductCard
image="/images/bag-7.jpg"
title="Classic Crochet Bag"
category="Handmade / Crochet"
price="175$"
/>

</div>

</>
)}
{page === 3 && (
<>

{/* Row 1 */}
<div className="grid grid-cols-2 gap-8">

<ProductCard
image="/images/shop-img-8.jpg"
title="Cotton Knit Blanket"
category="Handmade / Knitted"
price="140$"
/>

<ProductCard
image="/images/shop-img-9.jpg"
title="Soft Knit Throw"
category="Handmade / Knitted"
price="155$"
/>

</div>



{/* Row 2 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/shop-img-10.jpg"
title="Knitted Home Decor"
category="Handmade / Home"
price="95$"
/>

<ProductCard
image="/images/macrame1.jpg"
title="Macrame Wall Hanging"
category="Handmade / Macrame"
price="120$"
/>

</div>



{/* Row 3 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/macrame2.jpg"
title="Macrame Plant Holder"
category="Handmade / Macrame"
price="110$"
/>

<ProductCard
image="/images/shop-img-8.jpg"
title="Handmade Knit Decor"
category="Handmade / Knitted"
price="130$"
/>

</div>

</>
)}

{page === 4 && (
<>

{/* Row 1 */}
<div className="grid grid-cols-2 gap-8">

<ProductCard
image="/images/bail bar.jpg"
title="Bail Soap Bar"
category="Handmade / Soap"
price="35$"
/>

<ProductCard
image="/images/bread1.jpg"
title="Natural Bread "
category="Handmade / craft bread"
price="32$"
/>

</div>


{/* Row 2 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/bread2.jpg"
title="Organic Bread "
category="Handmade / craft bread"
price="38$"
/>

<ProductCard
image="/images/bread3.jpg"
title="coffee Bread "
category="Handmade / craft bread"
price="34$"
/>

</div>


{/* Row 3 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/butterball.jpg"
title="Butter Ball Soap"
category="Handmade / Bath"
price="29$"
/>

<ProductCard
image="/images/oscan salt.jpg"
title="Ocean Salt Soap"
category="Handmade / Bath"
price="41$"
/>

</div>


{/* Row 4 */}
<div className="grid grid-cols-2 gap-8 mt-14">

<ProductCard
image="/images/pilling bar.jpg"
title="Peeling Soap Bar"
category="Handmade / Soap"
price="36$"
/>

<ProductCard
image="/images/sage bar.jpg"
title="Sage Herbal Soap"
category="Handmade / Soap"
price="39$"
/>

</div>

</>
)}

{/* Pagination */}
<div className="flex justify-center items-center gap-6 mt-20 text-[14px]">

<Link href="/shop" className="border-b border-black pb-1">
01
</Link>

<Link href="/shop/page2">02</Link>
<Link href="/shop/page3">03</Link>
<Link href="/shop/page4">04</Link>
<Link href="/shop/page5">05</Link>
<Link href="/shop/page6">06</Link>

<Link href="/shop/page2">→</Link>

</div>

          </div>
        </div>



{/* RIGHT SIDEBAR */}
<div className="border-l pl-10">

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
<p>Accessories /</p>
<p>Knitted /</p>
</div>

</div>

      </div>
    </div>
  );
}



function ProductCard({ image, title, category, price }: any) {
  return (
    <div className="group">

      <div className="relative bg-[#f6f4f2]">

        <Image
          src={image}
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
          <h3>{title}</h3>
          <p className="text-gray-500 text-sm">
            {category}
          </p>
        </div>

        <span>{price}</span>

      </div>

    </div>
  );
}