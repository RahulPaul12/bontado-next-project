import Link from "next/link"

const DashboardSidebarComponent = () => {
    return (
        <aside className="shrink-0 w-[357px] h-dvh lg:h-[calc(100dvh-68px)] fixed top-0 lg:top-16 ltr:left-0 rtl:right-0 z-30 thin-scrolling bg-white ltr:max-lg:-translate-x-full rtl:max-lg:translate-x-full shadow-xs">
            <ul className="p-4">
                <li className="p-2">
                    <Link href="/admin/dashboard">Dashboard</Link>
                </li>
                <li className="p-2">
                    <Link href="/admin/setting">Settings</Link>
                </li>
                <li className="p-2">
                    <Link href="/admin/restaurant-setting/restaurant-details">Restaurant Setting</Link>
                </li>
                <li className="p-2">
                    <Link href="/admin/setting">Settings</Link>
                </li>
                <li className="p-2">
                    <Link href="/admin/dashboard">Dashboard</Link>
                </li>
                <li className="p-2">
                    <Link href="/admin/setting">Settings</Link>
                </li>
            </ul>
        </aside>
    )
}
export default DashboardSidebarComponent