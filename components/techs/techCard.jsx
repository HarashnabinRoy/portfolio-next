import React from 'react'
import Image from 'next/image'

const data = [
    {
        id:"13",
        src: "/assets/JavaScript.png",
        title: "JavaScript",
    },
    {
        id:"1",
        src: "/assets/MongoDB.png",
        title: "MongoDB",
    },
    {
        id:"2",
        src: "/assets/Expressjs.png",
        title: "ExpressJS",
    },
    {
        id:"3",
        src: "/assets/React.png",
        title: "ReactJS",
    },
    {
        id:"4",
        src: "/assets/nextjs.svg",
        title: "NextJS",
    },
    {
        id:"5",
        src: "/assets/Nodejs.png",
        title: "NodeJS",
    },
    {
        id:"6",
        src: "/assets/postman.svg",
        title: "Postman",
    },
    {
        id:"7",
        src: "/assets/html.png",
        title: "HTML5",
    },
    {
        id:"8",
        src: "/assets/css.png",
        title: "CSS3",
    },
    {
        id:"9",
        src: "/assets/tailwind.png",
        title: "TailwindCSS",
    },
    {
        id:"10",
        src: "/assets/C.png",
        title: "C",
    },
    {
        id:"11",
        src: "/assets/C++.png",
        title: "C++",
    },
    {
        id:"12",
        src: "/assets/python.png",
        title: "Python",
    },
]

const techCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {data.map((data, id) => (
            <div key={id} className="w-[20rem] bg-[#020c1b] text-white relative rounded-[1.25rem] flex-col">
                <div className="flex justify-center px-4 mb-8 mt-16">
                    <Image src={data.src} width={100} height={100} className="rounded-lg"/>
                </div>

                <div className="flex justify-center mb-3 text-lg">
                    {data.title}
                </div>
            </div>
        ))}
    </div>
  )
}

export default techCard