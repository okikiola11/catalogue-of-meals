import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => {
  const { title, image } = meal;

  return (
    <div>
      <div className="meal-container">
        <h3 data-testid="title" className="title">{title}</h3>
        <div className="img-container">
          <img data-testid="image" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Meal;
