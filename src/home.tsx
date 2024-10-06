import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <div>

      <div className="max-w-7xl mx-auto text-center">
      <div className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
        
      </div>
     
      <div className="flex justify-center space-x-8 mb-8">
       
      <button
          className="w-16 h-16 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          onClick={() => navigate('/page1')}
        >
          1
        </button>
        <button
          className="w-16 h-16 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          onClick={() => navigate('/page2')}
        >
          2
        </button>
        <button
          className="w-16 h-16 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300"
          onClick={() => navigate('/page3')}
        >
          3
        </button>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
