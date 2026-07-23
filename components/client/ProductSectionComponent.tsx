'use client'

import { useState } from "react";
import ProductCard from "../ui/productCard";
import ProductDetails from "../ui/productDetailsModal";

const ProductSectionComponent = ({ products }: { products: any }) => {
  const [selectedSlug, setSelectedSlug] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const handleProductClick = (slug: string) => {
    setSelectedSlug(slug);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={() => handleProductClick(product.slug)}
          />
        ))}
      </div>

      <ProductDetails
        slug={selectedSlug}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ProductSectionComponent