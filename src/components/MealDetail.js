import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MealDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match.params.meal_id;
    const apiKey = '05e1a9b06a95446fadf288a13281dcca';
    const response = fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`)
      .then((res) => res.json())
      .catch((error) => error);
    console.log(response);
  }

  render() {
    return (
      <div>meals details jsjsj</div>
    );
  }
}

MealDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meal_id: PropTypes.string,
    }),
  }).isRequired,
};

export default MealDetail;
