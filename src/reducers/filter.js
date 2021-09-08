import { FILTER_TYPE } from '../actions/index';

const filterReducer = (state = 'Chicken', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
