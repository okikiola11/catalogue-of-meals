import { combineReducers } from 'redux';

import filterReducer from './filter';
import mealsReducer from './meal';

const rootReducer = combineReducers({
  meals: mealsReducer,
  filter: filterReducer,
});

export default rootReducer;
