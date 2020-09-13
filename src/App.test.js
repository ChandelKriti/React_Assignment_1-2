import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Employee-List/i);
    expect(linkElement).toBeInTheDocument();
  });

test ('App Component is present or not', () => {
    expect(<App/>).toBeDefined()
});