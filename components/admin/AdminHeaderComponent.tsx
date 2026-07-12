"use client"

import Link from "next/link"
import { usePaper } from "@/hooks/usePaper"
import { useCanvas } from "@/hooks/useCanvas"
import useModal from "@/hooks/useModal"
import logo from "@/public/images/theme-logo.png"
import Image from "next/image"
const DashboardHeaderComponent = () =>{
    const {handlePaper} = usePaper();
    const {openCanvas} = useCanvas();
    const {handleModalOpen} = useModal()
    return (
        <>
        <nav className="w-full flex items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 h-14 sm:h-16 fixed top-0 left-0 z-30 bg-white shadow-2xs">
            <Link href="/" className="logo"><Image src={logo} alt="Theme Logo" width={100} height={100}/></Link>
            <div className="flex gap-4 items-center">
                <div className="paper-group">
                    <button className="paper-button" onClick={handlePaper}>Language</button>
                    <div className="paper-dropdown min-w-[120px]">
                        <Link href="/dashboard">English</Link>
                        <Link href="/dashboard">Hindi</Link>
                        <Link href="/dashboard">Gujarati</Link>
                    </div>
                </div>
                <div> <Link href="/dashboard/settings">Favorite</Link></div>
                <div> <Link href="/login">Account</Link></div>
                <div className="py-2 px-1 border border-primary rounded max-lg:block hidden">
                    <button onClick={()=>openCanvas("admin-sidebar")} className="flex flex-col gap-1">
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                    </button>
                </div>
            </div>
        </nav>
      </>
    )
}

export default DashboardHeaderComponent