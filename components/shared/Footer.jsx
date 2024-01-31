import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCodeBranch , faEnvelope , faPalette,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import ColorDropdown from "./Footer/colorDropdown";
import { ColorContext } from "./Footer/colorContext";

export default function Footer() {
    const { color } = useContext(ColorContext);

    // const [selectedColor, setSelectedColor] = useState('weed');

    // const handleColorChange = (color) => {
    //   setSelectedColor(color);
    // };

    // onMouseEnter={(e) => (e.target.style.color = color)}
    // onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}
    // #2bbc8a

    return(
        <div>
            <div className="text-[#5d5a5a99] flex flex-wrap justify-between mt-16 mb-4 text-xs md:mx-[200px] mx-6 ">
                <div className="flex gap-4">
                    <div onMouseEnter={(e) => (e.target.style.color = color)} onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}>
                        <a 
                            href="mailto:harashnabin2002@gmail.com"  
                            className= {`transition duration-200 ease-in-out`} 
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={ faEnvelope }/> {" "}
                            Contact
                        </a>
                    </div>

                    <a 
                        href="https://github.com/HarashnabinRoy" 
                        className={`transition duration-200 ease-in-out`} 
                        target="_blank"
                        onMouseEnter={(e) => (e.target.style.color = color)}
                        onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}
                        >
                        <FontAwesomeIcon icon={ faCode } /> {" "}
                            Github
                    </a>
                    <a 
                        href="https://discords.com/bio/p/exion" 
                        className={`transition duration-200 ease-in-out`} 
                        target="_blank"
                        onMouseEnter={(e) => (e.target.style.color = color)}
                        onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}
                        >
                        <FontAwesomeIcon icon={ faDiscord } /> {" "}
                            Discord
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/harashnabin-roy-8893731b9/" 
                        className={` transition duration-200 ease-in-out`} 
                        target="_blank"
                        onMouseEnter={(e) => (e.target.style.color = color)}
                        onMouseOut={(e) => (e.target.style.color = "#5d5a5a99")}
                        
                        >
                        <FontAwesomeIcon icon={ faLinkedinIn } /> {" "}
                            LinkedIn
                    </a>
                    <a 
                        href="https://twitter.com/RoyHarashnabin" 
                        className={`transition duration-200 ease-in-out`} 
                        target="_blank"
                        onMouseEnter={(e) => (e.target.style.color = color)}
                        onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}
                        >
                        <FontAwesomeIcon icon={ faTwitter } /> {" "}
                            Twitter
                    </a>

                </div>
                <div className="flex gap-4 md:my-0 my-4 ">
                    <div>
                        <FontAwesomeIcon icon={ faCodeBranch } /> v2.1.2 
                    </div>
                    <div style={{color:color}}>
                        <FontAwesomeIcon icon={ faPalette }/> {color}
                    </div>
                </div>
            </div>

            <div className="flex justify-center text-[#5d5a5a99] text-md mb-4 cursor-pointer">
                <a href="mailto:harashnabin2002@gmail.com">@Harashnabin Roy 2024</a>
            </div>

        </div>
    );
}  