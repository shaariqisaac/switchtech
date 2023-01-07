import React, { memo } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carasoule() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className="w-full">
      <div className=" w-full h-[78vh] slider-1 ">
        <div className="w-full h-full flex flex-col justify-center items-start px-10 text-white gap-5">
          <h2 className="text-4xl font-extrabold tracking-wide leading-snug">
            Providing Discounts on all Networking Routers, Switches, Hubs,
            Modems, Bridges
          </h2>
          <p className="text-lg text-gray-200">
            Small Companies to Big Enterprise
          </p>
          <div className="flex items-center gap-x-4">
            <button className="border-2 border-solid border-gray-300 px-5 py-3 transition-all duration-300 hover:bg-blue-500 hover:border-transparent">
              View Item
            </button>
            <button className="px-5 py-3 bg-blue-500 border-2 border-solid border-blue-500 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-solid hover:border-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full h-[78vh] slider-2">
        <div className="w-full h-full flex flex-col justify-center items-start px-10 text-white gap-5">
          <h2 className="text-4xl font-extrabold tracking-wide leading-snug">
            Networking Equipment in Stock Small Companies to Big Enterprise
          </h2>
          <p className="text-lg text-gray-200">
            Covering wide range of all Devices
          </p>
          <div className="flex items-center gap-x-4">
            <button className="border-2 border-solid border-gray-300 px-5 py-3 transition-all duration-300 hover:bg-blue-500 hover:border-transparent">
              View Item
            </button>
            <button className="px-5 py-3 bg-blue-500 border-2 border-solid border-blue-500 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-solid hover:border-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full h-[78vh] slider-3">
        <div className="w-full h-full flex flex-col justify-center items-start px-10 text-white gap-5">
          <h2 className="text-4xl font-extrabold tracking-wide leading-snug">
            Offering variety on Networking Servers and Storages
          </h2>
          <p className="text-lg text-gray-200">
            Small Companies to Big Enterprise
          </p>
          <div className="flex items-center gap-x-4">
            <button className="border-2 border-solid border-gray-300 px-5 py-3 transition-all duration-300 hover:bg-blue-500 hover:border-transparent">
              View Item
            </button>
            <button className="px-5 py-3 bg-blue-500 border-2 border-solid border-blue-500 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-solid hover:border-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Slider>
  )
}
