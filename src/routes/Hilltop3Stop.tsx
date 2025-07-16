import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css';

const currentStop = {
    title: 'In semper',
    number: 3,
    total: 4,
    coords: [50.97566525424888, 12.943359302632858] as [number, number],
    distanceFromStart: '0.6 km',
    description: [
        'Morbi sagittis feugiat purus quis blandit. Aliquam nisi lorem, tincidunt et congue eget, dignissim et mi.'
    ],
};

const nextStop = {
    title: 'Vestibulum ornare',
    distance: '0.7 km',
    estimate: '≈9min walk',
};

export default function Hilltop3Stop() {
    const navigate = useNavigate();

    return (
        <div className="stop-wrapper">
            <div className="stop-header">
                <button
                    className="back-button"
                    onClick={() =>
                        navigate('/summary/hilltopVista', {
                            state: {
                                visitedStops: [
                                    'Hilltop Vista',
                                    'Suspendisse ullamcorper',
                                    'In semper'
                                ],
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

                <button className="next-button" onClick={() => navigate('/hilltop-4navigate')}>
                    Next Stop
                </button>
            </div>
        </div>
    );
}
