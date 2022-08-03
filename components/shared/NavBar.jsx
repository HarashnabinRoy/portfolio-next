import React from "react";
// import Link from "next/link";

const Navbar = () => {
    return(
        <div className="">
            <div className="text-xs w-full flex items-center px-10 pt-10 justify-between">
                <div className="logo text-xl">Harashnabin R<span className="text-[#2bbc8a]">o</span>y</div>
                <div className="flex gap-12 p-[10px] text-[#2bbc8a]">
                    <a href="/" className="underlineEffect ">.01 <span className="text-[#c9cacc]">Home</span></a>
                    <a href="/projects" className="underlineEffect">.02 <span className="text-[#c9cacc]">Projects</span></a>
                    <a href="/contact" className="underlineEffect">.03 <span className="text-[#c9cacc]">Contact Me</span></a>
                    <a href="/resume" className="underlineEffect">.04 <span className="text-[#c9cacc]">RESUME</span></a>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;