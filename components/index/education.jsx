import React, { useContext } from "react";
import Heading from "./Heading";
import EducationCard from "./Education/EducationCard";
import { ColorContext } from "../shared/Footer/colorContext";

const Education = () => {
    const { color } = useContext(ColorContext);

    return(
        <div className="py-20">
            <div className="flex flex-col md:px-[150px] px-6 just gap-y-20 ">
                <Heading number="02" text="My Education" className=" "/>
                <div className="flex justify-center mt-20">
                    <EducationCard />
                </div>
            </div>

        </div>
    )
}

export default Education;