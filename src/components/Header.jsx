import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

function Header() {
  return (
    <>
      <header className='border-b-[1px] shadow-[0_3px_4px_#0000000a]'>
  <nav className='w-[80%] mx-auto h-20 flex items-center justify-between px-12'>
   
    <div>
      <p className='font-bold text-green-500 text-3xl'>Printify</p>
    </div>

  
    <ul className='flex items-center gap-10'>
      <li className='text-black hover:text-green-500 active:text-green-600'>Catalog</li>
      <li className='relative text-black hover:text-green-500 active:text-green-600'>
        How it works
        <span className="absolute top-0 right-[-18px] hover:text-green-500 active:text-green-600">▼</span> 
      </li>
      <li className='text-black hover:text-green-500 active:text-green-600'>Pricing</li>
      <li className='text-black hover:text-green-500 active:text-green-600'>Blog</li>
      <li className='relative text-black hover:text-green-500 active:text-green-600'>
        Services
        <span className="absolute top-0 right-[-18px] hover:text-green-500 active:text-green-600">▼</span> 
      </li>
      <li className='relative text-black hover:text-green-500 active:text-green-600'>
        Use-cases
        <span className="absolute top-0 right-[-18px] hover:text-green-500 active:text-green-600">▼</span> 
      </li>
      <li className='text-black hover:text-green-500 active:text-green-600'>Need Help?</li>
    </ul>


    <div className='flex space-x-4'>
      <button className='bg-white border-2 border-gray-400 text-black hover:text-green-500 active:text-green-600 px-4 py-2 rounded h-10'>
        Log in
      </button>
      <button className='bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-5 py-2 rounded h-10'>
        Sign up
      </button>
    </div>
  </nav>
</header>

    </>
  )
}

export default Header