import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from '../shared/Footer/colorContext';

const Landing = () => {

    const { color } = useContext(ColorContext);
    
    return(
        <div className="min-h-screen">
            {/* Default padding was md:px-[250px] md:pt-40 sm:p-10*/}
            <div className='p-10 md:p-20'>
                <h1 className="text-s ml-1" style={{color:color}}>Hi, my name is</h1>  
                <h1 className="text-6xl mt-7 font-bold tracking-tighter text-white">Harashnabin Roy<span style={{color:color}}>.</span></h1>  
                <h1 className="text-6xl mt-9 font-bold tracking-tighter">I build things for the web<span style={{color:color}}>.</span></h1>
                <div className="mt-20 w-1/2 tracking-tighter" >I'm a fullstack web developer specializing in react and nextjs. Currently I'm focused in getting my undergrad degree in Computer Science and Engineering from <a href="https://www.srmist.edu.in/" target="_blank" className=" underlineEffect" style={{color:color}}>SRM Institute of Technology</a>.</div>
                <div className="flex justify-center md:absolute md:bottom-14 md:left-[50%] mt-20 text-2xl updown" style={{color:color}}>
                    <FontAwesomeIcon icon={ faAnglesDown } />
                </div>
            </div>
        </div>
    );
};

export default Landing;