import { useLocation, useNavigate } from 'react-router-dom';

export default function PhotosInfo() {
    const navigate = useNavigate();
    const { state: route } = useLocation();

    if (!route) return <p>Route data missing.</p>;

    return (
        <div style={{maxWidth: 480, margin: '0 auto', backgroundColor: '#f9f9f9'}}>
            <div className="category-header">
                <button className="back-button" onClick={() => navigate('/photos-category')}>←</button>
                <h2 className="header-title">Ut auctor</h2>
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
                    Donec vel diam a eros elementum tristique.
                    Curabitur ex lorem, luctus non ligula et, fringilla dictum ipsum. Etiam pretium justo lorem, quis
                    euismod mi gravida nec.
                </p>

                <h3 style={{marginTop: '20px'}}>Stops ({route.stops}):</h3>
                <div className="visited-stops">
                    <ul>
                        <li>Ut auctor</li>
                        <li>Aenean pretium</li>
                        <li>Nunc auctor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
