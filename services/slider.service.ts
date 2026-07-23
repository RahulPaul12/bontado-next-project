import { api } from "@/lib/api";

export default function getSliders (){
    return api<any>("/frontend/slider", {
        revalidate: 60,
        tags: ["sliders"],
    });
}