import React from 'react';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';

class MealList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    };
  }

  async componentDidMount() {
    const apiKey = '05e1a9b06a95446fadf288a13281dcca';
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`)
      .then((res) => res.json())
      .catch((error) => error);
    console.log(response);
    this.setState({
      meals: response.results,
    });
  }

  render() {
    const { meals } = this.state;

    const mealList = meals.map((meal) => (
      <div key={meal.id}>
        <Link to={`/${meal.id}`}>
          <Meal meal={meal} />
        </Link>
      </div>
    ));
    return (
      <div>
        <h1>New recipe</h1>
        {mealList}
      </div>
    );
  }
}

export default MealList;
