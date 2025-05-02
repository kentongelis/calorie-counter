import './App.css';
import Meal from '../components/Meal/Meal.js';

const App = () => {
  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <h2>Breakfast</h2>
      <h2>Dinner</h2>
      <Meal />
    </div>
  );
}

export default App;
