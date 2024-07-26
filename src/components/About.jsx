import React from 'react'
import '../App.css'
import Skills from './Skills.jsx'
import Aboutimg from '../assets/aboutimg.png'
import { TbPointFilled } from "react-icons/tb";

const About = () => {
  return (
    <>
      <div className='about w-full mt-10 shadow-2xl rounded-[25px] px-10'>
        <h1 className='text-3xl text-center w-full hidden md:block md:p-5 underline underline-offset-2'>About Me</h1>
        <div className='md:p-8 text-justify text-lg flex md:flex-row flex-col-reverse justify-evenly items-center gap-3 -mt-10'>


          <div className='w-full md:w-[50%] '>
            <img src={Aboutimg} alt="aboutimg" className='w-full h-full' />
          </div>

          <h1 className='w-full md:w-[50%] border border-black rounded-3xl font-bold text-xl mt-10 md:m-0 sm:text-3xl text-center py-3 px-5'>"Writing my journey so someone may find their FootPrints"</h1>


        </div>

        <div className='w-[100%] flex flex-col gap-3 text-sm sm:text-xl -mt-5'>

          <p>
            <TbPointFilled className='inline' /> I thrive in the realm of <span className='font-bold'>frontend development</span>, boasting mastery in <span className='font-bold'>HTML5, CSS3, and JavaScript</span>.</p>
          <p>
            <TbPointFilled className='inline' /> My toolkit extends to leveraging advanced CSS frameworks such as <span className='font-bold'>Bootstrap 5 and Tailwind CSS</span>, enabling me to craft visually stunning and responsive web interfaces.
          </p>
          <p>
            <TbPointFilled className='inline' />  At present, my focus lies on deepening my <span className='font-bold'>proficiency in React JS</span>, as I recognize its pivotal role in modern web development.
          </p>
          <p>
            <TbPointFilled className='inline' />  Looking ahead, I am eagerly preparing to <span className='font-bold'>explore backend technologies</span>, aiming to cultivate a comprehensive skill set that spans the entire web development spectrum.
            Driven by a passion for delivering seamless user experiences, I am committed to continually refining my frontend skills and embracing new challenges in the dynamic world of technology.
          </p>
        </div>


        <Skills />
      </div>
    </>
  )
}

export default About
