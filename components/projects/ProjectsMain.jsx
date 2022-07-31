import React from "react";
import ProjectCards from "./ProjectCards";

const ProjectsMain = () => {
    return(
        <div className="px-40 mt-24">
            <div>Here is a collection of my <br /> <div className="text-[#2bbc8a] mt-4">PROJECTS</div></div>
            <div className="pt-10">
                <ProjectCards />
            </div>
        </div>
    );
}

export default ProjectsMain;