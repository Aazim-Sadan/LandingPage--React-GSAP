import React from 'react'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'

function SectionFour() {
  return (
    <div className='w-[80%] mx-auto flex items-center justify-between text-center mt-[80px]'>
    <div className='flex-1 px-4'> 
      <img className='h-[130px] mx-auto' src={`${img6}`} alt="" /> 
      <h2 className='text-xl font-bold  text-green-500'>CREATE</h2> 
      <h2 className='text-2xl font-bold mt-2 pb-6 '>custom products</h2>
      <p className='text-gray-600'>Easily add your designs to a wide range of products using our free tools</p>
    </div>
  
    
    <div className='flex-1 px-4'>
      <img className='h-[130px] mx-auto' src={`${img7}`} alt="" />
      <h2 className='text-xl font-bold  text-green-500'>SELL</h2>
      <h2 className='text-2xl font-bold mt-2 pb-6'>on your teams</h2>
      <p className='text-gray-600'>Your choose the products, and where the sell</p>
    </div>
  
   
    <div className='flex-1 px-4'>
      <img className='h-[130px] mx-auto' src={`${img8}`} alt="" />
      <h2 className='text-xl font-bold text-green-500'>WE HANDLE</h2>
      <h2 className='text-2xl font-bold mt-2 pb-6'>fullfillment</h2>
      <p className='text-gray-600'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
    </div>
  </div>
  )
}

export default SectionFour