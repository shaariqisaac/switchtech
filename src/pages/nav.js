import React from 'react'

import Logo from './images/logo-color.webp'
import { Link } from 'react-router-dom'

import { BsChevronDown, BsTelephoneFill } from 'react-icons/bs'
import { BiSearch, BiMenu } from 'react-icons/bi'

export default function NavBar() {
    return (
        <div className="z-20">
            <nav className="w-[100%] flex flex-col fixed z-20">
                <div className="flex justify-between items-center bg-white px-[3rem] py-[1rem]">
                    <div className="w-[20%]">
                        <img src={Logo} alt="Logo-Switch_Tech" />
                    </div>

                    <div className="flex w-[55%]">
                        <div className="flex justify-between items-center w-[40%] bg-[#f0f0f0] px-[1rem] py-[.5rem]">
                            <p className="text-sm text-gray-500">All Category</p>

                            <BsChevronDown />
                        </div>

                        <div className="flex justify-between items-center w-[60%] border-y border-gray-300">
                            <input
                                className="font-medium text-sm px-[1rem] outline-none w-full"
                                placeholder="Search"
                            />

                            <BiSearch className="bg-[#175fa2] text-white p-[.6rem] w-[10%] h-full" />
                        </div>
                    </div>

                    <button className="w-[15%] flex justify-center items-center gap-3 text-[#175fa2] font-bold border-2 border-[#175fa2] py-[.5rem]">
                        <BsTelephoneFill /> Call Us Now
                    </button>
                </div>

                <div className="flex items-center justify-between bg-[#175fa2] px-[3rem] h-14">
                    <div className="flex items-center justify-between w-[60%] text-white font-semibold text-md  h-full">

                        <button className="uppercase  text-sm ">
                            <Link to={'/'}>Home</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'/about-us'}>About Us</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'/brands'}>Brands</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'/products'}>Products</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'/blogs'}>Blog</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'request-a-quote'}>Request a Quote</Link>
                        </button>

                        <button className="uppercase text-sm">
                            <Link to={'/contact-us'}>Contact</Link>
                        </button>
                    </div>

                    <div className="w-[22%] flex gap-8 items-center justify-center text-white bg-[#4095d6] h-full">
                        <div className="flex items-center gap-2">
                            <BiMenu className="text-xl" />
                            <p className="font-medium">All Categories</p>
                        </div>
                        <BsChevronDown />
                    </div>
                </div>
            </nav>
        </div>
    )
}
