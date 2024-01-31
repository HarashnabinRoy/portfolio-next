import React, { useState, useContext } from "react";
import experience1 from "./experience1";
import { ColorContext } from "../../shared/Footer/colorContext";


const ExperienceSelection = () => {
    const { color } = useContext(ColorContext);

    const contentDefault ="These are my work experiences. Click on the buttons located on the left side of this text to check the details of each work."
    // const contentDefault = contentDefault;

    // function updateContent_1() {
    //     const contentOutput = "Joined as website customer service team on November 2020. Transferred to marketing and design team. Made multiple partnerships possible. Promoted to Senior Staff for Design and Bug Finders Team. Designed and implemented the new profiles section."
    //     setContent(contentOutput);
    //     // setBackground(true);

    // }
    // function updateContent_2() {
    //     const contentOutput = "Joined as a Web Developer and worked on revamping the website. Made a functioning admin panel for the main website.";
    //     setContent(contentOutput);
    //     // setBackground(true);
    //     console.log("2nd clicked");
    // }
    // function updateContent_3() {
    //     const contentOutput = "Worked on developing two websites under vetra-green from scratch and deploying them. The first website was for selling bamboo poles and the second one was to sell organic fertilizers.";
    //     setContent(contentOutput);
    //     // setSelected("Clicked!");
    //     // setBackground(true);
    //     console.log("3rd clicked");
    // }
    // function updateContent_4() {
    //     const contentOutput = "Was a part of two clubs in college. The first one is GenY which focuses on taking part in hackathons and has multiple domains such as DS/ML and Web Dev. I was a part of the Web Dev team for two years. The second club was Blockchain SRM Club which is a student run club and I was Associate Technical Lead in my Bachelors 3rd and 4th year.";
    //     setContent(contentOutput);
    //     // setSelected("Clicked!");
    //     // setBackground(true);
    //     console.log("3rd clicked");
    // }

    const content1 = "Joined as website customer service team on November 2020. Transferred to marketing and design team. Made multiple partnerships possible. Promoted to Senior Staff for Design and Bug Finders Team. Designed and implemented the new profiles section."
    const content2 = "Joined as a Web Developer and worked on revamping the website. Made a functioning admin panel for the main website.";
    const content3 = "Worked on developing two websites under vetra-green from scratch and deploying them. The first website was for selling bamboo poles and the second one was to sell organic fertilizers.";
    const content4 = "Was a part of two clubs in college. The first one is GenY which focuses on taking part in hackathons and has multiple domains such as DS/ML and Web Dev. I was a part of the Web Dev team for two years. The second club was Blockchain SRM Club which is a student run club and I was Associate Technical Lead in my Bachelors 3rd and 4th year.";
    // let bgColor = '';

    const [content, setContent] = useState(content1);
    const [background, setBackground] = useState(false);
    // const [contentNumber, setContentNumber] = useState(1);
    const [selected, setSelected] = useState(null);
    
    const handleSelected = (jobId) => {
        // setContentNumber(jobId);
        if(jobId===1){
            setContent(content1);
            setSelected(jobId);
        } else if(jobId===2){
            setContent(content2);
            setSelected(jobId);
        } else if(jobId===3){
            setContent(content3);
            setSelected(jobId);
        } else if(jobId===4){
            setContent(content4);
            setSelected(jobId);
        }
    }

    return(
            <div className="flex md:flex-row flex-col gap-20 mt-24 mb-16 md:mx-40 mx-6 justify-center">
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
                    <div className="contents">
                        <h1> {content} </h1>
                    </div>
                </div>
    );
} 

export default ExperienceSelection;