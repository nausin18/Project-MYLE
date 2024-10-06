import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <div className="flex justify-center space-x-8 mb-4">
      <a href="#" className="px-4 text-blue-400 hover:text-blue-600 transition duration-300">Facebook</a>
      <a href="#" className="px-4 text-blue-400 hover:text-blue-600 transition duration-300">Twitter</a>
      <a href="#" className="px-4 text-blue-400 hover:text-blue-600 transition duration-300">Instagram</a>
      <a href="#" className="px-4 text-blue-400 hover:text-blue-600 transition duration-300">LinkedIn</a>
    </div>
    <p className="text-gray-400">
      &copy; 2024 MYLE. All Rights Reserved.
    </p>
  </div>
</footer>

  
  );
};

export default Footer;
