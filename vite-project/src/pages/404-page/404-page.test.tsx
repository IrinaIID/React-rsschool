import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page404 from './404-page';
import { BrowserRouter } from 'react-router-dom';

describe('Page404 test', () => {
  test('render test of 404-page', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByText(/404/i)).toBeDefined();
    expect(screen.getByText(/return to/i)).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
