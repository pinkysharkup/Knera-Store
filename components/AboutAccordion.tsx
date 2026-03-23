"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutAccordion() {

const [open,setOpen] = useState(0);

const items = [
{
title:"Handmade Products",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco dolor sit amet."
},
{
title:"Sustainable Materials",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{
title:"Skilled Artisans",
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
];

return (

<section className="w-full bg-[#f5f3ef] py-[140px]">

<div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[120px] items-center px-[20px] md:px-0">

{/* LEFT IMAGE */}

<div>

<Image
src="/images/p2-img-2 (1).jpg"
alt="about"
width={650}
height={700}
className="w-full object-cover"
/>

</div>

{/* RIGHT CONTENT */}

<div>

<h2 className="text-[42px] font-serif text-[#2b2b2b] mb-10">
More About Us
</h2>

<div className="border-t border-[#cfcfcf]">

{items.map((item,index)=>{

const active = open===index;

return(

<div key={index} className="border-b border-[#cfcfcf]">

<button
onClick={()=>setOpen(active?-1:index)}
className="w-full flex items-center gap-6 py-6 text-left"

>

<span className="text-[24px] w-[20px]">

{active ? "–" : "+"}

</span>

<span className="text-[18px] tracking-wide text-[#2b2b2b]">

{item.title}

</span>

</button>

{active && (

<p className="text-[14px] text-[#6a6a6a] leading-[26px] pb-8 pl-[46px] pr-[40px]">

{item.text}

</p>

)}

</div>

);

})}

</div>

</div>

</div>

</section>

);
}
