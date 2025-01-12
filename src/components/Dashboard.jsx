import { useState } from "react";
import ProfileSideNav, { ProfileSideNav2 } from "./partials/ProfileSideNav";
import Content from "./partials/Content";

const Dashboard = () => {

    const [currentScreen, setCurrentScreen] = useState("appointment");

    return (
        <div className="min-h-svh h-full w-full flex items-stretch bg-[#FFF] relative">
            <ProfileSideNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
            <ProfileSideNav2 />
            <Content currentScreen={currentScreen} />
        </div>
    )
}

export default Dashboard;