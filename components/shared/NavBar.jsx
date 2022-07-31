import React from "react";
// import Link from "next/link";

const Navbar = () => {
    return(
        <div className="">
            <div className="text-xs w-full flex items-center px-10 pt-10 justify-between">
                <div className="logo text-xl">Harashnabin R<span className="text-[#2bbc8a]">o</span>y</div>
                <div className="flex gap-12 p-[10px]">
                    <a href="/" className="underlineEffect text-[#2bbc8a]">.01 <span className="text-[#c9cacc]">Home</span></a>
                    <a href="/projects" className="text-[#2bbc8a] underlineEffect">.02 <span className="text-[#c9cacc]">Projects</span></a>
                    <a href="/contact" className="text-[#2bbc8a] underlineEffect">.03 <span className="text-[#c9cacc]">Contact Me</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;