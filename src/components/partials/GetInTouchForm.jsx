
import { PiMapPinSimpleFill } from "react-icons/pi";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineSend } from "react-icons/ai";
import consultant from '../../assets/svg/consultant.png'
import patient from '../../assets/svg/patient.png'
import { useState } from "react";

const GetInTouchForm = () => {

    const [phoneNumber, setPhoneNumber] = useState('+1 ');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [isPatient, setIsPatient] = useState(true);

    const handlePhoneChange = (e) => {

        const input = e.target.value.trim()
        const digits = input.replace(/[^0-9]/g, '').slice(1, 11);

        // Format the digits
        const formattedPhone = digits.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
        setPhoneNumber(`+1 ${formattedPhone.trim()}`);
    }

    const handleNameChange = (e) => {

        const input = e.target.value
        setName(input)
    }

    const handleEmailChange = (e) => {

        const input = e.target.value.trim()
        setEmail(input)
    }

    const contactUsData = [{
        _id: 'callUsCard',
        icon: <AiOutlinePhone className="rotate-90" />,
        text: 'Call us',
        value: '+1 (555) 000-0000'
    }, {
        _id: 'emailUsCard',
        icon: <AiOutlineMail />,
        text: 'Email us',
        value: 'info@o-consultation.com'
    }, {
        _id: 'visitUsCard',
        icon: <PiMapPinSimpleFill />,
        text: 'Visit us',
        value: '2578 Gerald L. Bates Drive, Cambridge'
    }]

    return (
        <>
            <div className="flex flex-col grow justify-between px-4 lg:p-0 overflow-visible">
                <div className="topSection flex flex-col grow mb-6 h-full">
                    <label className="relative w-full lg:w-[75%] text-center mx-auto">
                        Contact us using the information below.
                        <br />
                        We'll respond promptly to your inqueries and feedback
                    </label>
                    <div className="relative my-3">
                        <input id="name" type="text" value={name} required onChange={handleNameChange} name="name" placeholder="Enter your name" className="peer relative h-12 w-full border rounded-sm border-slate-200 px-4 pl-12 text-sky-900 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-800 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                        <label htmlFor="name" className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-sky-800 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2  peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-800 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            Full Name
                        </label>
                        <AiOutlineUser className="absolute top-3 left-4 h-6 w-6 text-sky-800 peer-invalid:text-pink-500 peer-disabled:cursor-not-allowed" />
                    </div>
                    <div className="relative my-3">
                        <input id="email" type="email" onChange={handleEmailChange} value={email} name="email" required placeholder="Enter your name" className="peer relative h-12 w-full border rounded-sm border-slate-200 px-4 pl-12 text-sky-900 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-800 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                        <label htmlFor="email" className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-sky-800 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2  peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-800 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            Email
                        </label>
                        <AiOutlineMail className="absolute top-3 left-4 h-6 w-6 text-sky-800 peer-invalid:text-pink-500 peer-disabled:cursor-not-allowed" />
                    </div>
                    <div className="relative my-3">
                        <input id="number" type="tel" onChange={handlePhoneChange} required value={phoneNumber} maxLength={16} pattern="^\+1 \d{3}-\d{3}-\d{4}$" name="number" placeholder="000-000-0000" className="peer relative h-12 w-full border rounded-sm border-slate-200 px-4 pl-12 text-sky-900 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-800 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                        <label htmlFor="number" className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-sky-800 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2  peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-800 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            Phone
                        </label>
                        <AiOutlinePhone className="absolute rotate-90 top-3 left-4 h-6 w-6 text-sky-800 peer-invalid:text-pink-500 peer-disabled:cursor-not-allowed" />
                    </div>
                    <div className="relative my-3 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                        <div className="w-full">
                            <input className="peer hidden transition-colors border-2 rounded appearance-none cursor-pointer peer" type="checkbox" id="patient" onChange={() => { }} checked={isPatient} />
                            <label onClick={() => setIsPatient(!isPatient)} className="cursor-pointer flex flex-row bg-white peer-checked:bg-sky-700 mx-auto rounded shadow-lg text-left items-center peer-checked:text-sky-50 text-sky-900 shadow-slate-200 p-4 gap-x-4 group">
                                <img src={patient} alt="patientSVG" className="block h-10 xl:h-12 drop-shadow-[0_6px_6px_#164dcc50] group-hover:-translate-x-0.5 transition-all duration-700" />
                                <div className="flex flex-col">
                                    <h3 className="text-sm">
                                        I'm a
                                    </h3>
                                    <span className="text-base lg:text-xl font-bold tracking-tighter">Patient</span>
                                </div>
                            </label>
                        </div>
                        <div className="w-full">
                            <input className="peer hidden transition-colors border-2 rounded appearance-none cursor-pointer peer" type="checkbox" id="consultant" onChange={() => { }} checked={!isPatient} />
                            <label onClick={() => setIsPatient(!isPatient)} className="cursor-pointer flex flex-row bg-white peer-checked:bg-sky-700 mx-auto rounded shadow-lg text-left peer-checked:text-sky-50 items-center text-sky-900 shadow-slate-200 p-4 gap-x-4 group">
                                <img src={consultant} alt="consultantSVG" className="block h-10 xl:h-12 drop-shadow-[0_6px_6px_#164dcc50] group-hover:-translate-x-0.5 transition-all duration-700" />
                                <div className="flex flex-col">
                                    <h3 className="text-sm">
                                        I'm a
                                    </h3>
                                    <span className="text-base lg:text-xl font-bold tracking-tighter">Consultant</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="relative my-3">
                        <textarea id="message" type="text" name="message" placeholder="Write your message" rows="3" className="resize-none relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-sky-900 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"></textarea>
                        <label htmlFor="message" className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-sky-800 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            Write your message
                        </label>
                    </div>
                    <div className="relative flex flex-wrap items-center">
                        <input defaultChecked className="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-sky-800 checked:bg-sky-800 checked:hover:border-sky-800 checked:hover:bg-sky-800 focus:outline-none checked:focus:border-sky-800 checked:focus:bg-sky-800 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50" type="checkbox" id="id-c01" />
                        <label className="pl-2 font-normal text-xs cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" htmlFor="id-c01">
                            You agree to our friendly <u className="font-medium">privacy policy</u>.
                        </label>
                        <svg
                            className="pointer-events-none absolute left-0 top-0 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            aria-labelledby="title-1 description-1"
                            role="graphics-symbol"
                        >
                            <title id="title-1">Check mark icon</title>
                            <desc id="description-1">
                                Check mark icon to indicate whether the radio input is checked or
                                not.
                            </desc>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                            />
                        </svg>
                    </div>
                    <div className="relative mt-3 flex justify-center">
                        <button className="inline-flex items-center justify-center h-12 gap-2 px-20 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-sky-800 hover:bg-sky-600 focus:bg-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                            Send Your Message
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
                <div className="bottomSection mb-6 grid grid-rows-auto md:grid-cols-3 gap-4 items-bottom w-full">
                    {contactUsData.map((item,) =>
                        <div className="flex flex-row items-start gap-4" key={item._id}>
                            <div className="flex flex-col items-start w-full gap-0 text-base">
                                <h3 className="text-base md:text-lg leading-6 text-sky-900 flex flex-row gap-x-2 items-center">
                                    {item.icon}
                                    {item.text}
                                </h3>
                                <div className="text-slate-700 text-sm font-normal">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-xs text-right">
                We promise your details are secure with us.
            </div>
        </>
    )
}

export default GetInTouchForm;