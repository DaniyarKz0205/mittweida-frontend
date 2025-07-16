import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css'

const currentStop = {
    title: 'Donec ut turpis tellus',
    number: 2,
    total: 3,
    coords: [50.99281417346836, 12.971539741835997] as [number, number],
    distanceFromStart: '0.2 km',
    description: [
        'Sed molestie eros nec pulvinar pulvinar.'
        ],
};

const nextStop = {
    title: 'Sed vel ullamcorper tellus',
    distance: '0.4 km',
    estimate: '≈5min walk',
};

export default function Food2Stop() {
    const navigate = useNavigate();

    return (
        <div className="stop-wrapper">
            <div className="stop-header">
                <button
                    className="back-button"
                    onClick={() =>
                        navigate('/summary/Aenean', {
                            state: {
                                visitedStops: [
                                    'Aenean elit tellus',
                                    'Donec ut turpis tellus',],
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

                <button className="next-button" onClick={() => navigate('/food-3navigate')}>
                    Next Stop
                </button>
            </div>
        </div>
    );
}
