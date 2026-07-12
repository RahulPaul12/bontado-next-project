import Image from "next/image"
import Link from "next/link"

const DashboardSidebarComponent = () => {
    return (
        
        <aside id="admin-sidebar" className="p-4 shrink-0 w-[357px] h-dvh lg:h-[calc(100dvh-68px)] fixed top-0 lg:top-16 ltr:left-0 rtl:right-0 z-30 thin-scrolling bg-white ltr:max-lg:-translate-x-full rtl:max-lg:translate-x-full shadow-xs transition-transform duration-300">
            <nav className="db-sidebar-nav">
                <div className="db-sidebar-header">
                    <Link href={"#"} className="w-32 shrink-0">Bontado</Link>
                    <button className="h-10 w-10 rounded-full shadow-[0px_0px_0px_0.04] bg-white/40 border border-white flex items-center justify-center xmark-btn">
                        <i className="icon-fill-close-circle text-xl text-red-500 shadow-[0px_8px_12px_rgba(246,58,33,0.3)]"></i>
                    </button>
                </div>
                <ul className="db-sidebar-nav-list">
                    <li className="db-sidebar-nav-item active">
                        <Link href="/admin/dashboard" className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">dashboard</span>
                        </Link>
                    </li>
                    <li className="db-sidebar-nav-item">
                        <Link href="/admin/pos" className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">point of sale</span>
                        </Link>
                    </li>
                    <li className="db-sidebar-nav-item">
                        <button className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">products</span>
                        </button>
                        <div className="db-sidebar-nav-dropdown">
                            <div className="db-sidebar-nav-dropdown-list">
                                <Link href="/admin/product-list" className="db-sidebar-nav-dropdown-menu">product list</Link>
                                <Link href="/admin/product-category" className="db-sidebar-nav-dropdown-menu">product category</Link>
                            </div>
                        </div>
                    </li>
                    <li className="db-sidebar-nav-item">
                        <button className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">orders</span>
                        </button>
                        <div className="db-sidebar-nav-dropdown">
                            <div className="db-sidebar-nav-dropdown-list">
                                <Link href="/admin/order-list" className="db-sidebar-nav-dropdown-menu">order list</Link>
                                <Link href="/admin/order-details" className="db-sidebar-nav-dropdown-menu">order details</Link>
                            </div>
                        </div>
                    </li>
                    <li className="db-sidebar-nav-item">
                        <Link href="/admin/setting/restaurant-details" className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">settings</span>
                        </Link>
                    </li>
                    <li className="db-sidebar-nav-item">
                        <Link href="#" className="db-sidebar-nav-menu">
                            <span className="text-base flex-auto">messages</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default DashboardSidebarComponent