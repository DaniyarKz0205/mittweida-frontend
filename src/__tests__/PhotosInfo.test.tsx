import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PhotosInfo from '../routes/PhotosInfo';

describe('PhotosInfo Component', () => {
    it('renders the "About this route" section', () => {
        const mockRoute = {
            title: 'Ut auctor',
            image: '/mock-image.jpg',
            distance: '5 km',
            duration: '2h',
            stops: 3,
            rating: 4.7,
            reviews: 42,
        };

        render(
            <MemoryRouter initialEntries={[{ pathname: '/photos-info', state: mockRoute }]}>
                <Routes>
                    <Route path="/photos-info" element={<PhotosInfo />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('About this route:')).toBeInTheDocument();
    });
});
