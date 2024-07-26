import React from 'react'
import HomeBg from "../assets/homebg.png"
import { contact } from "../data.js"
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import '../App.css'

const Home = () => {
  return (
    <>
      <div className='home w-full flex md:flex-row flex-col justify-between  items-center mt-10 sm:shadow-2xl rounded-[25px] '>
        <div className="info lg:w-1/2 w-full lg:px-10 px-3 py-5">
          <div className='text-left text-3xl'>
            <h2 >Hi 👋,</h2>
            <h2 >I'm Dhruv Goradia,</h2>
          </div>
          <h1 className='text-[4rem] font-bold text-left  m-0 w-full role'>FRONT-END DEVELOPER</h1>
          <p className='text-2xl text-gray-900 text-left'>A passionate Front-End Developer <br /> bringing ideas into Real Life Projects
          </p>
          <p className='text-2xl text-gray-900 text-left mt-2'>
            Proficiency in creating visually stunning websites and Web Apps.
          </p>

          <div className='flex justify-evenly items-center mt-5 w-full gap-3'>
            {
              contact.map((item) => (
                <div key={item.alt} className='homeContactText w-full text-center py-2 bg-black text-white font-semibold rounded-3xl  hover:bg-white hover:text-black hover:border hover:border-black duration-300'>
                  <Link to={item.path} target="_blank">
                    <h1 className='text-xl'>{item.alt}</h1>
                  </Link>
                </div>
              ))
            }


            <a href={contact[0].path} target="_blank">
              <FaLinkedin className='icons text-[3rem] mt-3' />
            </a>
            <a href={contact[2].path} target="_blank">
              <FaSquareXTwitter className='icons text-[3rem] mt-3' />
            </a>
            <a href={contact[1].path} target="_blank">
              <FaGithubSquare className='icons text-[3rem] mt-3' />
            </a>
            <a href={contact[3].path} target="_blank">
              <HiDocumentText className='icons text-[3rem] mt-3' />
            </a>

          </div>
        </div>
        <div className="homeimage w-1/2 lg:block hidden -z-50">
          <img src={HomeBg} alt="homebg" />
        </div>
      </div>
    </>
  )
}

export default Home
