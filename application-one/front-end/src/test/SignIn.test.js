import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../components/Login/SignIn';

test('SignIn runs fine', () => {
  const { getByText } = render(<SignIn />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
