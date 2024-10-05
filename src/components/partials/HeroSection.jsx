import doctor1 from '../../assets/doctor1.png'
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { Observer } from 'tailwindcss-intersect';

const HeroSection = () => {
    
    Observer.start();

    return (
        <>
            <section>
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    <div className="col-span-full md:col-span-4 z-10 lg:col-span-6 bg-white p-6 md:pl-6 lg:pl-16 -translate-x-10 intersect-half intersect:translate-x-0 transition duration-700">
                        <div className="capitalize p-1 md:p-6 lg:p-12 text-gray-700">
                            <div className="text-xl font-medium flex flex-row justify-start items-baseline gap-x-2">
                                <span>Meet with</span>
                                <div className="border-b-2 border-sky-500 h-2 w-[50%]" />
                            </div>
                            <span className="text-6xl lg:text-8xl font-bold lg:font-semibold text-nowrap">
                                Our Best
                            </span>
                            <br />
                            <span className="text-5xl lg:text-7xl text-sky-600 font-bold lg:font-semibold">
                                Doctors<br />Online
                            </span>
                            <br />
                            <div className="text-md my-6 md:w-[90%] text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <div className="flex flex-col gap-y-5 lg:flex-row justify-start lg:gap-x-10">
                                <button className="inline-flex h-12 text-md items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-600 px-6 font-medium tracking-wide text-white shadow-lg shadow-sky-200 transition duration-300 hover:bg-sky-700 hover:shadow-md hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-md focus:shadow-sky-200 focus-visible:outline-none">
                                    <span>Schedule Appointment</span>
                                    <BsCalendar2CheckFill />
                                </button>
                                <button className="inline-flex h-12 text-md items-center justify-center gap-2 whitespace-nowrap rounded border border-sky-600 px-6 font-medium tracking-wide text-sky-600 shadow-lg shadow-sky-200 transition duration-300 hover:border-sky-700 hover:text-sky-700 hover:shadow-md hover:shadow-sky-200 focus:border-sky-700 focus:text-sky-700 focus:shadow-md focus:shadow-sky-300 focus-visible:outline-none">
                                    <span>Learn More</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:col-span-4 lg:col-span-6 bg-gradient-to-l from-sky-300 to-white relative overflow-clip md:flex flex-col justify-end">
                        <div className="translate-y-10 opacity-0 intersect-half intersect:translate-y-0 intersect:opacity-100 transition duration-700">
                            <img src={doctor1} className="relative h-[90svh] flex-grow"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;