import React from 'react'

function SectionFive() {
    return (
        <div className="relative w-[80%] mx-auto h-[150px] my-[180px]  bg-green-100 flex items-center justify-between rounded-lg shadow-xl p-5">

            <div className="ml-8">
                <h2 className="text-xl font-bold text-green-700">
                    Are you a large business looking for custom solutions?
                </h2>
            </div>
            <div className="m-[280px] mt-[238px]">
                <button className="bg-white border-2 border-none absolute z-10 border-gray-400 text-black hover:text-green-500 active:text-green-600 px-[6px] py-2 w-[220px] rounded flex justify-center items-center">
                    Talk to sales
                </button>
            </div>


            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <svg
                    className="absolute right-0 h-full"
                    width="300"
                    height="150"
                    viewBox="0 0 300 150"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M150 0 H300 V150 H100 C50 100 100 0 150 0 Z"
                        fill="#34d399" /* Light green color */
                    />
                    <path
                        d="M300 0 H100 C150 100 150 150 300 150 Z"
                        fill="#10b981" /* Dark green color */
                    />
                </svg>
            </div>
        </div>

    )
}

export default SectionFive