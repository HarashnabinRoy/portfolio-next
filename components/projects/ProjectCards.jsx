import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitSquare } from '@fortawesome/free-brands-svg-icons';


const data = [
    {
        id: "1",
        src: "/assets/projects1.jpg",
        title: "Discords.com",
        link: "https://Discords.com",
        techs: "ReactJS ExpressJS EJS NodeJS CSS",
        github: "https://Discords.com",
    },
    {
        id:"2",
        src:"/assets/projects2.png",
        title: "HUMACARE",
        link: "https://humacare.herokuapp.com/",
        techs: "EJS CSS NodeJS ExpressJS",
        github: "https://github.com/HarashnabinRoy/Humacare",
    },
    {
        id: "3",
        src:"/assets/gehack.jpeg",
        link: "ge-hack.vercel.app/1",
        title: "GE Healthcare CLone using AMP",
        techs: "NextJS Tailwind Vercel AMP",
        github: "https://github.com/agarwalviraj/ge-hack",
    },
    {
        id: "7",
        src:"/assets/projects6.jpg",
        link: "https://github.com/HarashnabinRoy/blog-fullstack",
        title:"Payment Gateway and Plans selection",
        techs: "NextJS Tailwind EpressJS NodeJS RestAPI",
        github: "https://github.com/HarashnabinRoy/blog-fullstack",
    },
    {
        id: "8",
        src:"/assets/projects6.jpg",
        link: "https://github.com/HarashnabinRoy/blog-fullstack",
        title:"Twitter Gold",
        techs: "NextJS Tailwind EpressJS NodeJS RestAPI",
        github: "https://github.com/HarashnabinRoy/blog-fullstack",
    },
    {
        id: "3",
        src:"/assets/projects3.jpg",
        link: "https://harashnabinroy.github.io/RecipeApp/",
        title:"Recipe App",
        techs: "HTML CSS VanillaJS",
        github: "https://github.com/HarashnabinRoy/RecipeApp",
    },
    {
        id: "4",
        src:"/assets/projects4.jpg",
        title:"Youtube Clone",
        techs: "ReactJS SemanticsUI",
        github: "https://github.com/HarashnabinRoy/videos-youtube-hooks",
        link: "https://github.com/HarashnabinRoy/videos-youtube-hooks"
    },
    {
        id: "5",
        src:"/assets/projects5.jpg",
        link: "https://harashnabinroy.github.io/seasons",
        title:"Seasons",
        techs: "ReactJS CSS",
        github: "https://github.com/HarashnabinRoy/Seasons",
    },
    {
        id: "6",
        src:"/assets/projects6.jpg",
        link: "https://github.com/HarashnabinRoy/blog-fullstack",
        title:"Full-Stack Blog",
        techs: "EJS CSS EpressJS NodeJS",
        github: "https://github.com/HarashnabinRoy/blog-fullstack",
    },



]

const ProjectCards = () => {
    return(
        <div className="flex flex-wrap justify-center gap-4">
            {data.map((data, id) => (
                <div key={id} className="w-[30rem] bg-[#020c1b] text-white relative rounded-[1.25rem] flex-col">
                    <div className="absolute right-0 mt-8 mr-10 text-[#707071] ">
                        <a href={data.github} target="_blank"><FontAwesomeIcon icon={ faGithub } target="_blank" className="mr-2 hover:text-white text-lg transition duration-300 ease-in-out cursor-pointer"/></a> 
                        <a href={data.link} target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-lg transition duration-300 ease-in-out cursor-pointer"/></a>
                    </div>

                    <div className="flex justify-center px-10 mb-8 mt-16">
                        <Image src={data.src} width={350} height={200} className="rounded-lg"/>
                    </div>
                    
                    <div className="flex justify-center mb-3 text-lg">
                        {data.title}
                    </div>

                    <div className="flex flex-wrap justify-center mb-4 mx-10 text-[#707071] text-[15px]">
                        {data.techs}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCards;