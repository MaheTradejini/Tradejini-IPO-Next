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
    <div className="container max-w-7xl mx-auto py-12 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* IPO Timeline Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-2">IPO Timeline:</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">For Guidance Only. Dates may be subject to change.</p>
        <div className="relative">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {[
            { label: 'IPO Offer Start', date: '2024-10-28' },
            { label: 'IPO Offer Ends', date: '2024-10-28' },
            { label: 'Allotment Finalization', date: '2024-11-12' },
            { label: 'Refund Initiation', date: '2024-10-28' },
            { label: 'Share Transfer to Demat', date: '2024-10-28' },
            { label: 'Listing of Shares', date: '2024-10-28' },
            { label: 'Mandate Date', date: '2024-10-28' },
          ].map((event, index) => (
            <div key={index} className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute left-4 md:left-5 transform -translate-x-1/2">
                  {isPastDate(event.date) ? (
                    <CheckCircle className="text-green-500" size={24} />
                  ) : (
                    <Circle className="text-gray-500" size={24} />
                  )}
                </div>
              </div>
              <span className={`ml-10 md:ml-12 font-medium ${isPastDate(event.date) ? 'text-gray-800' : 'text-gray-600'}`}>
                {event.label}
              </span>
              <span className="ml-auto text-sm md:text-base text-gray-800">{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IPO Issue Size and Utilization Section */}
      <div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">IPO Issue Size</h2>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-2 md:px-4 py-2 text-left bg-gray-200">Funds Raised in the IPO</th>
                <th className="px-2 md:px-4 py-2 text-right bg-gray-200">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b">Overall</td>
                <td className="px-2 md:px-4 py-2 border-b text-right">₹4321.44 crores</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b">Fresh Issue</td>
                <td className="px-2 md:px-4 py-2 border-b text-right">₹3600 crores</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2">Offer for sale</td>
                <td className="px-2 md:px-4 py-2 text-right">₹721.44 crores</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Utilization of Proceeds</h2>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-2 md:px-4 py-2 text-left bg-gray-200">Purpose</th>
                <th className="px-2 md:px-4 py-2 text-right bg-gray-200">INR crores (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 md:px-4 py-2 border-b">Establishing a manufacturing facility in Odisha</td>
                <td className="px-2 md:px-4 py-2 border-b text-right">2775 (77.08%)</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2">General corporate purposes</td>
                <td className="px-2 md:px-4 py-2 text-right">825 (22.92%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
