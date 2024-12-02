"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import image1 from "../../public/assets/images/Component-85.webp";
import image2 from "../../public/assets/images/Component-86.svg";
import image3 from "../../public/assets/images/Component-87.svg";
import image4 from "../../public/assets/images/Component-74-1.svg";

interface CardProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: object;
  color: string;
  delay: number;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  buttonText, 
  buttonLink, 
  imageSrc, 
  color, 
  delay 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-x-0', 'opacity-100');
            entry.target.classList.remove('translate-x-[-50px]', 'opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        root: null,
        rootMargin: '0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="w-full transform transition-all duration-700 ease-out translate-x-[-50px] opacity-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row justify-around items-center p-4 md:p-10">
        <div className="leftprod1 pt-8 md:pt-12 w-full md:w-[660px] flex justify-center md:justify-start items-start flex-col">
          <h2 
            className="therade pb-6 md:pb-10 text-2xl md:text-3xl font-bold"
            style={{ color }}
          >
            {title}
          </h2>
          <a href={buttonLink}>
            <button className="prodbtn my-4 md:my-8 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
              <span>{buttonText}</span>
            </button>
          </a>
        </div>
        <div className="rigtprod mt-6 md:mt-0">
          <Image
            src={imageSrc} 
            alt={`${title} illustration`} 
            className="w-full md:w-auto max-w-[300px] md:max-w-none transform transition-all duration-700 ease-out hover:scale-105"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

const AnimateWordpress: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      title: "By the traders, for the traders",
      buttonText: "Products",
      buttonLink: "https://tradejini.com/products/",
      imageSrc: image1,
      color: "#000000",
      delay: 0
    },
    {
      title: "Big on value, low on commissions",
      buttonText: "Pricing",
      buttonLink: "https://tradejini.com/pricing/",
      imageSrc: image2,
      color: "#4539A0",
      delay: 200
    },
    {
      title: "Unparalleled support",
      buttonText: "Support",
      buttonLink: "https://tradejini.com/faqs/",
      imageSrc: image3,
      color: "#9E2DAB",
      delay: 400
    },
    {
      title: "10 years of commitment to client success",
      buttonText: "About",
      buttonLink: "https://tradejini.com/about/",
      imageSrc: image4,
      color: "#32631B",
      delay: 600
    }
  ];

  return (
    <section className="best_class bg-black text-white">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="headbest flex justify-start items-center pb-16 md:pb-32 pt-4 md:pt-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ahead of the curve, for many reasons
          </h2>
        </div>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AnimateWordpress;