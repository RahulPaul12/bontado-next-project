import Image from "next/image"
import Link from "next/link"

const FooterComponent = ({data}:any)=> {
    return (
        <footer className="pt-12 bg-[#1f1f39]">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
                        <div className="max-lg:text-center max-lg:mx-auto w-full max-w-xs">
                            <Link href="/home" className="active router-link-exact-active" aria-current="page">
                                <Image width={500} height={500} className="w-24" alt="logo" src={data.theme_footer_logo}/>
                            </Link>
                            <form className="mt-5 mb-6 block">
                                <label className="mb-3 font-medium text-white">Subscribe to our newsletter</label>
                                <div className="flex w-full h-10 rounded-3xl p-1 bg-white">
                                    <input type="email" placeholder="Your email address" className="w-full h-full pl-3 pr-2"/>
                                    <button type="submit" className="text-xs font-semibold capitalize flex-shrink-0 px-3 h-full rounded-3xl bg-primary text-white">Subscribe</button>
                                </div>
                            </form>
                            <nav className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                                <Link target="_blank" href="https://www.facebook.com/inilabs/" className={`${data.social_media_facebook ? '':'hidden'} lab-fill-facebook w-7 h-7 !leading-7 text-center rounded-full text-sm text-secondary bg-white transition-all duration-300 hover:text-white hover:bg-primary`}></Link>
                                <Link target="_blank" href="https://twitter.com/inilabsn?lang=en" className={`${data.social_media_instagram ? '':'hidden'} lab-fill-x w-7 h-7 !leading-7 text-center rounded-full text-sm text-secondary bg-white transition-all duration-300 hover:text-white hover:bg-primary`}></Link>
                                <Link target="_blank" href="https://www.instagram.com/inilabsn" className={`${data.social_media_twitter ? '':'hidden'} lab-fill-instagram w-7 h-7 !leading-7 text-center rounded-full text-sm text-secondary bg-white transition-all duration-300 hover:text-white hover:bg-primary`}></Link>
                                <Link target="_blank" href="https://www.youtube.com/@inilabsn" className={`${data.social_media_youtube ? '':'hidden'} lab-fill-youtube w-7 h-7 !leading-7 text-center rounded-full text-sm text-secondary bg-white transition-all duration-300 hover:text-white hover:bg-primary`}></Link>
                            </nav>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="flex flex-col sm:flex-row gap-10">
                            <div className="w-full max-w-[270px]">
                                <h4 className="text-[22px] font-semibold capitalize mb-6 text-white">Support</h4>
                                <nav className="flex flex-col gap-4">
                                    <Link href="/page/faq" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">FAQ</Link>
                                    <Link href="/page/return-and-exchange" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Return &amp; Exchange</Link>
                                    <Link href="/page/delivery" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Delivery</Link>
                                    <Link href="/page/contact-us" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Contact Us</Link>
                                </nav>
                            </div>
                            <div className="w-full max-w-[270px]">
                                <h4 className="text-[22px] font-semibold capitalize mb-6 text-white">Legal</h4>
                                <nav className="flex flex-col gap-4">
                                    <Link href="/page/about-us" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">About Us</Link>
                                    <Link href="/page/cookies-policy" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Cookies Policy</Link>
                                    <Link href="/page/terms-and-conditions" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Terms &amp; Conditions</Link>
                                    <Link href="/page/privacy-policy" className="w-fit text-sm font-medium capitalize text-white transition-all duration-300 hover:text-primary">Privacy Policy</Link>
                                </nav>
                            </div>
                            <div className="w-full max-w-[270px] flex-shrink-0">
                                <h4 className="text-[22px] font-semibold capitalize mb-6 text-white">Contact</h4>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex items-start gap-3">
                                        <i className="lab-fill-location text-sm flex-shrink-0 text-white"></i>
                                        <span className="text-sm font-medium text-white">{data.company_address}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="lab-fill-mail text-sm flex-shrink-0 text-white"></i>
                                        <Link href="mailto:info@inilabs.net" className="text-sm font-medium text-white">{data.company_email}</Link>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="lab-fill-calling text-sm flex-shrink-0 text-white"></i>
                                        <Link href="callto:+8801333384628" className="text-sm font-medium text-white">{data.company_phone}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-24 lg:py-4 mt-8 text-center border-t border-white/5">
                <p className="text-xs font-medium text-white">{data.site_copyright}</p>
            </div>
        </footer>
    )
}
export default FooterComponent