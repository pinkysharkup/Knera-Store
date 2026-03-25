
import Navbar from "../../components/Navbar";
import MobileNavbar from "../../components/MobileNavbar";
import WhatWeDoHero from "../../components/WhatWeDoHero";
import WhatWeMade from "../../components/WhatWeMade";
import IdeaToProduct from "../../components/IdeaToProduct";
import AboutCEO from "../../components/AboutCEO";
import FormartaOffers from "../../components/FormartaOffers";

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      {/* 🔥 HERO */}
      <WhatWeDoHero />

      {/* 🔥 WHAT WE MADE */}
      <WhatWeMade />

      {/* 🔥 IDEA TO PRODUCT */}
      <IdeaToProduct />

      {/* 🔥 ABOUT CEO */}
      <AboutCEO />

      {/* 🔥 FORMARTA OFFERS */}
      <FormartaOffers />

    </div>
  );
}