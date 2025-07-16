import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css';

const currentStop = {
    title: 'Ancient Beech Grove',
    number: 3,
    total: 5,
    coords: [50.99569558260419, 12.930368133422409] as [number, number],
    distanceFromStart: '1.3 km',
    description: [
        'Step beneath the towering beech canopy,',
        'A quiet refuge wrapped in centuries of green.'
    ],
};

const nextStop = {
    title: 'Picnic Meadow & Bench',
    distance: '0.8 km',
    estimate: '≈12min walk',
};

export default function Forest3Stop() {
    const navigate = useNavigate();

    return (
        <div className="stop-wrapper">
            <div className="stop-header">
                <button
                    className="back-button"
                    onClick={() =>
                        navigate('/summary/forestTrail', {
                            state: {
                                visitedStops: [
                                    'Forest Clearing Overlook',
                                    'Mühlgraben Crossing',
                                    'Ancient Beech Grove',
                                ]
                            }
                        })
                    }
                >
                    ✕
                </button>
                <h2>{currentStop.title} {currentStop.number}/{currentStop.total}</h2>
            </div>

            <div className="stop-map">
                <MapContainer center={currentStop.coords} zoom={16} style={{height: '100%', width: '100%'}}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={currentStop.coords}/>
                </MapContainer>
            </div>

            <div className="stop-main">
                <div className="stop-content">
                    <div className="card">
                        <h3>{currentStop.title}</h3>
                        <p className="muted">Stop {currentStop.number} of {currentStop.total}</p>
                        <p>📍 {currentStop.distanceFromStart} from trailhead</p>
                    </div>

                    <div className="card">
                        {currentStop.description.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>

                    <div className="card">
                        <strong>Up Next:</strong>
                        <p>➡️ <b>{nextStop.title}</b></p>
                        <p>📏 {nextStop.distance} {nextStop.estimate}</p>
                    </div>
                </div>

                <button className="next-button" onClick={() => navigate('/forest-4navigate')}>
                    Next Stop
                </button>
            </div>
        </div>
    );
}
