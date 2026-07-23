import { api } from "@/lib/api";

export default function getCategories (){
    return api<any>("/frontend/product-category", {
        cache:"no-store",
        tags: ["categories"],
    });
}