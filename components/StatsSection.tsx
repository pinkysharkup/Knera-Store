"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StatsSection() {

const [projects,setProjects] = useState(0);
const [artisans,setArtisans] = useState(0);
const [experience,setExperience] = useState(0);

useEffect(()=>{

let p=0;
let a=0;
let e=0;

const interval=setInterval(()=>{

if(p<1500) p+=25;
if(a<300) a+=5;
if(e<20) e+=1;

setProjects(p);
setArtisans(a);
setExperience(e);

if(p>=1500 && a>=300 && e>=20) clearInterval(interval);

},30);

},[]);

return (

<section className="relative w-full h-[720px] overflow-hidden">

{/* BACKGROUND */}

<Image
src="/images/p2-background-img-1.jpg"
alt="background"
fill
className="object-cover"
/>

{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-black/40"/>

{/* CONTENT */}

<div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-[120px]">

{/* LEFT SIDE */}

<div className="text-white w-[420px]">

<h3 className="text-[30px] font-serif mb-14 leading-[40px]">
Unique Objects <br/>
of our Dream
</h3>

<div className="grid grid-cols-2 gap-x-16 gap-y-16">

<div>

<h4 className="text-[48px] font-serif">
100 %
</h4>

<p className="text-[18px] mt-2">
Handcrafted
</p>

<p className="text-[14px] text-white/70 mt-2 leading-[22px]">
Quis nostruduid suis exercitation.
</p>

</div>

<div>

<h4 className="text-[48px] font-serif">
{experience} <span className="text-[20px]">years</span>
</h4>

<p className="text-[18px] mt-2">
Experience
</p>

<p className="text-[14px] text-white/70 mt-2 leading-[22px]">
Quis nostruduid suis exercitation.
</p>

</div>

<div>

<h4 className="text-[48px] font-serif">
{projects} +
</h4>

<p className="text-[18px] mt-2">
Projects
</p>

<p className="text-[14px] text-white/70 mt-2 leading-[22px]">
Quis nostruduid suis exercitation.
</p>

</div>

<div>

<h4 className="text-[48px] font-serif">
{artisans} +
</h4>

<p className="text-[18px] mt-2">
Artisans
</p>

<p className="text-[14px] text-white/70 mt-2 leading-[22px]">
Quis nostruduid suis exercitation.
</p>

</div>

</div>

</div>

{/* VIDEO IMAGE */}

<div className="absolute right-[120px]">

<div className="relative w-[620px] h-[420px]">

<Image
src="/images/p2-video-img.jpg"
alt="video"
fill
className="object-cover"
/>

{/* PLAY BUTTON */}

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-lg">

<div className="w-0 h-0 border-l-[14px] border-l-black border-y-[10px] border-y-transparent ml-1"/>

</div>

</div>

</div>

</div>

</div>

</section>

);

}

