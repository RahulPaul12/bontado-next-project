'use client'
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
const HeaderComponent = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [term, setTerm] = useState(searchParams.get("name") || "")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!term.trim()) return
        router.push(`/product?name=${encodeURIComponent(term.trim())}`)
    }
    return (
        <header className="fixed top-0 left-0 z-30 bg-white shadow-2xs w-full py-4">
            <div className="container">
                <form className="w-full md:hidden flex gap-4 items-center mb-4" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" className="w-full h-10 px-2 border border-gray-200 rounded-md outline-none" value={term} onChange={(e) => setTerm(e.target.value)} />
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Search</button>
                </form>
                <nav className="w-full flex items-center justify-between gap-3 sm:gap-4">
                    <Link href="/" className="logo"><h2>Bontado</h2></Link>
                    <form className="max-w-lg w-full hidden md:flex gap-4 items-center" onSubmit={handleSearch}>
                        <input type="text" placeholder="Search" className="w-full h-10 px-2 border border-gray-200 rounded-md outline-none" value={term} onChange={(e) => setTerm(e.target.value)} />
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Search</button>
                    </form>
                    <ul className="flex gap-4 items-center">
                        <li> <Link href="/about-us">About Us</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default HeaderComponent