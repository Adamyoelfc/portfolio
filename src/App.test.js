import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks', () => {
  const createTimeline = () => {
    const chain = {};
    chain.fromTo = jest.fn(() => chain);
    return chain;
  };

  return {
    gsap: {
    registerPlugin: jest.fn(),
    context: (callback) => {
      callback();
      return { revert: jest.fn() };
    },
    timeline: createTimeline,
    fromTo: jest.fn(),
    set: jest.fn(),
    to: () => ({ pause: jest.fn(), resume: jest.fn(), kill: jest.fn() }),
    },
    ScrollTrigger: {
      config: jest.fn(),
      refresh: jest.fn(),
    },
  };
});

jest.mock('./myGa', () => jest.fn());

test('renders the professional software engineering positioning', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /software engineer/i })).toBeInTheDocument();
  expect(screen.getByText(/daniels corporation/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', expect.stringContaining('.pdf'));
});
