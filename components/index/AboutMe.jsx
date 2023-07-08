import React from "react";
import Heading from "./Heading";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return(
        <div className="md:py-20 pb-20 pt-10 md:px-40 px-8 snap-start"> 
            <Heading number="01" text="About Me"/>
            <div className="flex mt-20 py-[50px] md:flex-row flex-col gap-20">
                <div className=" md:w-[800px] tracking-tighter px-6 md:px-20">
                    <p className=" ">Hello! My name is Harashnabin and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to join the school exhibition and designed a website for my school — turns out hacking together a custom website taught me a lot about HTML & CSS!</p>
                    <p className="mt-4">Fast-forward to today, and I've had the privilage of working on <span className="underlineEffect text-[#2bbc8a]">various projects</span>, participate in <span className="underlineEffect text-[#2bbc8a]">hackathons</span>, and working at <span className="underlineEffect text-[#2bbc8a]">student-led clubs</span> in college. My main focus these days is building accessible and inclusive products.</p>
                    <p className="mt-4">I've recently grown an interest in <span className="underlineEffect text-[#2bbc8a]">Blockchain and Web3</span> and am doing various courses and research work on it.</p>
                    <p className="mt-4">Here are a few technologies that I like to play with: </p>
                </div>
                <div className="flex items-center justify-center rounded-lg">
                    <span className="hoverShadow">
                        <Image src="/assets/aboutme.jpeg" alt="Picture of me :)" width={300} height={300} className="rounded-lg" />
                    </span>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-20 gap-0 justify-center w-[50%]">
                <ol className="md:ml-16 ml-6 text-sm">
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> HTML</li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> CSS</li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> JavaScript</li>
                </ol>      
                <ol className="text-sm">
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> React.js </li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> Next.js </li>
                    <li><FontAwesomeIcon icon={ faCaretRight } className="text-xs transform -translate-y-[2px] text-[#2bbc8a]" /> Express.js</li>
                </ol>            
            </div>
        </div>
    )
}

export default AboutMe;