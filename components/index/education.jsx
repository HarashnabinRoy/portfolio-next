import React from "react";
import Heading from "./Heading";
import EducationCard from "./EducationCard";

const Education = () => {
    return(
        <div className="py-20 px-[150px] min-h-screen">
            <div className="flex flex-col gap-y-20 ">
                <Heading number="02" text="Education"/>
                <EducationCard />
            </div>

        </div>
    )
}

export default Education;