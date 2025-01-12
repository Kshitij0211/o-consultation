import { useOrientation } from 'react-use';
import stethoscope from '../assets/stethoscope.png'
import medicines from '../assets/medicines.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiPhoneCall } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import Footer from './partials/Footer';
import { EmptyNavbar } from './partials/Navbar';

const PageNotFound = () => {

    const { type } = useOrientation();
    // useEffect(() => {
    //     console.log(window.screen.orientation)
    // })

    return (
        <div className="min-h-svh w-svw flex flex-col justify-between bg-radial-gradient from-sky-600 to-sky-950 text-gray-100">
            <EmptyNavbar />
            <div className="flex flex-col items-center">
                <div className={`w-full m-10 flex md:flex-row flex-col align-middle items-center justify-evenly gap-x-8 rounded-md`}>  {/*  */}
                    <div className="PNFContent p-4 flex flex-col justify-center">
                        <div className='text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] font-extrabold items-center'>404</div>
                        <div className='text-3xl md:text-5xl lg:text-7xl font-bold'>Page Not Found!</div>
                        <div className="text-base mt-10 flex flex-col gap-y-3">
                            <div className="font-bold text-2xl">
                                Uh-oh! Looks like this page missed its appointment...
                            </div>
                            <div className="font-normal text-xl">
                                Don’t worry, we’ll get things back on track in no time.
                            </div>
                            <div className="font-bold text-2xl">
                                Here’s how you can find your way:
                            </div>
                            <ul className="font-semibold">
                                <li className="flex items-center gap-4 px-4 py-2">
                                    <div className="flex items-center">
                                        <FaHome className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                                        <h4 className="text-base">Head back to <Link to="/" className="font-bold">Home</Link></h4>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 px-4 py-2">
                                    <div className="flex items-center">
                                        <FaMagnifyingGlass className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                                        <h4 className="text-base">Try Searching again</h4>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 px-4 py-2">
                                    <div className="flex items-center">
                                        <BiPhoneCall className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                                        <h4 className="text-base">Contact Support if you need a hand</h4>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <>
                        <img src={stethoscope} className="max-h-[60svh] hidden md:block" />
                        <img src={medicines} className="w-svw block md:hidden" />
                    </>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound;