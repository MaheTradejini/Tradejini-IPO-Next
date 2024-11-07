"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface StepInfo {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ResponsiveIPOSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps: StepInfo[] = [
    {
      id: 1,
      title: 'Open CubePlus App Or Web',
      description: 'Get started with your IPO journey',
      image: '/assets/images/Apply/Phone1.png',
    },
    {
      id: 2,
      title: 'Click On Any Ongoing IPO',
      description: 'Browse and select from available IPOs',
      image: '/assets/images/Apply/Phone2.png',
    },
    {
      id: 3,
      title: 'Bid For The IPO in One Click',
      description: 'Quick and easy application process',
      image: '/assets/images/Apply/Phone3.png',
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev === steps.length) {
            return 1;
          }
          return prev + 1;
        });
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      setActiveStep(prev => Math.min(prev + 1, steps.length));
    }
    
    if (isRightSwipe && activeStep > 1) {
      setActiveStep(prev => Math.max(prev - 1, 1));
    }

    setTouchStart(0);
    setTouchEnd(0);
    
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Desktop Slider View
  const DesktopView = () => (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}
      >
        {steps.map((step) => (
          <div key={step.id} className="flex-shrink-0 w-full px-4">
            <div className="relative h-[600px] w-full">
              <Image
                src={step.image}
                alt={step.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-4 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-300"
          style={{
            width: `${(activeStep / steps.length) * 100}%`,
            transition: isAutoPlaying ? 'width 3s linear' : 'width 0.3s ease-out'
          }}
        />
      </div>

      {/* Step indicators */}
      <div className="absolute bottom-16 left-0 right-0">
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
  );

  // Mobile Slider View
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
              <div className="relative h-[400px] w-[288px]">
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
        <p className="text-gray-600">
          {steps[activeStep - 1].description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">
        Apply for Open IPOs in <span className="text-emerald-600">Just 3 Steps!</span>
      </h1>
      
      {isMobile ? <MobileView /> : <DesktopView />}

      {/* Common CTA button */}
      <div className="mt-12 px-4 max-w-md mx-auto">
        <button className="w-full py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
          Apply for Upcoming IPOs
        </button>
      </div>
    </div>
  );
}