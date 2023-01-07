import React from 'react';

import './style.css';
import NavBar from '../nav';

export default function Blogs() {
    return (
        <div>
            <div className="w-[100%] h-[100vh]">
                <NavBar />

                <div className='flex justify-between items-center gap-8 w-[100%] h-[100vh] pt-[8rem] px-[3rem]'>
                    <div className='w-2/3 h-[70vh] border border-gray-300 py-[1rem]'>

                        <div className='flex flex-col justify-end items-start gap-6 h-full net-cable px-[2rem] py-[1rem]'>
                            <p className='font-bold text-white text-xs uppercase px-[.5rem] py-[.25rem] bg-[#175fa2]'>Coordinator</p>

                            <span className='bg-white text-[#776785] text-2xl font-black capitalized p-[1rem]'>Find The Best Networking and Communication Cables and Wires at STS</span>
                        </div>
                    </div>

                    <div className='w-1/3 h-full flex flex-col gap-6 py-[2rem]'>

                        <div className='border border-gray-300 py-[.5rem] h-1/2'>
                            <div className='flex flex-col justify-end items-start gap-6 h-full net-cable px-[2rem] py-[1rem]'>
                                <p className='font-bold text-white text-xs uppercase px-[.5rem] py-[.25rem] bg-[#175fa2]'>Coordinator</p>

                                <span className='bg-white text-[#776785] text-md font-bold capitalized p-[1rem]'>Find The Best Networking and Communication Cables and Wires at STS</span>
                            </div>
                        </div>

                        <div className='border border-gray-300 py-[.5rem] h-1/2'>
                            <div className='flex flex-col justify-end items-start gap-4 h-full hp-products p-[1rem]'>
                                <p className='font-bold text-white text-xs uppercase px-[.5rem] py-[.25rem] bg-[#175fa2]'>Brands</p>

                                <span className='bg-white text-[#776785] text-md font-bold capitalized p-[1rem]'>Find HP Brand for Premium Products at Switch Tech Supply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}