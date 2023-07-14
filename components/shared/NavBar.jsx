import React, { useState, useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from "./Footer/colorContext";
import ColorDropdown from "./Footer/colorDropdown";

export default function Navbar() {
    const { color } = useContext(ColorContext);

    return(
        <div className="">
            <div className="text-xs w-full flex items-center px-10 pt-8 justify-between">
                <div className="text-2xl font-bold logo">Exion<span style={{color:color}}>.</span>dev</div>
                <div className={`flex gap-12 p-[10px] text-lg`} style={{color:color}}>
                    <Link  href="/">
                    <a className="underlineEffect">.01 <span className="text-[#c9cacc]">Home</span></a>
                    </Link>
                    <Link  href="/projects">
                    <a className="underlineEffect">.02 <span className="text-[#c9cacc]">Projects</span></a>
                    </Link>
                    <Link href="/contact">
                    <a className="underlineEffect">.03 <span className="text-[#c9cacc]">Contact Me</span></a>
                    </Link>
                    <div>
                        <FontAwesomeIcon icon={ faPalette }/> {" "}
                        <ColorDropdown />   
                    </div>
                    {/* <a href="/resume" className="underlineEffect">.04 <span className="text-[#c9cacc]">RESUME</span></a>        */}
                </div>
            </div>
        </div>
    );
};