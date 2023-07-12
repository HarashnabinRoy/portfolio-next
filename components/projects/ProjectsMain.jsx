import React, { useContext } from "react";
import ProjectCards from "./ProjectCards";
import { ColorContext } from "../shared/Footer/colorContext";

const ProjectsMain = () => {
    const { color } = useContext(ColorContext);

    return(
        <div className="md:px-40 px-0 pl-6 mt-24">
            <div>Here is a collection of my <br /> <div className="mt-4" style={{color: color}}>PROJECTS</div></div>
            <div className="pt-10">
                <ProjectCards />
            </div>
        </div>
    );
}

export default ProjectsMain;