
import AdminSidebarComponent from "@/components/admin/AdminSidebarComponent"
import AdminHeaderComponent from "../../components/admin/AdminHeaderComponent"

const DashboardLayout = ({children}: {children: React.ReactNode})=>{
    return (
        <div className="ltr:lg:pl-[357px] rtl:lg:pr-[357px] pt-[70px] md:pt-16 text-paragraph transition-all duration-300">
            <AdminHeaderComponent/>
            <AdminSidebarComponent/>
            <div className="p-4">{children}</div> 
        </div>
    )
}

export default DashboardLayout