import { DoctorProfile } from "../Images";

const DoctorInfo = (props) => {
    return (
        <>
            <div className="border-b-4 transition duration-150 overflow-clip rounded-md text-slate-500 shadow-md shadow-slate-200 p-2">
                <figure>
                    <DoctorProfile doctor={props.profile} />
                </figure>
                <div className="w-full">
                    <header className="mb-4 text-center">
                        <h3 className="text-base lg:text-xl xl:text-2xl mt-2 font-bold text-slate-700">
                            {props.name}, {props.degree}
                        </h3>
                        <p className="text-sm text-slate-600 capitalize">{props.spec}</p>
                    </header>
                </div>
            </div >
        </>
    )
}

export default DoctorInfo;