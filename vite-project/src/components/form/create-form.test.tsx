import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateForm from './create-form';
import userEvent from '@testing-library/user-event';

describe('CreateForm test', () => {
  test('render test of CreateForm', () => {
    render(<CreateForm />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/Name/i)).toBeDefined();
    expect(screen.getByText(/For public view/i)).toBeDefined();
    expect(screen.getByText(/Status/i)).toBeDefined();
  });

  test('check input for possible to write information', async () => {
    render(<CreateForm />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'hello');
    expect(screen.getByDisplayValue('hello')).toBeDefined();
  });

  test('check clean input after click button', async () => {
    render(<CreateForm />);
    const btn = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'hello');
    await userEvent.click(btn);
    expect(screen.getByDisplayValue('')).toBeDefined();
  });
});
