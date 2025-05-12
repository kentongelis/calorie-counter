import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Food from '../Food/Food.js';
import { addMeal } from '../../slices/mealsSlice.js';
import { addCalories } from '../../slices/calorieSlice.js';
import './Search.css';

const Search = () => {
    const [value, updateValue] = useState('');
    const dispatch = useDispatch();
    const current = useSelector(state => state.current);

    const { data, isLoading, error } = useQuery({
        queryKey: ['foodData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/foodData');
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();          
        }
    });

    const selectedMeal = (item) => {
        if (!current) {
            alert('Please select a meal first!');
            return;
        }
        dispatch(addMeal({mealType: `${current}`, item: item}));
        dispatch(addCalories(Math.round(item.Calories)));
        updateValue(''); // Clear search after adding
    };

    if (isLoading) return <div className="search-container search-loading">Loading food data...</div>;
    if (error) return <div className="search-container">Error: {error.message}</div>;

    const filteredData = value
        ? data.filter(item =>
            item.Display_Name.toLowerCase().includes(value.toLowerCase())
        )
        : [];

    return (
        <div className="search-container">
            <h2 className="search-title">Find Food</h2>
            <input 
                type="text"
                className="search-input"
                value={value}
                onChange={(e) => updateValue(e.target.value)}
                placeholder={current ? `Search to add to ${current}...` : "Select a meal first"}
                disabled={!current}
            />

            <div className="search-results">
                {value && filteredData.length === 0 && (
                    <div className="search-no-results">No foods found matching "{value}"</div>
                )}
                
                {filteredData.map((item) => (
                    <div className="search-result-item" key={item.id}>
                        <Food 
                            item={item}
                            showRemoveButton={false}
                        />
                        <button 
                            onClick={() => selectedMeal(item)}
                            disabled={!current}
                        >
                            Add to {current || 'meal'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;