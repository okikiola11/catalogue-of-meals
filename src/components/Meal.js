import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => {
  const { title, image } = meal;

  return (
    <div>
      <div className="image">My image</div>
      <div>{title}</div>
      <img src={image} alt={title} />
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
