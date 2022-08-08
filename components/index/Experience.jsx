import React from "react";
import Heading from "./Heading";
import ComingSoon from "../shared/ComingSoon";
import ExperienceSelection from "./Experience/experienceSelection";


const Experience = () => {
    return(
        <div className="py-20 md:px-40 px-6 min-h-[50vh] ">
            <Heading number="03" text="My Experience"/>
            {/* <div className="flex justify-center items-center min-h-[80vh]">Coming Soon..</div> */}
            <ExperienceSelection />
        </div>

    );
}

export default Experience;