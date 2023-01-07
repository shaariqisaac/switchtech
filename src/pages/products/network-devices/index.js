import React from 'react';

import NavBar from '../../nav';

import APM408P from "../images/APM408P-10000S.webp";
import Tick from "../images/tick.webp";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function NetworkCables() {
    return (
        <div>
            <div className="w-[100%] h-[220vh]">
                <NavBar />

                <div className='flex flex-col gap-4 w-[100%] h-[220vh] pt-[8rem] px-[3rem]'>

                    <div className='flex items-center gap-3 text-sm font-bold uppercase h-[10vh] text-[#444]'>
                        <p>Home</p>

                        <span> / </span>

                        <p>Categories</p>

                        <span> / </span>

                        <p className='text-gray-400'>NETWORKING AND COMMUNICATION</p>
                    </div>

                    <div className='flex gap-6 w-full h-[60vh]'>

                        <div className='w-2/5'>
                            <img src={APM408P} alt='NETGEAR' className='shadow-md' />
                        </div>

                        <div className='flex flex-col justify-between items-start w-3/5 h-full'>
                            <div className='flex justify-between items-center w-full'>
                                <h1 className='text-[#4095d6] font-bold'>NETGEAR | NETWORK DEVICES</h1>

                                <div className='flex gap-2'>
                                    <button className=''>
                                        <AiOutlineLeft />
                                    </button>

                                    <button className=''>
                                        <AiOutlineRight />
                                    </button>
                                </div>
                            </div>

                            <p className='font-bold text-xl w-[95%]'>NETGEAR - APM408P-10000S - 8 x 100M/1G/2.5G/5G/10GBASE-T PoE+ Port Card</p>

                            <button className='bg-[#175FA2] px-[1rem] py-[.75rem] font-bold text-white text-sm'>Part Number: APM408P-10000S</button>

                            <p className='text-[#175FA2] text-2xl'>Ask to Quote</p>

                            <span className='font-bold text-[#444]'>Quantity:</span>

                            <div className='w-full flex justify-between items-center'>

                                <div className='flex justify-between items-center w-[10%] h-full border-b border-gray-300'>
                                    <button className='font-bold text-2xl text-[#444]'>-</button>
                                    <span className='font-bold text-[#444] text-sm'>0</span>
                                    <button className='font-bold text-xl text-[#444]'>+</button>
                                </div>

                                <button className='bg-[#175FA2] text-white font-semibold text-sm px-[5rem] py-[1.25rem]'>Add to Quote</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 w-[100%] h-[160vh]'>
                        <div className='flex gap-6 w-full'>
                            <div className='w-2/5'>
                                <img src={APM408P} alt='NETGEAR' className='shadow-md h-[15vh] w-[20%] ' />
                            </div>

                            <div className='flex flex-col gap-6 w-3/5'>
                                <h3 className='font-bold text-[#333]'>Product Benefits:</h3>

                                <div className='flex gap-3 w-full'>
                                    <div className='flex w-1/2 flex-col gap-3'>

                                        <div className='flex gap-2'>
                                            <div className='bg-[#175FA2] flex items-center w-[10%] p-[.5rem]'>
                                                <img src={Tick} alt="Tick" />
                                            </div>

                                            <div className='text-sm'>
                                                <p className='text-[#175FA2] font-bold'>7 Day Return </p>
                                                <p className='text-[#b6b6b6] font-semibold'>Easy return on this product</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='bg-[#175FA2] flex items-center w-[10%] p-[.5rem]'>
                                                <img src={Tick} alt="Tick" />
                                            </div>

                                            <div className='text-sm'>
                                                <p className='text-[#175FA2] font-bold'>Free Shipping</p>
                                                <p className='text-[#b6b6b6] font-semibold'>Free Shipping upto 16km around</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex w-1/2 flex-col gap-3'>

                                        <div className='flex gap-2'>
                                            <div className='bg-[#175FA2] flex items-center w-[10%] p-[.5rem]'>
                                                <img src={Tick} alt="Tick" />
                                            </div>

                                            <div className='text-sm'>
                                                <p className='text-[#175FA2] font-bold'>Warranty</p>
                                                <p className='text-[#b6b6b6] font-semibold'>1 Year Brand & Local Warranty</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='bg-[#175FA2] flex items-center w-[10%] p-[.5rem]'>
                                                <img src={Tick} alt="Tick" />
                                            </div>

                                            <div className='text-sm'>
                                                <p className='text-[#175FA2] font-bold'>100% Authentic</p>
                                                <p className='text-[#b6b6b6] font-semibold'>Assuring you the genuine produtct</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='font-bold text-2xl text-[#333]'>Tags:</h1>

                            <div className='w-full flex gap-4'>
                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>Netwok Devices</button>

                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>NETGEAR</button>

                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>Twisted Pair</button>

                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>Netwoking & Communication</button>

                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>RJ-45</button>

                                <button className='text-[#b6b6b6] text-sm font-semibold border border-gray-300 px-[1rem] py-[.5rem]'>PoE+</button>
                            </div>

                            <div className='w-full py-[1rem] flex border-b border-gray-300'>
                                <button className='w-1/4 bg-[#4095d6] text-white font-bold px-[2rem] py-[1rem]'>General Information</button>

                                <button className='w-1/4 text-gray-500 font-bold px-[2rem] py-[1rem] border-r border-gray-300'>Specification</button>

                                <button className='w-1/4 text-gray-500 font-bold px-[2rem] py-[1rem] border-r border-gray-300'>Warranties</button>

                                <button className='w-1/4 text-gray-500 font-bold px-[2rem] py-[1rem]'>Reviews</button>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-[#175FA2] font-black text-3xl'>General Informations</h1>

                            <p className='font-bold w-[90%]'>Looking for a large quantity of NETGEAR Network Devices: APM408P-10000S?
                                <span className='text-[#6E6F71] font-normal'> Physical interface for interaction and communication between various network devices.</span>
                            </p>

                            <div className='w-[100%] h-full flex'>
                                <div className='w-2/6 font-bold flex flex-col gap-1'>
                                    <p>Product Name</p>
                                    <p>Manufacturer Part Number</p>
                                    <p>Product Type</p>
                                    <p>Ethernet Technology</p>
                                    <p>Media Type Supported</p>
                                    <p>Network Technology</p>
                                    <p>Total Number of Ports</p>
                                    <p>Connector Type</p>
                                    <p>Product Model</p>
                                    <p>Application / Usage</p>
                                    <p>Interfaces / Ports Details</p>
                                </div>

                                <div className='w-3/6 text-[#6E6F71] flex flex-col gap-1'>
                                    <p>8 x 100M/1G/2.5G/5G/10GBASE-T PoE+ Port Card</p>
                                    <p>APM408P-10000S</p>
                                    <p>Expansion Module</p>
                                    <p>10 Gigabit Ethernet</p>
                                    <p>Twisted Pair</p>
                                    <p>10GBase-T</p>
                                    <p>8</p>
                                    <p>RJ-45</p>
                                    <p>APM408P</p>
                                    <p>Data Networking</p>
                                    <p>8 x RJ-45 10GBase-T LAN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}