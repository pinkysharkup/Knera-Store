import Navbar from "../../components/Navbar";
import MobileNavbar from "../../components/MobileNavbar";
import ContactHero from "../../components/ContactHero";
import ContactInfo from "../../components/ContactInfo";
export default function ContactPage() {
  return (
    <div className="w-full">

      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      <ContactHero />
      <ContactInfo />

    </div>
  );
}