import { useEffect } from "react";
import DoctorInfo from "./DoctorInfo";
import Glide from "@glidejs/glide"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import bestDoctor1 from '../../assets/bestDoctor1.jpg'
import bestDoctor2 from '../../assets/bestDoctor2.jpg'
import bestDoctor3 from '../../assets/bestDoctor3.jpg'
import bestDoctor4 from '../../assets/bestDoctor4.jpg'
import bestDoctor5 from '../../assets/bestDoctor5.jpg'


const Section4 = () => {

    const bestDoctors = [{
        doctorName: "Dr. Neil Malandez",
        specialization: "neurosurgeon",
        content: "Experience the simple pleasures of a world with no cars.",
        rating: 4,
        profile: bestDoctor1
    }, {
        doctorName: "Dr. Shaun Murphy",
        specialization: "cardiologist",
        content: "Experience the simple pleasures of a world with no cars.",
        rating: 4,
        profile: bestDoctor2
    }, {
        doctorName: "Dr. Claire Brown",
        specialization: "neurosurgeon",
        content: "Experience the simple pleasures of a world with no cars.",
        rating: 3,
        profile: bestDoctor3
    }, {
        doctorName: "Dr. Vivek Sharma",
        specialization: "orthopedic surgeon",
        content: "Experience the simple pleasures of a world with no cars.",
        rating: 4,
        profile: bestDoctor4
    }, {
        doctorName: "Dr. Audrey Lim",
        specialization: "orthopedic surgeon",
        content: "Experience the simple pleasures of a world with no cars.",
        rating: 3,
        profile: bestDoctor5
    }];

    useEffect(() => {

        const slider = new Glide(".glide-08", {
            type: "carousel",
            focusAt: 1,
            animationDuration: 500,
            autoplay: 4500,
            rewind: true,
            perView: 4,
            gap: 48,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }

    }, [])

    return (
        <>
            <section className="bg-slate-200 justify-center flex flex-col px-3 md:px-12 py-5 overflow-clip relative" id="teamSection">
                <div className="hero text-center">
                    <h1 className="lg:text-6xl lg:font-medium mdfont-semibold font-bold tracking-tight text-sky-600 text-3xl md:text-5xl text-center">
                        Our Team of Best Doctors
                    </h1>
                    <p className="md:text-lg text-md leading-8 my-4 md:my-8 text-justify text-gray-600 w-full md:w-[75%] mx-auto">
                        Web accessibility means
                        that websites, tools, and technologies are designed and developed so
                        that people with disabilities can use them.
                    </p>
                </div>
                <div className="mx-auto w-full">
                    <div className="glide-08 relative">
                        {/*    <!-- Slides --> */}
                        <div data-glide-el="track">
                            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-clip p-0">
                                {
                                    bestDoctors.map((doctor, key) =>
                                        <li key={key}>
                                            <DoctorInfo name={doctor.doctorName} spec={doctor.specialization} content={doctor.content} rating={doctor.rating} profile={doctor.profile} />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div
                            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
                            data-glide-el="controls"
                        >
                            <button
                                className="inline-flex h-12 w-12 items-center justify-center hover:scale-150 rounded-full bg-sky-950 text-white transition duration-300"
                                data-glide-dir="<"
                                aria-label="prev slide"
                            >
                                <FaAnglesLeft />
                            </button>
                            <button
                                className="inline-flex h-12 w-12 items-center justify-center hover:scale-150 rounded-full bg-sky-950 text-white transition duration-300"
                                data-glide-dir=">"
                                aria-label="next slide"
                            >
                                <FaAnglesRight />
                            </button>
                        </div>
                        {/* <!-- End Testimonial carousel --> */}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section4;