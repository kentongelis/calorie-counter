import './App.css';
import MealsList from '../MealsList/MealsList.js';
import Search from '../Search/Search.js';
import Calorie from '../Calorie/Calorie.js';
import Scheduler from '../Scheduler/Scheduler.js';

const App = () => {
  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <Calorie />
      <div className="main">
        <div className="left">
          <MealsList />
        </div>
        <div className="right">
          <Search />
        </div>
      </div>
      <Scheduler />
    </div>
  );
}

export default App;
