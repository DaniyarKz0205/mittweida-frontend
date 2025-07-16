import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css'

const currentStop = {
    title: 'Ut auctor',
    number: 1,
    total: 3,
    coords: [51.00799225684178, 12.977633720686717] as [number, number],
    distanceFromStart: '0.2 km',
    description: 'Donec velit nulla, venenatis blandit lacus vitae.',
};

const nextStop = {
    title: 'Aenean pretium',
    distance: '0.4 km',
    estimate: '≈5min walk',
};

export default function Photos1Stop() {
    const navigate = useNavigate();

    return (
        <div className="stop-wrapper">
            <div className="stop-header">
                <button className="back-button" onClick={() => navigate('/photos-category')}>✕</button>
                <h2>{currentStop.title} {currentStop.number}/{currentStop.total}</h2>
            </div>

            <div className="stop-map">
                <MapContainer center={currentStop.coords} zoom={16} style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={currentStop.coords} />
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
                        <p>[Discover the raised wooden platform…]<br/>Perfect for sweeping treetop views.</p>
                    </div>

                    <div className="card">
                        <strong>Up Next:</strong>
                        <p>➡️ <b>{nextStop.title}</b></p>
                        <p>📏 {nextStop.distance} {nextStop.estimate}</p>
                    </div>
                </div>

                <button className="next-button" onClick={() => navigate('/photos-2navigate')}>
                    Next Stop
                </button>
            </div>
        </div>
    );
}
