import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateForm from './create-form';

describe('CreateForm test', () => {
  test('render test of CreateForm', () => {
    render(<CreateForm />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/Name/i)).toBeDefined();
    expect(screen.getByText(/For public view/i)).toBeDefined();
    expect(screen.getByText(/Status/i)).toBeDefined();
  });
});
