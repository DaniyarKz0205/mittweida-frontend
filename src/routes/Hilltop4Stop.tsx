import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './stop.css';

const currentStop = {
    title: 'Vestibulum ornare',
    number: 4,
    total: 4,
    coords: [50.97377369926779, 12.940580534142688] as [number, number],
    distanceFromStart: '0.6 km',
    description: [
        'Proin commodo ultrices tellus, non ultricies ipsum malesuada non. Curabitur vehicula lorem vel orci malesuada gravida.'
    ],
};

const nextStop = {
    title: "You've completed the Route",
    distance: '3.2 km',
    estimate: '≈2h 15m',
};

export default function Hilltop4Stop() {
    const navigate = useNavigate();

    return (
        <div className="stop-wrapper">
            <div className="stop-header">
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
                        <strong>This is the final stop</strong>
                        <p>➡️ <b>{nextStop.title}</b></p>
                        <p>📏 {nextStop.distance} {nextStop.estimate}</p>
                    </div>
                </div>

                <button
                    className="next-button"
                    onClick={() =>
                        navigate('/summary/hilltopVista', {
                            state: {
                                visitedStops: [
                                    'Hilltop Vista',
                                    'Suspendisse ullamcorper',
                                    'In semper',
                                    'Vestibulum ornare'
                                ]
                            }
                        })
                    }
                >

                    Finish the Route
                </button>
            </div>
        </div>
    );
}
