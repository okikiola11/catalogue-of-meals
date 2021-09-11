import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Meal from '../../components/Meal';

afterEach(cleanup);

const meal = {
  title: 'Potatoes Sandwich',
  image: 'sample.jpg',
};

describe('Meal', () => {
  it('matches Meal snapshot', () => {
    const meals = renderer.create(<Meal meal={meal} />);
    const tree = meals.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Meal meal={meal} />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a title correctly', () => {
    const { queryAllByTestId } = render(
      <Meal meal={meal} />,
    );
    const title = queryAllByTestId('title');
    expect(title[0]).not.toBeFalsy();
  });

  it('renders a title', () => {
    const { queryAllByTestId } = render(
      <Meal meal={meal} />,
    );
    const title = queryAllByTestId('title');
    expect(title[0]).toBeTruthy();
  });

  it('renders an image correctly', () => {
    const { queryAllByTestId } = render(
      <Meal meal={meal} />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).not.toBeFalsy();
  });
});
