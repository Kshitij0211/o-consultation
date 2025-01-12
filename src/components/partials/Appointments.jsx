import mentalHealth from '../../assets/svg/mentalHealth.png'
import physio from '../../assets/svg/physio.png'
import chiro from '../../assets/svg/chiro.png'
import yoga from '../../assets/svg/yoga.png'
import { BiChevronRightCircle } from "react-icons/bi";

const Appointments = () => {

    const appointments = [{
        imgSrc: mentalHealth,
        name: "Stress Management",
        date: "15th Jan",
        time: "10:00 pm - 12:00 pm",
        colors: {
            border: "border-[#675394]",
            gradFrom: "from-[#d5c3ff]",
            gradTo: "to-[#ddd1f8]",
            iconColor: "text-[#675394]",
            text: "text-[#463669]"
        }
    }, {
        imgSrc: physio,
        name: "Physiotherapy",
        date: "18th Jan",
        time: "09:00 am - 10:00 am",
        colors: {
            border: "border-[#C34723]",
            gradFrom: "from-[#FFC5A3]",
            gradTo: "to-[#FFE4B5]",
            iconColor: "text-[#C34723]",
            text: "text-[#9F2D0C]"
        }
    }, {
        imgSrc: chiro,
        name: "Chiropractic Adjustment",
        date: "4th Feb",
        time: "10:30 am - 11:00 am",
        colors: {
            border: "border-[#004526]",
            gradFrom: "from-[#50C878]",
            gradTo: "to-[#90EE90]",
            iconColor: "text-[#004526]",
            text: "text-[#00311B]"
        }
    }, {
        imgSrc: yoga,
        name: "Yoga Therapy",
        date: "19th Feb",
        time: "07:00 am - 09:00 am",
        colors: {
            border: "border-[#33160A]",
            gradFrom: "from-[#968369]",
            gradTo: "to-[#a08665]",
            iconColor: "text-[#33160A]",
            text: "text-[#211607]"
        }
    }]

    return (
        <div className="p-3 flex flex-col gap-y-4">
            {
                appointments.map((item, key) =>
                    <div key={key} className={`rounded-lg flex flex-row gap-x-4 border-l-8 ${item.colors.border} justify-between items-center bg-gradient-to-r ${item.colors.gradTo} ${item.colors.gradFrom} p-5 drop-shadow-md`}>
                        <div className="displayImage rounded-full w-12">
                            <img src={item.imgSrc} />
                        </div>
                        <div className={`appointmentDetails flex flex-col flex-1 ${item.colors.text}`}>
                            <span className="appointmentName text-lg font-medium">{item.name}</span>
                            <div className="flex flex-row items-center gap-x-6">
                                <span className="appointmentDate text-base font-normal">{item.date}</span>
                                <span className="appointmentTime text-sm font-normal">{item.time}</span>
                            </div>
                        </div>
                        <div className="displayImage w-12 h-12 flex items-center justify-center">
                            <BiChevronRightCircle className={`text-4xl font-extralight ${item.colors.iconColor} stroke-transparent stroke-[0.5px] mx-auto`} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Appointments;