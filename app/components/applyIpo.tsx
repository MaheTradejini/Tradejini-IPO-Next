"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface StepInfo {
  id: number;
  title: string;
  image: string;
}

export default function IPOStepsCard() {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const steps: StepInfo[] = [
    {
      id: 1,
      title: "Open CubePlus App Or Web",
      image: "/assets/images/Apply/01.webp",
    },
    { 
      id: 2,
      title: "Click On the any Open IPO",
      image: "/assets/images/Apply/02.webp",
    },
    {
      id: 3,
      title: "Bid For the IPO in One Click",
      image: "/assets/images/Apply/03.webp",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative w-[600px] h-[600px]">
        <div className="absolute inset-0 transform">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={steps[activeStep - 1].image}
              alt={`Step ${activeStep}`}
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              priority
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      <div className="relative space-y-8 py-8">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="absolute left-6 top-0 w-0.5 h-8 bg-gray-200 -translate-y-8" />
        <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-gray-200 translate-y-8" />

        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative cursor-pointer group transition-transform duration-300`}
            onClick={() => setActiveStep(step.id)}
          >
            <div className="flex items-start gap-8">
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors duration-300 relative z-10 ${
                    activeStep === step.id
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-emerald-100"
                  }`}
                >
                  {step.id}
                </div>
              </div>
              <div
                className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                  activeStep === step.id
                    ? "bg-white shadow-lg border border-emerald-100"
                    : "group-hover:bg-gray-50"
                }`}
              >
                <h3 className="text-base font-medium">{step.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MobileView = () => (
    <div className="px-4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-[500px]"
       
      >
        {steps.map((step) => (
          <SwiperSlide 
            key={step.id}
            className="swiper-slide-content"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src={step.image}
                alt={step.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="slide-title">
              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 py-12">
      <h1 className="lg:text-3xl text-2xl font-bold text-center mb-4">
        Apply for IPOs in{" "}
        <span className="text-emerald-600">Just 3 Steps!</span>
      </h1>

      {isMobile ? <MobileView /> : <DesktopView />}

      <div className="mt-12 px-4 max-w-md mx-auto">
        <button className="w-full py-4 bg-emerald-500 text-white lg:text-base text-sm rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
          Apply now
        </button>
      </div>
    </div>
  );
}
