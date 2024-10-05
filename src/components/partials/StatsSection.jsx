import { FaUserDoctor } from "react-icons/fa6";
import { GoDiscussionClosed } from "react-icons/go";
import { TbLocationFilled } from "react-icons/tb";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Observer } from "tailwindcss-intersect";

const StatsSection = () => {

    Observer.start();

    const services = [{
        icon: <FaUserDoctor />,
        value: "25,000+",
        desc: "Patients Served",
        delayDuration: "delay-[0ms]",
    }, {
        icon: <GoDiscussionClosed />,
        value: "6,000+",
        desc: "Consultations this week",
        delayDuration: "delay-[75ms]",
    }, {
        icon: <TbLocationFilled />,
        value: "21",
        desc: "Clinics",
        delayDuration: "delay-[150ms]",
    }, {
        icon: <FaHeartCircleCheck />,
        value: "98%",
        desc: "Success Rate",
        delayDuration: "delay-[225ms]",
    }]

    return (
        <>
            <section className="bg-slate-200 justify-center flex flex-col py-12" id="servicesSection">
                <div className="hero mb-12 text-center">
                    <h1 className="lg:text-6xl lg:font-medium tracking-tight text-sky-600 md:text-5xl md:font-semibold text-3xl font-bold text-center">
                        Our Stats show that we've<br />Happy Patients
                    </h1>
                    <p className="mt-2 md:text-lg text-md leading-8 text-gray-600">
                        And excellence partially estimating terminated day everthing.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 justify-evenly text-center lg:w-[75%] lg:mx-auto overflow-clip">
                    {
                        services.map((items, key) => 
                            <div className={`flex flex-col items-center gap-4 text-center -translate-y-10 transition duration-500 intersect intersect-half intersect:translate-y-0 ${items.delayDuration}`} key={key}>
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
            </section>
        </>
    )
}

export default StatsSection;