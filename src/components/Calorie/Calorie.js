// Updated Calorie.js with styling

import { useSelector, useDispatch } from 'react-redux';
import { resetCalories } from '../../slices/calorieSlice';
import { clearMeals } from '../../slices/mealsSlice';
import './Calorie.css';

const Calorie = () => {
    const dispatch = useDispatch();
    const calories = useSelector(state => state.calories);
    const current = useSelector(state => state.current);

    return (
        <div className="calorie-container">
            <div className="calorie-info">
                <div className="calorie-stat">
                    <span className="calorie-value">{calories}</span>
                    <span className="calorie-label">Total Calories</span>
                </div>
                
                {current && (
                    <div className="calorie-stat">
                        <span className="calorie-value">{current}</span>
                        <span className="calorie-label">Current Meal</span>
                    </div>
                )}
            </div>
            
            <div className="calorie-actions">
                <button 
                    className="reset-btn" 
                    onClick={() => dispatch(resetCalories())}
                >
                    Reset Calories
                </button>
                <button 
                    className="clear-btn" 
                    onClick={() => dispatch(clearMeals())}
                >
                    Clear Meals
                </button>
            </div>
        </div>
    );
};

export default Calorie;