import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Page1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300 p-4 mb-4">
        In this section, we add what food we have in the fridge.
      </div>
      <button
        className="bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 p-4"
        onClick={() => navigate('/')}
      >
        Home
      </button>
    </div>
  );
};

export default Page1;