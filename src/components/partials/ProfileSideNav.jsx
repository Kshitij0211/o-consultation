import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { TbLayoutDashboard, TbCalendarPlus, TbActivity, TbSettings2, TbHelpSquareRounded, TbArrowLeftFromArc } from "react-icons/tb";
import avatar from '../../assets/svg/avatar.png'
import consulting from '../../assets/svg/consulting.png'
import { GiQueenCrown } from "react-icons/gi";
import { BiChevronRightCircle } from "react-icons/bi";

const ProfileSideNav = ({ currentScreen, setCurrentScreen }) => {

    return (
        <div className="sideBar w-fit sticky top-0 left-0 max-h-svh flex flex-col gap-6 py-6 p-4 bg-slate-950 text-white">
            <div className="sidebarTop w-10 h-10">
                <Link to="/">
                    <img src={logo} className="animate-spin animate-infinite animate-duration-[7000ms] animate-ease-linear" />
                </Link>
            </div>
            <ul className="sidebarMiddle justify-center items-center my-10 flex flex-1 flex-col gap-8 text-slate-400 *:cursor-pointer *:transition-all *:duration-300 *:animate-jump-in">
                <li
                    onClick={() => setCurrentScreen("appointment")}
                    className={`flex flex-col items-center justify-center gap-y-2 ${currentScreen === "appointment" ? 'text-slate-50' : ''}`}>
                    <TbLayoutDashboard className={`stroke-1 ${currentScreen === "appointment" ? 'text-4xl' : 'text-3xl'}`} />
                </li>
                <li
                    onClick={() => setCurrentScreen("schedule")}
                    className={`flex flex-col items-center justify-center gap-y-2 ${currentScreen === "schedule" ? 'text-slate-50' : ''}`}>
                    <TbCalendarPlus className={`stroke-1 ${currentScreen === "schedule" ? 'text-4xl' : 'text-3xl'}`} />
                </li>
                <li
                    onClick={() => setCurrentScreen("activity")}
                    className={`flex flex-col items-center justify-center gap-y-2 ${currentScreen === "activity" ? 'text-slate-50' : ''}`}>
                    <TbActivity className={`stroke-1 ${currentScreen === "activity" ? 'text-4xl' : 'text-3xl'}`} />
                </li>
                <li
                    onClick={() => setCurrentScreen("settings")}
                    className={`flex flex-col items-center justify-center gap-y-2 ${currentScreen === "settings" ? 'text-slate-50' : ''}`}>
                    <TbSettings2 className={`stroke-1 ${currentScreen === "settings" ? 'text-4xl' : 'text-3xl'}`} />
                </li>
            </ul>
            <ul className="sidebarBottome items-center flex flex-col gap-8 text-slate-400 *:cursor-pointer *:transition-all *:duration-300 *:animate-jump-in">
                <li
                    onClick={() => setCurrentScreen("help")}
                    className={`flex flex-col items-center justify-center gap-y-2 ${currentScreen === "help" ? 'text-slate-50' : ''}`}>
                    <TbHelpSquareRounded className={`stroke-1 ${currentScreen === "help" ? 'text-4xl' : 'text-3xl'}`} />
                </li>
                <li className="flex justify-center">
                    <TbArrowLeftFromArc className="text-3xl stroke-1 text-red-400" />
                </li>
            </ul>
        </div>
    )
}

export const ProfileSideNav2 = () => {

    return (
        <div className="sideBar2 max-h-svh sticky top-0 flex flex-col w-[20%] justify-end items-center bg-[#bfd8f1] p-4">
            <div className="topItem py-6 flex justify-start items-center">
                <button className="rounded-md bg-[#EFBF04] flex flex-row items-center justify-between gap-x-6 p-3 my-4 shadow-md hover:shadow-lg hover:shadow-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <GiQueenCrown className="text-4xl text-white" />
                    <div className="flex flex-col flex-1 text-start">
                        <div className="text-white text-lg font-medium">Try Pro Version</div>
                        <div className="text-white text-sm font-normal">Unlock more features</div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                        <BiChevronRightCircle
                            className="text-4xl font-extralight text-white stroke-transparent stroke-[0.5px] mx-auto"
                        />
                    </div>
                </button>
            </div>
            <div className="centerItem flex flex-col items-center justify-start w-full flex-1">
                <div className="rounded-full w-72 h-72 ">
                    <img src={avatar} />
                </div>
                <div className="font-semibold text-xl mt-1">Track your progress</div>
                <div className="font-normal text-base my-2 text-slate-600 text-center">Review every situation & activity</div>
                <button className="rounded-full px-6 py-2 text-base font-semibold text-slate-50 
            hover:bg-green-600 bg-green-700 active:bg-green-800 border-green-900
            shadow-2xl">
                    Check it now</button>
            </div>
            <div className="bottomItem bottom-0">
                <img src={consulting} className="w-full h-full contrast-125" />
            </div>
        </div>
    )
}

export default ProfileSideNav;