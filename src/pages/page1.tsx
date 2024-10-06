import { useNavigate } from 'react-router-dom';

const Page1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 p-4 mb-4">
        In this section, you'll find information about the food in the fridge.
        
      </div>
      <button
        className="bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 p-4"
        onClick={() => navigate('/')}
      >
        Return to homepage
      </button>
    </div>
  );
};

export default Page1;
