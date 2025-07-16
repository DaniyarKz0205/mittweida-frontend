import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Start from '../routes/Start';

describe('Start categories', () => {
    it('renders the categories on the start page', () => {
        render(
            <BrowserRouter>
                <Start />
            </BrowserRouter>
        );

        const categories = [
            'Nature & Chill',
            'Culture & History',
            'Adventure & Active',
            'Food & Drink',
            'Art & Workshops',
            'Hidden Photo Spots',
        ];

        for (const category of categories) {
            expect(screen.getByText(category)).toBeInTheDocument();
        }
    });
});
