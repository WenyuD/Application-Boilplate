import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('Dashboard runs fine', () => {
  const { getByText } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const linkElement = getByText(/Log Out/i);
  expect(linkElement).toBeInTheDocument();
});
