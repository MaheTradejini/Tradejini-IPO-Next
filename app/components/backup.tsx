"use client";

import { useState } from "react";
import Image from "next/image";
import ipo1 from "../../public/assets/images/ipo1.png";

const data = {
  Upcoming: [
    {
      company: "WAAREEENER",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "DBEIL",
      sme : "SME",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
  ],
  closed: [
    {
      company: "DBEIL",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
  ],
};

// Mapping between tab labels and data keys
const tabMapping = {
  "Open & Upcoming": "Upcoming",
  Closed: "closed",
};

export default function IpoTabs() {
  const [activeTab, setActiveTab] = useState<"Open & Upcoming" | "Closed">(
    "Open & Upcoming"
  );

  const renderTable = (ipoType: keyof typeof data) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg hidden md:table">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Companies
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Open-Close
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Issue Size
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Price Range
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Min Bid
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Min Qnty
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-md text-black font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data[ipoType].map((ipo, index) => (
              <tr
                key={index}
                className={`transition duration-300 ease-in-out transform ${
                  index % 2 === 0 ? "bg-[#FAFAF9]" : "bg-[#F5FAEF]"
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <Image
                    src={ipo1}
                    alt="Company Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="ml-4 text-gray-900">{ipo.company}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.openclose}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.issue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.minBid}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.minQty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-4 py-2 bg-white text-[#38B990] rounded-lg hover:bg-white hover:text-[#38B990] transition duration-300">
                    View More
                  </button>
                  {ipoType === "Upcoming" && (
                    <button className="ml-2 px-4 py-2 bg-[#38B990] text-white rounded-lg hover:bg-[#38B990] hover:text-white transition duration-300">
                      Apply
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {data[ipoType].map((ipo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              <div className="flex items-center mb-2">
                <Image
                  src={ipo1}
                  alt="Company Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="ml-4 text-gray-900 font-bold">
                  {ipo.company}
                </span>
              </div>
              <div className="text-gray-900">Min Amt: {ipo.openclose}</div>
              <div className="text-gray-900">IPO Date: {ipo.issue}</div>
              <div className="text-gray-900">IPO Date: {ipo.price}</div>
              <div className="text-gray-900">IPO Date: {ipo.minBid}</div>
              <div className="text-gray-900">IPO Date: {ipo.minQty}</div>
              
              <div className="mt-2">
                <button className="px-4 py-2 bg-white text-[#38B990] rounded-lg transition duration-300">
                  View More
                </button>
                {ipoType === "Upcoming" && (
                  <button className="ml-2 px-4 py-2 bg-[#38B990] text-white  rounded-lg hover:bg-green-600 transition duration-300">
                    Apply
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
       
        <div className="flex justify-center mb-4">
          {["Open & Upcoming", "Closed"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeTab === tab
                  ? "bg-[#9BE5F2] text-[#005B6C] font-bold"
                  : "bg-[#BEBEBE] font-bold text-[#5F5F5F]"
              }`}
              onClick={() => setActiveTab(tab as "Open & Upcoming" | "Closed")}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTable(tabMapping[activeTab])}
      </div>
    </section>
  );
}
