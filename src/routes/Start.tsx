import { useNavigate } from 'react-router-dom';
import './Start.css';

export default function Start() {
    const navigate = useNavigate();

    const categories = [
        { title: "Nature & Chill", duration: "2 hours" },
        { title: "Culture & History", duration: "1 hour" },
        { title: "Adventure & Active", duration: "3-4 hours" },
        { title: "Food & Drink", duration: "1-2 hours" },
        { title: "Art & Workshops", duration: "2-3 hours" },
        { title: "Hidden Photo Spots", duration: "1-2 hours" },
    ];

    return (
        <div className="background-wrapper">
            <div className="background-overlay" />
            <div className="content">
                <div className="container">
                    <header className="header">
                        <img src="/wappen.png" alt="Logo" className="logo" />
                        <h1 className="title">Mittweida Day-Trip Guide</h1>
                    </header>

                    <p className="question">What do you want to see in Mittweida?</p>

                    <div className="categories-grid">
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                className="category-card"
                                onClick={() => {
                                    if (cat.title === "Nature & Chill") {
                                        navigate('/forest-category');
                                    }
                                    if (cat.title === "Culture & History") {
                                        navigate('/culture-category');
                                    }
                                    if (cat.title === "Adventure & Active") {
                                        navigate('/adventure-category');
                                    }
                                    if (cat.title === "Food & Drink") {
                                        navigate('/food-category');
                                    }
                                    if (cat.title === "Art & Workshops") {
                                        navigate('/art-category');
                                    }
                                    if (cat.title === "Hidden Photo Spots") {
                                        navigate('/photos-category');
                                    }
                                }}
                                style={{ cursor: cat.title === "Nature & Chill" ? 'pointer' : 'default' }}
                            >
                                <h3>{cat.title}</h3>
                                <p>{cat.duration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
