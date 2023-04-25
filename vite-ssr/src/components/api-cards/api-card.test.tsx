import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ApiCards from './api-cards';

describe('Search-form test', () => {
  test('should contain button', () => {
    render(
      <ApiCards
        isModal={function (): void {
          throw new Error('Function not implemented.');
        }}
        numCard={function (): void {
          throw new Error('Function not implemented.');
        }}
        picture={''}
        name={'name-mock'}
        species={'123'}
        id={1}
      />
    );
    expect(screen.getByText(/name-mock/i)).toBeDefined();
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
