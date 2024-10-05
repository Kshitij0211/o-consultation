const DoctorInfo = ( props ) => {

    return (
        <>
            {/*<!-- Component: Basic blog card --> */}
            < div  className="border-b-4 border-white hover:border-sky-600 transition duration-150 overflow-clip rounded-md *:rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 p-2">
                {/*  <!-- Image --> */}
                <figure >
                    <img
                        src={props.profile}
                        alt="card image rounded-md "
                        className="aspect-square object-cover items-baseline"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="w-full">
                    <header className="mb-4 flex flex-row items-center justify-between">
                        <div className="left">
                            <h3 className="text-xl mt-2 font-semibold text-slate-700">
                                {props.name}
                            </h3>
                            <p className="text-sm text-slate-600 capitalize">{props.spec}</p>
                        </div>
                        <div className="right flex flex-row">
                            {[...Array(props.rating)].map((_, key) =>
                                <span key={key} aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-4 w-4 text-amber-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            )}
                            {[...Array(5 - props.rating)].map((_, key) =>
                                <span key={key} aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4 text-amber-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </span>
                            )}
                        </div>
                    </header>
                    <p className="text-sm text-slate-600">
                        {props.content}
                    </p>
                    <div className="flex flex-row justify-between mt-4 gap-x-2">
                        <button className="inline-flex flex-grow items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                            <span>Schedule Appointment</span>
                        </button>
                        <button className="basis-[3/7] inline-flex items-center justify-center h-8 px-4 gap-2 text-xs whitespace-nowrap rounded border border-sky-500 font-medium tracking-wide text-sky-500 transition duration-300 hover:border-sky-600 hover:text-sky-600 focus:border-sky-700 focus:text-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none">
                            <span>More Details</span>
                        </button>
                    </div>
                </div>
            </div >
            {/*<!-- End Basic blog card --> */}
        </>
    )
}

export default DoctorInfo;