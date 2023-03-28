import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCodeBranch , faEnvelope , faPalette,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () => {
    return(
        <div>
            <div className="text-[#5d5a5a99] flex flex-wrap justify-between mt-16 mb-4 text-xs md:mx-[200px] mx-6 ">
                <div className="flex gap-4">
                    <a href="mailto:harashnabin2002@gmail.com" className="hover:text-[#2bbc8a] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faEnvelope } /> Contact</a>
                    <a href="https://github.com/HarashnabinRoy" className="hover:text-[#2bbc8a] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faCode } /> Github</a>
                    <a href="https://discords.com/bio/p/exion" className="hover:text-[#2bbc8a] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faDiscord } /> Discord</a>
                    <a href="https://www.linkedin.com/in/harashnabin-roy-8893731b9/" className="hover:text-[#2bbc8a] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn } /> LinkedIn</a>
                    <a href="https://twitter.com/RoyHarashnabin" className="hover:text-[#2bbc8a] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faTwitter } /> Twitter</a>
                </div>
                <div className="flex gap-4 md:my-0 my-4">
                    <div>
                        <FontAwesomeIcon icon={ faPalette } /> Cyan
                    </div>
                    <div>
                        <FontAwesomeIcon icon={ faCodeBranch } /> v2.0.0 
                    </div>
                </div>
            </div>

            <div className="flex justify-center text-[#5d5a5a99] text-md mb-4 cursor-pointer">
                <a href="mailto:harashnabin2002@gmail.com">@Harashnabin Roy 2022</a>
            </div>
        </div>
    );
}  

export default Footer;