import React, { memo } from 'react'
import NavBar from '../nav'
import Backimg from './images/backimg.webp'
import './style.css'
function Contact() {
  return (
    <div className="">
      <NavBar />
      <div className="w-full h-auto relative top-40 px-20 py-10 flex justify-center items-center">
        <div className="w-1/3 flex flex-col justify-start items-start px-6 py-12 shadow-lg gap-7 container">
          <div>
            <h2 className='font-semibold text-lg'>Toll Number</h2>
            <h2 className='font-bold text-2xl'>+1(866)-556-5571</h2>
          </div>
          <div>
            <h2 className='font-semibold text-lg'>Email</h2>
            <h2 className='font-bold text-2xl'>info@switchtechsupply.com</h2>
          </div>
        </div>
        <div className="w-2/3">
          <img
            src={Backimg}
            alt=""
            className="object-contain w-full h-[65vh]" 
          />
        </div>
      </div>
    </div>
  )
}
export default memo(Contact)
