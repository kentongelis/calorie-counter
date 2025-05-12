import { useSelector, useDispatch } from 'react-redux';
import { removeMeal } from '../../slices/mealsSlice.js';
import { subtractCalories } from '../../slices/calorieSlice.js';
import Food from '../Food/Food.js';
import './Meal.css';

const Meal = ({ mealName, isOpen, onToggle }) => {
  const dispatch = useDispatch();
  const meal = useSelector(state => state.meals[mealName]);

  const handleRemoveMeal = (item) => {
    // Remove the meal from the list
    dispatch(removeMeal({
      mealType: mealName,
      uniqueId: item.uniqueId
    }));
    
    // Subtract the calories
    dispatch(subtractCalories(Math.round(item.Calories)));
  };

  return (
    <div className="meal">
      <h2 className="meal-header" onClick={() => onToggle(mealName)}>
        {mealName}
        <span>{isOpen ? '▲' : '▼'}</span>
      </h2>

      {isOpen && (
        <div className="meal-content">
          {meal && meal.length > 0 ? (
            <div className="meal-foods">
              {meal.map((item) => (
                <Food 
                  key={item.uniqueId || item.id} 
                  item={item} 
                  showRemoveButton={true}
                  onRemove={handleRemoveMeal}
                />
              ))}
            </div>
          ) : (
            <p className="no-meals">There are no meals.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Meal;