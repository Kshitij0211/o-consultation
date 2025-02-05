import { FaUserDoctor } from "react-icons/fa6";
import { GoDiscussionClosed } from "react-icons/go";
import { TbLocationFilled } from "react-icons/tb";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Observer } from "tailwindcss-intersect";
import { SpecIcons } from "../Images";

const StatsSection = () => {

    Observer.start();

    const stats = [{
        icon: <FaUserDoctor />,
        value: "25,000+",
        desc: "Patients Served",
        delayDuration: "delay-[0ms]",
    }, {
        icon: <GoDiscussionClosed />,
        value: "4,000+",
        desc: "Consultations this week",
        delayDuration: "delay-[75ms]",
    }, {
        icon: <TbLocationFilled />,
        value: "21",
        desc: "Clinics across India",
        delayDuration: "delay-[150ms]",
    }, {
        icon: <FaHeartCircleCheck />,
        value: "98%",
        desc: "Success Rate",
        delayDuration: "delay-[225ms]",
    }]

    const services = [{
        icon: "derma",
        title: "Dermatology"
    }, {
        icon: "internalMedicine",
        title: "Internal Medicine"
    }, {
        icon: "neurology",
        title: "Neurology"
    }, {
        icon: "generalMedicine",
        title: "General Medicine"
    }, {
        icon: "dentist",
        title: "Dental"
    }, {
        icon: "ear",
        title: "Otolaryngology"
    }, {
        icon: "hiv",
        title: "HIV/AIDS"
    }, {
        icon: "kidneys",
        title: "Urology"
    }, {
        icon: "allergy",
        title: "Allergy"
    }, {
        icon: "pediatrics",
        title: "Pediatrics"
    }, {
        icon: "stomach",
        title: "Gastroenterology"
    }, {
        icon: "virus",
        title: "Infectious Disease"
    }]

    return (
        <>
            <section className="min-h-svh bg-slate-200 justify-center flex flex-col py-12" id="servicesSection">
                <div className='section my-6'>
                    <div className="hero mx-4 mb-12 text-center">
                        <h1 className="lg:font-medium md:font-semibold font-bold text-center heroHeading">
                            Our Stats show that we've
                            <span className='text-sky-600'> Happy Patients</span>
                        </h1>
                        <p className="my-8 px-4 md:text-lg text-md md:leading-8 text-justify md:text-center text-gray-600">
                            And excellence partially estimating terminated day everthing.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 justify-evenly text-center lg:w-[75%] lg:mx-auto overflow-clip">
                        {
                            stats.map((items, key) =>
                                <div className={`service intersect ${items.delayDuration}`} key={key}>
                                    <div className="flex items-center rounded text-sky-600 text-4xl relative">
                                        {items.icon}
                                    </div>
                                    <div className="flex w-full flex-col items-center justify-center gap-0 text-base">
                                        <h3 className="mt-2 py-2 text-4xl font-bold text-sky-600 items-center">
                                            {items.value}
                                        </h3>
                                        <p className="text-sky-800">
                                            {items.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='section my-6'>
                    <div className="hero mx-4 my-12 text-center">
                        <h1 className="lg:font-medium md:font-semibold font-bold text-center heroHeading">
                            Our consulting
                            <span className='text-sky-600'> Specialities</span>
                        </h1>
                        <p className="my-8 px-4 md:text-lg text-md md:leading-8 text-justify md:text-center text-gray-600">
                            Ask a doctor online and get quick medical advice of your health queries.
                            <span className="md:hidden">&nbsp;</span>
                            <br className="md:block hidden" />
                            Our medical panel consists of over 3500+ doctors from 80+ specialities.
                        </p>
                    </div>
                    <div className="m-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-evenly text-center lg:w-[75%] lg:mx-auto">
                        {
                            services.map((items, index) =>
                                <div key={index} className="flex flex-col justify-center items-center gap-4 bg-sky-950 text-white rounded-lg p-2 md:p-4 overflow-hidden md:px-6 scale-75 opacity-30 intersect intersect:scale-100 intersect:opacity-100 duration-700 transition-all ease-in-out">
                                    <div className="iconPanel flex justify-center items-center *:w-20 *:h-20">
                                        <SpecIcons iconName={items.icon} />
                                    </div>
                                    <div className="title">
                                        {items.title}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default StatsSection;