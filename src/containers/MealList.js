import React from 'react';
import Meal from '../components/Meal';

class MealList extends React.Component {
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
    return (
      <div>
        <h1>meals</h1>
      </div>
    );
  }
}

export default MealList;
