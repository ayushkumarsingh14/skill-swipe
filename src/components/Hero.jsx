import React from 'react';
import { FaHeart, FaPlay, FaMapMarkerAlt, FaShare } from 'react-icons/fa';
import megaphone from '../assets/megaphone.png';

function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-8">
      {/* Left Section: Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold mb-4 tracking-tight leading-tight">
          skill.<br />
          <span className="text-[#9EC500] px-2">swipe.</span><br />
          excel.
        </h1>
        <p className="text-xl mb-8">
          Find the perfect teammates, participate in exciting missions, and showcase your skills.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
          GET STARTED
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center md:justify-end">
        <img src={megaphone} alt="Megaphone" className="max-w-full h-auto" />
      </div>
    </section>
  );
}

export default Hero;
