import { useNavigate } from 'react-router-dom';

export default function HilltopInfo() {
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: 480, margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <div className="category-header">
                <button className="back-button" onClick={() => navigate('/forest-category')}>←</button>
                <h2 className="header-title">Nature & Chill Routes</h2>
            </div>

            <div style={{padding: '20px'}}>
                <h2 style={{marginTop: '16px'}}>Hilltop Vista</h2>
                <img
                    src="/hilltop.jpg"
                    alt="Hilltop Vista"
                    style={{width: '100%', borderRadius: '12px', margin: '16px 0'}}
                />
                <p>2.8 km • 1.5h • 4 stops</p>
                <p><span style={{color: '#f5b100'}}>4.9 ★★★★★</span> (88)</p>

                <h3 style={{marginTop: '24px'}}>About this route:</h3>
                <p>
                    Climb up to panoramic views over Mittweida’s countryside. The trail begins in a meadow,
                    winds through flowering fields, and finishes at a scenic overlook with benches to relax.
                    Ideal for short hikes with rewarding vistas.
                </p>

                <h3 style={{marginTop: '20px'}}>Stops (4):</h3>
                <div className="visited-stops">
                    <ul>
                        <li>Wildflower Meadow</li>
                        <li>Shaded Birch Path</li>
                        <li>Panorama Point</li>
                        <li>Sunset Rock</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
