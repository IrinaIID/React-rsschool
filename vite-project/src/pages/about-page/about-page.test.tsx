import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './about-page';
import { BrowserRouter } from 'react-router-dom';

describe('AboutPage test', () => {
  test('render test of AboutPage', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/course React/i)).toBeDefined();
  });
});
