import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import OurProduct from "@/components/OurProduct";
import TopCategories from "@/components/TopCategories";


export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <FeaturedProducts />
      <TopCategories />
      <OurProduct />
      
    </div>
  );
}
