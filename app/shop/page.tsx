
import Navbar from "../../components/Navbar";
import MobileNavbar from "../../components/MobileNavbar";
import TopBar from "../../components/TopBar";
import ShopHero from "../../components/ShopHero";
import ShopLayout from "../../components/ShopLayout";
export default function ShopPage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <MobileNavbar />

      <ShopHero />
      <ShopLayout />
    </div>
  );
}