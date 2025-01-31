import FeaturedProducts from "@/app/components/FeaturedProducts";
import Hero from "@/app/components/Hero";
import Logos from "@/app/components/Logos";
import OurProduct from "@/app/components/OurProduct";
import TopCategories from "@/app/components/TopCategories";


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
