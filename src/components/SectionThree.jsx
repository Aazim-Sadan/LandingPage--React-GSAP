import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import img5 from '../assets/img5.png'

function SectionThree() {
    return (
        <div className='relative w-[100%] h-[110vh] mx-auto bg-gray-100 mt-[17px]'>

            <svg className='absolute top-[-20px] left-0 w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path fill='#fff' fillOpacity='1' d='M0,96L1440,160L1440,0L0,0Z'></path>
            </svg>

            <div className="relative z-10">
                <div className="w-[70%] mx-auto h-[45vh] bg-white absolute top-[265px] left-[240px] rounded-lg flex items-center justify-between px-8 py-5">
                    <div className="w-[55%]">
                        <img src={img5} alt="" className="w-full" />
                    </div>

                    <div className="flex flex-col w-[55%] gap-7">
                        <h1 className="text-left text-3xl font-bold">
                            Easily add your design to a wide range of products
                        </h1>
                        <p className="text-gray-600">
                            With our free design tools, you can easily add your custom designs to
                            t-shirts, mugs, phone cases, and hundreds of other products.
                        </p>
                        <button className="text-green-500 hover:text-green-600 active:text-green-700 flex items-center">
                            All products <span className="ml-2"><FaArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>



            <svg className='absolute bottom-0 left-0 w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path fill='#fff' fillOpacity='1' d='M0,288L1440,160L1440,320L0,320Z'></path>
            </svg>
        </div>
    )
}

export default SectionThree