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
    const apiKey = process.env.REACT_APP_API_KEY;
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
          <div>
            <img className="img-container__meal" src={meal.image} alt={meal.title} />
          </div>
          <div>
            <p>
              Servings:
              {meal.servings}
            </p>
            <p>{meal.summary}</p>
            <p>{meal.ingredient}</p>
          </div>
        </div>
      </div>
    ) : (<div className="d-flex justify-content-center">Loading post...</div>);
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
