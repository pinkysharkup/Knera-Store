import Navbar from "../../../components/Navbar";
import MobileNavbar from "../../../components/MobileNavbar";
import ProductSingleHero from "../../../components/ProductSingleHero";
import ProductSingleSection from "../../../components/ProductSingleSection";
import ProductTabs from "../../../components/ProductTabs";
import RelatedProducts from "../../../components/RelatedProducts";

export default function ProductSingle() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />

      <ProductSingleHero />
      <ProductSingleSection />
      <ProductTabs />
      <RelatedProducts />

    </div>
  );
}