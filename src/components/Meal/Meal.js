import { useSelector } from 'react-redux';
import Food from '../Food/Food.js';

const Meal = ({ mealName, isOpen, onToggle }) => {
  const meal = useSelector(state => state.meals[mealName]);

  return (
    <div className="meal">
      <h1 className="meal-header" onClick={() => onToggle(mealName)}>
        {mealName} {isOpen ? '▲' : '▼'}
      </h1>

      {isOpen && (
        <>
          {meal && meal.length > 0 ? (
            meal.map((item) => (
              <Food key={item.id} item={item} />
            ))
          ) : (
            <p className="no-meals">There are no meals.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Meal;
