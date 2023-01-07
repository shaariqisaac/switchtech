import React from 'react';

import NavBar from '../nav';

import Amd from "./images/AMD.webp"
import Asus from "./images/ASUS.webp"
import Cisco from "./images/Cisco.webp"
import Hp from "./images/Hp.webp"
import Intel from "./images/Intel.webp"
import Kingston from "./images/Kingston.webp"
import Samsung from "./images/Samsung.webp"
import SanDisk from "./images/SanDisk.webp"
import SeaGate from "./images/SeaGate.webp"
import Sony from "./images/Sony.webp"

import { BiSearch } from "react-icons/bi"
import { BsChevronDown } from "react-icons/bs"

export default function Brands() {
    return (
        <div>
            <div className="w-[100%] h-[130vh]">
                <NavBar />

                <div className='w-[100%] h-[120vh] pt-[8rem] flex flex-col px-[3rem]'>
                    <div className='bg-[#175fa2] w-[100%] h-[10vh] my-[1.5rem] p-[1rem] flex items-center justify-between'>

                        <div className='flex items-center w-1/3'>
                            <input className='w-[70%] font-medium text-sm px-[1rem] py-[.5rem] outline-none rounded-sm' placeholder='Search Brands' />

                            <div className='bg-[#175fa2] text-white p-[.6rem] text-2xl cursor-pointer'>
                                <BiSearch />
                            </div>
                        </div>

                        <div className='w-1/3 flex justify-end items-center gap-4'>
                            <p className='text-white font-semibold text-sm'>Show per page:</p>

                            <div className='flex gap-4 items-center bg-white px-[.5rem] py-[.25rem] font-semibold text-[#777]'>
                                10 <BsChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center gap-8 w-[100%] h-full'>

                        <div className='flex items-center justify-between gap-8 w-full'>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Amd} alt='AMD' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>AMD</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Asus} alt='Asus' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>ASUS</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Cisco} alt='Cisco' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Cisco</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Hp} alt='Hp' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Hp</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Intel} alt='Intel' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Intel</button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-8 w-full'>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Kingston} alt='Kingston' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Kingston</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Samsung} alt='Samsung' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Samsung</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={SanDisk} alt='SanDisk' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>SanDisk</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={SeaGate} alt='SeaGate' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>SeaGate</button>
                            </div>

                            <div className='w-1/5 text-center bg-white'>

                                <div className='w-full'>
                                    <img src={Sony} alt='Sony' />
                                </div>

                                <button className='bg-[#175fa2] text-white w-full mt-[1rem] font-medium py-[.5rem] text-sm'>Sony</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}