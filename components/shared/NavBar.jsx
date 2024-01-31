import React, { useState, useContext, useCallback } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from "./Footer/colorContext";
import ColorDropdown from "./Footer/colorDropdown";
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    const { color } = useContext(ColorContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    },[]);

    return(
        <div className="relative">
            <div className="text-xs w-full flex items-center px-10 pt-8 justify-between">
                <div className="text-2xl font-bold logo"><span style={{color:color}}>{"{"}</span>Exion<span style={{color:color}}>.</span>dev<span style={{color:color}}>{"}"}</span></div>
                <div className="p-10 text-lg hidden lg:block" style={{color:color}}>
                    <Link  href="/">
                        <a className="underlineEffect mx-6">.01 <span className="text-[#c9cacc]">Home</span></a>
                    </Link>
                    <Link  href="/projects">
                        <a className="underlineEffect mx-3">.02 <span className="text-[#c9cacc]">Projects</span></a>
                    </Link>
                    <Link href="/techs">
                        <a className="underlineEffect ml-3 mr-6">.03 <span className="text-[#c9cacc]">Tech Stack</span></a>
                    </Link>
                    <FontAwesomeIcon icon={ faPalette }/> <ColorDropdown />   
                    {/* <a href="/resume" className="underlineEffect">.04 <span className="text-[#c9cacc]">RESUME</span></a>        */}
                </div>
                <div className={`block lg:hidden `}>
                    <div className="flex flex-row items-center gap-2">
                        <div className="hidden sm:block text-lg">
                            <FontAwesomeIcon icon={ faPalette }/> <ColorDropdown />   
                        </div>
                        <div onClick={toggleOpen} className="text-2xl px-6 py-2 items-center border-[1px] border-neutral-600 rounded-full cursor-pointer hover:shadow-md transition">
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                    <div className={`absolute mt-6 rounded-xl shadow-md w-[25vw] overflow-hidden mr-10 right-0 top-14 text-sm bg-[#020c1b]`}>
                        <div className='flex flex-col cursor-pointer'>
                            <Link href="/">
                                <a className={`px-4 py-3 transition font-semibold hover:bg-[#383b40] border-b border-neutral-600 `}><span className={`text-[${color}]`}>.01</span> Home</a>
                            </Link>
                            <Link href="/projects">
                                <a className={`px-4 py-3 transition font-semibold hover:bg-[#383b40] border-b border-neutral-600`}><span className={`text-[${color}]`}>.02</span> Projects</a>
                            </Link>
                            <Link href="/techs">
                                <a className={`px-4 py-3 hover:bg-[#383b40] transition font-semibold`}><span className={`text-[${color}]`}>.03</span> Tech Stack</a>
                            </Link>
                        </div>
                    </div>
                )}
        </div>
    )
}