import { useLocation, useNavigate } from 'react-router-dom';

export default function ForestInfo() {
    const navigate = useNavigate();
    const { state: route } = useLocation();

    if (!route) return <p>Route data missing.</p>;

    return (
        <div style={{ maxWidth: 480, margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <div className="category-header">
                <button className="back-button" onClick={() => navigate('/forest-category')}>←</button>
                <h2 className="header-title">Forest Trail</h2>
            </div>

            <div style={{padding: '20px'}}>
                <img
                    src={route.image}
                    alt={route.title}
                    style={{width: '100%', borderRadius: '12px', margin: '16px 0'}}
                />
                <p>{route.distance} • {route.duration} • {route.stops} stops</p>
                <p><span style={{color: '#f5b100'}}>{route.rating} ★★★★★</span> ({route.reviews})</p>

                <h3 style={{marginTop: '24px'}}>About this route:</h3>
                <p>
                    Discover a {route.distance} loop through the mixed forest near Mittweida. You’ll pass scenic spots
                    including a wooden overlook, stone bridge, meadows, and a cozy cabin before looping back.
                </p>

                <h3 style={{marginTop: '20px'}}>Stops ({route.stops}):</h3>
                <div className="visited-stops">
                    <ul>
                        <li>Forest Clearing Overlook</li>
                        <li>Mühlgraben Crossing</li>
                        <li>Ancient Beech Grove</li>
                        <li>Picnic Meadow & Bench</li>
                        <li>Herbalist’s Cabin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
