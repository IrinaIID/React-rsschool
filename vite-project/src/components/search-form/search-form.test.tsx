import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './search-form';
import { BrowserRouter } from 'react-router-dom';

describe('Search-form test', () => {
  test('should contain button', () => {
    render(
      <BrowserRouter>
          <SearchForm text=""/>
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeDefined();
  });
});
