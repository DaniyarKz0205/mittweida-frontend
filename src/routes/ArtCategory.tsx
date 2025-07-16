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
        id: 6,
        title: 'Maecenas',
        coords: [50.984399271347044, 12.959866768098719],
        distance: '3.5 km',
        duration: '2.5h',
        stops: 3,
        rating: 4.6,
        reviews: 67,
        image: '/art.jpg',
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

export default function ArtCategory() {
    const [selected, setSelected] = useState<RouteType | null>(null);
    const navigate = useNavigate();

    const Maecenas = fakeRoutes.find(r => r.id === 6);

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
                <h2 className="header-title">Art & Workshops Routes</h2>
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

                {Maecenas && (
                    <div
                        onClick={() => setSelected(Maecenas)}
                        style={{
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            borderRadius: '16px',
                            marginBottom: '16px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            paddingBottom: selected?.id === Maecenas.id ? '16px' : '0px'
                        }}
                    >
                        <img src={Maecenas.image} alt={Maecenas.title}
                             style={{width: '100%', height: 140, objectFit: 'cover'}}/>
                        <div style={{padding: '12px 16px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h3 style={{margin: 0}}>{Maecenas.title}</h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/art-info', {state: Maecenas});
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
                            <p>{Maecenas.distance} • {Maecenas.duration} • {Maecenas.stops} stops</p>
                            <p><span style={{color: '#f5b100'}}>{Maecenas.rating} ★★★★★</span> ({Maecenas.reviews})
                            </p>
                            {selected?.id === Maecenas.id && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/art-1navigate');
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
