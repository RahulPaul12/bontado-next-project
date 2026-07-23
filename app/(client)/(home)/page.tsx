
import ProductSectionComponent from "@/components/client/ProductSectionComponent";
import PromotionSectionComponent from "@/components/client/PromotionSectionComponent";
import { getProducts } from "@/services/product.service";

export default async function Home() {
  const products = await getProducts();
  return (
      <div className="container">
          <ProductSectionComponent products={products?.data[0].products} />
          <PromotionSectionComponent />
          
      </div>
  );
}
