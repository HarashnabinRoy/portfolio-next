import React, { useState } from "react";
import experience1 from "./experience1";


const ExperienceSelection = () => {

    const contentDefault ="These are my work experiences. Click on the buttons located on the left side of this text to check the details of each work."
    // const contentDefault = contentDefault;

    const [content, setContent] = useState( contentDefault );
    const [background, setBackground] = useState(false);

    function updateContent_1() {
        const contentOutput = "Joined as website customer service team on November 2020. Transferred to marketing and design team. Made multiple partnerships possible. Promoted to Senior Staff for Design and Bug Finders Team. Designed and implemented the new profiles section."
        setContent(contentOutput);
        // setBackground(true);

    }
    function updateContent_2() {
        const contentOutput = "Joined as a Web Developer and worked on revamping the website. Made a functioning admin panel for the main website.";
        setContent(contentOutput);
        // setBackground(true);
        console.log("2nd clicked");
    }
    function updateContent_3() {
        const contentOutput = "Worked on developing two websites under vetra-green from scratch and deploying them. The first website was for selling bamboo poles and the second one was to sell organic fertilizers.";
        setContent(contentOutput);
        // setSelected("Clicked!");
        // setBackground(true);
        console.log("3rd clicked");
    }
    function updateContent_4() {
        const contentOutput = "Was a part of two clubs in college. The first one is GenY which focuses on taking part in hackathons and has multiple domains such as DS/ML and Web Dev. I was a part of the Web Dev team for two years. The second club was Blockchain SRM Club which is a student run club and I was Associate Technical Lead in my Bachelors 3rd and 4th year.";
        setContent(contentOutput);
        // setSelected("Clicked!");
        // setBackground(true);
        console.log("3rd clicked");
    }

    // function handleSelected() {
    //     setBackground(true);
    //     console.log("Clicked!!");
    // }

    return(
            <div className="flex md:flex-row flex-col gap-20 mt-24 mb-16 md:mx-40 mx-6 justify-center">
                    <div className="flex md:flex-col flex-row buttons">
                        {/* <button style={{backgroundColor: `${background}`}} className=' hover:bg-[#2bbc8a]  py-2 px-6' onClick={handleSelected}>Apple</button> */}
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_1}>Discords.com</button>
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_2}>Momento LLC</button>
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_3}>Vetra-Green</button>
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_4}>POR in Clubs</button>

                        {/* <button style={{backgroundColor: onClick ? "#2bbc8a" : "#1d1f21" }} className=" hover:bg-[#2bbc8a] py-2 px-6" onClick={updateContent_3}>Google</button> */}
                    </div>
                    <div className="contents">
                        <h1> {content} </h1>
                    </div>
                </div>
    );
} 

export default ExperienceSelection;