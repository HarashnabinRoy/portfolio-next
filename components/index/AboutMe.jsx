import React from "react";
import Heading from "./Heading";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return(
        <div className="md:py-20 pb-20 pt-10 md:px-40 px-8 min-h-screen snap-start"> 
            <Heading number="01" text="About Me"/>
            <div className="flex py-[50px] md:flex-row flex-col gap-20">
                <div className=" md:w-[800px] tracking-tighter px-6 md:px-20">
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus quia exercitationem, quas
                     enim saepe debitis ea fugiat assumenda magni eum veritatis in eaque, itaque non, nesciunt aliquid soluta alias laborum porro 
                     consectetur eveniet minima? Fugit sunt totam aut culpa dicta asperiores voluptatum. Error eveniet quos cupiditate itaque ipsum 
                     eum dolores eligendi voluptate enim, obcaecati numquam veniam, voluptatum eius quis. Magni ab accusamus blanditiis consequatur 
                     saepe inventore illum dolorem aliquam necessitatibus, nisi commodi! Pariatur expedita, eligendi eum, voluptates recusandae 
                     delectus totam, maxime molestias reiciendis qui quas alias ipsam provident quis. Corporis libero, beatae adipisci dicta quisquam
                     veritatis rem asperiores ducimus!</p>
                        <p className="mt-4">Here are a few technologies that I like to play with: </p>
                </div>
                <div className="flex items-center justify-center rounded-lg">
                    <span className="hoverShadow">
                        <Image src="/assets/aboutme.png" alt="Picture of me :)" width={300} height={300} className="rounded-lg" />
                    </span>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-20 justify-center w-[50%]">
                <ol className="md:ml-16 ml-6 text-sm">
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> HTML</li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> CSS</li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> JavaScript</li>
                </ol>      
                <ol className="text-sm">
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> ReactJS </li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> NextJS </li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> ExpressJS</li>
                </ol>            
            </div>
        </div>
    )
}

export default AboutMe;