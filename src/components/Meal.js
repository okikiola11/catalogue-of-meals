import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => {
  const { id, name, image } = meal;

  return (
    <div>
      <div className="image">My image</div>
      <div>{name}</div>
      <img src={image} alt={name} />
      <p>{id}</p>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Meal;
