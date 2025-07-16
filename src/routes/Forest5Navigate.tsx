import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import RoutingControl from "./RoutingControl.tsx";
import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


const fourthStopLocation: [number, number] = [50.99714059544195, 12.920669265560024];

const userIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const nextStop = {
    title: 'Herbalist’s Cabin',
    coords: [51.002665411855226, 12.898884774954412] as [number, number],
    distance: '1.1 km',
    eta: '15:11',
    duration: '16 min',
};

function MapFocus({ coords }: { coords: [number, number] }) {
    const map = useMap();
    map.setView(coords, 13);
    return null;
}

export default function Forest5Navigate() {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', top: 56, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                <MapContainer style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={fourthStopLocation} icon={userIcon} />
                    <Marker position={nextStop.coords} />

                    <RoutingControl waypoints={[fourthStopLocation, nextStop.coords]} />

                    <MapFocus coords={nextStop.coords} />
                </MapContainer>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '64px',
                    backgroundColor: '#222',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    fontSize: '16px'
                }}>
                <button
                    onClick={() => navigate('/forest-4stop')}
                    style={{
                        position: 'absolute',
                        left: 16,
                        background: 'none',
                        border: 'none',
                        color: 'red',
                        fontSize: '45px',
                        cursor: 'pointer'
                    }}>
                    ✕
                </button>
                <h2 style={{ margin: 0 }}>{nextStop.title}</h2>
                <div style={{ width: 24 }} />
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    padding: '16px',
                    paddingBottom: '36px',
                    backgroundColor: 'white',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.2)',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                }}>
                <div style={{
                    width: '36px',
                    height: '4px',
                    backgroundColor: '#ccc',
                    borderRadius: '2px',
                    margin: '0 auto 12px',
                }}/>
                <div>
                    <p style={{margin: 0, fontWeight: 'bold'}}>{nextStop.duration}</p>
                    <p style={{margin: 0}}>{nextStop.distance} • {nextStop.eta}</p>
                </div>

                <button
                    onClick={() => navigate('/forest-5stop')}
                    style={{
                        marginTop: '16px',
                        width: '100%',
                        padding: '14px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#f2f2f2',
                        borderRadius: '12px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        cursor: 'pointer'
                    }}
                >
                    I’ve Arrived
                </button>
            </div>
        </div>
    );
}
