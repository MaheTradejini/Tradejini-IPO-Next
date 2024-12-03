"use client";

import { Smartphone, QrCode, UserRoundCheck  } from "lucide-react";
import Image from "next/image";
import QR from "../../public/assets/images/IPO-QR-New.png";
import Link from "next/link";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-8 w-full max-w-3xl relative">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <Image
                src="https://tradejini.com/wp-content/uploads/2023/06/logo-img.svg"
                alt="Tradejini"
                width={200}
                height={200}
                className="mb-2 w-32 sm:w-48 md:w-52"
              />
              <p className="text-base sm:text-lg mb-2 sm:mb-4">
                Scan to apply for an IPO
              </p>
              <p className="text-[#1E8C51] text-sm sm:text-base mb-4 sm:mb-8">
                Invest in new IPOs seamlessly via UPI
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Smartphone className="text-[#38B990]" size={20} />
                  <span className="text-sm sm:text-base">
                    Scan QR with your mobile camera
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <QrCode className="text-[#38B990]" size={20} />
                  <span className="text-sm sm:text-base">
                    Complete IPO application via UPI
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                <UserRoundCheck className="text-[#38B990]" size={20} />
                  <span className="text-sm sm:text-base">
                    If already a user,{" "}
                    <Link href="http://cp.tradejini.com/ipo" target="_blank" className="text-[#38B990] underline">
                      click here
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-between mt-4 md:mt-0">
            <div className="w-48 h-48 sm:w-60 sm:h-60 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image
                src={QR}
                alt="QR Code"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">
            Open your <span className="text-[#1E8C51]">Tradejini</span> account
            in 5 mins
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="+91 | Enter Mobile Number"
              className="flex-1 p-3 border rounded-lg border-gray-300 hover:border-[#38B990] focus:border-[#38B990] focus:outline-none focus:ring-1 focus:ring-[#38B990] transition-colors duration-200 text-sm sm:text-base"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-[#38B990] text-white rounded-lg hover:bg-[#2da77f] transition duration-300 text-sm sm:text-base">
              Let's Begin
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 p-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
