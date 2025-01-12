import React, { useState, useRef, useEffect } from "react"
import { CiMapPin } from "react-icons/ci";
import { MdTouchApp } from "react-icons/md";
import GetInTouchForm from "./GetInTouchForm";
import { GITImage } from "../Images";

const GetInTouch = () => {
    const [isShowing, setIsShowing] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsShowing(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef])

    useEffect(() => {
        let html = document.querySelector("html")

        if (html) {
            if (isShowing && html) {
                html.style.overflowY = "hidden"

                const focusableElements =
                    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'

                const modal = document.querySelector("#modal") // select the modal by it's id

                const firstFocusableElement =
                    modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

                const focusableContent = modal.querySelectorAll(focusableElements)

                const lastFocusableElement =
                    focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

                document.addEventListener("keydown", function (e) {
                    if (e.keyCode === 27) {
                        setIsShowing(false)
                    }

                    let isTabPressed = e.key === "Tab" || e.keyCode === 9

                    if (!isTabPressed) {
                        return
                    }

                    if (e.shiftKey) {
                        // if shift key pressed for shift + tab combination
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus() // add focus for the last focusable element
                            e.preventDefault()
                        }
                    } else {
                        // if tab key is pressed
                        if (document.activeElement === lastFocusableElement) {
                            // if focused has reached to last focusable element then focus first focusable element after pressing tab
                            firstFocusableElement.focus() // add focus for the first focusable element
                            e.preventDefault()
                        }
                    }
                })

                firstFocusableElement.focus()
            } else {
                html.style.overflowY = "visible"
            }
        }
    }, [isShowing])

    return (
        <>
            <button onClick={() => setIsShowing(true)} className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-3 md:px-5 text-sm md:text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                <span>Get In Touch</span>
                <MdTouchApp className='text-base' />
            </button>

            {isShowing && typeof document !== "undefined" ?
                <div className="fixed top-0 left-0 z-[999] flex h-svh w-svw flex-1 items-center justify-center bg-slate-900/70 backdrop-blur-3xl"
                    aria-labelledby="content-3a"
                    aria-modal="true"
                    tabIndex="-1"
                    role="dialog"
                >
                    <div
                        ref={wrapperRef}
                        className="flex items-stretch max-h-[90svh] w-11/12 md:w=10/12 lg:w-8/12 flex-row gap-6 overflow-hidden rounded bg-white p-3 md:p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                        id="modal"
                        role="document"
                    >
                        <div className="lg:block hidden overflow-hidden rounded-br-3xl text-slate-500 shadow-md shadow-slate-200 w-2/5">
                            <figure className="relative align-middle h-full">
                                <GITImage />
                                <figcaption className="absolute bottom-0 left-0 w-full p-3 text-white">
                                    <div className="bg-gradient-to-t from-slate-800 locationFigCaption p-2 pt-6">
                                        <h3 className="text-lg font-medium">O-Consultation Clinic</h3>
                                        <p className="text-sm font-light flex flex-row gap-1 items-center">
                                            <CiMapPin />
                                            2578 Gerald L. Bates Drive, Cambridge
                                        </p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div id="content-3a" className="flex flex-col items-top gap-4 pb-1 w-full lg:w-3/5">
                            <header className="flex w-full border-b-2 pb-2">
                                <h3 className="flex-1 text-xl lg:text-3xl font-medium text-slate-700">
                                    Get In Touch
                                </h3>
                                <button
                                    onClick={() => setIsShowing(false)}
                                    className="inline-flex h-full items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-sky-900 transition duration-300 hover:bg-sky-100 hover:text-sky-800"
                                    aria-label="close dialog"
                                >
                                    <span className="relative only:-mx-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            role="graphics-symbol"
                                            aria-labelledby="title-79 desc-79"
                                        >
                                            <title id="title-79">Icon title</title>
                                            <desc id="desc-79">
                                                A more detailed description of the icon
                                            </desc>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </header>
                            <div className="content h-full flex flex-col overflow-auto">
                                <GetInTouchForm />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>
                </>
            }
        </>
    )
}

export default GetInTouch;