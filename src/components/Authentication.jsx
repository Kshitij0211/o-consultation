import { useState } from "react";
import Footer from "./partials/Footer";
import { EmptyNavbar } from "./partials/Navbar";
import registerIllustration from '../assets/svg/Register.png';
import loginIllustration from '../assets/svg/Login.png';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = ({ setToggleLogin }) => {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
    })

    const handleChange = evt => {
        const value = evt.target.value
        setUserDetails({
            ...userDetails,
            [evt.target.name]: value,
        })
    }

    const handleSubmit = () => {
        console.table(userDetails);
    }

    return (
        <>
            <div className="h-full w-full flex flex-row p-2">
                <div className="left w-1/2 h-full flex items-center p-8">
                    <img src={registerIllustration} className="" />
                </div>
                <div className="right w-1/2 flex-1 flex flex-col justify-center text-white bg-slate-800 rounded p-8">
                    <div className="grid grid-cols-2">
                        <div className="leftCol flex flex-col">
                            <h1 className="text-4xl font-semibold w-full">
                                Create an account
                            </h1>
                            <span className="text-base mt-2">
                                Already have an account?&nbsp;
                                <span onClick={() => setToggleLogin(true)} className="text-[#FF748D] font-medium underline cursor-pointer">Log in</span>
                            </span>
                        </div>
                        <div className="rightCol flex justify-end items-start">
                            <button onClick={()=>{
                                navigate('/');
                            }} className="btn text-xs rounded-full border-1 flex flex-row outline outline-2 transition-all duration-75  outline-[#FF748D]/70 hover:outline-offset-2 hover:bg-[#FF748D] px-4 py-2 gap-x-2 items-center">Back to home <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className="inputForm flex flex-col gap-y-4 my-6 flex-1 justify-center">
                        <div className="relative">
                            <input
                                id="name"
                                type="text"
                                inputMode="text"
                                name="name"
                                placeholder="Name"
                                value={userDetails["name"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                inputMode="text"
                                name="email"
                                placeholder="Email"
                                value={userDetails["email"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-500 border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-invalid:text-red-500"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="userName"
                                type="text"
                                inputMode="text"
                                name="userName"
                                placeholder="Username"
                                value={userDetails["userName"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="userName"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                inputMode="text"
                                name="password"
                                placeholder="Password"
                                value={userDetails["password"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Password
                            </label>
                        </div>
                        <div className="relative flex flex-wrap items-center">
                            <input className="w-4 h-4 transition-colors bg-slate-800 border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-[#FD5271] checked:bg-[#FF748D] checked:hover:border-[#FD5271] checked:hover:bg-[#FF748D] focus:outline-none checked:focus:border-[#FD5271] checked:focus:bg-[#FD5271] disabled:cursor-not-allowed" type="checkbox" id="id-c01" />
                            <label className="pl-2 cursor-pointer text-white text-sm font-thin peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" htmlFor="id-c01">
                                I agree to the&nbsp;
                                <span className="text-[#FF748D] font-medium underline cursor-pointer">Terms & Conditions</span>
                            </label>
                            <svg className="absolute left-0 w-4 h-4 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-slate-800 stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="title-1 description-1" role="graphics-symbol">
                                <title id="title-1">Check mark icon</title>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z" />
                            </svg>
                        </div>
                        <button onClick={handleSubmit} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-semibold tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-1 hover:outline-2 outline-[#FF748D] shadow-slate-900 hover:bg-[#FF7D95] hover:outline-offset-2 ease-in-out hover:shadow-lg hover:shadow-slate-900 focus:bg-[#FD5271] focus:shadow-md focus:shadow-emerald-200">
                            <span>Create account</span>
                        </button>
                        <div className="divider before:bg-slate-700 after:bg-slate-700">OR</div>
                        <div className="otherLogin flex flex-row justify-evenly gap-x-4">
                            <button className="basis-1/2 inline-flex items-center justify-center h-12 gap-4 px-6 text-base font-normal tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-2 outline-slate-500 hover:outline-offset-1 shadow-slate-900 hover:shadow-lg hover:shadow-slate-900 focus:shadow-md focus:shadow-emerald-200">
                                <FcGoogle className="text-2xl" />
                                <span>Sign up with Google</span>
                            </button>
                            <button className="basis-1/2 inline-flex items-center justify-center h-12 gap-4 px-6 text-base font-normal tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-2 outline-slate-500 hover:outline-offset-1 shadow-slate-900 hover:shadow-lg hover:shadow-slate-900 focus:shadow-md focus:shadow-emerald-200">
                                <BsApple className="text-2xl" />
                                <span>Sign up with Apple</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Login = ({ setToggleLogin }) => {

    const [userDetails, setUserDetails] = useState({
    })

    const handleChange = evt => {
        const value = evt.target.value
        setUserDetails({
            ...userDetails,
            [evt.target.name]: value,
        })
    }    

    const handleSubmit = () => {
        console.table(userDetails);
    }

    return (
        <>
            <div className="h-full w-full flex flex-row p-2">
                <div className="left w-1/2 h-full flex items-center p-8">
                    <img src={loginIllustration} className="" />
                </div>
                <div className="right w-1/2 flex-1 flex flex-col justify-center text-white bg-slate-800 rounded p-8">
                    <div className="grid grid-flow-col-dense items-stretch">
                        <div className="leftCol flex flex-col">
                            <h1 className="text-4xl font-semibold w-full">
                                Sign in to <span className="text-[#FF748D]">O-Consultation</span>
                            </h1>
                            <span className="text-base mt-2">
                                Don't have an account?&nbsp;
                                <span onClick={() => setToggleLogin(false)} className="text-[#FF748D] font-medium underline cursor-pointer">Sign up</span>
                            </span>
                        </div>
                        <div className="rightCol flex justify-end items-start w-full">
                            <button onClick={()=>{
                                navigate('/');
                            }} className="btn text-xs rounded-full border-1 flex flex-row outline outline-2 transition-all duration-75  outline-[#FF748D]/70 hover:outline-offset-2 hover:bg-[#FF748D] px-4 py-2 gap-x-2 items-center">Back to home <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className="inputForm flex flex-col gap-y-4 my-6 flex-1 justify-center">
                        <div className="relative">
                            <input
                                id="userName"
                                type="text"
                                inputMode="text"
                                name="userName"
                                placeholder="Username"
                                value={userDetails["userName"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="userName"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                inputMode="text"
                                name="password"
                                placeholder="Password"
                                value={userDetails["password"]}
                                className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-200 placeholder-transparent bg-slate-800 outline-none transition-all invalid:border-red-500 invalid:text-red-border-red-500 focus:border-[#FF748D] focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-200 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-slate-800 before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-red-border-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-border-red-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#FF748D] peer-invalid:peer-focus:text-red-border-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Password
                            </label>
                        </div>
                        <button onClick={handleSubmit} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-semibold tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-1 hover:outline-2 outline-[#FF748D] shadow-slate-900 hover:bg-[#FF7D95] hover:outline-offset-2 ease-in-out hover:shadow-lg hover:shadow-slate-900 focus:bg-[#FD5271] focus:shadow-md focus:shadow-emerald-200">
                            <span>Sign In</span>
                        </button>
                        <div className="divider before:bg-slate-700 after:bg-slate-700">OR</div>
                        <div className="otherLogin flex flex-row justify-evenly gap-x-4">
                            <button className="basis-1/2 inline-flex items-center justify-center h-12 gap-4 px-6 text-base font-normal tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-2 outline-slate-500 hover:outline-offset-1 shadow-slate-900 hover:shadow-lg hover:shadow-slate-900 focus:shadow-md focus:shadow-emerald-200">
                                <FcGoogle className="text-2xl" />
                                <span>Sign in with Google</span>
                            </button>
                            <button className="basis-1/2 inline-flex items-center justify-center h-12 gap-4 px-6 text-base font-normal tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap outline outline-2 outline-slate-500 hover:outline-offset-1 shadow-slate-900 hover:shadow-lg hover:shadow-slate-900 focus:shadow-md focus:shadow-emerald-200">
                                <BsApple className="text-2xl" />
                                <span>Sign in with Apple</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Authentication = () => {

    const [toggleLogin, setToggleLogin] = useState(false)

    return (
        <div className="min-h-svh min-w-svw flex flex-col justify-between bg-radial-gradient from-sky-600 to-sky-950">
            <EmptyNavbar />
            <div className="min-h-[70%] w-[75%] backdrop-blur-md bg-slate-800/80 rounded my-2 mx-auto p-2">
                {
                    toggleLogin ?
                        <Login setToggleLogin={setToggleLogin} />
                        :
                        <Register setToggleLogin={setToggleLogin} />
                }
            </div>
            <Footer />
        </div>
    )
}

export default Authentication;