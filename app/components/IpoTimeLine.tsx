import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

export default function IpoTimeLine() {
  // Helper function to check if a date has passed
  const isPastDate = (date: string): boolean => {
    const today = new Date();
    const targetDate = new Date(date);
    return today >= targetDate;
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* IPO Timeline Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="md:text-xl text-base font-bold mb-2">IPO Timeline:</h2>
        <p className="text-sm text-gray-600 mb-6">For Guidance Only. Dates may be subject to change.</p>
        <div className="relative">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {[
            { label: 'IPO Offer Start', date: '2024-10-28' },
            { label: 'IPO Offer Ends', date: '2024-10-28' },
            { label: 'Allotment Finalization', date: '2024-11-12' },
            { label: 'Refund Initiation', date: '2024-11-13' },
            { label: 'Share Transfer to Demat', date: '2024-11-14' },
            { label: 'Listing of Shares', date: '2024-11-15' },
            { label: 'Mandate Date', date: '2024-11-16' },
       
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
              <span className={`ml-10 md:ml-12 text-sm font-medium ${isPastDate(event.date) ? 'text-gray-800' : 'text-gray-600'}`}>
                {event.label}
              </span>
              <span className="ml-auto text-sm text-gray-800">{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IPO Issue Size and Utilization Section */}
      <div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
          <h2 className="md:text-xl text-base font-bold mb-4">IPO Issue Size</h2>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-2 md:px-4 py-2 text-left md:text-base text-sm bg-gray-200">Funds Raised in the IPO</th>
                <th className="px-2 md:px-4 py-2 text-right md:text-base text-sm bg-gray-200">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">Overall</td>
                <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">₹4321.44 crores</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">Fresh Issue</td>
                <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">₹3600 crores</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 md:text-sm text-xs">Offer for sale</td>
                <td className="px-2 md:px-4 py-2 text-right md:text-sm text-xs">₹721.44 crores</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="md:text-xl text-base font-bold mb-4">Utilization of Proceeds</h2>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-2 md:px-4 py-2 text-left bg-gray-200 md:text-base text-sm">Purpose</th>
                <th className="px-2 md:px-4 py-2 text-right bg-gray-200 md:text-base text-sm">INR crores (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b md:text-sm text-xs">Establishing a manufacturing facility in Odisha</td>
                <td className="px-2 md:px-4 py-2 border-b text-right md:text-sm text-xs">2775 (77.08%)</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 md:text-sm text-xs">General corporate purposes</td>
                <td className="px-2 md:px-4 py-2 text-right md:text-sm text-xs">825 (22.92%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
