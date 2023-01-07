import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import NavBar from '../nav'
import Carasoule from './Carasoule.js'

import Img1 from './images/ROUTERS.webp'
import Img2 from './images/transceiver.webp'
import Img3 from './images/NETWORK CABLES.webp'

function Home() {
  return (
    <div>
      <div className='w-[100%] h-[100vh]'>
        <NavBar />

        <div className="w-full px-[3rem] pt-[8.9rem]">

          <div className="w-full pr-[2rem] Home-Grid">

            {/* 1st column */}
            <div className="w-[100%] grid grid-cols-1">

              {/* 1st Card */}
              <Link to={'/routers'}>
                <div className="w-full h-[25vh] F-card px-8 flex justify-between items-center transition-all duration-300">
                  <div className="space-y-4">

                    <h2 className="uppercase text-2xl font-semibold text-gray-600 ">
                      routers
                    </h2>

                    <button className="px-3 py-2 bg-[#175fa2] text-white ">
                      Shop Now
                    </button>
                  </div>

                  <div>
                    <img src={Img1} className="object-contain w-40" alt="" />
                  </div>
                </div>
              </Link>

              {/* second card */}
              <Link to={'/transeivers'}>
                <div className="w-full h-[25vh] F-card px-8 flex justify-between items-center transition-all duration-300 ">
                  <div className="space-y-4">
                    <h2 className="uppercase text-2xl font-semibold text-gray-600 ">
                      transceivers
                    </h2>
                    <button className="px-5 py-2 bg-[#175fa2] text-white">
                      Shop Now
                    </button>
                  </div>

                  <div>
                    <img src={Img2} className="object-contain w-40" alt="" />
                  </div>
                </div>
              </Link>

              {/* third Card */}

              <Link to={'/network'}>
                <div className="w-full h-[25vh] F-card px-8 flex justify-between items-center transition-all duration-300">
                  <div className="space-y-4">
                    <h2 className="uppercase text-2xl font-semibold text-gray-600 ">
                      network cables
                    </h2>
                    <button className="px-5 py-2  bg-[#175fa2] text-white">
                      Shop Now
                    </button>
                  </div>

                  <div>
                    <img src={Img3} className="object-contain w-40" alt="" />
                  </div>
                </div>
              </Link>
            </div>

            {/* second column */}
            <div className="overflow-x-hidden w-full flex justify-center items-center">
              <Carasoule />
            </div>

            {/* third column */}
            <div className="w-full flex flex-col justify-around items-center py-8 px-6 border-2 border-solid border-gray-300 ">
              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  Networing and communication
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  power devices
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  consumer electronics
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  computer accessories
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  storage devices
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm  tracking-wide text-left">
                  memory
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  printers and print supplies
                </h2>
                <hr className="w-full" />
              </div>

              <div className="w-full space-y-2">
                <h2 className="uppercase text-gray-600 font-semibold text-sm tracking-wide text-left">
                  system components
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Home)
