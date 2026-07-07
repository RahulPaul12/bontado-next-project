import { Card } from "@/components/ui/card"
import Link from "next/link"

const RestaurantSettingLayout = ({children}: {children: React.ReactNode})=>{
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
                <Card>
                    <ul>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/restaurant-details">Restaurant Details</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/restaurant-setting">Restaurant Settings</Link>
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
                </Card>
            </div>
            <div className="col-span-9">
                <Card>
                    {children}
                </Card>
            </div>
        </div>   
    )
}
export default RestaurantSettingLayout