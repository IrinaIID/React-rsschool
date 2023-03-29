import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('App render test', () => {
    render(<App />);
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/forms/i)).toBeDefined();
  });
});
