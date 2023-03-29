import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import VisitorCard from './visitor-card';
import Img from '../../assets/img/cards/aws.webp';

describe('VisitorCard test', () => {
  test('VisitorCard', () => {
    render(
      <VisitorCard name="a" date="2023" status="guest" gender="male" public="true" picture={Img} />
    );
    expect(screen.getByText(/2023/i)).toBeDefined();
    expect(screen.getByText(/guest/i)).toBeDefined();
    expect(screen.getByRole('img')).toBeDefined();
  });
});
