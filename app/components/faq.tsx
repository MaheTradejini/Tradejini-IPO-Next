"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection () {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Are IPOs a good investment?",
      answer: "IPOs can be good investment opportunities, but they come with both potential rewards and risks. They offer the chance to invest in companies early, potentially benefiting from initial growth. However, it's important to thoroughly research each IPO, understand the company's business model, financials, and growth prospects before investing."
    },
    {
      id: 2,
      question: "What is the minimum amount required to invest in IPO?",
      answer: "The minimum investment amount varies by IPO but typically ranges from ₹10,000 to ₹15,000. The exact amount depends on the lot size and price band set by the company. For retail investors, SEBI regulations ensure that a portion of shares is reserved for small investments."
    },
    {
      id: 3,
      question: "What are the benefits of investing in IPOs?",
      answer: "Investing in IPOs offers several benefits including potential for listing gains, being an early investor in promising companies, transparent pricing, and regulated process. You also get the opportunity to be part of a company's growth story from its early public stages."
    },
    {
      id: 4,
      question: "What are the risks of investing in IPOs?",
      answer: "IPO investments carry risks such as market volatility, limited company history, pricing uncertainty, and potential overvaluation. There's also the risk of lock-in periods and the possibility that the company might not perform as expected after listing."
    },
    {
      id: 5,
      question: "How to apply for IPOs on Dhan?",
      answer: "Applying for IPOs on Dhan is a simple process: 1) Open the Dhan app 2) Navigate to the IPO section 3) Select the IPO you want to invest in 4) Enter your bid details 5) Confirm your UPI ID 6) Authorize the payment through your UPI app"
    },
    {
      id: 6,
      question: "What are the charges associated for IPOs on Dhan?",
      answer: "Dhan does not charge any fees for applying to IPOs through its platform. The only payment you make is for the shares you're applying for. However, standard regulatory charges and taxes may apply as per market rules."
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Questions on your mind? Don't worry we have the answers!
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="divide-y divide-slate-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-4 flex justify-between bg-white items-center transition-colors duration-200"
              onClick={() => toggleAccordion(faq.id)}
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openId === faq.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openId === faq.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

