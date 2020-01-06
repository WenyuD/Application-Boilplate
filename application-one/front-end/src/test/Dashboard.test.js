import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('Dashboard runs fine', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Log Out/i);
  expect(linkElement).toBeInTheDocument();
});
