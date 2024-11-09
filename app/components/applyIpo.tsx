"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface StepInfo {
  id: number;
  title: string;
  image: string;
}

export default function IPOStepsCard() {
  const [activeStep, setActiveStep] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps: StepInfo[] = [
    {
      id: 1,
      title: "Open CubePlus App Or Web",
      image: "/assets/images/Apply/Phone01.png",
    },
    {
      id: 2,
      title: "Click On the any Open IPO",
      image: "/assets/images/Apply/Phone02.png",
    },
    {
      id: 3,
      title: "Bid For the IPO in One Click",
      image: "/assets/images/Apply/Phone03.png",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMobile && isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev === steps.length) {
            return 1;
          }
          return prev + 1;
        });
      }, 2000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isMobile, isAutoPlaying, steps.length]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Touch handlers for mobile slider
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false); // Pause auto-play on touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeStep < steps.length) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length));
    }

    if (isRightSwipe && activeStep > 1) {
      setActiveStep((prev) => Math.max(prev - 1, 1));
    }

    setTouchStart(0);
    setTouchEnd(0);

    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const DesktopView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left side - Image */}
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

      {/* Right side - Steps */}
      <div className="relative space-y-8 py-8">
        {/* Main vertical line that spans the entire height */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Top extending line */}
        <div className={`absolute left-6 top-0 w-0.5 h-8 bg-gray-200 -translate-y-8`} />

        {/* Bottom extending line */}
        <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-gray-200 translate-y-8" />

        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative cursor-pointer group transition-transform duration-300 ${
              activeStep === step.id ? "" : ""
            }`}
            onClick={() => setActiveStep(step.id)}
          >
            {/* Step circle and content */}
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

  // Mobile Slider View
  // const MobileView = () => (
  //   <div className="px-4">
  //     <div
  //       className="relative overflow-hidden rounded-2xl"
  //       onTouchStart={handleTouchStart}
  //       onTouchMove={handleTouchMove}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       <div
  //         className="flex transition-transform duration-500 ease-out pr-20"
  //         style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}
  //       >
  //           {steps.map((step) => (
  //         <div key={step.id} className="min-w-full">
  //           <div className="relative h-[400px] w-[288px]">
  //             <Image
  //               src={step.image}
  //               alt={step.title}
  //               fill
  //               priority
  //               className="object-cover" // Changed from object-cover to object-contain
  //               sizes="(max-width: 768px) 100vw, 50vw"
  //             />
  //           </div>
  //         </div>
  //       ))}
  //       </div>

  //       {/* Progress bar */}
  //       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
  //         <div
  //           className="h-full bg-emerald-500 transition-all duration-300"
  //           style={{
  //             width: `${(activeStep / steps.length) * 100}%`,
  //             transition: isAutoPlaying
  //               ? "width 3s linear"
  //               : "width 0.3s ease-out",
  //           }}
  //         />
  //       </div>

  //       {/* Step indicators */}
  //       <div className="absolute bottom-4 left-0 right-0">
  //         <div className="flex justify-center gap-2">
  //           {steps.map((step) => (
  //             <button
  //               key={step.id}
  //               onClick={() => {
  //                 setActiveStep(step.id);
  //                 setIsAutoPlaying(false);
  //                 setTimeout(() => setIsAutoPlaying(true), 5000);
  //               }}
  //               className={`w-2 h-2 rounded-full transition-all duration-300 ${
  //                 activeStep === step.id ? "w-6 bg-emerald-500" : "bg-gray-300"
  //               }`}
  //               aria-label={`Go to step ${step.id}`}
  //             />
  //           ))}
  //         </div>
  //       </div>

  //       {/* Play/Pause button */}
  //       {/* <button
  //         onClick={() => setIsAutoPlaying(!isAutoPlaying)}
  //         className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white"
  //         aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
  //       >
  //         {isAutoPlaying ? (
  //           <span className="w-3 h-3 border-l-2 border-r-2 border-white" />
  //         ) : (
  //           <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
  //         )}
  //       </button> */}
  //     </div>

  //     {/* Step information */}
  //     <div className="mt-6 text-center">
  //       <h3 className="text-xl font-semibold mb-2">
  //         {steps[activeStep - 1].title}
  //       </h3>
  //     </div>
  //   </div>
  // );
  // const MobileView = () => (
  //   <div className="flex flex-col w-full gap-4">
  //     {/* Image Slider Container */}
  //     <div className="relative">
  //       <div
  //         className="overflow-hidden rounded-2xl" // Removed center to allow sliding effect
  //         onTouchStart={handleTouchStart}
  //         onTouchMove={handleTouchMove}
  //         onTouchEnd={handleTouchEnd}
  //       >
  //         <div
  //           className="flex transition-transform duration-500 ease-out"
  //           style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}
  //         >
  //           {steps.map((step) => (
  //             <div 
  //               key={step.id} 
  //               className="flex-shrink-0 w-64" // Changed to full width with padding
  //             >
  //               <div className="relative flex items-center justify-center h-[400px] w-[400px] mx-auto">
  //                 <Image
  //                   src={step.image}
  //                   alt={step.title}
  //                   fill
  //                   priority
  //                   className="object-cover rounded-2xl"
  //                   sizes="(max-width: 768px) 100vw, 50vw"
  //                 />
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  
  //       {/* Progress bar below image */}
  //       <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden max-w-[400px] mx-auto">
  //         <div
  //           className="h-full bg-emerald-500 transition-all duration-300"
  //           style={{
  //             width: `${(activeStep / steps.length) * 100}%`,
  //             transition: isAutoPlaying
  //               ? "width 3s linear"
  //               : "width 0.3s ease-out",
  //           }}
  //         />
  //       </div>
  
  //       {/* Step indicators below progress bar */}
  //       <div className="mt-4">
  //         <div className="flex justify-center gap-2">
  //           {steps.map((step) => (
  //             <button
  //               key={step.id}
  //               onClick={() => {
  //                 setActiveStep(step.id);
  //                 setIsAutoPlaying(false);
  //                 setTimeout(() => setIsAutoPlaying(true), 5000);
  //               }}
  //               className={`w-2 h-2 rounded-full transition-all duration-300 ${
  //                 activeStep === step.id ? "w-6 bg-emerald-500" : "bg-gray-300"
  //               }`}
  //               aria-label={`Go to step ${step.id}`}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  
  //     {/* Step information below indicators */}
  //     <div className="flex flex-col items-center mt-2">
  //       <h3 className="text-xl font-semibold">
  //         {steps[activeStep - 1].title}
  //       </h3>
  //     </div>
  //   </div>
  // );

  const MobileView = () => (
    <div className="px-4">
      <div 
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}
        >
          {steps.map((step) => (
            <div key={step.id} className="min-w-full">
              <div className="relative h-[400px] w-[256px] -ml-[6%]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ 
              width: `${(activeStep / steps.length) * 100}%`,
              transition: isAutoPlaying ? 'width 3s linear' : 'width 0.3s ease-out'
            }}
          />
        </div>

        {/* Step indicators */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'w-6 bg-emerald-500' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to step ${step.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step information */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold mb-2">
          {steps[activeStep - 1].title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 py-12">
      <h1 className="lg:text-3xl text-2xl font-bold text-center mb-4">
        Apply for IPOs in{" "}
        <span className="text-emerald-600">Just 3 Steps!</span>
      </h1>

      {isMobile ? <MobileView /> : <DesktopView />}

      {/* {isMobile && ( */}
        <div className="mt-12 px-4 max-w-md mx-auto">
          <button className="w-full py-4 bg-emerald-500 text-white lg:text-base text-sm rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
            Apply now
          </button>
        </div>
      {/* )} */}
    </div>
  );
}
