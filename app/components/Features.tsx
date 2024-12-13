"use client";

import Image from "next/image";

const features = [
  {
    title: "Retail Investors:",
    description: "Individuals who wish to invest in IPOs.",
    image: "/assets/images/Invest/retail.png",
    bgColor: "bg-red-50",
  },
  {
    title: "Qualified Institutional Buyers (QIBs):",
    description: "Typically institutional investors like banks, insurance companies, etc.",
    image: "/assets/images/Invest/qulaified.png",
    bgColor: "bg-yellow-50",
  },
  {
    title: "High Net-Worth Individuals (HNIs):",
    description: "Investors with a high level of wealth who may apply for larger amounts of shares.",
    image: "/assets/images/Invest/high.png",
    bgColor: "bg-purple-50",
  }
];

const features1 = [
    {
      title: "Minimum Age:",
      description: "Investors must be at least 18 years old.",
      image: "/assets/images/Invest/age.png",
      bgColor: "bg-blue-50",
    },
    {
      title: "Bank Account:",
      description: "A functional bank account with sufficient funds and internet banking capabilities.",
      image: "/assets/images/Invest/bank.png",
      bgColor: "bg-green-50",
    },
    {
      title: "Demat Account:",
      description: "A Demat account with a registered Depository Participant (DP) to hold IPO shares.",
      image: "/assets/images/Invest/demat.png",
      bgColor: "bg-orange-50",
    }
  ];

const features2 = [
    {
      title: "Trading Account:",
      description: "Trading account is necessary to sell the shares post-listing.",
      image: "/assets/images/Invest/trade.png",
      bgColor: "bg-gray-50",
    },
    {
      title: "PAN Card:",
      description: "A valid PAN is required for identification.",
      image: "/assets/images/Invest/pan1.png",
      bgColor: "bg-teal-50",
    },
  ];

export default function SavingsFeatures() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="lg:text-3xl text-2xl font-bold text-black mb-4 text-left">
          Who Can <span className="text-[#1E8C51]">Apply for an IPO </span> in
          India? | Who can{" "}
          <span className="text-[#1E8C51]">participate in IPO?</span>
        </h2>
        <p className="text-black lg:text-base text-sm leading-relaxed mb-8">
          To participate in an IPO in India, investors must meet certain
          eligibility criteria set by SEBI. The following types of investors can
          apply for an IPO:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 cursor-default">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="h-48 relative mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="lg:text-3xl text-2xl font-bold text-black mb-8 mt-8 text-left">
        Key requirements for
        {" "}<span className="text-[#1E8C51]">investors</span> include
        </h2>
        {/* <p className="text-black lg:text-base text-sm leading-relaxed mb-8 mt-8">
          Key requirements for investors include:
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 cursor-default">
          {features1.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="h-48 relative mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-default">
        {features2.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="h-48 relative mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}