import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from '../shared/Footer/colorContext';

const Landing = () => {

    const { color } = useContext(ColorContext);
    
    return(
        <div className="md:p-20 p-6 min-h-screen">
            <h1 className="text-s ml-1" style={{color:color}}>Hi, my name is</h1>  
            <h1 className="text-6xl mt-7 font-bold tracking-tighter text-white">Harashnabin Roy<span style={{color:color}}>.</span></h1>  
            <h1 className="text-6xl mt-9 font-bold tracking-tighter">I build things for the web<span style={{color:color}}>.</span></h1>
            {/* <p className="mt-20 w-1/2 tracking-tighter" >I'm a fullstack web developor specializing in react and nextjs. Currently I'm focused in getting my undergrad degree in Computer Science and Engineering from <a href="" className="text-[#2bbc8a] relative after:content-[''] after:w-10 after:absolute after:h-10 after:bg-[#fff] after:bottom-0 after:left-0 after:hidden hover:after:display-inline-block">SRM Institute of Technology</a>.</p> */}
            {/* <p className="mt-20 w-1/2 tracking-tighter" >I'm a fullstack web developor specializing in react and nextjs. Currently I'm focused in getting my undergrad degree in Computer Science and Engineering from <a href="" className="text-[#2bbc8a] hover:underline underline-offset-2">SRM Institute of Technology</a>.</p> */}
            <div className="mt-20 w-1/2 tracking-tighter" >I'm a fullstack web developer specializing in react and nextjs. Currently I'm focused in getting my undergrad degree in Computer Science and Engineering from <a href="https://www.srmist.edu.in/" target="_blank" className=" underlineEffect" style={{color:color}}>SRM Institute of Technology</a>.</div>
            <div className="flex justify-center md:absolute md:bottom-14 md:left-[50%] mt-20 text-2xl updown" style={{color:color}}>
                <FontAwesomeIcon icon={ faAnglesDown } />
            </div>
        </div>
    );
};

export default Landing;