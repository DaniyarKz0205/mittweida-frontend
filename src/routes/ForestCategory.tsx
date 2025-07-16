import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import RoutingControl from './RoutingControl';
import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import './category.css';

type RouteType = {
    id: number;
    title: string;
    coords: [number, number];
    distance: string;
    duration: string;
    stops: number;
    rating: number;
    reviews: number;
    image: string;
};

const fakeRoutes: RouteType[] = [
    {
        id: 1,
        title: 'Forest Trail',
        coords: [50.99706049885302, 12.940192368613726],
        distance: '3.2 km',
        duration: '2h',
        stops: 5,
        rating: 4.7,
        reviews: 64,
        image: '/forest.jpg',
    },
    {
        id: 2,
        title: 'Hilltop Vista',
        coords: [50.97780670556607, 12.96285363369599],
        distance: '2.8 km',
        duration: '1.5h',
        stops: 4,
        rating: 4.9,
        reviews: 88,
        image: '/hilltop.jpg',
    },
];

const fixedUserLocation: [number, number] = [50.98762764037526, 12.960274463819262];

const userIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function MapUpdater({ selected }: { selected: RouteType | null }) {
    const map = useMap();
    map.setView(selected?.coords || fixedUserLocation, 12);
    return null;
}

export default function ForestCategory() {
    const [selected, setSelected] = useState<RouteType | null>(null);
    const navigate = useNavigate();

    const forestTrail = fakeRoutes.find(r => r.id === 1);
    const hilltopVista = fakeRoutes.find(r => r.id === 2);

    return (
        <div style={{
            maxWidth: 480,
            margin: '0 auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: '#f2f2f2',
        }}>
            <div className="category-header">
                <button className="back-button" onClick={() => navigate('/')}>←</button>
                <h2 className="header-title">Nature & Chill Routes</h2>
            </div>

            <div style={{height: '300px', position: 'relative', zIndex: 1}}>
                <MapContainer style={{height: '100%', width: '100%'}}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={fixedUserLocation} icon={userIcon}/>
                    {!selected && fakeRoutes.map(route => (
                        <Marker
                            key={route.id}
                            position={route.coords}
                            eventHandlers={{
                                click: () => setSelected(route)
                            }}
                        />
                    ))}
                    {selected && (
                        <>
                            <Marker position={selected.coords}/>
                            <RoutingControl waypoints={[fixedUserLocation, selected.coords]}/>
                        </>
                    )}
                    <MapUpdater selected={selected}/>
                </MapContainer>
            </div>

            <div style={{
                overflowY: 'auto',
                flex: 1,
                padding: '30px',
                backgroundColor: '#f2f2f2',
            }}>

                {forestTrail && (
                    <div
                        onClick={() => setSelected(forestTrail)}
                        style={{
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            borderRadius: '16px',
                            marginBottom: '16px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            paddingBottom: selected?.id === forestTrail.id ? '16px' : '0px'
                        }}
                    >
                        <img src={forestTrail.image} alt={forestTrail.title}
                             style={{width: '100%', height: 140, objectFit: 'cover'}}/>
                        <div style={{padding: '12px 16px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h3 style={{margin: 0}}>{forestTrail.title}</h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/forest-info', {state: forestTrail});
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        color: '#333',
                                        marginLeft: '8px'
                                    }}
                                    aria-label="More info"
                                >
                                    ⓘ
                                </button>
                            </div>
                            <p>{forestTrail.distance} • {forestTrail.duration} • {forestTrail.stops} stops</p>
                            <p><span style={{color: '#f5b100'}}>{forestTrail.rating} ★★★★★</span> ({forestTrail.reviews})
                            </p>
                            {selected?.id === forestTrail.id && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/forest-1navigate');
                                    }}
                                    style={{
                                        marginTop: '10px',
                                        backgroundColor: '#f2c57c',
                                        padding: '12px',
                                        width: '100%',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Start →
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {hilltopVista && (
                    <div
                        onClick={() => setSelected(hilltopVista)}
                        style={{
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            borderRadius: '16px',
                            marginBottom: '16px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            paddingBottom: selected?.id === hilltopVista.id ? '16px' : '0px'
                        }}
                    >
                        <img src={hilltopVista.image} alt={hilltopVista.title}
                             style={{width: '100%', height: 140, objectFit: 'cover'}}/>
                        <div style={{padding: '12px 16px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h3 style={{margin: 0}}>{hilltopVista.title}</h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/hilltop-info', {state: forestTrail});
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        color: '#333',
                                        marginLeft: '8px'
                                    }}
                                    aria-label="More info"
                                >
                                    ⓘ
                                </button>
                            </div>
                            <p>{hilltopVista.distance} • {hilltopVista.duration} • {hilltopVista.stops} stops</p>
                            <p><span
                                style={{color: '#f5b100'}}>{hilltopVista.rating} ★★★★★</span> ({hilltopVista.reviews})
                            </p>
                            {selected?.id === hilltopVista.id && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/hilltop-1navigate');
                                    }}
                                    style={{
                                        marginTop: '10px',
                                        backgroundColor: '#f2c57c',
                                        padding: '12px',
                                        width: '100%',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Start →
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
