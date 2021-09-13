import rootReducer from '../../reducers/index';

describe('Reducers', () => {
  it('serves as a function', () => {
    const data = rootReducer;
    expect(typeof data).toBe('function');
  });
});