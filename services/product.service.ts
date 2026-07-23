import { api } from "@/lib/api";


export function getProducts(query?: any) {
    return api<any>("/frontend/product-section", {
        query,
        revalidate: 60,
        tags: ["products"],
    });
}
export function getProductDetails (slug: string) {
    console.log(slug)
    return api<any>(`/frontend/product/show/${slug}`)
}
export function getSearchedProducts(query: any) {
    return api<any>(`/frontend/product/category-wise-products`, {
        method: "POST",
        body: JSON.stringify({
            name: query
        }),
        revalidate: 60,
        tags: ["searched-products"],
    });
}
