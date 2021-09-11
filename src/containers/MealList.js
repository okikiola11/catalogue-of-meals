import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Meal from '../components/Meal';
import { searchMeals, filterType } from '../actions/index';
import MealFilter from '../components/MealFilter';

class MealList extends React.Component {
  async componentDidMount() {
    const { filter } = this.props;
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${filter}`)
      .then((res) => res.json())
      .catch((error) => error);
    this.fetchMeals(response.results);
  }

  async componentDidUpdate(prevProps) {
    const { filter } = this.props;
    const apiKey = process.env.REACT_APP_API_KEY;
    if (prevProps.filter !== filter) {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${filter}`)
        .then((res) => res.json())
        .catch((error) => error);
      this.fetchMeals(response.results);
    }
  }

  fetchMeals = (meals) => {
    const { handleMealsSearch } = this.props;
    handleMealsSearch(meals);
  }

  render() {
    const { meals, handleFilter, filter } = this.props;

    const mealList = meals.length ? (
      meals.map((meal) => (
        <div key={meal.id}>
          <Link to={`/${meal.id}`}>
            <Meal meal={meal} />
          </Link>
        </div>
      ))
    ) : (
      <div className="d-flex justify-content-center fontSize">No available meals </div>
    );

    return (
      <div>
        <div className="text-center my-5">
          <MealFilter filterType={handleFilter} filter={filter} />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {mealList}
        </div>
      </div>
    );
  }
}

MealList.propTypes = {
  handleMealsSearch: PropTypes.func.isRequired,
  meals: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleMealsSearch: (meals) => {
    dispatch(searchMeals(meals));
  },
  handleFilter: (filter) => {
    dispatch(filterType(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
