import Navbar from "../../components/Navbar";
import WhatWeDoHero from "../../components/WhatWeDoHero";
import WhatWeMade from "../../components/WhatWeMade";
import IdeaToProduct from "../../components/IdeaToProduct";

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 HERO */}
      <WhatWeDoHero />

      {/* 🔥 WHAT WE MADE */}
      <WhatWeMade />

      {/* 🔥 IDEA TO PRODUCT */}
      <IdeaToProduct />

    </div>
  );
}