
import React from 'react';

const HeroSection = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto">
      <p className="text-[24px] sm:text-[28px] md:text-[32px] font-normal mb-[-0.5rem] max-w-[400px] md:max-w-none text-black">
        We're in the business of
      </p>
      <h1
        className="font-playfair font-extrabold text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] leading-[1] bg-gradient-to-r from-[#f15a24] via-[#f7941d] to-[#fbb03b] bg-clip-text text-transparent select-none pb-4"
        style={{ textShadow: '0 10px 10px rgba(241, 90, 36, 0.3)' }}
      >
        growth
      </h1>
      <div className="w-[1px] h-[80px] sm:h-[100px] md:h-[120px] mt-[-10px] sm:mt-[-15px] md:mt-[-20px] ml-[250px] sm:ml-[300px] md:ml-[350px] lg:ml-[450px] bg-gradient-to-b from-[#f15a24] to-transparent relative">
        <div
          className="w-4 h-4 rounded-full bg-[#f15a24] absolute top-0 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        ></div>
      </div>
    </main>
  );
};

export default HeroSection;
