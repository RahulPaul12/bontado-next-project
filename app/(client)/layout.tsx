import FooterComponent from "@/components/client/FooterComponent";
import HeaderComponent from "@/components/client/HeaderComponent";
import getSetting from "@/services/setting.service";

export default async function ClientLayout({children}: {children: React.ReactNode}){
    const setting = await getSetting()
    return (
        <div>
            <HeaderComponent data={setting.data}/>
            <div className="mb-20 mt-28">
                {children}
            </div>
            <FooterComponent data={setting.data}/>
        </div>
    )
}