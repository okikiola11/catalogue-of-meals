import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';

import Meal from '../../components/Meal';

afterEach(cleanup);

const meal = {
  title: 'chicken & chips',
  image: 'image.jpg',
};

describe('Meal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Meal meal={meal} />, div);
  });

  it('matches Meal snapshot', () => {
    const meals = renderer.create(<Meal meal={meal} />);
    const tree = meals.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title correctly', () => {
    const { queryAllByTestId } = render(<Meal meal={meal} />);
    const title = queryAllByTestId('title');
    expect(title[0]).toBeTruthy();
  });

  it('renders image correctly', () => {
    const { queryAllByTestId } = render(<Meal meal={meal} />);
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders title correctly', () => {
    const { queryAllByTestId } = render(<Meal meal={meal} />);
    const title = queryAllByTestId('title');
    expect(title[0]).not.toBeFalsy();
  });

  it('renders image correctly', () => {
    const { queryAllByTestId } = render(<Meal meal={meal} />);
    const image = queryAllByTestId('image');
    expect(image[0]).not.toBeFalsy();
  });
});
