import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => {
  const { id, title, image } = meal;

  return (
    <div>
      <div className="image">My image</div>
      <div>{title}</div>
      <img src={image} alt={title} />
      <p>{id}</p>
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
