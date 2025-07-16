import { useParams, useLocation } from 'react-router-dom';
import Summary from './Summary';
import { routesData } from './routesData';


export default function SummaryWrapper() {
    const { routeId } = useParams();
    const location = useLocation();
    const visitedStops: string[] = location.state?.visitedStops || [];

    const route = routesData[routeId as keyof typeof routesData];

    if (!route) return <p>Invalid route.</p>;

    return (
        <Summary
            title={route.title}
            distanceKm={route.distanceKm}
            scheduledTimeMin={route.scheduledTimeMin}
            stopsCount={route.stopsCount}
            actualTimeMin={135}
            averagePace="7min/km"
            elevationGainM={route.elevationGainM}
            visitedStops={visitedStops}
            allStops={route.stops}
            onSubmitFeedback={({ review, rating }) => {
                fetch('http://172.17.208.88:3000/reviews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        routeId: routeId,
                        review,
                        stars: rating,
                        timestamp: new Date().toISOString(),
                    }),
                })
                    .then(res => {
                        if (!res.ok) throw new Error('Network response was not ok');
                        return res.text();
                    })
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch(err => {
                        console.error('Failed to submit review:', err);
                    });
            }}

        />
    );
}
