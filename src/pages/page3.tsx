import { useNavigate } from 'react-router-dom';

const Page3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300 p-4 mb-4">
        In this section, you'll find information about when the food expires.
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

export default Page3;