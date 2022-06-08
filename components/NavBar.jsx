import React from "react";
// import Link from "next/link";

const Navbar = () => {
    return(
        <div className="">
            <div className="text-xs w-full flex items-center px-10 pt-10 justify-between">
                <div className="flex ">test</div>
                <div className="flex gap-12">
                    <a href="/" className="text-[#2bbc8a]">.01 <span className="text-[#c9cacc]">Contact</span></a>
                    <a href="/" className="text-[#2bbc8a]">.02 <span className="text-[#c9cacc]">Skills</span></a>
                    <a href="/" className="text-[#2bbc8a]">.03 <span className="text-[#c9cacc]">Contact Me</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;