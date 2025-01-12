import { useEffect, useState } from "react"
import { RxInfoCircled } from "react-icons/rx";
import { RiServiceLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import GetInTouch from "./GetInTouch";
import { IoMdLogIn } from "react-icons/io";

export const EmptyNavbar = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isToggleOpen)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "scroll"
    }, [isToggleOpen])

    return (
        <>
            <header className="navBar border-b-1 cursor-default top-0 sticky z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-4 md:px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        <div
                            className="flex items-center w-fit gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                        >
                            <Link to="/">
                                <img src={logo} className="hidden md:block h-10 animate-spin animate-infinite animate-duration-[7000ms] animate-ease-linear" />
                            </Link>
                            <Link to="/" className={`text-2xl font-bold`}>
                                <span className="text-sky-600">O</span>
                                <span>.Consultation</span>
                            </Link>
                        </div>
                        <button className={`relative order-10 block h-10 w-10 self-center lg:hidden
                            ${isToggleOpen
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                : ""
                            }
                        `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 rotate-180 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[height,visibility] ease-in-out duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 
                                ${isToggleOpen
                                    ? "visible h-lvh backdrop-blur-sm"
                                    : "invisible h-0"
                                }`}
                        >
                            <li role="none" className="lg:flex lg:items-stretch">
                                <div
                                    role="menuitem"
                                    className="navTab"
                                >
                                    <GetInTouch />
                                </div>
                            </li>
                            <li role="none" className={`lg:flex lg:items-stretch`}>
                                <div
                                    role="menuitem"
                                    className="navTab"
                                >
                                    <button onClick={() => navigate('/auth')} className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none ${location.pathname === '/auth' ? 'hidden' : ''}`}>
                                        <span>Login</span>
                                        <IoMdLogIn className='text-base' />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}


const Navbar = () => {

    const navigate = useNavigate();

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    useEffect(() => {
        if (isToggleOpen)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "scroll"
    }, [isToggleOpen])

    return (
        <>
            <header className="navBar border-b-1 cursor-default top-0 sticky z-20 w-full border-b border-slate-200 bg-white/70 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-4 md:px-6 xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        <div
                            className="flex items-center w-fit gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                        >
                            <Link to="/">
                                <img src={logo} className="hidden md:block h-10 animate-spin animate-infinite animate-duration-[7000ms] animate-ease-linear" />
                            </Link>
                            <Link to="/" className="text-2xl font-bold">
                                <span className="text-sky-600">O</span>
                                <span>.Consultation</span>
                            </Link>
                        </div>
                        <button className={`relative order-10 block h-10 w-10 self-center xl:hidden
                            ${isToggleOpen
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                : ""
                            }
                        `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 rotate-180 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[height,visibility] ease-in-out duration-300 xl:visible xl:relative xl:top-0 xl:z-0 xl:flex xl:h-full xl:w-auto xl:items-stretch xl:overflow-visible xl:bg-white/0 xl:px-0 xl:py-0 xl:pt-0 xl:opacity-100 
                                ${isToggleOpen
                                    ? "visible h-lvh backdrop-blur-sm"
                                    : "invisible h-0"
                                }`}
                        >
                            <li role="none" onClick={() => setIsToggleOpen(false)} className="xl:flex xl:items-stretch">
                                <a
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="navTab"
                                    href="#aboutSection"
                                >
                                    <RxInfoCircled />
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li role="none" onClick={() => setIsToggleOpen(false)} className="xl:flex xl:items-stretch">
                                <a
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="navTab"
                                    href="#servicesSection"
                                >
                                    <RiServiceLine />
                                    <span>Our Service</span>
                                </a>
                            </li>
                            <li role="none" onClick={() => setIsToggleOpen(false)} className="xl:flex xl:items-stretch">
                                <a
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="navTab"
                                    href="#teamSection"
                                >
                                    <HiOutlineUserGroup />
                                    <span>The Team</span>
                                </a>
                            </li>
                            <hr className='bg-sky-700 h-[0.1rem]' />
                            <li role="none" className="lg:flex lg:items-stretch">
                                <div
                                    role="menuitem"
                                    className="navTab"
                                >
                                    <GetInTouch />
                                </div>
                            </li>
                            <li role="none" className="lg:flex lg:items-stretch">
                                <div
                                    role="menuitem"
                                    className="navTab"
                                >
                                    <button onClick={() => navigate('/auth')} className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                                        <span>Login</span>
                                        <IoMdLogIn className='text-base' />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div >
            </header >
        </>
    )
}

export default Navbar;