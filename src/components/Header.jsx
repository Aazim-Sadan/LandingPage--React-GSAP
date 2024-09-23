import React, { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className='border-b-[1px] shadow-[0_3px_4px_#0000000a] sticky top-0 bg-white z-50'>
      <nav className='w-[80%] mx-auto h-20 flex items-center justify-between px-12'>
        <div>
          <p className='font-bold text-green-500 text-3xl'>Printify</p>
        </div>

        <ul className='flex items-center gap-10'>
          <li className='text-black hover:text-green-500 active:text-green-600'>Catalog</li>
         
          <li
            className='relative text-black hover:text-green-500 active:text-green-600 cursor-pointer'
            onMouseEnter={() => handleMouseEnter('howItWorks')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              How it works
              <span className="ml-1">▼</span>
            </div>

            {activeDropdown === 'howItWorks' && (
              <ul className="absolute left-0  bg-white shadow-lg rounded-lg py-2 w-64 z-50 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/print-on-demand" className="text-black hover:text-green-500">Print On Demand</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/quality-promise" className="text-black hover:text-green-500">Printify Quality Promise</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/what-to-sell" className="text-black hover:text-green-500">What to Sell</a>
                </li>
              </ul>
            )}
          </li>

          <li className='text-black hover:text-green-500 active:text-green-600'>Pricing</li>
          <li className='text-black hover:text-green-500 active:text-green-600'>Blog</li>

          <li
            className='relative text-black hover:text-green-500 active:text-green-600 cursor-pointer'
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div className='flex items-center'>
              Services
            </div>
            <span className="absolute top-0 right-[-18px] hover:text-green-500 active:text-green-600">▼</span>

            {activeDropdown === 'services' && (
              <ul className="absolute left-0  bg-white shadow-lg rounded-lg py-2 w-64 z-50 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/print-on-demand" className="text-black hover:text-green-500">Merch for Fans</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/quality-promise" className="text-black hover:text-green-500">Merch for eCommerce</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/what-to-sell" className="text-black hover:text-green-500">Grow Your Store</a>
                </li>
              </ul>
            )}
          </li>

          <li
            className='relative text-black hover:text-green-500 active:text-green-600 cursor-pointer'
            onMouseEnter={() => handleMouseEnter('useCases')}
            onMouseLeave={handleMouseLeave}
          >
            <div className='flex items-center'>
              Use-cases
            </div>
            <span className="absolute top-0 right-[-18px] hover:text-green-500 active:text-green-600">▼</span>

            {activeDropdown === 'useCases' && (
              <ul className="absolute left-0  bg-white shadow-lg rounded-lg py-2 w-64 z-50 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/print-on-demand" className="text-black hover:text-green-500">Help Center</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/quality-promise" className="text-black hover:text-green-500">Contacts</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/what-to-sell" className="text-black hover:text-green-500">My Requests</a>
                </li>
              </ul>
            )}
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
  );
};

export default Header;
