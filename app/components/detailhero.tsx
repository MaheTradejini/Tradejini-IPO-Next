// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import War from '../../public/assets/images/IPO/WAAREEENER.png';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <Image src={War} alt="Waaree" className="w-full max-w-xs" width={150} height={150} />
        </div>

        {/* Center Column: Waaree details */}
        <div className="flex flex-col items-center justify-center p-6">
          <h2 className="md:text-xl lg:text-2xl text-base font-bold mb-2 text-center sm:text-left">WAAREENER</h2>
          <p className="text-gray-500 mb-4 text-center sm:text-left md:text-base text-sm">Waaree Energies IPO</p>
          
          <div className="flex items-center justify-center sm:justify-start mb-4">
            Status:
            <div className="flex items-center justify-center sm:justify-start ml-2">
              <span className="px-3 py-1 bg-green-100 text-green-500 rounded-full mr-2">
                Open
              </span>
              {/* <span className="px-3 py-1 bg-red-100 text-red-500 rounded-full">
                Closed
              </span> */}
            </div>
          </div>
     
        </div>

        {/* Right Column: Sign-up section */}
        <div className="flex flex-col justify-center items-center sm:items-start p-6">
          <h2 className="md:text-xl text-base font-bold mb-4 text-center sm:text-left">New to Tradejini? Sign-up for free.</h2>
          <div className="flex flex-col md:flex-row items-start w-full gap-3">
            <input
              type="text"
              placeholder="+91 | Enter Mobile Number"
              className="w-[100%] md:w-[80%] p-3 border rounded-lg border-black"
            />
            <button className="px-4 py-6 h-9 bg-[#075D6D] text-sm text-white font-semibold rounded-lg hover:bg-[#038f6b] transition duration-300 inline-flex items-center">
             Continue
            </button>
          </div>
          <span className='lg:text-base text-sm text-left'>Already have an account? <a href="" className='text-blue-600 font-semibold'>Apply now</a></span>
        </div>

    
      </div>
    </div>
  );
};


