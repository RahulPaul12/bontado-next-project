import FooterComponent from "@/components/client/FooterComponent";
import HeaderComponent from "@/components/client/HeaderComponent";

export default function ClientLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    )
}