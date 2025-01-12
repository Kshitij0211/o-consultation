import { TbBell, TbUser } from "react-icons/tb";
import { FiMoon, FiSun } from "react-icons/fi";
import AppointmentDashboard from "./AppointmentDashboard";
import { useState } from "react";

const Content = ({ currentScreen }) => {

    const [dark, setDark] = useState(false);

    return (
        <div className="p-4 px-12 w-full">
            <div className="screenHeader flex">
                <div className="leftSideHeader flex flex-col flex-1">
                    <div className="text-5xl font-semibold text-slate-700">
                        Hi, Kshitij R.
                    </div>
                    <div className="font-light text-sm mt-3">Let's track your health daily!</div>
                </div>
                <ul className="rightSideHeader flex flex-row items-center gap-x-3 *:cursor-pointer">
                    <li onClick={() => setDark(!dark)} className={`rounded-full bg-blue-300 p-3 ${!dark ? 'hidden' : 'block'}`}>
                        <FiSun className={`transition-all duration-300 ${dark ? 'opacity-100' : 'opacity-0'}`} />
                    </li>
                    <li onClick={() => setDark(!dark)} className={`rounded-full bg-blue-300 p-3 ${dark ? 'hidden' : 'block'}`}>
                        <FiMoon className={`transition-all duration-300 ${dark ? 'opacity-0' : 'opacity-100'}`} />
                    </li>
                    <li className="rounded-full bg-blue-300 p-3">
                        <TbBell />
                    </li>
                    <li className="rounded-full bg-blue-300 p-3">
                        <TbUser />
                    </li>
                </ul>
            </div>
            {currentScreen === 'appointment' &&
                <AppointmentDashboard />
            }
        </div >
    )
}

export default Content;