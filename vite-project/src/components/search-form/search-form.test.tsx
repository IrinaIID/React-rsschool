import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './search-form';
import userEvent from '@testing-library/user-event';

describe('Search-form test', () => {
  test('should contain button', () => {
    render(<SearchForm />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('img')).toBeDefined();
  });

  test('check clean input after click button', async () => {
    render(<SearchForm />);
    const btn = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'hello');
    await userEvent.click(btn);
    expect(screen.getByDisplayValue('')).toBeDefined();
  });
});
