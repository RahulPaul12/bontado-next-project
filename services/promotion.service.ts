import { api } from "@/lib/api";


export function getPromotions(query?: any) {
    return api<any>("/frontend/promotion", {
        query,
        revalidate: 60,
        tags: ["promotions"],
    });
}
export function getPromotionDetails (slug: string) {
    return api<any>(`/frontend/promotion/products/${slug}?show=${slug}`,{
        revalidate: 60,
    })
}
