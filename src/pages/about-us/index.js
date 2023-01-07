import React from 'react';

import NavBar from '../nav';

import About_Img from "./img/about.webp"

export default function About() {
    return (
        <div>
            <div className="w-[100%] h-[100vh]">
                <NavBar />

                <div className='w-[100%] h-[100vh] pt-[8rem] flex px-[7rem]'>
                    <div className='w-2/3 h-full py-[1rem] flex flex-col gap-6 justify-center items-start'>
                        <h1 className='font-bold text-3xl text-[#222]'>About <span className='text-[#4095d6]'>Us</span></h1>

                        <p className='font-bold text-[#222] text-sm w-[85%] leading-6'>Switch Tech Supply story begins with the ambition and entrepreneurial spirit of professionals who shared a collective desire to innovate and create.</p>

                        <div className='w-[70px] h-[5px] bg-[#4095d6]'></div>

                        <p className='font-semibold text-[#acacac] text-sm w-[85%] leading-6'>Switch Tech Supply began with the vision to provide the best quality products hand-picked by our expert team</p>

                        <p className='font-semibold text-[#acacac] text-sm w-[90%] leading-6'>Switch Tech Supply is a team of experts that work together to create a successful and innovative business for hardware IT products. By working with the best manufacturers, we provide our clients with the best. Our business headquarters is based in Wyoming, but our products are sold different countries. Our goals and objectives align well to give clients best experience with our IT products.</p>

                        <p className='font-semibold text-[#acacac] text-sm w-[85%] leading-6'>With the vision to become one of the top IT reseller companies in the world with its products, Switch Tech Supply is slowly expanding to reach out to every client around the world.</p>

                        <button className='bg-[#175fa2] outline-none px-[5rem] py-[1rem] text-sm font-medium text-white'>Read More</button>
                    </div>

                    <div className='w-1/3'>
                        <img src={About_Img} alt='About-Img' className='h-full py-[1rem]' />
                    </div>
                </div>
            </div>
        </div>
    );
}