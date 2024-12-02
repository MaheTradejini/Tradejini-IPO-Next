"use client";

import { useState } from "react";
import Image from "next/image";
import qrCodeImage from "../../public/assets/images/IPO-QR-New.png"; // Replace with your QR code image path
import qrscan from "../../public/assets/images/scanlogo1.gif"



export default function QRCodeScanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-[1%] right-[1%]">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={qrscan}
          alt="QR Code Scanner"
          width={120}
          height={120}
          className="transition-transform duration-300 transform hover:scale-125 z-10"
        />
        {isHovered && (
          <div className="absolute bottom-12 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-48 transition-transform duration-300 transform scale-105">
            <div className="text-sm text-black font-semibold text-center mb-2">Scan to Download <br /> Tradejini App</div>
            <Image
              src={qrCodeImage}
              alt="Scanner"
              width={150}
              height={150}
              className="transition-transform duration-300 transform"
            />
            <div className="text-sm text-black text-center">Open Free Account <br/> in Minutes!</div>
          </div>
        )}
      </div>
    </div>
  );
}