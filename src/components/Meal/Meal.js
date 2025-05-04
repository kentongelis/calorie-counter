import { useSelector } from 'react-redux';
import Food from '../Food/Food.js';

const Meal = ({mealName}) => {
    const meal = useSelector(state => state.meals[mealName])

    return (
        <div>
            <h1>{mealName}</h1>
            {meal.map((item) => (
                <Food 
                key={item.id}
                item={item}
                />
            ))}
        </div>
    );
}

export default Meal;