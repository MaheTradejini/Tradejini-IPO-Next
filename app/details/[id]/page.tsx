"use client";

// import AboutCompany from "../../components/aboutCompany";
import Financials from "../../components/chart";
// import HomePage from "../components/detailhero";
// import HomeDetailTab from "../components/detailtable";
// import IpoTimeLine from "../../components/IpoTimeLine";
// import PointSection from "../../components/PointSection";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Circle } from "lucide-react";
import ProsConsCard from "../../components/ProsConsCard";
import ipoimage from "../../../public/assets/images/IPO/ipo-image.png";
import { ipoStaticContent } from "@/app/data/ipoStaticContent";

interface IPODetails {
  id: string;
  name: string;
  symbol: string;
  logo?: string;
  exchange: string;
  subType: string;
  issueSize: number;
  minPrice: number;
  maxPrice: number;
  status: string;
  lotSize: number;
  biddingStartDate: string;
  biddingEndDate: string;
  minBidQuantity: number;
  dateInfo: {
    startDt: string;
    endDt: string;
    allotmentDt: string;
    refundDt: string;
    dematTransferDt: string;
    listingDt: string;
    mandateEndDt: string;
  };
  declarationText: string;
}

export default function Home() {
  const params = useParams();
  const ipoName = (params.id as string).replace(/-ipo$/, "").replace(/-/g, " ");
  const [ipoDetails, setIpoDetails] = useState<IPODetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  
  type IPOStaticContentKeys = keyof typeof ipoStaticContent;


  useEffect(() => {
    if (!ipoName) return;
    const fetchIPODetails = async () => {
      
      try {
        setIsLoading(true);

        // Try open IPOs first
        const openResponse = await fetch("/api/ipo?status=open");
        if (!openResponse.ok) {
          throw new Error("Failed to fetch open IPO details");
        }
        const openData = await openResponse.json();

        let specificIpo = openData.d.find(
          (ipo: IPODetails) => ipo.name.toLowerCase() === ipoName.toLowerCase()
        );

        // If not found in open IPOs, try closed IPOs
        if (!specificIpo) {
          const closedResponse = await fetch("/api/ipo?status=closed");
          const closedData = await closedResponse.json();

          specificIpo = closedData.d.find(
            (ipo: IPODetails) =>
              ipo.name.toLowerCase() === ipoName.toLowerCase()
          );
        }

        if (!specificIpo) {
          throw new Error("IPO not found");
        }

        setIpoDetails(specificIpo);
        setStatus(specificIpo.status.toLowerCase());
      } catch (err) {
        setError("Failed to load IPO details");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIPODetails();
  }, [ipoName]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#38B990]"></div>
      </div>
    );
  }

  if (error || !ipoDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error || "IPO details not found"}
      </div>
    );
  }

  const ipodetails = ipoStaticContent[ipoName as IPOStaticContentKeys];

  if (!ipodetails) {
    return <div className="text-center font-bold mt-6 text-lg">IPO not found</div>;
  }
  const { about, pros = [], cons = [] } = ipodetails;

  // Add this helper function at the top of your file
  const formatCurrency = (value: string): string => {
    const amount = parseFloat(value);
    if (amount >= 10000000) {
      // Convert to Crores if >= 1 Crore
      return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const isPastDate = (dateString: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison

    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-based in JS
    date.setHours(0, 0, 0, 0);

    return date < today;
  };

  return (
    <>
      <div className="max-w-full max-w-7xl mx-auto bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex justify-center">
              <Image
                src={ipoimage}
                alt={`${ipoDetails.name} Logo`}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="text-center md:text-left md:col-span-2">
              <h2 className="text-xl font-semibold"> {ipoDetails.name}</h2>
              <p className="text-xl font-medium">{ipoDetails.symbol}</p>
              <p className="text-gray-600 mt-2">
                Status:{" "}
                <span
                  className={`px-3 py-1 rounded-full mr-2 ${
                    status === "active"
                      ? "bg-green-100 text-green-500"
                      : status === "upcoming"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {status === "active"
                    ? "active"
                    : status === "upcoming"
                    ? "Upcoming"
                    : "Closed"}
                </span>
              </p>
            </div>
            <div>
              <Link href="https://ekyc.tradejini.com/#/onboarding" target="_blank">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 overflow-hidden bg-sliding-gradient bg-300% animate-slideGradient">
                Apply Now
              </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-gray-300 pt-4 mt-8">
            <div>
              <p className="text-gray-500">Exchange</p>
              <p className="font-semibold">NSE</p>
            </div>
            <div>
              <p className="text-gray-500">Min. Qty</p>
              <p className="font-semibold">34</p>
            </div>
            <div>
              <p className="text-gray-500">Min. Bid Amount</p>
              <p className="font-semibold">
                {" "}
                {`₹ ${(ipoDetails.minPrice * ipoDetails.lotSize).toLocaleString(
                  "en-IN"
                )}`}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Max. Investment</p>
              <p className="font-semibold">₹5,00,000</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto shadow-md rounded-lg bg-white p-6">
          <h2 className="md:text-xl text-base font-bold mb-8 text-center">
            IPO Issue Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="col-span-1">
              <h2 className="md:text-sm text-xs text-gray-700 mb-4">
                IPO Date:
              </h2>
              <p className="font-bold">
                {`${ipoDetails.biddingStartDate} - ${ipoDetails.biddingEndDate}`}
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="md:text-sm text-xs text-gray-700 mb-4">
                Price Range
              </h2>
              <p className="font-bold">
                {ipoDetails.minPrice === ipoDetails.maxPrice
                  ? `₹ ${ipoDetails.minPrice}`
                  : `₹ ${ipoDetails.minPrice} - ₹ ${ipoDetails.maxPrice}`}
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="md:text-sm text-xs text-gray-700 mb-4">
                Issue Size:
              </h2>
              <p className="font-bold">
                {formatCurrency(ipoDetails.issueSize.toString())}
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="md:text-sm text-xs text-gray-700 mb-4">
                Listing Date
              </h2>
              <p className="font-bold">
                {formatDate(ipoDetails.dateInfo.listingDt)}
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="md:text-sm text-xs text-gray-700 mb-4">
                Min. Lot Size
              </h2>
              <p className="font-bold">{ipoDetails.lotSize}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center mt-8">
          <Link href="/">
            <button className="bg-gray-200 md:text-base text-sm hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
              View All IPOs
            </button>
          </Link>
          <button className="bg-green-500 md:text-base text-sm hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Download RHP
          </button>
        </div>

        <Financials />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* IPO Timeline Section */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md bg-white">
            <h2 className="md:text-xl text-base font-bold mb-2">
              IPO Timeline:
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              For Guidance Only. Dates may be subject to change.
            </p>
            <div className="relative">
              <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              {[
                {
                  label: "IPO Offer Start",
                  date: formatDate(ipoDetails.dateInfo.startDt),
                },
                {
                  label: "IPO Offer Ends",
                  date: formatDate(ipoDetails.dateInfo.endDt),
                },
                {
                  label: "Allotment Finalization",
                  date: formatDate(ipoDetails.dateInfo.allotmentDt),
                },
                {
                  label: "Refund Initiation",
                  date: formatDate(ipoDetails.dateInfo.refundDt),
                },
                {
                  label: "Share Transfer to Demat",
                  date: formatDate(ipoDetails.dateInfo.dematTransferDt),
                },
                {
                  label: "Listing of Shares",
                  date: formatDate(ipoDetails.dateInfo.listingDt),
                },
                {
                  label: "Mandate Date",
                  date: formatDate(ipoDetails.dateInfo.mandateEndDt),
                },
              ].map((event, index) => (
                <div key={index} className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute left-4 md:left-5 transform -translate-x-1/2 -translate-y-1/2">
                      {isPastDate(event.date) ? (
                        <CheckCircle className="text-green-500" size={24} />
                      ) : (
                        <Circle className="text-gray-500" size={24} />
                      )}
                    </div>
                  </div>
                  <span
                    className={`ml-10 md:ml-12 text-sm font-medium ${
                      isPastDate(event.date) ? "text-gray-800" : "text-gray-600"
                    }`}
                  >
                    {event.label}
                  </span>
                  <span className="ml-auto text-sm text-gray-800">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
            {/* {ipoDetails.declarationText && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Note: {ipoDetails.declarationText}
                </p>
              </div>
            )} */}
          </div>

          {/* IPO Issue Size and Utilization Section */}
          <div>
            {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
              <h2 className="md:text-xl text-base font-bold mb-4">
                IPO Issue Size
              </h2>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="px-2 md:px-4 py-2 text-left md:text-base text-sm bg-gray-200">
                      Funds Raised in the IPO
                    </th>
                    <th className="px-2 md:px-4 py-2 text-right md:text-base text-sm bg-gray-200">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">
                      Overall
                    </td>
                    <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">
                      ₹4321.44 crores
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">
                      Fresh Issue
                    </td>
                    <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">
                      ₹3600 crores
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 md:text-sm text-xs">
                      Offer for sale
                    </td>
                    <td className="px-2 md:px-4 py-2 text-right md:text-sm text-xs">
                      ₹721.44 crores
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="md:text-xl text-base font-bold mb-4">
                Utilization of Proceeds
              </h2>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="px-2 md:px-4 py-2 text-left bg-gray-200 md:text-base text-sm">
                      Purpose
                    </th>
                    <th className="px-2 md:px-4 py-2 text-right bg-gray-200 md:text-base text-sm">
                      INR crores (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">
                      Establishing a manufacturing facility in Odisha
                    </td>
                    <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">
                      2775 (77.08%)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 md:text-sm text-xs">
                      General corporate purposes
                    </td>
                    <td className="px-2 md:px-4 py-2 text-right md:text-sm text-xs">
                      825 (22.92%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <div className="bg-white p-6 md:p-8 rounded-lg md:h-[99%] shadow-md md:text-base text-sm">
              <h2 className="md:text-xl text-base font-bold mb-4">
                About the Company
              </h2>
              <p className="text-gray-700">{about}</p>
            </div>
          </div>
        </div>
        {/* <HomePage /> */}

        {/* <HomeDetailTab /> */}

        {/* <IpoTimeLine /> */}

        {/* <AboutCompany /> */}

        {/* <PointSection /> */}

        <ProsConsCard pros={pros} cons={cons} />
      </div>
    </>
  );
}
