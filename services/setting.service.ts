import { api } from "@/lib/api";

export default function getSetting (){
    return api<any>("/frontend/setting", {
        cache:"no-store",
        tags: ["settings"],
    });
}