
import Link from "next/link";
import React from "react";

export default function HomeDetailTab() {
  return (
    <>
      <div className="container max-w-7xl mx-auto py-12 px-4 shadow-md rounded-lg">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">IPO Date:</h2>
            <p className="text-gray-700">21st - 23rd Oct 2024</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Price Range</h2>
            <p className="text-gray-700">₹1427 - 1503</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Issue Size:</h2>
            <p className="text-gray-700">600 Cr</p>
          </div>
        </div>

        <div className="mt-6 border-b border-gray-300"></div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Listing Date</h2>
            <p className="text-gray-700">28 Oct 2024</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Min. Amount</h2>
            <p className="text-gray-700">₹12,000</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Min. Lot Size</h2>
            <p className="text-gray-700">32</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center mt-8">
        <Link href="/">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
          View All IPOs
        </button>
        </Link>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Download RHP
        </button>
      </div>
    </>
  );
}
