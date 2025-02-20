import { render, screen } from '@testing-library/react';
import App from './App';
import data from './assets/data'
import './setupTests';

test('make sure header is present', () => {
  render(<App />);
  const headerElement = screen.getByText(data.name);
  expect(headerElement).toBeInTheDocument();
});

test('make sure navigation is present', () => {
    render(<App />);
    for (const section in data.navigation) {
        const navigationElement = screen.getByText(data.navigation[section]);
        expect(navigationElement).toBeInTheDocument();
    }
});

test('make sure questions are present', () => {
  render(<App />);
    for (const section in data.questions) {
        for (const question of data.questions[section]) {
          const questionElement = screen.getByText(question[0]);
          expect(questionElement).toBeInTheDocument();
        }
    }
});