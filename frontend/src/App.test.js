import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />));

test('Renders Header component', () => {
  const navBar = screen.getByText(/Navbar with text/i);
  expect(navBar).toBeInTheDocument();
});

test('Renders Todo container', () => {
  const todoContainer = screen.getByText(/TODO/i);
  expect(todoContainer).toBeInTheDocument();
})
