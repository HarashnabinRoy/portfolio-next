import Navbar from "../components/shared/NavBar";
import ComingSoon from "../components/shared/ComingSoon";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";
import Techs from "../components/techs/Techs";


export default function Contact() {
    return(
    <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
        <ColorProvider>
        <Navbar />
        <Techs/>
        <Footer />
        </ColorProvider>

    </div>
    );
}