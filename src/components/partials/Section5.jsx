import { useEffect } from "react"
import Comments from "./Comments"
import Glide, { Controls, Autoplay } from "@glidejs/glide/dist/glide.modular.esm"

const Section5 = () => {

    const userComments = [{
        _id: 1211,
        profile: "profile1",
        name: "Maude Russo",
        likes: 12512,
        comment: `The search feature made it easy to find the right specialist for my needs. I felt supported throughout the entire process!`
    }, {
        _id: 6123,
        profile: "profile2",
        name: "Chelsea Salazar",
        likes: 1922,
        comment: `Scheduling my appointment was a breeze, and I loved the reminders! The virtual consultation exceeded my expectations.`
    }, {
        _id: 1626,
        profile: "profile1",
        name: "Refugio Nava",
        likes: 192,
        comment: `Connecting with a top-rated doctor was quick and hassle-free. I found exactly what I needed with just a few clicks. The platform is user-friendly and efficient. I appreciated the thoroughness of my consultation!`
    }, {
        _id: 9465,
        profile: "profile2",
        name: "Bernadette Snider",
        likes: 2151,
        comment: `The wealth of resources available after my visit was incredibly helpful. It gave me confidence in managing my health! The whole experience was hassle-free! I’ll definitely recommend this service to my friends.`
    }, {
        _id: 9232,
        profile: "profile1",
        name: "Ellen Barr",
        likes: 1142,
        comment: `The variety of specialists available is impressive. I felt I was in good hands from start to finish! My consultant was attentive and answered all of my questions.`
    }]

    useEffect(() => {

        const slider = new Glide(".glideComments", {
            type: "carousel",
            focusAt: "center",
            perView: 2,
            autoplay: 4500,
            animationDuration: 700,
            rewind: true,
            gap: 48,
            classNames: {
                nav: {
                    active: "[&>*]:bg-slate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
            peek: {
                before: 25,
                after: 25
            }
        }).mount({Controls, Autoplay})


        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            <section className="bg-gray-100 justify-center flex flex-col p-6 md:px-12 py-10 overflow-clip relative">
                <div className="hero text-center">
                    <h1 className="font-bold md:font-semibold lg:font-medium heroHeading text-center">
                        What our Customer 
                        <span className='text-sky-600'> Says</span>
                    </h1>
                    <p className="md:text-lg text-md md:leading-8 text-justify md:text-center mx-auto my-4 md:mt-8 text-gray-600 w-full md:w-[75%]">
                        Hear from our clients 💬 — real stories from patients who’ve trusted us for convenient, reliable, and compassionate online care.
                    </p>
                </div>
                <div className="md:mx-auto w-full my-4">
                    <div className="glideComments relative">
                        <div data-glide-el="track">
                            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-clip p-0">
                                {userComments.map((user, key) =>
                                    <Comments key={key} user={user} />
                                )}
                            </ul>
                        </div>
                        <div
                            className="flex w-full items-center justify-center gap-2"
                            data-glide-el="controls[nav]"
                        >
                            {userComments.map((user, index) =>
                                <button
                                    key={index}
                                    className="group p-4"
                                    data-glide-dir={`=${index}`}
                                    aria-label={`goto slide ${index + 1}`}
                                >
                                    <span className="block h-2 w-2 rounded-full ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section5;