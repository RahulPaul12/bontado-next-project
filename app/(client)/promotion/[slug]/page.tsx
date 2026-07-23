import ProductSectionComponent from "@/components/client/ProductSectionComponent"
import { getPromotionDetails } from "@/services/promotion.service"

const PromotionDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const promotion = await getPromotionDetails(slug)
    return (
        <section className="container">
            <div className="flex flex-wrap items-end gap-3 max-md:flex-col max-md:items-start max-md:gap-1.5 mb-8">
                <h1 className="text-3xl font-bold capitalize max-sm:text-lg">{slug}</h1>
                <span className="text-xl font-medium capitalize max-sm:text-sm">({promotion.data.length} Products)</span>
            </div>
            {
                <ProductSectionComponent products={promotion.data}/>
            }
      </section>
    )
}
export default PromotionDetails