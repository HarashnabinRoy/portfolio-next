import { useState } from "react";
import Navbar from "../components/shared/NavBar";
import ProjectsMain from "../components/projects/ProjectsMain";
import Footer from "../components/shared/Footer";
import Image from "next/image";
import { ColorProvider } from "../components/shared/Footer/colorContext";
import Spinner from "../components/shared/loader/loader";



export default function Projects() {

    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
      }, 1000);

    return (
        <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
            {loading ? (<Spinner/>) :(
                <ColorProvider>
                    <Navbar />
                    <ProjectsMain />
                    <Footer />
                </ColorProvider>
            )}



            {/* <div className="flex justify-center text-6xl m-20 gap-8">
                <Image src="/favicon.ico" height={16} width={60} />
                <p className="bg-black py-2 pl-3 pr-4 text-[#2ff28a] -translate-y-3 tracking-[-10px]">hr</p>
                <p>HARASHNABIN ROY</p>
            </div> */}

        </div>
    )
}