import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCurrent } from '../../slices/currentSlice.js';
import Meal from '../Meal/Meal.js';

const MealsList = () => {
  const [openMeal, setOpenMeal] = useState(null);

  const dispatch = useDispatch();

  const handleToggle = (mealName) => {
    setOpenMeal(prev => {
      const isClosing = prev === mealName;
      dispatch(selectCurrent(isClosing ? null : mealName));
      return isClosing ? null : mealName;
    });
  };

  return (
    <div>
      <Meal mealName="Breakfast" isOpen={openMeal === 'Breakfast'} onToggle={handleToggle} />
      <Meal mealName="Lunch" isOpen={openMeal === 'Lunch'} onToggle={handleToggle} />
      <Meal mealName="Dinner" isOpen={openMeal === 'Dinner'} onToggle={handleToggle} />
      <Meal mealName="Snacks" isOpen={openMeal === 'Snacks'} onToggle={handleToggle} />
    </div>
  );
};

export default MealsList;
