
import hospital from '../../assets/svg/hospital.png'
import doctorMale from '../../assets/svg/doctorMale.png'
import ad from '../../assets/svg/advertisement.png'
import { PiVideoCameraFill } from "react-icons/pi";
import { TbCalendarDot, TbAlarm, TbCalendarRepeat } from "react-icons/tb";
import { PiTimer } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { IoFootstepsOutline } from "react-icons/io5";
import { getFormattedDate, getLastSevenMonths, getWeekArray } from '../helper';
import { useState } from 'react';
import ReactApexCharts from 'react-apexcharts'
import Appointments from './Appointments';
import { BiArrowBack } from 'react-icons/bi';


const AppointmentDashboard = ({ }) => {

    const today = getFormattedDate();

    const [dayGraph, setDayGraph] = useState(true)
    const [graph, setGraph] = useState("stepCount");

    return (
        <div className="grid grid-cols-12 gap-4 mt-2 *:justify-between">
            <div className="col-span-8 flex flex-col h-full gap-y-1">
                <div className="upcomingAppointments">
                    <span className="text-xl font-semibold">
                        Upcoming appointment
                    </span>
                    <div className="grid grid-cols-12 gap-x-4 py-1">
                        <div className="col-span-5 flex flex-col gap-y-2">
                            <img src={hospital} className="bg-blue-300 rounded-md shadow-xl " />
                            <div className="hospitalDetails flex flex-col justify-center h-full">
                                <span className="text-xl font-semibold">Sir Ganga Ram Hospital</span>
                                <span className="text-sm font-normal">New Delhi, Delhi</span>
                            </div>
                        </div>
                        <div className="col-span-7 grid grid-rows-2 gap-y-2">
                            <div className="flex flex-row justify-between p-2 gap-x-4">
                                <div className="h-full flex items-center">
                                    <img className="h-20" src={doctorMale} />
                                </div>
                                <div className="flex-1 flex flex-col justify-center items-start">
                                    <span className="doctorName text-xl font-semibold">Dr. Emilia Winson</span>
                                    <span className="doctorSpec text-sm font-light">Physiotherapy</span>
                                </div>
                                <div className="flex flex-col *:w-full items-center gap-y-2 font-semibold">
                                    <button className="rounded-full py-2 px-5 hover:bg-green-600 bg-green-700 active:bg-green-800 text-white flex gap-x-2 items-center">
                                        <PiVideoCameraFill />
                                        <span>Video Call</span>
                                    </button>
                                    <button className="rounded-full py-2 px-5 hover:bg-[#FF8566] bg-[#FF6347] active:bg-[#ff6448] disabled:bg-[#CC4F39] text-white flex gap-x-2 items-center">
                                        <TbCalendarRepeat />
                                        <span>Reschedule</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 justify-items-startp-4 gap-x-4 bg-[#E0E0E0] p-4 rounded-lg shadow-xl border-slate-300 text-slate-700">
                                <div className="flex flex-row items-center gap-x-4">
                                    <div className="p-4 rounded-full bg-white">
                                        <TbCalendarDot className="text-2xl stroke-blue-400" />
                                    </div>
                                    <span className="text-lg font-medium">14 Jan, 2025</span>
                                </div>
                                <div className="flex flex-row flex-1 items-center gap-x-4">
                                    <div className="p-4 rounded-full bg-white">
                                        <TbAlarm className="text-2xl stroke-red-400" />
                                    </div>
                                    <span className="text-lg font-medium w-fit">10:00 AM - 11:00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider before:bg-slate-200 after:bg-slate-200"></div>
                <div className="patientActivities">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-xl font-semibold flex">
                                Patient activities
                            </span>
                            <span className="text-base font-medium mt-2 text-slate-500">
                                Today, {today}
                            </span>
                        </div>
                        <div className="relative flex flex-wrap items-center text-xl font-medium text-slate-600">
                            <label className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" htmlFor="id-c01">
                                Day
                            </label>
                            <input
                                className="peer relative h-4 w-8 mx-2 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all 
                                checked:bg-sky-200 checked:after:left-4 checked:after:bg-sky-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-sky-300 checked:after:hover:bg-sky-600 focus:outline-none checked:focus:bg-sky-400 checked:after:focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                                type="checkbox"
                                value=""
                                id="id-c01"
                                onChange={() => setDayGraph(!dayGraph)}
                            />
                            <label className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" htmlFor="id-c01">
                                Month
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-7 flex flex-col gap-y-2 shadow-xl rounded border-slate-400 p-2">
                            {graph === "stepCount" &&
                                <StepCountGraph dayGraph={dayGraph} />
                            }
                            {graph === "calorieBurn" &&
                                <CaloriesBurnedGraph dayGraph={dayGraph} />
                            }
                            {graph === "activityTime" &&
                                <ActivityTimeGraph dayGraph={dayGraph} />
                            }
                            <div className="grid grid-cols-3 rounded justify-between w-full gap-0 *:w-full">
                                <button onClick={() => { setGraph("stepCount") }} className={`${graph === "stepCount" ? 'bg-slate-800 text-slate-100' : 'bg-slate-700 text-slate-50 '} rounded-s-md inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap px-1 text-sm font-medium tracking-wide transition duration-300 hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-800 focus:text-slate-100 focus-visible:outline-none disabled:cursor-not-allowed`}>
                                    <span className="order-2">Step count</span>
                                    <span className="relative only:-mx-4">
                                        <IoFootstepsOutline />
                                    </span>
                                </button>
                                <button onClick={() => { setGraph("calorieBurn") }} className={`${graph === "calorieBurn" ? 'bg-slate-800 text-slate-100' : 'bg-slate-700 text-slate-50 '} inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap bg-slate-700 px-1 text-sm font-medium tracking-wide transition duration-300 hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-800 focus:text-slate-100 focus-visible:outline-none disabled:cursor-not-allowed`}>
                                    <span className="order-2">Calories burned</span>
                                    <span className="relative only:-mx-4">
                                        <AiOutlineFire />
                                    </span>
                                </button>
                                <button onClick={() => { setGraph("activityTime") }} className={`${graph === "activityTime" ? 'bg-slate-800 text-slate-100' : 'bg-slate-700 text-slate-50 '} rounded-e-md inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap bg-slate-700 px-1 text-sm font-medium tracking-wide transition duration-300 hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-800 focus:text-slate-100 focus-visible:outline-none disabled:cursor-not-allowed`}>
                                    <span className="order-2">Activity time</span>
                                    <span className="relative only:-mx-4">
                                        <PiTimer />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-5 flex flex-col justify-between rounded p-4 text-center shadow-xl bg-[#E0E0E0]">
                            <div className="text-3xl font-medium text-slate-950">
                                Daily progress
                            </div>
                            <div className="text-base font-light text-slate-900">
                                Keep improving the quality of your health
                            </div>
                            <DayActivityPie />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 flex flex-col h-full gap-y-2">
                <span className="text-xl font-semibold">
                    Scheduled appointment
                </span>
                <Appointments />
                <span className="cursor-pointer text-lg font-semibold w-full justify-center my-auto underline-offset-1 underline inline-flex items-center gap-x-4">See all schedules <BiArrowBack className="rotate-180" /> </span>
                <div className="rounded-sm w-full flex flex-col items-center shadow-lg justify-evenly p-1 px-2 bg-[#E0E0E0]">
                    <img src={ad} className="rounded-lg" />
                </div>
            </div>
        </div>
    )
}

const DayActivityPie = () => {
    const options = {
        chart: {
            type: "radialBar",
        },
        colors: ["#a6f7b6"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#000",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#000",
                        fontSize: "30px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#20E647"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Progress"]
    };

    const series = [67]

    return (
        <ReactApexCharts type='radialBar' options={options} series={series} />
    )
}

const CaloriesBurnedGraph = ({ dayGraph }) => {

    const xaxis = dayGraph ?
        { categories: getWeekArray() }
        :
        { categories: getLastSevenMonths() }

    const options = {
        chart: {
            type: "line"
        },
        xaxis,
        stroke: {
            curve: "smooth",
            colors: ["#FB573D"]
        }, tooltip: {
            enabled: false,
        }
    };

    const series = dayGraph ?
        [{
            name: 'Calories Burned',
            data: [20, 60, 50, 10, 70, 30, 49]
        }]
        :
        [{
            name: 'Calories Burned',
            data: [20, 60, 50, 10, 70, 30, 49]
        }]


    return (
        <ReactApexCharts type='line' options={options} series={series} />
    )
}

const ActivityTimeGraph = ({ dayGraph }) => {

    const xaxis = dayGraph ?
        { categories: getWeekArray() }
        :
        { categories: getLastSevenMonths() }

    const options = {
        chart: {
            type: "line"
        },
        xaxis,
        stroke: {
            curve: "smooth",
            colors: ["#FFC61A"]
        }
    };

    const series = dayGraph ?
        [{
            name: 'Calories Burned',
            data: [20, 60, 50, 10, 70, 30, 49]
        }]
        :
        [{
            name: 'Calories Burned',
            data: [20, 60, 50, 60, 50, 10, 70]
        }]


    return (
        <ReactApexCharts type='line' options={options} series={series} />
    )
}

const StepCountGraph = ({ dayGraph }) => {
    const xaxis = dayGraph ?
        { categories: getWeekArray() }
        :
        { categories: getLastSevenMonths() }

    const options = {
        chart: {
            type: "line"
        },
        xaxis,
        stroke: {
            curve: "smooth"
        }
    };


    const series = dayGraph ?
        [{
            name: 'Steps Count',
            data: [20, 60, 50, 10, 70, 30, 49]
        }]
        :
        [{
            name: 'Steps Count',
            data: [20, 60, 50, 60, 50, 10, 70]
        }]


    return (
        <ReactApexCharts type='line' options={options} series={series} />
    )
}

export default AppointmentDashboard;