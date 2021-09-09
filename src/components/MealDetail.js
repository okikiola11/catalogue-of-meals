import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MealDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: null,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.mealId;
    const apiKey = '05e1a9b06a95446fadf288a13281dcca';
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`)
      .then((res) => res.json())
      .catch((error) => error);
    console.log(response);
    this.setState({
      meal: response,
    });
  }

  render() {
    const { meal } = this.state;

    const mealDetails = meal ? (
      <div className="meal-container">
        <h2>{meal.title}</h2>
        <img src={meal.image} alt={meal.title} />
        <p>{meal.summary}</p>
        <p>{meal.spoonacularSourceUrl}</p>
      </div>
    ) : (<div>Loading post...</div>);
    return (
      <div>
        Details About Meal
        {mealDetails}
      </div>
    );
  }
}

MealDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      mealId: PropTypes.string,
    }),
  }).isRequired,
};

export default MealDetail;
