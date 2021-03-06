import React from 'react';
import PropTypes from 'prop-types';

const MealFilter = ({ filterType, filter }) => {
  const categories = [
    'Chicken',
    'Spaghetti',
    'Pizza',
    'Beef',
    'Fish',
  ];

  const handleFilterChange = (e) => {
    filterType(e.target.value);
  };

  return (
    <div>
      <select className="filter-meal" onChange={handleFilterChange} name="category" defaultValue={filter}>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

MealFilter.propTypes = {
  filterType: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default MealFilter;
