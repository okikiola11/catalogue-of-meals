import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Meal from '../components/Meal';
import { searchMeals } from '../actions/index';

class MealList extends React.Component {
  async componentDidMount() {
    const apiKey = '05e1a9b06a95446fadf288a13281dcca';
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`)
      .then((res) => res.json())
      .catch((error) => error);
    console.log(response);
    this.fetchMeals(response.results);
  }

  fetchMeals = (meals) => {
    const { handleMealsSearch } = this.props;
    handleMealsSearch(meals);
  }

  render() {
    const { meals } = this.props;

    const mealList = meals.length ? (
      meals.map((meal) => (
        <div key={meal.id}>
          <Link to={`/${meal.id}`}>
            <Meal meal={meal} />
          </Link>
        </div>
      ))
    ) : (
      <div>No available meals </div>
    );

    return (
      <div>
        <h1>New recipe</h1>
        {mealList}
      </div>
    );
  }
}

MealList.propTypes = {
  handleMealsSearch: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
});

const mapDispatchToProps = (dispatch) => ({
  handleMealsSearch: (meals) => {
    dispatch(searchMeals(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
