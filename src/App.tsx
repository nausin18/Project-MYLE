import { useState } from 'react'

import './App.css'


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 p-6 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FancySite</div>
          <ul className="flex space-x-6">
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">About</li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">Services</li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex-grow bg-gradient-to-r from-gray-100 to-gray-300 p-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Welcome to MYLE</h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover our services and enjoy a top-notch experience.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2024 FancySite. All rights reserved.</p>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Facebook</li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Twitter</li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Instagram</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
