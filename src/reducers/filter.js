import { FILTER_TYPE } from '../actions';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
