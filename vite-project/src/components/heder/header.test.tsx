import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Header test', () => {
  test('should show name of links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
