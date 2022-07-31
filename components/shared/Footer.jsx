import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCodeBranch , faEnvelope , faPalette,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () => {
    return(
        <div className="text-[#5d5a5a99] flex flex-wrap justify-between mt-16 mb-8 text-xs mx-[200px] ">
            <div className="flex gap-4">
                <a href="" className="hover:text-[#908e8e] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faEnvelope } /> Contact</a>
                <a href="https://github.com/HarashnabinRoy" className="hover:text-[#908e8e] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faCode } /> Github</a>
                <a href="https://discords.com/bio/p/exion" className="hover:text-[#908e8e] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faDiscord } /> Discord</a>
                <a href="https://www.linkedin.com/in/harashnabin-roy-8893731b9/" className="hover:text-[#908e8e] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn } /> LinkedIn</a>
                <a href="https://twitter.com/RoyHarashnabin" className="hover:text-[#908e8e] transition duration-200 ease-in-out" target="_blank"><FontAwesomeIcon icon={ faTwitter } /> Twitter</a>
            </div>
            <div className="flex gap-4">
                <div>
                    <FontAwesomeIcon icon={ faPalette } /> Greenish Blue 
                </div>
                <div>
                    <FontAwesomeIcon icon={ faCodeBranch } /> v2.0.0 
                </div>
            </div>
        </div>
    );
}  

export default Footer;