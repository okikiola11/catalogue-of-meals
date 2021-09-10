import { SEARCH_MEALS } from '../actions/index';

const initialState = {
  meals: [{}],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return action.payload;
    default:
      return state;
  }
};

export default mealsReducer;
