import Landing from "../components/Landing";
import Navbar from "../components/shared/NavBar";
import AboutMe from "../components/AboutMe";
import Education from "../components/education";

export default function Home() {
    return(
        <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
            <Navbar />
            <Landing />
            <AboutMe />
            <Education />
        </div>
    );
}