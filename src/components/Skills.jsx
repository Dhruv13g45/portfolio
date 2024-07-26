import React from 'react'
import '../App.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa6";


const Skills = () => {

    const skills = [
        {
            id: 1,
            logo: <FaHtml5 className='w-full' />,
            alt: "HTML",
        },
        {
            id: 2,
            logo: <FaCss3Alt className='w-full' />,
            alt: "CSS",
        },
        {
            id: 3,
            logo: <IoLogoJavascript className='w-full' />,
            alt: "JS",
        },
        {
            id: 4,
            logo: <RiReactjsFill className='w-full' />,
            alt: "REACT JS",
        },
        {
            id: 5,
            logo: <SiRedux className='w-full' />,
            alt: "REDUX JS",
        },
        {
            id: 6,
            logo: <FaBootstrap className='w-full' />,
            alt: "BOOTSTRAP",
        },
        {
            id: 7,
            logo: <RiTailwindCssFill className='w-full' />,
            alt: "TAILWIND CSS",
        },
        {
            id: 8,
            logo: <SiMysql className='w-full' />,
            alt: "MY-SQL",
        },
        {
            id: 9,
            logo: <FaPython className='w-full' />,
            alt: "PYTHON",
        },
    ]


    return (
        <>
            <div className='skills w-full md:p-8 flex flex-col items-center'>
                <h1 className='text-3xl w-full underline underline-offset-2 text-center mt-10 md:mt-0'>My Skills</h1>

                <div className='w-full grid grid-cols-3 mt-10 mx-auto text-center gap-2 md:gap-5'>
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className='text-[5rem] shadow-2xl rounded-2xl md:p-10 p-3 hover:-translate-y-2 duration-200'>
                                {skill.logo}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills
