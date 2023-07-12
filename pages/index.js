import Landing from "../components/index/Landing";
import Navbar from "../components/shared/NavBar";
import AboutMe from "../components/index/AboutMe";
import Education from "../components/index/education";
import Experience from "../components/index/Experience";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";

export default function Home() {
    return(
        <ColorProvider>
        <div className="snapping font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
            <Navbar />
            <div className="snapping-child">
                <Landing />
            </div>
            <div className="snapping-child">
                <AboutMe />
            </div>
            <div className="snapping-child">
                <Education />
            </div>
            <div className="snapping-child">
                <Experience />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </ColorProvider>
    );
}