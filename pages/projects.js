import Navbar from "../components/shared/NavBar";
import ComingSoon from "../components/shared/ComingSoon";
import ProjectsMain from "../components/projects/ProjectsMain";
import Footer from "../components/shared/Footer";

export default function Projects() {
    return(
    <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
        <Navbar />
        <ProjectsMain />
        <Footer />
    </div>
    )
}