import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateForm from './forms-page';
import { BrowserRouter } from 'react-router-dom';

describe('CreateForm test', () => {
  test('render test of CreateForm', () => {
    render(
      <BrowserRouter>
        <CreateForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/Create visitor card/i)).toBeDefined();
  });
});