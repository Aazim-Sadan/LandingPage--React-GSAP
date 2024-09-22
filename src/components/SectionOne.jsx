import React from 'react';
import img from '../assets/img1.png'

const SectionOne = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      <div className="md:w-1/2 ml-10">
        <h1 className="flex text-left text-5xl font-bold text-gray-900 mb-4">Create and sell custom products</h1>
        <ul className="mb-6 my-7 space-y-2 text-lg">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            100% Free to use
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            900+ High-Quality Products
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Largest global print network
          </li>
        </ul>

        <div className="flex space-x-4 mt-12">
          <button className="bg-green-500  hover:bg-green-600 active:bg-green-700 text-white px-5 py-3 rounded-l text-lg">Start for free</button>
          <button className="flex items-center border hover:text-green-500 active:text-green-600 border-gray-300 px-5 py-3 rounded-l text-lg">
            <span>How it works?</span>
            <span className="ml-2">▶️</span>
          </button>
        </div>

        <p className="text-green-600 mt-4 flex">Trusted by over 8M sellers around the world</p>
      </div>


      <div className="md:w-1/2 mt-10 md:mt-0 mr-[120px] flex items-center justify-center relative">
       <div className='border-[1px] py-9 px-7 rounded-lg '>
        <img
          className="w-[280px] h-auto z-10"
          src={`${img}`} 
        />
        </div>
        <div className="absolute -bottom-5 right-5">
          <img
            className="w-40 h-auto"
            src="https://example.com/person-image" 
            alt="Person pointing"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
