import { useEffect } from "react"
import Glide from "@glidejs/glide"
import Comments from "./Comments"
import profile1 from "../../assets/profile1.jpg"
import profile2 from "../../assets/profile2.jpg"

const Section5 = () => {

    const userComments = [{
        profile: profile1,
        name: "Maude Russo"
    }, {
        profile: profile2,
        name: "Chelsea Salazar"
    }, {
        profile: profile1,
        name: "Refugio Nava"
    }, {
        profile: profile2,
        name: "Bernadette Snider"
    }, {
        profile: profile1,
        name: "Ellen Barr"
    }]

    useEffect(() => {
        const slider = new Glide(".glide-09", {
          type: "carousel",
          autoplay: 1,
          animationDuration: 9500,
          animationTimingFunc: "linear",
          perView: 3,
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
              gap: 36,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
    }, [])

    return (
        <>
            <section className="bg-gray-100 justify-center flex flex-col p-12">
                <div className="hero text-center">
                    <h1 className="lg:text-6xl font-medium tracking-tight text-sky-600 text-4xl text-center">
                        What Client say about Us
                    </h1>
                    <p className="md:text-lg text-md leading-8 mt-8 text-gray-600 w-[75%] mx-auto">
                        Web accessibility means
                        that websites, tools, and technologies are designed and developed so
                        that people with disabilities can use them.
                    </p>
                </div>
                <div className="glide-09 relative w-[85%] overflow-x-clip mx-auto gap-x-5 justify-center items-center">
                    <div data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-clip py-10">
                            {userComments.map((user, key) =>
                                <Comments key={key} profile={user.profile} userName={user.name}/>
                            )}
                        </ul>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section5;