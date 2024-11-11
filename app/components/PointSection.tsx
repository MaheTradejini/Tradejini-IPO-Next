"use client";

import React from "react";

const strengths: string[] = [
  "Excellent communication skills",
  "Strong problem-solving abilities",
  "Adaptable and quick learner",
  "Team-oriented and collaborative",
  "Proactive and self-motivated",
];

const risks: string[] = [
  "Excellent communication skills",
  "Strong problem-solving abilities",
  "Adaptable and quick learner",
  "Team-oriented and collaborative",
  "Proactive and self-motivated",
];

export default function PointSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="mb-6">
        <h2 className="md:text-xl text-base font-bold text-left text-gray-800 mb-6">
          Strength
        </h2>
        <ul className="space-y-4 max-w-md ml-4 text-gray-700 md:text-base text-sm">
          {strengths.map((strength: string, index: number) => (
            <li key={index} className="flex items-center md:text-base text-sm">
              <span className="inline-block md:w-1.5 md:h-1.5 bg-black rounded-full mr-3 w-1 h-1"></span>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="md:text-xl text-base font-bold text-left text-gray-800 mb-6">
          Risks
        </h2>
        <ul className="space-y-4 max-w-md ml-4 text-gray-700 md:text-base text-sm">
          {risks.map((strength: string, index: number) => (
            <li key={index} className="flex items-center md:text-base text-sm">
              <span className="inline-block md:w-1.5 md:h-1.5 bg-black rounded-full mr-3 w-1 h-1"></span>
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
