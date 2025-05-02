import useFoodData from '../foodData/usefoodData.js';

const Meal = () => {
    const { data, isLoading, error } = useFoodData();

    console.log(data)

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
        {data.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    );
}

export default Meal;