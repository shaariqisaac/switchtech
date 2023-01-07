import React, { memo } from 'react'
import { Route, Link } from 'react-router-dom'
import { BsViewList, BsViewStacked, BsCart } from 'react-icons/bs'
import NavBar from '../../../nav'
import Card1 from '../images/1.webp'
import Card2 from '../images/4.webp'
import Card3 from '../images/3.webp'
function Product3() {
  return (
    <div className="">
      <NavBar />
      <div className="w-full h-auto mx-auto overflow-hidden py-6 relative top-40">
        <div className="w-full flex justify-between items-start px-20">
          <div className="w-1/4 space-y-5">
            <h2 className="font-bold text-2xl">Filter</h2>
            <div className="pr-4 flex justify-between items-center mb-5">
              <h2 className="font-bold text-lg">Applied Filter</h2>
              <p>Clear All</p>
            </div>
            <hr className="w-full h-[1.4px] bg-gray-600" />
          </div>
          <div className="w-2/3 px-5 py-4 bg-[#175fa2] flex justify-between items-center text-white">
            <h2 className="text-lg font-semibold ">Transeivers</h2>
            <div className="flex items-center space-x-8">
              <h2>Show Per Page:</h2>

              <select
                className="text-black px-2 py-1 outline-none "
                defaultValue={'25'}
              >
                <option>25</option>
                <option>50</option>
              </select>

              <select className="text-black px-2 py-1 outline-none ">
                <option>Sort By</option>
              </select>

              <div className="flex items-center gap-3 text-lg">
                <h2 className="font-semibold">View</h2>
                <BsViewList />
                <BsViewStacked />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 Grid my-10">
          {/* Side Bar */}
          <div className="flex flex-col justify-start items-start gap-4">
            {/* Brands */}
            <div className="w-full space-y-6">
              <h2 className="font-semibold text-lg text-left">Brands</h2>
              <input
                className="w-full rounded-lg outline-none border-2 border-solid border-gray-400 p-2"
                placeholder="Search Brands Here..."
              />
              <ul className="w-full h-40 overflow-y-auto flex flex-col justify-start items-start gap-2">
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4" />
                  <label className="">Acer</label>
                </div>

                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Alcatel Lucent</label>
                </div>

                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>AMD</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Arista Networks</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>ASUS</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Avago</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Avaya</label>
                </div>
              </ul>
            </div>

            {/* Categaories */}
            <div className="w-full space-y-6 mt-5">
              <h2 className="font-semibold text-lg text-left">Categories</h2>
              <input
                className="w-full rounded-lg outline-none border-2 border-solid border-gray-400 p-2"
                placeholder="Search Categories Here..."
              />
              <ul className="w-full h-40 overflow-y-auto flex flex-col justify-start items-start gap-2">
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4" />
                  <label className="">Computer Accessories</label>
                </div>

                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Consumer Electronics</label>
                </div>

                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Memory</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Networking and Communications</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Power Devices</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Printers and Print Supplies</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>Storage Devices</label>
                </div>
                <div className="flex gap-4">
                  <input type={'checkbox'} className="w-4 rounded-none" />
                  <label>System Components</label>
                </div>
              </ul>
            </div>
          </div>

          <div className="Grid-Products">
            {/* 1st Product */}
            <Link to={'/Network-cables'}>
              <div className="w-full transition-all duration-300 primary-shadow p-4 flex flex-col justify-start items-start gap-6 border">
                <span className="flex justify-center items-center">
                  <img src={Card1} alt="" className="object-contain w-3/4" />
                </span>
                <div className="w-full flex justify-center items-center">
                  <BsCart className="text-4xl transition-all duration-150 hover:bg-[#175fa2] hover:text-white rounded-full p-2" />
                </div>
                <div className="w-full space-y-2">
                  <h2 className="text-[#1c71c2] font-bold">NETGEAR</h2>
                  <h2 className="leading-relaxed text-sm">
                    NETGEAR - AXC7610-10000S - 10GBase direct attach cable - 10
                    m
                  </h2>
                </div>
                <p className="text-xs font-semibold mt-5">
                  Part Number:{' '}
                  <span className="font-light">AXC7610-10000S </span>
                </p>
                <button className="w-full text-center bg-[#175fa2] text-white p-2">
                  Add to Qoute
                </button>
              </div>
            </Link>

            {/* 2nd Product */}
            <Link to={'/Network-cables'}>
              <div className="w-full transition-all duration-300 hover:shadow-md p-4 flex flex-col justify-start items-start gap-6 border">
                <span className="flex justify-center items-center">
                  <img src={Card2} alt="" className="object-contain w-3/4" />
                </span>
                <div className="w-full flex justify-center items-center">
                  <BsCart className="text-4xl transition-all duration-150 hover:bg-[#175fa2] hover:text-white rounded-full p-2" />
                </div>
                <div className="w-full space-y-2">
                  <h2 className="text-[#1c71c2] font-bold">NETGEAR</h2>
                  <h2 className="leading-relaxed text-sm">
                    NETGEAR NETGEAR - APM408P-10000S - 8 x
                    100M/1G/2.5G/5G/10GBASE-T PoE+ Port Card
                  </h2>
                </div>
                <p className="text-xs font-semibold mt-5">
                  Part Number:{' '}
                  <span className="font-light"> APM408P-10000S </span>
                </p>
                <button className="w-full text-center bg-[#175fa2] text-white p-2">
                  Add to Qoute
                </button>
              </div>
            </Link>

            {/* 3rd Product */}
            <Link to={'/Network-cables'}>
              <div className="w-full transition-all duration-300 hover:shadow-md p-4 flex flex-col justify-start items-start gap-6 border">
                <span className="flex justify-center items-center">
                  <img src={Card3} alt="" className="object-contain w-3/4" />
                </span>
                <div className="w-full flex justify-center items-center">
                  <BsCart className="text-4xl transition-all duration-150 hover:bg-[#175fa2] hover:text-white rounded-full p-2" />
                </div>
                <div className="w-full space-y-2">
                  <h2 className="text-[#1c71c2] font-bold">NETGEAR</h2>
                  <h2 className="leading-relaxed text-sm">
                    NETGEAR - AXM762-10000S - Prosafe 10GBase-LR SFP+ LC GBIC
                  </h2>
                </div>
                <p className="text-xs font-semibold mt-5">
                  Part Number:{' '}
                  <span className="font-light">AXC7610-10000S </span>
                </p>
                <button className="w-full text-center bg-[#175fa2] text-white p-2">
                  Add to Qoute
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Product3)