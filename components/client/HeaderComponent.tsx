import Link from "next/link"
const HeaderComponent = () => {
    return (
        <header>
            <nav className="w-full flex items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 h-14 sm:h-16 fixed top-0 left-0 z-30 bg-white shadow-2xs">
                <Link href="/" className="logo"><h2>Bontado</h2></Link>
                <ul className="flex gap-4 items-center">
                    <li> <Link href="/about-us">About Us</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent