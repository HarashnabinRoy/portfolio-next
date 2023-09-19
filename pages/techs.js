import Navbar from "../components/shared/NavBar";
import ComingSoon from "../components/shared/ComingSoon";
import Footer from "../components/shared/Footer";
import { ColorProvider } from "../components/shared/Footer/colorContext";
import Techs from "../components/techs/Techs";
import Spinner from "../components/shared/loader/loader";
import { useState } from "react";


export default function Contact() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
      }, 1000);
    return(
    <div className="font-oxygen bg-[#1d1f21] text-[#c9cacc] min-h-screen">
        {loading ? (<Spinner/>) :(
        <ColorProvider>
        <Navbar />
        <Techs/>
        <Footer />
        </ColorProvider>
        )}
    </div>
    );
}