import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import contactbg from "../assets/contactbg.png"
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {






    return (
        <div className='contact'>
            <p className='text-center text-2xl font-bold leading-tight text-black mt-5'>"Let's make somthing together that someone desires"</p>
            
            <div className='w-full text-center'>

            <span className='flex items-center justify-start space-x-5 text-xl md:text-2xl mx-5 mt-5 text-center'><MdOutlineMailOutline /> <h2>dhruvhgoradia@gmail.com</h2></span>
            <span className='flex items-center justify-start space-x-5 text-xl md:text-2xl mx-5 mt-5 text-center'><PiPhoneCallBold /> <h2>+91 7741088375</h2></span>
            <span className='flex items-center justify-start space-x-5 text-xl md:text-2xl mb-5 mx-5 mt-5 text-center'><IoLocationSharp /> <h2>Maharashtra , India</h2></span>

            </div>



            <div className="flex items-center justify-center mt-5 md:shadow-2xl px-10 py-5 md:p-5 rounded-3xl">


                <div className="md:w-1/2 hidden md:inline">
                    <img src={contactbg} alt="contact background" className='w-full' />
                </div>

                <div className="md:w-1/2 w-full flex flex-col gap-3">

                    <h2 className="text-center text-2xl font-bold leading-tight text-black flex justify-center gap-3 items-center underline underline-offset-4">
                        Let's Connect <LuMessagesSquare />
                    </h2>

                    <form action='https://getform.io/f/bolgzyna' method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base text-gray-900 font-bold">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        name='name'
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base text-gray-900 font-bold">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name='email'
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="Your message" className="text-base font-bold text-gray-900">

                                        Your Message
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <textarea
                                        className="h-[10rem] w-full rounded-md border border-gray-600 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-"
                                        placeholder="Message"

                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Send Message <BsFillSendFill className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Contact
