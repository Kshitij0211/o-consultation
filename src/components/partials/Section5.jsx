import { useEffect } from "react"
import Comments from "./Comments"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"
import profile1 from "../../assets/profile1.jpg"
import profile2 from "../../assets/profile2.jpg"
import Glide from "@glidejs/glide"

const Section5 = () => {
    
    const userComments = [{
        _id: 1211,
        profile: profile1,
        name: "Maude Russo",
        likes: 12512,
        comment: `The search feature made it easy to find the right specialist for my needs. I felt supported throughout the entire process!`
    }, {
        _id: 6123,
        profile: profile2,
        name: "Chelsea Salazar",
        likes: 1922,
        comment: `Scheduling my appointment was a breeze, and I loved the reminders! The virtual consultation exceeded my expectations.`
    }, {
        _id: 1626,
        profile: profile1,
        name: "Refugio Nava",
        likes: 192,
        comment: `Connecting with a top-rated doctor was quick and hassle-free. I found exactly what I needed with just a few clicks. The platform is user-friendly and efficient. I appreciated the thoroughness of my consultation!`
    }, {
        _id: 9465,
        profile: profile2,
        name: "Bernadette Snider",
        likes: 2151,
        comment: `The wealth of resources available after my visit was incredibly helpful. It gave me confidence in managing my health! The whole experience was hassle-free! I’ll definitely recommend this service to my friends.`
    }, {
        _id: 9232,
        profile: profile1,
        name: "Ellen Barr",
        likes: 1142,
        comment: `The variety of specialists available is impressive. I felt I was in good hands from start to finish! My consultant was attentive and answered all of my questions.`
    }]

    useEffect(() => {
        const slider2 = new Glide(".glideComments", {
            type: "carousel",
            focusAt: 1,
            animationDuration: 500,
            autoplay: 4500,
            rewind: true,
            perView: 2,
            gap: 48,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
                320: {
                    perView: 1
                }
            },
            peek: {
              before: 100,
              after: 100
            }
        }).mount()

        return () => {
            slider2.destroy()
        }
    }, [])

    return (
        <>
            <section className="bg-gray-100 justify-center flex flex-col p-6 md:px-12 py-10 overflow-clip relative">
                <div className="hero text-center">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold md:font-semibold lg:font-medium tracking-tight text-sky-600 text-center">
                        What Client say about Us
                    </h1>
                    <p className="md:text-lg text-md leading-8 my-4 md:mt-8 text-gray-600 w-full md:w-[75%] mx-auto">
                        Web accessibility means
                        that websites, tools, and technologies are designed and developed so
                        that people with disabilities can use them.
                    </p>
                </div>
                <div className="md:mx-auto w-full my-4">
                    <div className="glideComments relative">
                        {/*    <!-- Slides --> */}
                        <div data-glide-el="track">
                            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-clip p-0">
                                {userComments.map((user, key) =>
                                    <Comments key={key} profile={user.profile} userName={user.name} _id={user._id} likes={user.likes} comment={user.comment} />
                                )}
                            </ul>
                        </div>
                        <div
                            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
                            data-glide-el="controls"
                        >
                            <button
                                className="inline-flex h-12 w-12 items-center justify-center hover:scale-150 rounded-full bg-sky-950 text-white transition duration-300"
                                data-glide-dir="<"
                                aria-label="prev slide"
                            >
                                <FaAnglesLeft />
                            </button>
                            <button
                                className="inline-flex h-12 w-12 items-center justify-center hover:scale-150 rounded-full bg-sky-950 text-white transition duration-300"
                                data-glide-dir=">"
                                aria-label="next slide"
                            >
                                <FaAnglesRight />
                            </button>
                        </div>
                        {/* <!-- End Testimonial carousel --> */}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section5;