import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list item', () => {
  render(<App />);
  const textElement = screen.getByText(/search for a list of movies/i);
  expect(textElement).toBeInTheDocument();
});
