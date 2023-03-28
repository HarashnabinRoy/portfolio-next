import React from "react";
import Heading from "./shared/Heading";
import Image from 'next/image';

const AboutMe = () => {
    return(
        <div className="pt-40 px-[200px] min-h-screen"> 
            <Heading text="About Me"/>
            <div className="flex py-[50px] justify-between gap-20">
                <div className="w-2/3 tracking-tighter">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus quia exercitationem, quas enim saepe debitis ea fugiat assumenda magni eum veritatis in eaque, itaque non, nesciunt aliquid soluta alias laborum porro consectetur eveniet minima? Fugit sunt totam aut culpa dicta asperiores voluptatum. Error eveniet quos cupiditate itaque ipsum eum dolores eligendi voluptate enim, obcaecati numquam veniam, voluptatum eius quis. Magni ab accusamus blanditiis consequatur saepe inventore illum dolorem aliquam necessitatibus, nisi commodi! Pariatur expedita, eligendi eum, voluptates recusandae delectus totam, maxime molestias reiciendis qui quas alias ipsam provident quis. Corporis libero, beatae adipisci dicta quisquam veritatis rem asperiores ducimus!</p>
                </div>
                <div className="w-1/3  items-center rounded-lg">
                    <Image src="/assets/aboutme.png" alt="Picture of me :)" width={300} height={300} className="rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;