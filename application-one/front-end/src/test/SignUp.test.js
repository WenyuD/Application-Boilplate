import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../components/Login/SignUp';

test('SignUp runs fine', () => {
  const { getByText } = render(<SignUp />);
  const linkElement = getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
