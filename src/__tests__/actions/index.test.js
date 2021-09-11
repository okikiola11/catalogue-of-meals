import { searchMeals, SEARCH_MEALS } from '../../actions/index';

describe('Actions', () => {
  it('contains SEARCH_MEAL variable', () => {
    expect(SEARCH_MEALS).toBe('SEARCH_MEALS');
  });

  it('requires searchMeals returns an object with payload', () => {
    const data = searchMeals('rice');
    expect(data.payload).toBe('rice');
  });

  it('searchMeals returns an object with type', () => {
    const data = searchMeals('rice');
    expect(data.type).toBe('rice');
  });
});
