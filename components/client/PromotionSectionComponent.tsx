
import { getPromotions } from "@/services/promotion.service"
import Image from "next/image"
import Link from "next/link"

const PromotionSectionComponent = async() =>{
    const promotions = await getPromotions()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {
                promotions?.data?.slice(-3).map((promotion:any) => (
                    <Link href={`/promotion/${promotion.slug}`} key={promotion.id} className="bg-white rounded-2xl">
                        <Image width={500} height={500} src={promotion.cover} alt={promotion.name}  className="w-full h-full object-cover rounded-2xl" />
                    </Link>
                ))
            }
        </div>
    )
}

export default PromotionSectionComponent