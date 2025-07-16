import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Summary from '../routes/Summary';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

describe('Summary Component', () => {
    const mockProps = {
        title: 'Forest Trail',
        distanceKm: 3.5,
        scheduledTimeMin: 45,
        stopsCount: 4,
        actualTimeMin: 40,
        averagePace: '8min/km',
        elevationGainM: 120,
        visitedStops: ['Stop 1', 'Stop 3'],
        allStops: ['Stop 1', 'Stop 2', 'Stop 3', 'Stop 4'],
        onSubmitFeedback: vi.fn(),
    };

    it('renders all summary data correctly', () => {
        render(
            <BrowserRouter>
                <Summary {...mockProps} />
            </BrowserRouter>
        );


        expect(screen.getByText('Forest Trail')).toBeInTheDocument();
        expect(screen.getByText(/3.5 km/i)).toBeInTheDocument();
        expect(screen.getByText(/45m/i)).toBeInTheDocument(); // Will show "0h 45m" in the component
        expect(screen.getByText(/4 stops/i)).toBeInTheDocument();
        expect(screen.getByText(/40m/i)).toBeInTheDocument();
        expect(screen.getByText('8min/km')).toBeInTheDocument();
        expect(screen.getByText(/120m/i)).toBeInTheDocument();
        expect(screen.getByText('Visited Stops: ')).toBeInTheDocument();
        mockProps.allStops.forEach(stop => {
            expect(screen.getByText(stop)).toBeInTheDocument();
        });
        expect(screen.getByText('Submit Feedback & Finish')).toBeInTheDocument();
    });
});
