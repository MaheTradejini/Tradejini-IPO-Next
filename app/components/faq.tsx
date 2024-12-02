"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is an IPO?",
      answer:
        "An IPO, or Initial Public Offering, is when a private company sells its shares to the public for the first time, allowing the company to raise capital and expand. It also gives the public a chance to invest in the company’s growth by purchasing shares listed on a stock exchange.",
    },
    {
      id: 2,
      question: "Why do companies launch IPOs?",
      answer:
        "Companies go public through IPOs to secure capital for growth, reduce debt, or enhance their financial position. An IPO boosts the company’s visibility and credibility, helps attract investors, and offers early investors a liquidity exit while providing long-term capital options.",
    },
    {
      id: 3,
      question: "Who is eligible to invest in an IPO?",
      answer: `The following are eligible to invest in IPOs:

* Residents of India
* Non-Residents (NRI)
* Qualified Institutional Buyers (QIBs)
* Eligible Foreign Investors such as FPI (Foreign Portfolio Investor) and Foreign Institutional Investors (FII)
* You must be at least 18 years old`,
    },
    {
      id: 4,
      question: "How do I apply for an IPO?",
      answer: `Here's how to apply for an IPO:

* **Open Demat and Trading Account:** Ensure you have an active account with Tradejini
* **Select IPO:** Check the IPOs available on the platform
* **Log In:** Access your Tradejini account online or via the mobile app
* **Fill Details:** Enter the IPO details, like the number of shares and price range
* **ASBA Application:** Use ASBA for the application and ensure sufficient funds in your linked bank account
* **Submit:** Confirm your details and submit the application
* **Track and Trade:** Monitor the allotment status and sell the shares once listed`,
    },
    {
      id: 5,
      question: "What documents are required to invest in an IPO?",
      answer: `To apply for an IPO, you’ll need the following documents:
      
* **PAN Card:** For identity verification
* **Demat and trading account::** Mandatory for holding and trading shares.
* **Bank account linked for ASBA:** To block the application amount.
* **Address Proof:** To confirm your residential address.
* **KYC Documents:**  Additional documents may be needed depending on the IPO or your broker
      `,
    },
    {
      id: 6,
      question: "How is the price of an IPO determined?",
      answer:
        "The IPO price is determined either through a fixed price or book-building method. In a fixed-price offering, the price is pre-determined by the company, while in book-building, investors bid within a price range, and the final price is set based on demand.",
    },

    {
      id: 7,
      question: "Can I sell IPO shares on the listing day?",
      answer:
        "Yes, IPO shares can be sold once listed on the stock exchange.",
    },

    {
      id: 8,
      question: "What is oversubscription in an IPO?",
      answer:
        "Oversubscription happens when the demand for shares exceeds the available supply.",
    },

    {
      id: 9,
      question: "What happens if I don’t get an IPO allotment?",
      answer:
        "If you don’t get an allotment in an IPO, your application money will be refunded after the issue closes. This amount is credited back to your bank account linked to the ASBA application.",
    },

    {
      id: 10,
      question: "How can one decide on buying an IPO?",
      answer:
        "Investors should consider the company’s financial health, growth prospects, industry position, and management. Market conditions and investor demand also play a crucial role in evaluating the potential of an IPO. Understanding the price band and market sentiment is essential before making a decision.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 lg:text-base text-sm">
          Questions on your mind? Don't worry we have the answers!
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="divide-y divide-slate-200 rounded-lg overflow-hidden lg:text-base text-sm"
          >
            <button
              className="w-full text-left p-4 flex justify-between bg-white items-center transition-colors duration-200"
              onClick={() => toggleAccordion(faq.id)}
            >
              <span className="text-gray-800 font-medium lg:text-base text-sm">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openId === faq.id ? "transform rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openId === faq.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <ReactMarkdown 
                  className="text-gray-600 lg:text-base text-sm prose prose-ul:mt-2 prose-ul:list-none prose-li:my-1"
                  components={{
                    ul: ({children}) => <ul className="space-y-2">{children}</ul>,
                    li: ({children}) => (
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>{children}</span>
                      </li>
                    ),
                  }}
                >
                  {faq.answer}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
