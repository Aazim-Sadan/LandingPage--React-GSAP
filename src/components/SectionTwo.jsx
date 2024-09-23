import React from 'react'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'


function SectionTwo() {
  return (
    <div className='w-[80%] mx-auto flex items-center justify-between text-center mt-[80px]'>
    <div className='flex-1 px-4'> 
      <img className='h-[130px] mx-auto' src={`${img2}`} alt="Higher Profits" /> 
      <h2 className='text-2xl font-bold mt-4 pb-7'>Higher Profits</h2> 
      <p className='text-gray-600'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
    </div>
  
    
    <div className='flex-1 px-4'>
      <img className='h-[130px] mx-auto' src={`${img3}`} alt="Robust Scaling" />
      <h2 className='text-2xl font-bold mt-4 pb-7'>Robust Scaling</h2>
      <p className='text-gray-600'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
    </div>
  
   
    <div className='flex-1 px-4'>
      <img className='h-[130px] mx-auto' src={`${img4}`} alt="Best Selection" />
      <h2 className='text-2xl font-bold mt-4 pb-7'>Best Selection</h2>
      <p className='text-gray-600'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
    </div>
  </div>
  
  )
}

export default SectionTwo