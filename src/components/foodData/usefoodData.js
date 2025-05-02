import { useQuery } from '@tanstack/react-query';

const useFoodData = () => {
    return useQuery({
        queryKey: ['foodData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/foodData');
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();          
        }
    });
};

export default useFoodData