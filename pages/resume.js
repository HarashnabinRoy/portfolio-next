import Navbar from "../components/shared/NavBar";
import ComingSoon from "../components/shared/ComingSoon";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";


export default function Resume() {
    return(
    <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
        <ColorProvider>
        <Navbar />
        <ComingSoon/>
        <Footer />
        </ColorProvider>

    </div>
    );
}