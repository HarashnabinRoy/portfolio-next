import Landing from "../components/index/Landing";
import Navbar from "../components/shared/NavBar";
import AboutMe from "../components/index/AboutMe";
import Education from "../components/index/education";
import Experience from "../components/index/Experience";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";
import ColorDropdown from "../components/shared/Footer/colorDropdown";
import { useContext, useState } from "react";
import { ColorContext } from "../components/shared/Footer/colorContext";
// import DefaultColor from "../components/shared/defaultColor";

export default function Home() {
    
    const [showDefaultThemeBar,setShowDefaultThemeBar] = useState(true)
    const { color } = useContext(ColorContext)
    
    return(
        <ColorProvider>
        {/* {   showDefaultThemeBar && 
            
            (<div className="text-[#c9cacc] inset-0 flex justify-center items-center text-3xl backdrop-filter backdrop-blur-lg z-10 fixed">
            Set Default Theme : <DefaultColor />
            <button onClick={() => setShowDefaultThemeBar(false)} className="fixed flex top-10 right-10 text-sm" style={{color: color}}>Close</button>
            </div>)
        } */}
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