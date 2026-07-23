'use client'
import useModal from "@/hooks/useModal"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"

    const ProductCard = ({ product, onOpen,}: {product: any; onOpen: (slug: string) => void;}) => {
    const { handleModalOpen } = useModal();

    return (
        <div className="bg-white p-2 rounded-xl sm:rounded-2xl flex flex-col sm:border sm:border-gray-300 transition-all duration-300 sm:hover:shadow-hover group">
            <figure onClick={()=>{handleModalOpen('product-details-modal');onOpen(product.slug)}} className="relative overflow-hidden rounded-xl shrink-0 isolate cursor-pointer">
                <label hidden={!product.flash_sale} className="capitalize text-xs font-semibold rounded-xl py-1 px-2 shadow-badge absolute top-3 left-3 z-10 bg-secondary text-white rtl:right-2">Flash Sale</label>
                <Image width={500} height={500} loading="eager" className="w-full rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3" src={product.cover} alt={product.name} />
                <button className="lab-line-heart text-secondary w-5 h-5 leading-5 sm:w-7 sm:h-7 sm:leading-7 rounded-full text-center text-xs sm:text-base shadow-badge absolute top-2 ltr:right-2 rtl:left-2 z-10 bg-white flex items-center justify-center shadow-sm">
                    <Heart size={16}/>
                </button>
                <button  className="lab-line-heart text-white w-5 h-5 leading-5 sm:w-7 sm:h-7 sm:leading-7 rounded-full text-center text-xs sm:text-base shadow-badge absolute bottom-2 ltr:right-2 rtl:left-2 z-10 bg-primary flex items-center justify-center shadow-sm">
                    <ShoppingBag size={16}/>
                </button>
            </figure>
            <div className="pt-4 pb-1 mobile:px-1.5 h-full flex flex-col gap-3 justify-between">
                <h2 className="capitalize text-xs sm:text-sm font-medium">{product.name}</h2>
                <p className="text-[10px] mobile:leading-none sm:text-xs capitalize mb-1">{product.unit}</p>
                <div className="flex items-center gap-2">
                    <p className={product.discounted_price < product.currency_price ? "text-base sm:text-lg font-bold text-primary" : ""}>
                      {product.discounted_price || product.currency_price}
                    </p>
                    {product.discounted_price < product.currency_price && (
                      <del className="text-xs sm:text-sm font-semibold text-slate-400">{product.currency_price}</del>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProductCard