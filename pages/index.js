import Landing from "../components/index/Landing";
import Navbar from "../components/shared/NavBar";
import AboutMe from "../components/index/AboutMe";
import Education from "../components/index/education";
import Experience from "../components/index/Experience";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";
import ColorDropdown from "../components/shared/Footer/colorDropdown";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../components/shared/Footer/colorContext";
import Spinner from '../components/shared/loader/loader.jsx';
// import DefaultColor from "../components/shared/defaultColor";
import ProjectPreview from '../components/index/ProjectPreview.jsx';

export default function Home() {
    
    const [showUpdates,setShowUpdates] = useState(true);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
      }, 1000);
    
    const { color } = useContext(ColorContext);
 
    useEffect(() => {
        const data = window.localStorage.getItem('My_Updates_Portfolio');
        if(data !== null) setShowUpdates(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('My_Updates_Portfolio', JSON.stringify(showUpdates))
        // console.log('showUpdates', showUpdates);
    }, [showUpdates])
    
    return(
        <ColorProvider>
        
        {/* {   showUpdates && 
            
            (<div className="text-[#c9cacc] inset-0 flex justify-center items-center text-3xl backdrop-filter backdrop-blur-lg z-10 fixed">
            <div className="flex flex-col">
                <div className="flex justify-center">What's New <span className="ml-2" style={{color:color}}>?</span></div>
                <div className="flex justify-center mt-8">Added Themes<span className="ml-2" style={{color:color}}>!!</span></div>
                <div className="flex">To change them go to Navbar<span className="ml-2" style={{color:color}}>lol</span></div>
            </div>

            <button onClick={() => setShowUpdates(false)} className="fixed flex top-10 right-10 text-sm" style={{color: color}}>Close</button>
            </div>)
        } */}
        {loading ? (<Spinner />) : (

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
                <ProjectPreview />
            </div>
            <div>
                <Footer />
            </div>
            </div>

        )}

        </ColorProvider>
    );
}