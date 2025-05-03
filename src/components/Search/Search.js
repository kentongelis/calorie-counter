import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Food from '../Food/Food.js'

const Search = () => {
    const [value, updateValue] = useState('');

    const { data, isLoading, error } = useQuery({
        queryKey: ['foodData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/foodData');
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();          
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)

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
                <Food 
                key={item.id}
                item={item} 
                />
            ))}
        </div>
    )
}

export default Search;