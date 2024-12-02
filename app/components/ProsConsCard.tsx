"use client";


interface ProsConsCardProps {
  pros: string[];
  cons: string[];
}

export default function ProsConsCard({ pros, cons }: ProsConsCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4 rounded-lg shadow-md bg-white">
      {/* Pros Card */}
      <div className="bg-white rounded-lg p-6 border border-[#7de8ca]">
        <h2 className="text-xl font-bold mb-4 text-gray-800">PROS</h2>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3"></span>
              <span className="text-gray-600">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Card */}
      <div className="bg-white rounded-lg p-6 border border-[#f3b4b4]">
        <h2 className="text-xl font-bold mb-4 text-gray-800">CONS</h2>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3"></span>
              <span className="text-gray-600">{con}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Machine Generated Note */}
      {/* <div className="md:col-span-2 flex items-center gap-2 text-sm text-gray-500 mt-2">
        <span>* The pros and cons are machine generated.</span>
        <Info size={16} className="text-gray-400" />
      </div> */}
    </div>
  );
}