"use client";

import { useState } from "react";
import Image from "next/image";
import qrCodeImage from "../../public/assets/images/IPO-QR-New.png";
import qrscan from "../../public/assets/images/scanlogo1.gif"



export default function QRCodeScanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-12 right-[4%] hidden lg:block">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={qrscan}
          alt="QR Code Scanner"
          width={60}
          height={60}
          className=" z-10"
        />
        {isHovered && (
          <div className="absolute bottom-0 right-0 bg-white border border-2 shadow-lg rounded-xl p-4 flex flex-col items-center w-48">
            <div className="text-sm text-black font-semibold text-center mb-2">Scan to Download <br /> Tradejini App</div>
            <Image
              src={qrCodeImage}
              alt="Scanner"
              width={150}
              height={150}
              className=""
            />
            <div className="text-sm text-black text-center">Open Free Account <br/> in Minutes!</div>
          </div>
        )}
      </div>
    </div>
  );
}