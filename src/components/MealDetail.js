import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { apiKey } from '../api/apiKey';

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
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`)
      .then((res) => res.json())
      .catch((error) => error);
    this.setState({
      meal: response,
    });
  }

  render() {
    const { meal } = this.state;

    const mealDetails = meal ? (
      <div>
        <h2 className="text-center my-5">{meal.title}</h2>
        <div className="d-flex justify-content-around">
          <img src={meal.image} alt={meal.title} />
          <p>
            Servings:
            {meal.servings}
          </p>
          <p>{meal.summary}</p>
          <p>{meal.ingredient}</p>
        </div>
      </div>
    ) : (<div>Loading post...</div>);
    return (
      <div>
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
