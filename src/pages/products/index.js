import React, { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BsViewList, BsViewStacked, BsCart } from 'react-icons/bs'

import NavBar from '../nav'
import './style.css'

function Products() {

  const [data, setData] = useState([]);

  const productData = [
    {
      id: 1,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FAXC7610-10000S.jpg%3Falt%3Dmedia%26token%3D21efaa36-ea50-4359-8512-98ded130ad70&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-1',
      price: "$30",
    },
    {
      id: 2,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FAPM408P-10000S.webp%3Falt%3Dmedia%26token%3Dcceb66ac-ec3b-47cf-bcc6-7ed23c07aa4d&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-2',
      price: "$26",
    },
    {
      id: 3,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FAXM762-10000S.jpg%3Falt%3Dmedia%26token%3D2176af08-4eaa-47ba-88db-66cd43d163ed&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-3',
      price: "$36",
    },
    {
      id: 4,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGSM4352PB-100NES.jpg%3Falt%3Dmedia%26token%3D9d9e2083-e1af-4f29-bc44-1e3c2c718b72&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-4',
      price: "$70",
    },
    {
      id: 5,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FFS108NA.webp%3Falt%3Dmedia%26token%3D24caecbc-f187-43c2-88cd-3d1d76d2fd9e&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-5',
      price: "$56",
    },
    {
      id: 6,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FWAX610PA-100NAS.jpg%3Falt%3Dmedia%26token%3Dec9a697f-d663-4d52-9e94-47400dc7d465&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-6',
      price: "$12",
    },
    {
      id: 7,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGS316-100NAS.jpg%3Falt%3Dmedia%26token%3De8feddf5-883b-4af8-97fa-477d190d71c4&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-7',
      price: "$33",
    },
    {
      id: 8,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FSXK80B3-100NAS.jpg%3Falt%3Dmedia%26token%3D989531e2-19ec-48de-98a5-95a7420c5e3d&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-8',
      price: "$44",
    },
    {
      id: 9,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FXSM4316PA-100NES.png%3Falt%3Dmedia%26token%3D505e3a09-acd1-4600-95b2-f07e82cf19b2&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-9',
      price: "$13",
    },
    {
      id: 10,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FEAX80-100NAS.jfif%3Falt%3Dmedia%26token%3D5bad4e81-0163-416b-9264-b4ab89144470&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-10',
      price: "$5,"
    },
    {
      id: 11,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGSM4328PB-100NES.webp%3Falt%3Dmedia%26token%3D9c58e509-57da-4c25-a8cc-d429df297e24&w=1920&q=75',
      title: '  NETGEAR',
      desc: 'Product-11',
      price: "$33",
    },
    {
      id: 12,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGS516UP-100NAS.jpg%3Falt%3Dmedia%26token%3D40e935bd-8d2b-4500-881c-064f2a3badff&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-12',
      price: "$47",
    },
    {
      id: 13,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FAXC767-10000S.png%3Falt%3Dmedia%26token%3Db536b21d-641f-4fee-b824-74949d7e902e&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-13',
      price: "$12",
    },
    {
      id: 14,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FXSM4396K0-10000S.jfif%3Falt%3Dmedia%26token%3D8eec58b8-d149-4d9a-a50f-76c3c2c47ad0&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-14',
      price: "$25",
    },
    {
      id: 15,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGS752TP-200NAS.webp%3Falt%3Dmedia%26token%3D12e7dff3-49b4-425a-b432-ad1abbcad11a&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-15',
      price: "$68",
    },
    {
      id: 16,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGS305-300PAS.jpg%3Falt%3Dmedia%26token%3D3fd74c49-5f1f-4b92-89e6-9d8ef7bbf3ca&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-16',
      price: "$400",
    },
    {
      id: 17,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FAXM763-10000S.jpg%3Falt%3Dmedia%26token%3Db3f21822-4994-4d49-a4b7-a4848cf22713&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-17',
      price: "$310",
    },
    {
      id: 18,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FFS728TP-100NAS.jpg%3Falt%3Dmedia%26token%3D66edef66-a969-402f-b94a-836268f0c26c&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-18',
      price: "$20",
    },
    {
      id: 19,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGSM4328PA-100NES.jpg%3Falt%3Dmedia%26token%3Db6b8129f-39fd-4fb5-8a4c-f4d8e2ea4036&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-19',
      price: "$40",
    },
    {
      id: 20,
      img:
        'https://www.switchtechsupply.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffeisty-etching-333216.appspot.com%2Fo%2FGS724T-400NAS.jpg%3Falt%3Dmedia%26token%3D3dd7d6b8-7a57-4d05-86ab-4099c147f9fc&w=1920&q=75',
      title: 'NETGEAR',
      desc: 'Product-20',
      price: "$56",
    },
  ]

  useEffect((e) => {
    const state = data
    state.push(productData)
    return setData(...state)
  }, [])

  const toString = JSON.stringify(data)
  localStorage.setItem('Data', toString)

  return (
    <div>
      <NavBar />

      <div className="w-full h-[140vh] py-[10rem]">
        <div className="w-full flex justify-between items-start px-[3rem]">
          <div className="w-1/4 space-y-5">

            <h2 className="font-bold text-2xl text-[#333]">Filter</h2>

            <div className="pr-[.5rem] flex justify-between items-center mb-5">
              <h2 className="font-bold text-[#333]">Applied Filter</h2>
              <p className='text-sm'>Clear All</p>
            </div>

            <hr className="w-full h-[1.4px] bg-gray-600" />
          </div>

          <div className="w-2/3 px-5 py-4 bg-[#175fa2] flex justify-between items-center text-white">

            <h2 className="text-lg font-semibold ">Products</h2>

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

        <div className="w-full px-12 Grid my-10">

          <div className="flex flex-col justify-start items-start gap-4">

            <div className="w-[80%] space-y-6">

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

            <div className="w-[80%] space-y-6 mt-5">

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

          <div className="w-full">

            <Link to={'/Network-cables/APM408P-10000S'}>

              <div className="Map-Grid">

                {data.map((value, index) => {
                  return (
                    <div className="w-full transition-all duration-300 hover:shadow-md p-4 flex flex-col justify-start items-start gap-6 border">

                      <span className="flex justify-center items-center">

                        <img
                          src={value.img}
                          alt=""
                          className="object-contain h-[40vh]"
                        />
                      </span>

                      <div className="w-full flex justify-center items-center">
                        <BsCart className="text-4xl transition-all duration-150 hover:bg-[#175fa2] hover:text-white rounded-full p-2" />
                      </div>

                      <div className="w-full space-y-2">

                        <h2 className="text-[#1c71c2] font-bold">
                          {value.id}. {value.title}
                        </h2>

                        <h2 className="leading-relaxed text-sm">{value.price}</h2>
                      </div>

                      <p className="text-xs font-semibold">
                        Part Number:
                        <span className="font-light"> APM408P-10000S </span>
                      </p>

                      <button className="w-full text-center bg-[#175fa2] text-white text-sm font-bold p-2">
                        Add to Qoute
                      </button>
                    </div>
                  )
                })}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Products)
