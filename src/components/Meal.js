import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => {
  const { title, image } = meal;

  return (
    <div>
      <div className="meal-container">
        <div className="title">{title}</div>
        <div className="img-container">
          <img src={image} alt={title} />
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
