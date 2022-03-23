import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  // const linkElement = screen.getByDisplayValue(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
