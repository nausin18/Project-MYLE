import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1: React.FC = () => {
  const navigate = useNavigate();

  // Define a type 
  type FridgeItems = {
    Apples: number;
    Oranges: number;
    Bananas: number;
    Grapes: number;
    Strawberries: number;
    Blueberries: number;
    Chicken: number;
    Beef: number;
    Pork: number;
    Fish: number;
    Shrimp: number;
    Lobster: number;
    Crab: number;
    Milk: number;
    Eggs: number;
    Butter: number;
    Cheese: number;
    Yogurt: number;
    IceCream: number;
    FrozenVegetables: number;
    FrozenFruits: number;
    FrozenPizza: number;
    FrozenMeals: number;
    FrozenDesserts: number;
  };

  // Store quantities for each item 
  const fridgeItems: FridgeItems = {
    Apples: 5,
    Oranges: 8,
    Bananas: 3,
    Grapes: 10,
    Strawberries: 12,
    Blueberries: 6,
    Chicken: 2,
    Beef: 4,
    Pork: 1,
    Fish: 7,
    Shrimp: 9,
    Lobster: 2,
    Crab: 3,
    Milk: 1,
    Eggs: 12,
    Butter: 1,
    Cheese: 4,
    Yogurt: 6,
    IceCream: 1,
    FrozenVegetables: 5,
    FrozenFruits: 4,
    FrozenPizza: 2,
    FrozenMeals: 3,
    FrozenDesserts: 2,
  };

  // State to track the last clicked item
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  // Function to handle item click and show notification
  const handleItemClick = (item: string) => {
    setClickedItem(item);
  };

  // Function to close the notification
  const handleCloseNotification = () => {
    setClickedItem(null);
  };

  return (
    <div>
      <div className="bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 p-4 mb-4">
        In this section, you'll find information about the food in the fridge.
        <div>
          <ul>
            {Object.keys(fridgeItems).map((item) => (
              <li key={item} className="mb-4">
                <button
                  className='page1button'
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
                {/* Display notification below the button if clicked */}
                {clickedItem === item && (
                  <div className="mt-2 p-2 border rounded bg-gray-100 flex items-center justify-between">
                    <p className="text-sm text-green-700">
                      You have {fridgeItems[item as keyof FridgeItems]} {item.toLowerCase()} in the fridge.
                    </p>
                    <button
                      className="ml-9 text-red-900 hover:text-pink-800"
                      onClick={handleCloseNotification}
                    >
                      Close
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
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
