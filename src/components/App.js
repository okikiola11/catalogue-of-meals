import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import '../App.css';
import MealsList from '../containers/MealList';
import MealDetail from '../containers/MealDetail';

require('dotenv').config();

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MealsList} />
        <Route exact path="/:mealId" component={MealDetail} />
      </Switch>
    </Router>
  </div>
);

export default App;
