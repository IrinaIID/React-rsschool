import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './search-form';

describe('Search-form test', () => {
  test('should contain button', () => {
    render(<SearchForm />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('img')).toBeDefined();
  });
});
