import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import MealFilter from '../../components/MealFilter';

afterEach(cleanup);

it('matches MealFilter snapshot', () => {
  const tree = renderer
    .create(<MealFilter filterType={() => 'mock'} filter="Chicken" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
