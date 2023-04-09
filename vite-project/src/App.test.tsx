import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { data } from '../mocks/handlers';

describe('mocks App', () => {
  test('display name', async () => {
    render(<App />);
    await waitFor(() => {
      data.results.forEach((card) => {
        expect(screen.getByText(card.name)).toBeDefined();
      });
    });
  });
});

describe('App test', () => {
  test('App render test', () => {
    render(<App />);
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/forms/i)).toBeDefined();
  });
});
