export const SEARCH_MEALS = 'SEARCH_MEALS';
export const FILTER_TYPE = 'FILTER_TYPE';

export const filterType = (type) => ({
  type: FILTER_TYPE,
  payload: type,
});

export const searchMeals = (meals) => ({
  type: SEARCH_MEALS,
  payload: meals,
});
