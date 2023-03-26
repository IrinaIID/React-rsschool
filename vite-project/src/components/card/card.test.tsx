import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';
import Img from '../../assets/img/cards/aws.webp'

describe('Card test', () => {
  test('render test of Card', () => {
    render(<Card name={'a'} year={'2023'} picture={Img}/>);
    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByText(/name/i)).toBeDefined();
    expect(screen.getByText(/year/i)).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });
});