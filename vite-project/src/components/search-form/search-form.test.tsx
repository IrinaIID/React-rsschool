import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './search-form';

describe('Search-form test', () => {
  test('should contain button', () => {
    render(
      <SearchForm
        setUrlForm={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('img')).toBeDefined();
  });

  // test('check clean input after click button', async () => {
  //   render(<SearchForm setUrlForm={function (arg: string): void {
  //     throw new Error('Function not implemented.');
  //   } } />);
  //   const btn = screen.getByRole('button');
  //   const input = screen.getByRole('textbox');
  //   await userEvent.type(input, 'rick');
  //   await userEvent.click(btn);
  //   expect(screen.getByDisplayValue('rick')).toBeDefined();
  // });
});
