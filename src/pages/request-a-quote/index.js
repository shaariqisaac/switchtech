import React, { memo } from 'react'
import NavBar from '../nav'

import './style.css'

function Qoute() {
  return (
    <div>
      <NavBar />

      <div className="w-full h-[140vh] px-[3rem] pt-[10rem]">
        <div className="shadow-qoute px-10 py-4">

          <div className="w-full text-center pt-6 space-y-2">
            <h2 className="font-extrabold text-2xl tracking-tight text-[#333]">
              REQUEST A <span className="text-[#175fa2]">QOUTE</span>
            </h2>

            <p className="w-[50%] my-0 mx-auto text-xs text-gray-400">
              - Cannot find the product part you are looking for? Fill the quote
              to request for your desired part and we will get back to you as
              soon as possible -
            </p>
          </div>

          <form className="w-full my-6">
            <h2 className="font-bold text-sm text-[#333]">
              Personal Details:
            </h2>

            <div className="w-full mt-4 space-y-6">
              <div className="grid grid-cols-3 place-items-center gap-x-4">

                <input
                  className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                  placeholder="First Name"
                />

                <input
                  className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                  placeholder="Last Name"
                />

                <input
                  className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                  placeholder="Phone No."
                  type={'number'}
                />
              </div>

              <div className="Grid-Qoute gap-x-4">
                <div className="grid grid-cols-2 gap-4">

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Email"
                    type={'email'}
                  />

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Organiztion"
                  />

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Country"
                  />

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Zip Code"
                  />
                </div>

                <input
                  className="w-full px-2 py-10 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                  placeholder="Message"
                />
              </div>

              <div className="space-y-4">

                <h2 className=" text-sm text-[#333] font-bold">
                  Part Details:
                </h2>

                <div className="grid grid-cols-4 gap-4">

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                  />

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Any"
                  />

                  <input
                    className="w-full px-2 py-2.5 border-2 border-solid border-gray-200 outline-gray-400 placeholder:text-gray-500 font-semibold text-sm"
                    placeholder="Quantity:"
                  />

                  <button className='w-full text-center font-bold text-white bg-[#175fa2]'>Add To Qoute</button>
                </div>
              </div>

              <div className='w-full flex justify-between items-center px-4 py-2 text-sm text-[#333] bg-[#e2e2e2] font-semibold'>
                <h2>Part Detail</h2>
                <h2>Product Image</h2>
                <h2>Quantity</h2>
                <h2>Condition</h2>
              </div>

              <div className='w-full text-center'>
                <button className='px-8 py-3 bg-[#666] text-white text-sm font-bold mt-10'>Submit Qoute</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default memo(Qoute)
