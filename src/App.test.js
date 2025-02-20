import { render, screen } from '@testing-library/react';
import App from './App';
import data from './assets/data'
import './setupTests';

test('make sure header is present', () => {
  render(<App />);
  const linkElement = screen.getByText(data.name);
  expect(linkElement).toBeInTheDocument();
});
