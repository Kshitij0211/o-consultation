
import { Observer } from 'tailwindcss-intersect';
import consultation from '../../assets/consultation.jpg'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutSection = () => {

    Observer.start()

    return (
        <section className={`min-h-svh lg:bg-gray-100 overflow-clip flex items-end" id='aboutSection`}>
            <div className="h-[80svh] w-full my-auto flex items-center relative translate-x-5 intersect intersect-half intersect:translate-x-0 transition duration-500">
                <div className="absolute lg:right-0 md:flex items-center lg:mx-12 hidden">
                    <img className="rounded-sm w-full lg:h-[80svh] shadow-md" src={consultation} />
                </div>
                <div className="flex justify-center lg:justify-start lg:items-end mx-4 lg:mx-12 lg:w-[75%] z-50 lg:-translate-x-52 intersect intersect-half intersect:translate-x-0 transition duration-500">
                    <div className="h-full p-2 lg:h-[60svh] w-full lg:w-[inherit] shadow-2xl backdrop-blur-md bg-white/30 rounded-md animate-fade-right duration-200">
                        <div className="flex flex-col gap-y-10 lg:gap-y-10 justify-center h-full px-10">
                            <span className="text-5xl font-semibold text-sky-600">About Us</span>
                            <span className="text-lg text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </span>
                            <Link to="/" className="text-2xl gap-x-5 font-medium text-slate-500 flex flex-row items-baseline w-fit group">
                                <span>Read More</span>
                                <FaChevronRight className="text-lg text-sky-600 " />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;