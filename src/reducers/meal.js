import { SEARCH_MEALS } from '../actions/index';

const initialState = {
  meals: [
    {
      id: 1,
      name: 'Spaghetti',
      image: 'now',
      category: 'African',
    },
  ],
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
