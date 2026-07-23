'use client'
import ProductSectionComponent from "@/components/client/ProductSectionComponent";
import PromotionSectionComponent from "@/components/client/PromotionSectionComponent";
import SwiperComponent from "@/components/ui/SwiperComponent";
import getCategories from "@/services/category.service";
import { getProducts } from "@/services/product.service";
import getSliders from "@/services/slider.service";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export default async function Home() {
  const products = await getProducts()
  const sliders = await getSliders()
  const categories = await getCategories()
  console.log(sliders)
  return (
      <div className="container">
          <SwiperComponent>
            {sliders?.data.map((slider: any) => (
              <SwiperSlide key={slider.id}>
                <Image src={slider.image} alt={slider.title} width={1280} height={480} loading="eager" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </SwiperComponent>
          <h1 className="font-bold text-lg py-10">Browse By Category</h1>
          <ProductSectionComponent products={products?.data[0].products} />
          <PromotionSectionComponent />
      </div>
  );
}
