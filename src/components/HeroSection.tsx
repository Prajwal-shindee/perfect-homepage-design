
import React from 'react';

const HeroSection = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto">
      <p className="text-[28px] font-normal mb-[-0.5rem] max-w-[400px] md:max-w-none md:text-[32px] text-black">
        We're in the business of
      </p>
      <h1
        className="font-playfair font-extrabold text-[120px] leading-[1] bg-gradient-to-r from-[#f15a24] via-[#f7941d] to-[#fbb03b] bg-clip-text text-transparent select-none"
        style={{ textShadow: '0 10px 10px rgba(241, 90, 36, 0.3)' }}
      >
        growth
      </h1>
      <div className="w-[1px] h-[120px] mt-[-20px] ml-[350px] md:ml-[450px] bg-gradient-to-b from-[#f15a24] to-transparent relative">
        <div
          className="w-4 h-4 rounded-full bg-[#f15a24] absolute top-0 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        ></div>
      </div>
    </main>
  );
};

export default HeroSection;
