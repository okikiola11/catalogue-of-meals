import { SEARCH_MEALS } from '../actions/index';

const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return action.payload;
    default:
      return [...state];
  }
};

export default mealsReducer;
