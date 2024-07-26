import React from 'react'
import { ProjectInfo } from '../data.js'
import { Link } from 'react-router-dom'
import { CiStreamOn } from "react-icons/ci";
import { GoFileSubmodule } from "react-icons/go";




const Projects = () => {




  return (
    <>
      <div className="projects w-full flex gap-5 flex-col mt-5  rounded-3xl p-5">
        {
          ProjectInfo.map((prj) => (
            <div className='md:flex-row flex-col flex items-center justify-between gap-5 md:p-5  rounded-3xl shadow-2xl' key={prj.id}>
              <div className='md:w-[50%] w-full'>
                <img src={prj.path} alt={prj.alt} className='rounded-xl' />
              </div>
              <div className='md:w-[50%] w-full'>
                <h1 className='font-bold text-2xl text-center underline underline-offset-4 mb-3'>{prj.alt}</h1>
                <p dangerouslySetInnerHTML={{ __html: prj.prjDiscription }} className=' text-md px-3 sm:p-0 sm:text-lg'></p>
                <div className='flex justify-evenly items-center'>
                  <Link to={prj.live}>
                    <button className='px-7 py-3 mt-5 mb-10 md:md-0 bg-black text-white rounded-3xl hover:bg-gray-900 duration-300 flex  items-center gap-3'>Live <CiStreamOn className='text-xl font-extrabold' /></button>
                  </Link>
                  <Link to={prj.repoLink}>
                    <button className='px-7 py-3 mt-5 mb-10 md:md-0 bg-black text-white rounded-3xl hover:bg-gray-900 duration-300 flex  items-center gap-3'>Github <GoFileSubmodule /></button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Projects
