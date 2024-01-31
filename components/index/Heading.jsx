import React, {useContext} from "react";
import { ColorContext } from "../shared/Footer/colorContext";

const Heading = (props) => {
    const { color } = useContext(ColorContext);

    return(
        <div className="flex justify-start items-center text-2xl text-bold">
            <span style={{color:color}} className={`pr-2`}>{props.number}.</span>{props.text} 
            <hr className="ml-10 w-[300px] hidden sm:block"></hr>
        </div>
    );
};

export default Heading;