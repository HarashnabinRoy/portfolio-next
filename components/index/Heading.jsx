import React from "react";

const Heading = (props) => {
    return(
        <div className="flex justify-start items-center text-2xl text-bold">
            <span className="text-[#2bbc8a] pr-2">{props.number}.</span>{props.text} 
            <hr className="ml-10 w-[300px]"></hr>
        </div>
    );
};

export default Heading;