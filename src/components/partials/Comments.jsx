import { useState } from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { UserProfile } from "../Images";

const Comments = ({user}) => {

    const [userDetails, setUserDetails] = useState({ ...user })
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const likedComment = () => {
        if (!liked) {
            setUserDetails({ ...user, likes: ++userDetails.likes })
            if (disliked)
                setDisliked(!disliked)
        }
        else
            setUserDetails({ ...user, likes: --userDetails.likes })

        setLiked(!liked);
    }

    const dislikedComment = () => {
        if (liked) {
            setLiked(!liked)
            setUserDetails({ ...user, likes: --userDetails.likes })
        }

        setDisliked(!disliked)
    }

    return (
        <li key={userDetails._id} className="bg-sky-800 rounded text-white">
            <div className="relative py-4 h-full">
                <figure className="relative flex flex-col justify-between z-10 h-full">
                    <blockquote className="p-3 flex-1 md:p-6 text-xs md:text-sm lg:text-lg leading-relaxed text-pretty md:text-left">
                        <p>
                            {userDetails.comment}
                        </p>
                    </blockquote>
                    <figcaption className="flex flex-row items-center justify-between gap-x-1 md:gap-x-2 px-2 md:px-6 pt-0 text-sm text-sky-500">
                        <div className="flex items-center gap-4 text-sm text-sky-50">
                            <UserProfile user={userDetails.profile} />
                            <div className="flex flex-col gap-x-1 text-start">
                                <span className="text-xs md:text-sm md:font-bold font-semibold capitalize">{userDetails.name}</span>
                            </div>
                        </div>
                        <div className="inline-flex divide-x divide-sky-100 overflow-hidden rounded-full">
                            <button onClick={() => likedComment()} aria-checked={liked} 
                            className="inline-flex h-6 md:h-8 w-max items-center justify-center gap-x-1 md:gap-x-4 justify-self-center whitespace-nowrap rounded-s-full bg-sky-50 text-sky-500 px-2 md:px-4 text-xs font-medium tracking-tight md:tracking-wide transition duration-300 
                            hover:bg-sky-100 hover:text-sky-600 
                            aria-checked:border-sky-300 aria-checked:text-sky-50 aria-checked:shadow-none aria-checked:bg-sky-400">
                                <BiSolidLike />
                                <span className="order-2">{userDetails.likes}</span>
                            </button>
                            <button onClick={() => dislikedComment()} aria-checked={disliked}  className="inline-flex h-6 md:h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-e-full bg-sky-50 px-4 text-xs font-medium tracking-wide text-sky-500 transition duration-300
                             aria-checked:text-sky-50 aria-checked:shadow-none aria-checked:bg-gray-400">
                                <span className="relative only:-mx-4">
                                    <BiSolidDislike />
                                </span>
                            </button>
                        </div>
                    </figcaption>
                </figure>
                <svg
                    aria-hidden="true"
                    className="absolute z-0 h-16 left-6 top-6"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                        className="fill-sky-50/10"
                    />
                </svg>
            </div>
        </li>
    )
}

export default Comments;