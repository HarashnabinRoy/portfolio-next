import React, { useContext } from "react";
import Heading from "./Heading";
import ComingSoon from "../shared/ComingSoon";
import { ProjectData } from "../projects/ProjectCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { ColorContext } from "../shared/Footer/colorContext";


const ProjectPreview = () => {
    const fourProjects = ProjectData.slice(2,4);
    const { color } = useContext(ColorContext);
    
    return(
        <div className="md:pb-20 pb-10">
            <div className="flex flex-col md:px-[150px] px-6 just gap-y-20 ">
                <Heading number="04" text="My Projects" className=" "/>
                <div className="flex flex-col justify-center mt-10 lg:mt-14 gap-10">

                    <div className="flex flex-wrap justify-center gap-4">
                        {fourProjects.map((data, id) => (
                            <div key={id} className="w-[20rem] md:w-[30rem] bg-[#020c1b] text-white relative rounded-[1.25rem] flex-col">
                                <div className="absolute right-0 mt-8 mr-10 text-[#707071] ">
                                    <a href={data.github} target="_blank"><FontAwesomeIcon icon={ faGithub } target="_blank" className="mr-2 hover:text-white text-lg transition duration-300 ease-in-out cursor-pointer"/></a> 
                                    <a href={data.link} target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-lg transition duration-300 ease-in-out cursor-pointer"/></a>
                                </div>

                                <div className="flex justify-center px-10 mb-8 mt-16">
                                    <a href={data.link} target="_blank">
                                        <Image src={data.src} width={350} height={200} className="rounded-lg hover:scale-150 cursor-pointer transition"/>
                                    </a>
                                </div>
                                
                                <div className="flex justify-center px-10 text-center mb-3 text-lg">
                                    {data.title}
                                </div>

                                <div className="flex flex-wrap justify-center mb-4 mx-10 text-[#707071] text-[15px] text-center">
                                    {data.techs}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link  href="/projects">
                            <a className={` hover:bg-[${color}] bg-[#020c1b] transition ease-in-out px-6 rounded-lg py-4`}>Check out more projects..</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ProjectPreview;