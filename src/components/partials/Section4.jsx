import { useEffect } from "react";
import DoctorInfo from "./DoctorInfo";
import Glide from "@glidejs/glide"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Section4 = () => {

    const bestDoctors2 = [{
        doctorName: "Dr. Neil Malandez",
        specialization: "neurosurgeon",
        degree: "MD",
        profile: "bestDoctor1"
    }, {
        doctorName: "Dr. Shaun Murphy",
        specialization: "cardiologist",
        degree: "MD",
        profile: "bestDoctor2"
    }, {
        doctorName: "Dr. Claire Brown",
        specialization: "neurosurgeon",
        degree: "MBBS/DO",
        profile: "bestDoctor3"
    }, {
        doctorName: "Dr. Vivek Sharma",
        specialization: "orthopedic surgeon",
        degree: "MS",
        profile: "bestDoctor4"
    }, {
        doctorName: "Dr. Audrey Lim",
        specialization: "orthopedic surgeon",
        degree: "MBBS",
        profile: "bestDoctor5"
    }]

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
            <section className="min-h-svh bg-slate-200 justify-center items-center flex flex-col px-3 md:px-12 py-5 overflow-clip relative" id="teamSection">
                <div className="hero text-center">
                    <h1 className="lg:font-medium md:font-semibold font-bold text-center heroHeading">
                        Our Team of
                        <span className='text-sky-600'> Best Doctors</span>
                    </h1>
                    <p className="md:text-lg text-md md:leading-8 p-4 md:my-8 text-justify md:text-center mx-auto text-gray-600 w-full md:w-[75%]">
                        Experienced specialists dedicated to providing top-quality online consultations, ensuring your health is in expert hands.
                    </p>
                </div>
                <div className="mx-auto w-full">
                    <div className="glide-08 relative">
                        <div data-glide-el="track">
                            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-clip p-0">
                                {
                                    bestDoctors2.map((doctor, key) =>
                                        <li key={key}>
                                            <DoctorInfo name={doctor.doctorName} degree={doctor.degree} spec={doctor.specialization} profile={doctor.profile} />
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
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section4;