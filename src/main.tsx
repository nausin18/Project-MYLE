import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Footer from './components/footer';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 md:p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
        Welcome to MYLE
      </h1>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <div className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            {/* You can add content or images here */}
            <p className="text-lg md:text-xl text-gray-700">
              Check out our amazing offerings!
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover our services and enjoy a top-notch experience.
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-8">
          <button
            className="flex items-center justify-center w-32 h-32 md:w-24 md:h-24 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 mb-4 md:mb-0"
            onClick={() => navigate('/page1')}
          >
            What food we have in the fridge
          </button>
          <button
            className="flex items-center justify-center w-32 h-32 md:w-24 md:h-24 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 mb-4 md:mb-0"
            onClick={() => navigate('/page2')}
          >
            What stock we have in the fridge
          </button>
          <button
            className="flex items-center justify-center w-32 h-32 md:w-24 md:h-24 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300"
            onClick={() => navigate('/page3')}
          >
            When the food expires
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
