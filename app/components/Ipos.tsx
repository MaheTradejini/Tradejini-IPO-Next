"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ipo1 from "../../public/assets/images/ipo1.png";
import ApplyModal from "./ApplyModal";
import { ipoStaticContent } from "../data/ipoStaticContent";

// Define interfaces for type safety
interface IPOData {
  id: string;
  symbol: string;
  issue?: string;
  price?: string;
  logo?: string;
  openclose?: string;
  name: string;
  biddingStartDate: string;
  biddingEndDate: string;
  minBidQuantity: number; // Changed to number
  subType: string;
  lotSize: number;
  minPrice: number; // Changed to number
  maxPrice: number; // Changed to number
  issueSize: number; // Changed to number
  isin: string; // Added
  exchange: string; // Added
  status: string; // Added
  cutOffPrice: number; // Added
  dailyStartTime: string; // Added
  dailyEndTime: string; // Added
  tickSize: number; // Added
  dateInfo: {
    // Added
    startDt: string;
    endDt: string;
    allotmentDt: string;
    refundDt: string;
    dematTransferDt: string;
    listingDt: string;
    mandateEndDt: string;
  };
  investors: Array<{
    // Added
    type: string;
    isApplied: boolean;
    categories: Array<{
      hasCutoff: boolean;
      maxUpiLimit: number;
      minVal: number;
      maxVal: number;
      discountPerShare: number;
      name: string;
    }>;
  }>;
}

interface IPOState {
  Upcoming: IPOData[];
  closed: IPOData[];
}

type TabType = "Open & Upcoming" | "Closed";

export default function IpoTabs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("Open & Upcoming");
  const [displayedRecords, setDisplayedRecords] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ipoData, setIpoData] = useState<IPOState>({
    Upcoming: [],
    closed: [],
  });

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const status = activeTab === "Open & Upcoming" ? "open" : "closed";
      const response = await fetch(`/api/ipo?status=${status}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const formattedData = data.d.map((ipo: IPOData) => ({
        ...ipo,
        issue: formatCurrency(ipo.issueSize.toString()),
        price:
          ipo.minPrice === ipo.maxPrice
            ? `₹ ${ipo.minPrice}`
            : `₹ ${ipo.minPrice} - ₹ ${ipo.maxPrice}`,
        openclose: `${ipo.biddingStartDate} - ${ipo.biddingEndDate}`,
      }));

      setIpoData((prev) => ({
        ...prev,
        [activeTab === "Open & Upcoming" ? "Upcoming" : "closed"]:
          formattedData,
      }));
    } catch (err) {
      setError("Failed to fetch IPO data. Please try again later.");
      console.error("Error fetching IPO data:", err);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Helper functions for data formatting
  const formatCurrency = (amount: string): string => {
    const value = parseFloat(amount);
    if (value >= 10000000) {
      return `₹ ${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(value / 10000000).toFixed(2)} Cr`;
  };

  const tabMapping = {
    "Open & Upcoming": "Upcoming",
    Closed: "closed",
  } as const;

  const renderLoadingState = () => (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#38B990]"></div>
    </div>
  );

  const renderErrorState = () => (
    <div className="text-center py-8 text-red-600">
      {error}
      <button
        onClick={() => {
          setError(null);
          fetchData();
        }}
        className="ml-4 text-[#38B990] underline"
      >
        Try again
      </button>
    </div>
  );

  const renderTable = (ipoType: keyof IPOState) => {
    if (isLoading) return renderLoadingState();
    if (error) return renderErrorState();
    if (!ipoData[ipoType].length) {
      return (
        <div className="text-center py-8 text-gray-600">
          No {ipoType.toLowerCase()} IPOs available at the moment.
        </div>
      );
    }

    return (
      <div className="">
        {/* Desktop Table View */}
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
                Lot Size
              </th>
              <th className="px-6 py-3 bg-[#f5fbfb] text-left text-sm text-black font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ipoData[ipoType].slice(0, displayedRecords).map((ipo, index) => (
              <tr
                key={ipo.id}
                className={`transition duration-300 ease-in-out transform text-sm ${
                  index % 2 === 0 ? "bg-[#FAFAF9]" : "bg-[#F5FAEF]"
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <Link href={`/details/${formatUrlName(ipo.name)}`}>
                    <Image
                      src={
                        ipoStaticContent[
                          ipo.name as keyof typeof ipoStaticContent
                        ]?.src || ipo1
                      }
                      alt={`${ipo.name} Logo`}
                      width={50}
                      height={50}
                      className="rounded-full max-w-96"
                    />
                    </Link>
                 

                  <div className="ml-4 flex flex-col md:mr-6">
                    <Link href={`/details/${formatUrlName(ipo.name)}`}>
                      <span
                        className="text-sm font-medium text-gray-900 truncate hover:text-[#38B990]"
                        title={ipo.symbol}
                      >
                        {ipo.symbol}{" "}
                        {ipo.exchange && (
                          <span className="px-1 py-0.2  text-[#38B990] bg-white border border-[#38B990] text-xs font-medium">
                            {ipo.exchange}
                          </span>
                        )}{" "}
                        {ipo.subType && (
                          <span className="px-1 py-0.2  text-[#38B990] bg-white border border-[#38B990] text-xs font-medium">
                            {ipo.subType}
                          </span>
                        )}
                      </span>
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs font-medium text-gray-900 truncate">
                        {ipo.name}
                      </span>
                    </div>
                  </div>
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
                  {ipo.minBidQuantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {ipo.lotSize}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/details/${formatUrlName(ipo.name)}`}>
                    <button className="w-28 px-4 py-2 bg-white text-[#38B990] rounded-lg transition-all duration-300 overflow-hidden relative group cursor-pointer before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#38B990]">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#38B990] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                      <span className="relative z-10 group-hover:text-white">
                        View More
                      </span>
                    </button>
                  </Link>

                  {ipoType === "Upcoming" && (
                    <button
                      disabled={ipo.status !== "active"}
                      onClick={() =>
                        ipo.status === "active" && setIsModalOpen(true)
                      }
                      className={`ml-2 w-28 px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden relative group cursor-pointer ${
                        ipo.status === "active"
                          ? "bg-[#38B990] text-white"
                          : "bg-[#E8F5F0] text-[#38B990] cursor-not-allowed"
                      }`}
                    >
                      {ipo.status === "active" ? (
                        <>Apply</>
                      ) : (
                        <span>Upcoming</span>
                      )}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {ipoData[ipoType].slice(0, displayedRecords).map((ipo) => (
            <div
              key={ipo.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4 transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              <div className="flex items-center mb-2">
                <Image
                  src={
                    ipoStaticContent[ipo.name as keyof typeof ipoStaticContent]
                      ?.src || ipo1
                  }
                  alt={`${ipo.name} Logo`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="ml-4 font-medium">
                  {ipo.name}
                  {ipo.exchange && (
                    <span className="px-2 py-1 ml-2 rounded-full text-[#38B990] bg-white border border-[#38B990] text-xs font-medium">
                      {ipo.exchange}
                    </span>
                  )}
                  {ipo.subType && (
                    <span className="px-2 py-1 ml-2 rounded-full text-[#38B990] bg-white border border-[#38B990] text-xs font-medium">
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
                  <div className="text-gray-900">{ipo.minBidQuantity}</div>
                </div>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
                <div>
                  <div className="text-gray-900 font-medium">Lot Size</div>
                  <div className="text-gray-900">{ipo.lotSize}</div>
                </div>
                <div className="flex items-end">
                  <Link href={`/details/${formatUrlName(ipo.name)}`}>
                    <button className="px-4 py-2 bg-white text-[#38B990] rounded-lg transition-all duration-300 overflow-hidden relative group cursor-pointer before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#38B990]">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#38B990] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                      <span className="relative z-10 group-hover:text-white">
                        View More
                      </span>
                    </button>
                  </Link>

                  {ipoType === "Upcoming" && (
                    <button
                      disabled={ipo.status !== "active"}
                      onClick={() =>
                        ipo.status === "active" && setIsModalOpen(true)
                      }
                      className={`ml-2 px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden relative group cursor-pointer ${
                        ipo.status === "active"
                          ? "bg-[#38B990] text-white"
                          : "bg-[#E8F5F0] text-[#38B990] cursor-not-allowed"
                      }`}
                    >
                      {ipo.status === "active" ? (
                        <>Apply</>
                      ) : (
                        <span>Upcoming</span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {ipoData[ipoType].length > displayedRecords && (
          <div className="flex justify-center mt-4">
            <button
              className="px-6 py-3 relative inline-flex items-center justify-center overflow-hidden font-bold text-white rounded-lg bg-sliding-gradient bg-300% animate-slideGradient"
              onClick={() => setDisplayedRecords(displayedRecords + 5)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    );
  };

  // const getIpoStatus = (startDate: string, endDate: string): "active" | "upcoming" => {
  //   const currentDate = new Date();

  //   // Convert dates like "13th Nov" to proper Date objects
  //   const parseDate = (dateStr: string) => {
  //     const [day, month] = dateStr.split(" ");
  //     const year = new Date().getFullYear(); // Current year
  //     // Remove suffixes like 'th', 'st', 'nd', 'rd'
  //     const cleanDay = day.replace(/(st|nd|rd|th)/, '');
  //     return new Date(`${month} ${cleanDay} ${year}`);
  //   };

  //   // Parse individual dates
  //   const biddingStart = parseDate(startDate);
  //   const biddingEnd = parseDate(endDate);

  //   if (currentDate >= biddingStart && currentDate <= biddingEnd) {
  //     return "active";
  //   }
  //   return "upcoming";
  // };

  const formatUrlName = (name: string) => {
    return `${name.replace(/\s+/g, "-")}-ipo`;
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="lg:text-3xl text-2xl font-bold text-center mb-6">
          Apply for Ongoing and Upcoming IPOs{" "}
          <span className="text-emerald-600">Easily with Tradejini</span>
        </h1>
        <div className="flex justify-center mb-4">
          {["Open & Upcoming", "Closed"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeTab === tab
                  ? "bg-[#cbfbe7] text-[#000] font-medium"
                  : "bg-[#faf9f6] font-medium text-[#5F5F5F]"
              }`}
              onClick={() => {
                setActiveTab(tab as TabType);
                setDisplayedRecords(5);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTable(tabMapping[activeTab])}
      </div>
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
