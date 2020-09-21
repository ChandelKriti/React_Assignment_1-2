import React from 'react';
import { render } from '@testing-library/react';
import Hello from './component/hello';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
