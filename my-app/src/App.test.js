import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('bruh');
  expect(linkElement).toBeInTheDocument();
});

test('checks for the google link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('bruh');
  expect(linkElement.href).toContain("google.com");
});
