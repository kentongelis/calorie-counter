import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Food from '../Food/Food.js'
import { addMeal } from '../../slices/mealsSlice.js'
import { addCalories } from '../../slices/calorieSlice.js'


const Search = () => {
    const [value, updateValue] = useState('');

    const dispatch = useDispatch();

    const { data, isLoading, error } = useQuery({
        queryKey: ['foodData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/foodData');
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();          
        }
    });

    const selectedMeal = (item) => {
        dispatch(addMeal({mealType: "Breakfast", item: item}));
        dispatch(addCalories(Math.round(item.Calories)))
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredData = value
    ? data.filter(item =>
        item.Display_Name.toLowerCase().includes(value.toLowerCase())
      )
    : [];

    return (
        <div>
            <input type="text"
             value={value}
            onChange={(e) => updateValue(e.target.value)}
            />

            {filteredData.map((item) => (
                <div>
                    <Food 
                    key={item.id}
                    item={item}
                    />
                    <button onClick={() => selectedMeal(item)}>Add to meal</button>
                </div>
            ))}
        </div>
    )
}

export default Search;