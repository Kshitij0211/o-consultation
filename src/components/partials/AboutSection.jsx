
import { Observer } from 'tailwindcss-intersect';
import consultation from '../../assets/consultation.jpg'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutSection = () => {

    Observer.start()

    return (
        <section className="min-h-svh lg:bg-gray-100 overflow-clip flex justify-center items-center" id='aboutSection'>
            <div className="h-[80svh] w-full my-auto flex items-center relative translate-x-5 intersect intersect:translate-x-0 transition duration-500">
                <div className="absolute lg:right-0 md:flex items-center lg:mx-12 hidden">
                    <img className="rounded-sm w-full lg:h-[80svh] shadow-md" style={{ imageRendering: "pixelated" }} src={consultation} />
                </div>
                <div className="flex justify-center lg:justify-start lg:items-end mx-4 lg:mx-12 lg:w-[75%] z-50 lg:-translate-x-52 intersect intersect-half intersect:translate-x-0 transition duration-500">
                    <div className="h-auto p-4 w-full lg:w-[inherit] shadow-2xl backdrop-blur-md bg-white/30 rounded-md animate-fade-right duration-200">
                        <div className="flex flex-col gap-y-10 lg:gap-y-10 justify-center h-full px-10">
                            <span className="text-5xl font-semibold text-sky-600">About Us</span>
                            <div className='content flex flex-col gap-y-4'>
                                <span className="text-lg text-justify">
                                    At <span className="text-sky-700 font-semibold">O-Consultation</span> we pride ourselves on delivering exceptional medical care through our dedicated team of top-rated doctors. Our mission is to provide personalized consultations and trusted medical advice, all from the comfort of your home.
                                </span>
                                <span className="text-lg text-justify">
                                    Whether you’re seeking guidance for a specific health concern or need routine check-ups, our online platform ensures you receive the highest quality of care tailored to your unique needs. We leverage the latest technology to connect you with specialists across various fields, making healthcare more accessible and convenient than ever.
                                </span>
                                <span className="text-lg text-justify">
                                    Your health is our priority, and we’re here to support you every step of the way. Discover a new standard in medical care with O-Consultation.
                                </span>
                            </div>
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