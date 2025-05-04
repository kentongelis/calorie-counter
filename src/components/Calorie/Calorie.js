import { useSelector, useDispatch } from 'react-redux';
import { resetCalories } from '../../slices/calorieSlice';
import { clearMeals } from '../../slices/mealsSlice';

const Calorie = () => {
    const dispatch = useDispatch()

    const calories = useSelector(state => state.calories)

    return (
        <div>
            <p>Total Calories: { calories }</p>
            <button onClick={() => dispatch(resetCalories())}>Reset Calories</button>
            <button onClick={() => dispatch(clearMeals())}>Clear Meals</button>
        </div>
    )
}

export default Calorie;