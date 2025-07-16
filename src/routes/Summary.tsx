import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './summary.css';

export default function Summary({
    title,
    distanceKm,
    scheduledTimeMin,
    stopsCount,
    actualTimeMin,
    averagePace,
    elevationGainM,
    visitedStops,
    allStops,
    onSubmitFeedback
}: {
    title: string;
    distanceKm: number;
    scheduledTimeMin: number;
    stopsCount: number;
    actualTimeMin: number;
    averagePace: string;
    elevationGainM: number;
    visitedStops: string[];
    allStops: string[];
    onSubmitFeedback: (data: {
        review: string;
        rating: number;
    }) => void;
}) {
    const formatTime = (mins: number) => {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}h ${m}m`;
    };

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="summary-wrapper">
            <h2 className="summary-header">{title}</h2>

            <div className="summary-check">You’ve completed the Route!</div>
            <div className="summary-subtext">
                “{title}” • {distanceKm} km • {formatTime(scheduledTimeMin)} • {stopsCount} stops
            </div>

            <div className="info-box">
                <p>Actual time: <span style={{ color: '#1772c1' }}>{formatTime(actualTimeMin)}</span></p>
                <p>Average pace: <span style={{color: '#1772c1'}}>{averagePace}</span></p>
                <p>Total elevation gain:  <span style={{color: '#1772c1'}}>{elevationGainM}m</span></p>
            </div>

            <div className="visited-stops">
                <strong>Visited Stops:</strong>
                <ul>
                    {allStops.map((stop, index) => (
                        <li key={index}>
                            {stop} <span style={{ color: visitedStops.includes(stop) ? 'green' : 'crimson' }}>
                            {visitedStops.includes(stop) ? '✔' : '✘'}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="feedback-box">
                <label htmlFor="review">Tell us what you thought:</label>
                <div className="textarea-container">
                    <textarea
                        id="review"
                        rows={3}
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Type..."
                    />
                </div>
            </div>

            <div className="rating-stars">
                {[1, 2, 3, 4, 5].map(star => (
                    <span
                        key={star}
                        onClick={() => setRating(rating === star ? 0 : star)}
                        style={{
                            color: star <= rating ? 'gold' : 'lightgray'
                        }}
                    >★</span>
                ))}
            </div>

            <button
                className="submit-button"
                onClick={() => {
                    onSubmitFeedback({
                        review: reviewText,
                        rating
                    });
                    setShowPopup(true);
                }}
            >
                Submit Feedback & Finish
            </button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <p>Thanks for your feedback!</p>
                        <button className="popup-close" onClick={() => navigate('/')}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
