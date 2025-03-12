
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Skill Swipe Logo" className="h-8" />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/hackathons" className="text-gray-700 hover:text-black transition-colors duration-300">
          HACKATHONS
        </Link>
        <Link to="/leaderboard" className="text-gray-700 hover:text-black transition-colors duration-300">
          LEADERBOARD
        </Link>
        <Link to="/opportunities" className="text-gray-700 hover:text-black transition-colors duration-300">
          OPPORTUNITIES
        </Link>
        <button className="bg-[#c1ff72] px-4 py-2 rounded-full font-medium hover:bg-[#b1ef62] transition-all duration-300">
          SIGN UP
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300">
          HOST
        </button>
      </div>
    </nav>
  );
}

export default Navigation;