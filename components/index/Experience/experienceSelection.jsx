import React, { useState, useContext } from "react";
import experience1 from "./experience1";
import { ColorContext } from "../../shared/Footer/colorContext";
import { GoChevronRight } from "react-icons/go";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const ExperienceSelection = () => {
    const { color } = useContext(ColorContext);

    const contentDefault ="These are my work experiences. Click on the buttons located on the left side of this text to check the details of each work."

    const content1 = "Joined as website customer service team on November 2020. Transferred to marketing and design team. Made multiple partnerships possible. Promoted to Senior Staff for Design and Bug Finders Team. Designed and implemented the new profiles section."
    const content2 = "Joined as a Web Developer and worked on revamping the website. Made a functioning admin panel for the main website.";
    const content3 = "Worked on developing two websites under vetra-green from scratch and deploying them. The first website was for selling bamboo poles and the second one was to sell organic fertilizers.";
    const content4 = "Was a part of two clubs in college. The first one is GenY which focuses on taking part in hackathons and has multiple domains such as DS/ML and Web Dev. I was a part of the Web Dev team for two years. The second club was Blockchain SRM Club which is a student run club and I was Associate Technical Lead in my Bachelors 3rd and 4th year.";
    // let bgColor = '';
    const content21 = (
        <div className="flex flex-col gap-4">
            <div className="text-xl border-b border-gray-600 flex flex-row justify-between">
                <div>Discords.com</div>
                <a href="https://discords.com" target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-sm transition duration-300 ease-in-out cursor-pointer items-center"/></a>
            </div>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Joined as website customer service team on November 2020.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Transferred to marketing and design team.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Made multiple partnerships possible</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Promoted to Senior Staff for Design and Bug Finders Team.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Designed and implemented the new profiles section.</div></div>
            </div>
        </div>
    )

    const content22 = (
        <div className="flex flex-col gap-4">
            <div className="text-xl border-b border-gray-600 flex flex-row justify-between">
                <div>Momento LLC</div>
                <a href="https://momento.ink" target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-sm transition duration-300 ease-in-out cursor-pointer items-center"/></a>
            </div>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight/><div className="text-[#c9cacc]">Joined as a Web Developer and worked on revamping the website.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight/><div className="text-[#c9cacc]">Made a functioning admin panel for the main website.</div></div>
            </div>
        </div>
    )

    const content23 = (
        <div className="flex flex-col gap-4">
            <div className="text-xl border-b border-gray-600 flex flex-row justify-between">
                <div>Vetra Green Technologies</div>
                <a href="https://vetragreentech.com" target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-sm transition duration-300 ease-in-out cursor-pointer items-center"/></a>
            </div>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Worked on developing two websites under vetra-green from scratch and deploying them.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">The first website was for selling bamboo poles and the second one was to sell organic fertilizers.</div></div>
            </div>
        </div>
    )

    const content24 = (
        <div className="flex flex-col gap-4">
            <div className="text-xl border-b border-gray-600 flex flex-row justify-between">
                <div>Position of responsibilities</div>
                <a href="https://blockchainsrm.org" target="_blank"><FontAwesomeIcon icon={ faArrowUpRightFromSquare } target="_blank" className="hover:text-white text-sm transition duration-300 ease-in-out cursor-pointer items-center"/></a>
            </div>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Was part of 2 college clubs, BlockchainClub SRM and GenY.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Promoted to Associate technical Lead and Co-lead respectively.</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Organized 2 events as a part organizing team - Data Science Hackathon 2022 and Layer 1.0</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Mentored juniors in web dev domain for various hackathons and projects</div></div>
                <div className={`flex flex-row items-center gap-4`}><GoChevronRight /><div className="text-[#c9cacc]">Revamped the existing club websites using latest tech-stack</div></div>
            </div>
        </div>
    )

    const [content, setContent] = useState(content21);
    const [background, setBackground] = useState(false);
    // const [contentNumber, setContentNumber] = useState(1);
    const [selected, setSelected] = useState(1);
    
    const handleSelected = (jobId) => {
        // setContentNumber(jobId);
        if(jobId===1){
            setContent(content21);
            setSelected(jobId);
        } else if(jobId===2){
            setContent(content22);
            setSelected(jobId);
        } else if(jobId===3){
            setContent(content23);
            setSelected(jobId);
        } else if(jobId===4){
            setContent(content24);
            setSelected(jobId);
        }
    }

    return(
            <div className="flex md:flex-row flex-col gap-20 mt-24 mb-16 md:mx-40 mx-6 ">
                    <div className="flex md:flex-col flex-row buttons">
                        {/* <button style={{backgroundColor: `${background}`}} className=' hover:bg-[#2bbc8a]  py-2 px-6' onClick={handleSelected}>Apple</button> */}
                        <button 
                            style={{
                                backgroundColor: selected === 1 ? color : "#1d1f21"
                            }}                            
                            // onMouseEnter={(e) => (e.target.style.backgroundColor = color)}
                            // onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d1f21')}
                            
                            className={`py-2 px-6 border-b border-gray-600`} onClick={()=>handleSelected(1)}>
                                Discords.com 
                        </button>
                        <button 
                            style={{
                                backgroundColor: selected === 2 ? color : "#1d1f21"
                            }}  
                            className={` border-b border-gray-600 py-2 px-6`} onClick={()=>handleSelected(2)}>
                                Momento LLC
                        </button>
                        <button 
                            style={{
                                backgroundColor: selected === 3 ? color : "#1d1f21"
                            }} 
                            className={` border-b border-gray-600 py-2 px-6`} onClick={()=>handleSelected(3)}>
                                Vetra-Green
                        </button>
                        <button 
                            style={{
                                backgroundColor: selected === 4 ? color : "#1d1f21"
                            }}
                            className={`py-2 px-6`} onClick={()=>handleSelected(4)}>
                                POR in Clubs
                        </button>
                    </div>
                    <div className={`contents text-[${color}]`}>
                        <h1> {content} </h1>
                    </div>
                </div>
    );
} 

export default ExperienceSelection;