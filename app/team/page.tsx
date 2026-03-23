"use client";

import Navbar from "../../components/Navbar";
import TeamHero from "../../components/TeamHero";
import MobileNavbar from "../../components/MobileNavbar";

export default function TeamPage() {
  return (
    <div className="w-full">

      {/* Desktop فقط */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile فقط */}
      <MobileNavbar />

      {/* Hero */}
      <TeamHero />

    </div>
  );
}

