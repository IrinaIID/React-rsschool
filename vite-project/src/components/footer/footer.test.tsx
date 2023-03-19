import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Footer from './footer';

describe("Footer test", () => {
    test("should show name of links", () => {

        render(<Footer />);

        expect(screen.getByText(/IrinaIID/i)).toBeDefined();
        expect(screen.getByText(/React course RS SChool/i)).toBeDefined()
    })
})