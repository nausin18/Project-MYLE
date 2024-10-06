import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';

// Define the HomePage component
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4"> Welcome to MYLE</h1> 
      </div>
      <p className="text-xl text-gray-700 mb-8">
        Discover our services and enjoy a top-notch experience.
      </p>
      <div className="flex justify-center space-x-8 mb-8">
       
        <button
          className="w-16 h-16 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          onClick={() => navigate('/page1')}  
        >
          what food we have in the fridge
        </button>
        <button
          className="w-16 h-16 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          onClick={() => navigate('/page2')}
        >
          what stock we have in the fridge
        </button>
        <button
          className="w-16 h-16 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300"
          onClick={() => navigate('/page3')}
        >
          when the food expires
        </button>
      </div>
    </div>
  );
};

// Define the Page1 component
const Page1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300 p-4 mb
      -4">
        In this section, we add what food we have in the fridge.
      </div>
      <button
        className="bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 p-4"
        onClick={() => navigate('/')}
      >
        return to homepage
      </button>
    </div>
  );
};

// Define the Page2 component
const Page2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 p-4 mb-4">
        In this section, xxxxxxxxxxxxxxx
      </div>
      <button
        className="bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 p-4"
        onClick={() => navigate('/')}
      >
        return to homepage
      </button>
    </div>
  );
};

// Define the Page3 component
const Page3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300 p-4 mb-4">
        In this section, ddddddddddddddddddd
      </div>
      <button
        className="bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 p-4"
        onClick={() => navigate('/')}
      >
         return to homepage
      </button>
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
