"use client";

import Image from 'next/image';
import Image1 from '../../public/assets/images/Invest/banker.png';
import Image2 from '../../public/assets/images/Invest/money-bag.png';
import Image3 from '../../public/assets/images/Invest/investment.png';

const data = [
  {
    image: Image1,
    title: 'Institutional Investors or Qualified Institutional Investors',
    description: 'Commercial banks, mutual fund houses, pension funds, foreign portfolios, trusts, etc. QII allotment is capped at 50% by SEBI.',
  },
  {
    image: Image2,
    title: 'High networth investors',
    description: 'Non-Qualified institutional investors with net worth of more than ₹2 lakhs. Allotment for HNIs is capped at 15% of the overall subscription.',
  },
  {
    image: Image3,
    title: 'Retail investors',
    description: 'Investors with net worth of less than ₹2 lakhs. Minimum allotment capped at 35%.',
  },
];

export default function InvestIpo() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="lg:text-3xl text-2xl font-bold text-black mb-4 text-left">
          Who can <span className="text-[#1E8C51]">invest in IPO?</span>
        </h2>
        <p className="text-black lg:text-base text-sm leading-relaxed mb-8">
          While any individual can invest in an IPO, there are three distinct categories of IPO investors:
        </p>

        {/* Render each entry from data array */}
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start mb-8">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/6">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg"
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-5/5">
              <h3 className="lg:text-xl text-md font-semibold text-[#1E8C51] mb-4">{item.title}</h3>
              <p className="text-black lg:text-base text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
