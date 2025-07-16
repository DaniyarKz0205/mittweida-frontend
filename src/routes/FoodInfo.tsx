import { useLocation, useNavigate } from 'react-router-dom';

export default function FoodInfo() {
    const navigate = useNavigate();
    const { state: route } = useLocation();

    if (!route) return <p>Route data missing.</p>;

    return (
        <div style={{ maxWidth: 480, margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <div className="category-header">
                <button className="back-button" onClick={() => navigate('/food-category')}>←</button>
                <h2 className="header-title">Aenean elit tellus</h2>
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
                    Ipsum augue, non sagittis nibh feugiat eu. Sed at orci auctor nulla vulputate euismod.
                    Nulla sit amet tortor at felis faucibus luctus. Maecenas eros ante, efficitur ut convallis vitae,
                    luctus nec odio.
                </p>

                <h3 style={{marginTop: '20px'}}>Stops ({route.stops}):</h3>
                <div className="visited-stops">
                    <ul>
                        <li>Aenean elit telluse</li>
                        <li>Donec ut turpis tellus</li>
                        <li>Sed vel ullamcorper tellus</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
