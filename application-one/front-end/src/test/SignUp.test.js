import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignUp from '../components/Login/SignUp';

test('SignUp runs fine', () => {
  const { getByText } = render(
    <Router>
      <SignUp />
    </Router>
  );
  const linkElement = getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
