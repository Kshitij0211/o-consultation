import AboutSection from "./partials/AboutSection";
import HeroSection from "./partials/HeroSection";
import Navbar from "./partials/Navbar";
import Section3 from "./partials/Section3";
import Section4 from "./partials/Section4";
import StatsSection from "./partials/StatsSection";
import Footer from "./partials/Footer";
import Section5v2 from "./partials/Section5v2";

const Home = () => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <Section3 />
            <Section4 />
            <Section5v2 />
            <Footer />
        </>
    )
}

export default Home;