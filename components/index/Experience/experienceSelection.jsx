import React, { useState } from "react";
import experience1 from "./experience1";


const ExperienceSelection = () => {

    const contentDefault ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, unde suscipit! Natus adipisci, fugit ab quae ipsa facilis alias consectetur."
    // const contentDefault = contentDefault;

    const [content, setContent] = useState( contentDefault );
    const [background, setBackground] = useState(false);

    function updateContent_1() {
        const contentOutput = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nostrum perspiciatis assumenda omnis tempore praesentium ipsam ipsa exercitationem reprehenderit!"
        setContent(contentOutput);
        // setBackground(true);

    }
    function updateContent_2() {
        const contentOutput = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptate nemo nulla excepturi delectus incidunt natus vero reiciendis aspernatur ipsam.";
        setContent(contentOutput);
        // setBackground(true);
        console.log("2nd clicked");
    }
    function updateContent_3() {
        const contentOutput = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti distinctio necessitatibus illum omnis veritatis est repellendus deserunt tempora tenetur quaerat!";
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
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_1}>Apple</button>
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_2}>Microsoft</button>
                        <button className={` hover:bg-[#2bbc8a] ${background ? 'bg-[#2bbc8a]' : 'bg-[#1d1f21]'} py-2 px-6`} onClick={updateContent_3}>Google</button>
                        {/* <button style={{backgroundColor: onClick ? "#2bbc8a" : "#1d1f21" }} className=" hover:bg-[#2bbc8a] py-2 px-6" onClick={updateContent_3}>Google</button> */}
                    </div>
                    <div className="contents">
                        <h1> {content} </h1>
                    </div>
                </div>
    );
} 

export default ExperienceSelection;