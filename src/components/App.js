// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import '../App.css';
import MealsList from '../containers/MealList';
// import MealDetail from './MealDetail';

const App = () => (
  <div className="App">
    {/* <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MealsList} />
        <Route exact path="/meal/:mealId" component={MealDetail} />
      </Switch>
    </Router> */}
    <h1>CHICKEN</h1>
    <MealsList />
  </div>
);

export default App;
