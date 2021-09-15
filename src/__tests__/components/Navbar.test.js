import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import Navbar from '../../components/Navbar/Navbar';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});

it('matches Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains Meals logo', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(screen.getByText('Meals')).toBeInTheDocument();
});
