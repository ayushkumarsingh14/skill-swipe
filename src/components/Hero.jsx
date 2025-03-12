import React from 'react';
import { FaHeart, FaPlay, FaMapMarkerAlt, FaShare } from 'react-icons/fa';

function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          skill.<br />
          <span className="bg-[#c1ff72] px-2">swipe.</span><br />
          excel.
        </h1>
        <p className="text-xl mb-8">
          Find the perfect teammates, participate in exciting missions, and showcase your skills.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
          GET STARTED
        </button>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute right-0 flex flex-col gap-4">
          <FaHeart className="text-2xl hover:text-red-500 cursor-pointer" />
          <FaShare className="text-2xl hover:text-blue-500 cursor-pointer" />
          <FaPlay className="text-2xl hover:text-green-500 cursor-pointer" />
          <FaMapMarkerAlt className="text-2xl hover:text-yellow-500 cursor-pointer" />
        </div>
        <img src="/megaphone.svg" alt="Megaphone" className="w-full" />
      </div>
    </section>
  );
}

export default Hero;
