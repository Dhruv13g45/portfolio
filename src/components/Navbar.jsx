import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";
import '../App.css'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center w-full gap-5 p-5 rounded-[50px] shadow-2xl bg-white'>
                <div className='w-1/5'>
                    <NavLink to="/" className=' head text-[2rem] font-bold flex justify-center items-center gap-2 border-2 border-black rounded-3xl hover:bg-black hover:border-none hover:text-white duration-300 ease-in-out'><FaLaptopCode className='hidden sm:inline' /><h1> Dhruv</h1></NavLink>
                </div>
                <ul className='sm:flex hidden justify-end space-x-20 items-center w-4/5  text-extrabold md:text-xl text-sm'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}>PROJECTS</NavLink>
                    </li >
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}>CONTACT</NavLink>
                    </li >
                </ul >
                <ul className='sm:hidden flex justify-evenly items-center w-4/5 text-3xl navIcons'>
                    <li>
                        <NavLink to="/"><FaHome /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"><BsPersonVcardFill /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects"><MdOutlineWork /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><GrContact /></NavLink>
                    </li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar
