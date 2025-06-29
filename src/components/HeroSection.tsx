
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center justify-center relative px-8">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative line */}
        <div className="absolute top-0 right-0 h-32 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 transform translate-x-20 -translate-y-8"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full transform translate-x-[74px] -translate-y-2"></div>
        
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight">
            We're in the business of
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight">
            growth
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
