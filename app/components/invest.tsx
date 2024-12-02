"use client";

import Image from "next/image";
import Image1 from "../../public/assets/images/Invest/1.png";
import Image2 from "../../public/assets/images/Invest/2.png";
import Image3 from "../../public/assets/images/Invest/3.png";
import Image4 from "../../public/assets/images/Invest/4.png";
import Image5 from "../../public/assets/images/Invest/5.png";
import Image6 from "../../public/assets/images/Invest/6.png";
import Image7 from "../../public/assets/images/Invest/7.png";
import Image8 from "../../public/assets/images/Invest/8.png";

const data = [
  {
    image: Image1,
    title: "Retail Investors:",
    description: "Individuals who wish to invest in IPOs.",
  },
  {
    image: Image2,
    title: "Qualified Institutional Buyers (QIBs):",
    description:
      "Typically institutional investors like banks, insurance companies, etc.",
  },
  {
    image: Image3,
    title: "High Net-Worth Individuals (HNIs):",
    description:
      "Investors with a high level of wealth who may apply for larger amounts of shares.",
  },
];

const data1 = [
  {
    image: Image8,
    title: "Minimum Age:",
    description: "Investors must be at least 18 years old.",
  },
  {
    image: Image4,
    title: "Bank Account:",
    description:
      "A functional bank account with sufficient funds and internet banking capabilities.",
  },
  {
    image: Image5,
    title: "Demat Account:",
    description:
      "A Demat account with a registered Depository Participant (DP) to hold IPO shares.",
  },

  {
    image: Image6,
    title: "Trading Account:",
    description:
      "Trading account is necessary to sell the shares post-listing.",
  },

  {
    image: Image7,
    title: "PAN Card:",
    description: "A valid PAN is required for identification.",
  },
];

export default function InvestIpo() {
  return (
    <section className="py-12">
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

        {/* Render each entry from data array */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start mb-8"
          >
            {/* Left Column - Image */}
            <div className="w-1/4 md:w-1/6 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg w-16 md:w-20"
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-3/4 md:w-5/6 flex flex-col">
              <h3 className="lg:text-xl text-md font-semibold text-[#1E8C51] mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-black lg:text-base text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        <p className="text-black lg:text-base text-sm leading-relaxed mb-8">
          Key requirements for investors include:
        </p>

        {data1.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start mb-8"
          >
            {/* Left Column - Image */}
            <div className="w-1/4 md:w-1/6 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg w-16 md:w-20"
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-3/4 md:w-5/6 flex flex-col">
              <h3 className="lg:text-xl text-md font-semibold text-[#1E8C51] mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-black lg:text-base text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <p className="text-black lg:text-base text-sm leading-relaxed mb-8">
          Additionally, investors must ensure their bank account is linked with
          the Demat account and has UPI and ASBA facilities enabled, making the
          IPO application process seamless.
        </p>
      </div>
    </section>
  );
}
