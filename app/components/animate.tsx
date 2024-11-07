import React from 'react';

interface ShapeProps {
  className: string;
}

const FloatingShape: React.FC<ShapeProps> = ({ className }) => (
  <div className={`absolute opacity-10 rounded-full animate-float ${className}`} />
);

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large circle */}
      <FloatingShape 
        className="w-72 h-72 bg-emerald-200 -top-20 -left-20 animate-float-slow"
      />
      
      {/* Medium circles */}
      <FloatingShape 
        className="w-48 h-48 bg-teal-200 top-1/4 right-10 animate-float-delay"
      />
      <FloatingShape 
        className="w-56 h-56 bg-emerald-100 bottom-20 left-1/3 animate-float"
      />
      
      {/* Small circles */}
      <FloatingShape 
        className="w-24 h-24 bg-teal-100 top-1/3 left-20 animate-float-fast"
      />
      <FloatingShape 
        className="w-32 h-32 bg-emerald-50 bottom-40 right-1/4 animate-float-delay-slow"
      />
    </div>
  );
};

export default AnimatedBackground;