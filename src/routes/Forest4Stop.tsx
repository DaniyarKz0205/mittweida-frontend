import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css';

const currentStop = {
    title: 'Picnic Meadow & Bench',
    number: 4,
    total: 5,
    coords: [50.99714059544195, 12.920669265560024] as [number, number],
    distanceFromStart: '2.1 km',
    description: [
        'A sunny clearing with wildflowers and birdsong,',
        'Perfect spot to sit, snack, and recharge.'
    ],
};

const nextStop = {
    title: 'Herbalist’s Cabin',
    distance: '1.1 km',
    estimate: '≈16min walk',
};

export default function Forest4Stop() {
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
                                    'Picnic Meadow & Bench',
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

                <button className="next-button" onClick={() => navigate('/forest-5navigate')}>
                    Next Stop
                </button>
            </div>
        </div>
    );
}
