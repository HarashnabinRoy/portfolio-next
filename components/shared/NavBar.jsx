import React, { useState, useContext } from "react";
import Link from "next/link";
import { ColorContext } from "./Footer/colorContext";

export default function Navbar() {
    const { color } = useContext(ColorContext);

    return(
        <div className="">
            <div className="text-xs w-full flex items-center px-10 pt-8 justify-between">
                <div className="text-2xl font-bold logo">Exion<span style={{color:color}}>.</span>dev</div>
                <div className={`flex gap-12 p-[10px] text-lg`} style={{color:color}}>
                    <a href="/" className="underlineEffect">.01 <span className="text-[#c9cacc]">Home</span></a>
                    <a href="/projects" className="underlineEffect">.02 <span className="text-[#c9cacc]">Projects</span></a>
                    <a href="/contact" className="underlineEffect">.03 <span className="text-[#c9cacc]">Contact Me</span></a>
                    {/* <a href="/resume" className="underlineEffect">.04 <span className="text-[#c9cacc]">RESUME</span></a>        */}
                </div>
            </div>
        </div>
    );
};