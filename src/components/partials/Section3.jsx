import { MdDoubleArrow } from "react-icons/md";
import { Observer } from "tailwindcss-intersect";

const Section3 = () => {

    Observer.start();

    const stepsToSchedule = [{
        _id: 'sts1',
        heading: "Create Account",
    }, {
        _id: 'sts2',
        heading: "Search Doctor"
    }, {
        _id: 'sts3',
        heading: "Schedule Appointment",
    }, {
        _id: 'sts4',
        heading: "Start Consultation"
    }]

    return (
        <>
            <section className="min-h-svh bg-gray-100 justify-center flex flex-col p-6 md:p-12">
                <div className="hero text-center">
                    <h1 className="lg:text-6xl lg:font-medium md:font-semibold tracking-tight text-sky-600 text-5xl font-bold text-center">
                        How it Works
                    </h1>
                    <p className="md:text-lg text-md leading-8 my-8 text-gray-600 w-full md:w-[75%] mx-auto">
                        Web accessibility means
                        that websites, tools, and technologies are designed and developed so
                        that people with disabilities can use them.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 justify-evenly text-center lg:w-[75%] lg:mx-auto gap-x-4">
                    {
                        stepsToSchedule.map((item, key) =>
                            // id={item._id} 
                            <div key={key} className={`
                                lg:-translate-x-full opacity-0 first:translate-x-0 lg:first:opacity-100 first:z-10 intersect intersect:translate-x-0 intersect:opacity-100 intersect-half 
                            text-center translate-y-5 group transition duration-500 hover:translate-y-0 bg-white border-white hover:border-sky-800 border-b-4 hover:bg-sky-400 hover:text-white rounded shadow-2xl text-slate-500 shadow-black/30`}>
                                <h1 className="absolute text-9xl -z-1 font-bold right-0 bottom-0 text-gray-600/[0.08] group-hover:text-gray-600/10 top-0 left-1 text-left">{(stepsToSchedule.findIndex(e => e.heading === item.heading) + 1).toString().padStart(2, 0)}</h1>
                                <div className="p-6 relative z-1">
                                    <h3 className="mb-4 text-2xl h-20 font-bold text-sky-600 group-hover:text-white text-left flex items-center">{item.heading}</h3>
                                    <p className="text-justify">
                                        All components come with proper attributes to ensure full
                                        accessibility with the WAI-ARIA standards.
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-row gap-x-4 lg:flex-row-reverse mx-auto mt-8 lg:w-[75%] justify-start -translate-x-12 opacity-5 intersect intersect-half transition duration-500 intersect:translate-x-0 intersect:opacity-100">
                    <button className="inline-flex h-12 mt-8 items-center justify-evenly gap-x-4 whitespace-nowrap rounded border font-bold border-sky-700 px-6 text-md tracking-tight text-sky-600 shadow-lg transition shadow-sky-200 duration-300 hover:border-sky-600 hover:text-white bg-white hover:bg-sky-500 hover:shadow-md hover:shadow-sky-200 focus:border-sky-700 focus:text-sky-700 focus:shadow-md focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none">
                        <span>Start Now</span>
                        <span className="text-xl flex flex-row gap-x-0 text-center">
                            <MdDoubleArrow className="animate-pulse animate-duration-[700ms]" />
                            <MdDoubleArrow className="animate-pulse animate-duration-[700ms] animate-delay-[100ms] -translate-x-2" />
                        </span>
                    </button>
                </div>
                {/*<!-- End Large primary button with trailing icon  --> */}
            </section >
        </>
    )
}

export default Section3;