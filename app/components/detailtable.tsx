import Link from "next/link";
import React from "react";

export default function HomeDetailTab() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 shadow-md rounded-lg">
        <h2 className="md:text-xl text-base font-bold  mb-6 text-left">
          IPO Issue Details
        </h2>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-8 gap-6">
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">IPO Date:</h2>
            <p className="font-bold">21st - 23rd Oct 2024</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">
              Price Range
            </h2>
            <p className="font-bold">₹1427 - 1503</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">
              Issue Size:
            </h2>
            <p className="font-bold">600 Cr</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">
              Listing Date
            </h2>
            <p className="font-bold">28 Oct 2024</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">
              Min. Amount
            </h2>
            <p className="font-bold">₹12,000</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">
              Min. Lot Size
            </h2>
            <p className="font-bold">32</p>
          </div>
        </div>

        {/* <div className="mt-6 border-b border-gray-300"></div> */}

        {/* <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">Listing Date</h2>
            <p className="font-bold">28 Oct 2024</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">Min. Amount</h2>
            <p className="font-bold">₹12,000</p>
          </div>
          <div className="col-span-1">
            <h2 className="md:text-sm text-xs text-gray-700 mb-4">Min. Lot Size</h2>
            <p className="font-bold">32</p>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mt-8">
        <Link href="/">
          <button className="bg-gray-200 md:text-base text-sm hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
            View All IPOs
          </button>
        </Link>
        <button className="bg-green-500 md:text-base text-sm hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Download RHP
        </button>
      </div>
    </>
  );
}
