"use client";

import Navbar from "../../components/Navbar";
import TeamHero from "../../components/TeamHero";
import MobileNavbar from "../../components/MobileNavbar";
import TeamGrid from "../../components/TeamGrid";
import JoinTeam from "../../components/JoinTeam";
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
      
      <TeamGrid />

      <JoinTeam />
    </div>
  );
}

