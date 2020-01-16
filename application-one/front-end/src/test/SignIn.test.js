import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../components/Login/SignIn';

test('SignIn runs fine', () => {
  const { getByText } = render(
    <Router>
      <SignIn />
    </Router>
  );
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
