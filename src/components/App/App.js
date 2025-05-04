import './App.css';
import Meal from '../Meal/Meal.js';
import Search from '../Search/Search.js';
import Calorie from '../Calorie/Calorie.js';

const App = () => {
  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <Calorie />
      <Search />
      <Meal mealName="Breakfast"/>
      <Meal mealName="Lunch"/>
      <Meal mealName="Dinner"/>
    </div>
  );
}

export default App;
