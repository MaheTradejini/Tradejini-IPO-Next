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
      sme: true,
    },
    {
      company: "DBEIL",
      sme: true,
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "IPO3",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "IPO4",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "IPO5",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "IPO6",
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
      sme: true,
    },
    {
      company: "IPO7",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "IPO8",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
    },
    {
      company: "DBEIL",
      openclose: "21st - 23rd Oct 2024",
      issue: "600 Cr",
      price: "₹1427 - 1503",
      minBid: "₹12,000",
      minQty: "800",
      sme: true,
    },
  ],
};

// Mapping between tab labels and data keys
const tabMapping: { [key in "Open & Upcoming" | "Closed"]: "Upcoming" | "closed" } = {
  "Open & Upcoming": "Upcoming",
  Closed: "closed",
};

export default function IpoTabs() {
  const [activeTab, setActiveTab] = useState<"Open & Upcoming" | "Closed">(
    "Open & Upcoming"
  );
  const [displayedRecords, setDisplayedRecords] = useState(3);

  const renderTable = (ipoType: keyof typeof data) => {
    return (
      <div className="overflow-x-auto">
      
        <table className="min-w-full bg-white rounded-lg shadow-lg hidden md:table">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Companies
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Open-Close
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Issue Size
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Price Range
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Min Bid
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Min Qnty
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data[ipoType].slice(0, displayedRecords).map((ipo, index) => (
              <tr
                key={index}
                className={`transition duration-300 ease-in-out transform text-sm ${
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
                  <span className="ml-4 text-base text-gray-900">
                    {ipo.company}
                    {ipo.sme && (
                      <span className="px-2 py-1 ml-2 rounded-full text-[#38B990] bg-white border border-[#38B990] text-sm font-medium">
                        SME
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
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
                  <button className="px-4 py-2 bg-white text-[#38B990] rounded-lg hover:bg-white hover:text-[#38B990] border border-[#38B990] transition duration-300">
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

        {/* Load More Button (Desktop) */}
        <div className="flex justify-center text-center mt-4 hidden md:block">
          {data[ipoType].length > displayedRecords && (
            <button
              className="px-6 py-3 bg-[#38B990] text-white rounded-lg hover:bg-[#38B990] hover:text-white transition duration-300"
              onClick={() => setDisplayedRecords(displayedRecords + 3)}
            >
              Load More
            </button>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {data[ipoType].slice(0, displayedRecords).map((ipo, index) => (
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
                  {ipo.sme && (
                    <span className="px-2 py-1 ml-2 rounded-full text-[#38B990] bg-white border border-[#38B990] text-sm font-medium">
                      SME
                    </span>
                  )}
                </span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                <div>
                  <div className="text-gray-900 font-medium">Open-Close</div>
                  <div className="text-gray-900">{ipo.openclose}</div>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Issue Size</div>
                  <div className="text-gray-900">{ipo.issue}</div>
                </div>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                <div>
                  <div className="text-gray-900 font-medium">Price Range</div>
                  <div className="text-gray-900">{ipo.price}</div>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Min Bid</div>
                  <div className="text-gray-900">{ipo.minBid}</div>
                </div>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                <div>
                  <div className="text-gray-900 font-medium">Min Qty</div>
                  <div className="text-gray-900">{ipo.minQty}</div>
                </div>
                <div className="flex items-end">
                  <button className="px-4 py-2 bg-white text-[#38B990] border border-[#38B990] rounded-lg transition duration-300">
                    View More
                  </button>
                  {ipoType === "Upcoming" && (
                    <button className="ml-2 px-4 py-2 bg-[#38B990] text-white rounded-lg hover:bg-green-600 transition duration-300">
                      Apply
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (Mobile) */}
        <div className="flex justify-center mt-4 md:hidden">
          {data[ipoType].length > displayedRecords && (
            <button
              className="px-6 py-3 bg-[#38B990] text-white text-sm rounded-lg hover:bg-[#38B990] hover:text-white transition duration-300"
              onClick={() => setDisplayedRecords(displayedRecords + 3)}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
      <h1 className="lg:text-3xl text-2xl font-bold text-center mb-6">
      Apply for Ongoing and Upcoming IPOs <span className="text-emerald-600">Easily with Tradejini</span>
      </h1>
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
        { renderTable(tabMapping[activeTab] as "Upcoming" | "closed") }
      </div>
    </section>
  );
}