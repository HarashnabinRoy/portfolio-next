const data = [
    {
        id: 1,
        education: "Secondary Education",
        from: "Delhi Public School",
        courses: "Science, Mathematics, Social Science, Sanskrit, English",       
        range: "2018-2020",
        bottom_:10,
        src: "/assets/school.png"
    },
    {
        id: 2,
        education: "Senior Secondary Education",
        from: "Delhi Public School",
        courses: "Physics, Chemistry, Mathematics, English, Computer Science (C++)",       
        range: "2018-2020",
        bottom_:0,
        src: "/assets/school.png"
    },
    {
        id: 3,
        education: "Undergraduate education",
        from: "SRM Institute of Science and Technology",
        courses: "C, C++, OOPS, Python, Data Structures and Algorithm, Project Management, Computer communications, Operating System, Computer Architecture",       
        range: "2018-2020",
        bottom_:0,
        src: "/assets/srm.jpg"
    },

];

import React, { useContext } from "react";
import Image from "next/image";
import { ColorContext } from "../../shared/Footer/colorContext";

const EducationCard = () => {
    const { color } = useContext(ColorContext);

    return(
        <div className="mainClass flex gap-8 flex-wrap justify-center">
            {data.map((data, id) => (
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div key={id} className=" w-[20rem] aspect-square bg-[#020c1b] py-6 text-white relative rounded-lg flex-col shadow-2xl">
                                <div className="text-xl text-center justify-center px-6">
                                    {data.education}
                                    <span style={{color: color}} className=" text-bold text-4xl">.</span>
                                </div>
                                <div className="text-center justify-center pt-6 text-[#c9cacc] px-6">
                                        {data.from}
                                </div>
                                <div className="text-center justify-center p-6 text-[#707071] absolute bottom-0 text-xs ">
                                        {data.courses}
                                </div>
                            </div>
                        </div> 
                        <div className="flip-card-back">
                            <Image src={data.src} alt="Picture of education" layout="fill" className="rounded-lg" />
                        </div>  
                    </div>
                </div>
            ))}

        </div>
    )
}

export default EducationCard;