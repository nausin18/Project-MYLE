import React from 'react';
import '../App.css'; // Ensure the correct path to App.css

const Page2: React.FC = () => {
  return <div>Page 2 
    <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300">
        ddddddddddddddddddddddddd
        <div> 
            <button className="w-16 h-16 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300" onClick={() => window.location.href = '/page3'}>3</button>
        </div>

    </div>
  </div>;
};

export default Page2;