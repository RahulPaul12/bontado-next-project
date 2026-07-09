"use client"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

const RestaurantSettingLayout = ({children}: {children: React.ReactNode})=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <Card>
                    <button className="settings-btn w-full md:hidden flex items-center justify-center gap-2 p-2 rounded bg-primary text-white">
                        <span className="capitalize">settings menu</span>
                        <i className="lab lab-line-chevron-down text-sm"></i>
                    </button>
                    <ul className="h-0 overflow-hidden md:h-auto md:overflow-auto transition-all duration-300">
                        <li className="p-2">
                            <button className="db-sidebar-nav-menu downarrow p-0!" onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
                                <div className="">
                                    <i className="lab lab-line-restaurants"></i>
                                    <span>Restaurant Information</span>
                                </div>
                            </button>
                            <div className="db-sidebar-nav-dropdown overflow-hidden transition-all" style={{height: isDropdownOpen ? 'auto' : '0'}}>
                                <div className="db-sidebar-nav-dropdown-list">
                                    <div className="flex flex-col">
                                        <Link href={"/admin/restaurant-setting/restaurant-details"} className="db-sidebar-nav-dropdown-menu py-2 pl-4">
                                            <span>Restaurant Details</span>
                                            <i className="lab lab-fill-save text-lg text-[#1AB759] leading-none"></i>
                                        </Link>
                                        <Link href={"/admin/restaurant-setting/location"} className="db-sidebar-nav-dropdown-menu py-2 pl-4">
                                            <span>Location</span>
                                            <i className="lab lab-fill-save text-lg text-[#1AB759] leading-none"></i>
                                        </Link>
                                        <Link href={"/admin/restaurant-setting/restaurant-website"} className="db-sidebar-nav-dropdown-menu py-2 pl-4">
                                            <span>Restaurant Website</span>
                                            <i className="lab lab-fill-save text-lg text-[#1AB759] leading-none"></i>
                                        </Link>
                                        <Link href={"/admin/restaurant-setting/cuisine-setup"} className="db-sidebar-nav-dropdown-menu py-2 pl-4">
                                            <span>Cuisine Setup</span>
                                            <i className="lab lab-fill-save text-lg text-[#1AB759] leading-none"></i>
                                        </Link>
                                        <Link href={"/admin/restaurant-setting/account-verification"} className="db-sidebar-nav-dropdown-menu py-2 pl-4">
                                            <span>Account Verification</span>
                                            <i className="lab lab-fill-save text-lg text-[#1AB759] leading-none"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/restaurant-details">Restaurant Details</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/restaurant-setting">Restaurant Settings</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/setting">Settings</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/dashboard">Dashboard</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/admin/restaurant-setting/setting">Settings</Link>
                        </li>
                    </ul>
                </Card>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
                <Card>
                    {children}
                </Card>
            </div>
        </div>   
    )
}
export default RestaurantSettingLayout