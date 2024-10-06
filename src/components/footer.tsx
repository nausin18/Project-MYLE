import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          
          <a href="#" className="round-button">Twitter</a>
          <a href="#" className="round-button">Instagram</a>
          <a href="#" className="round-button">LinkedIn</a>
        </div>  
        <p className="text-gray-400">
          &copy; Designed and developed by Team MYLE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
