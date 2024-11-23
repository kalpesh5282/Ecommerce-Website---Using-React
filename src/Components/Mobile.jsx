import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import m1 from '../images/Mobiles_img/m1.jpg'
import m2 from "../images/Mobiles_img/lava.avif";
import m3 from "../images/Mobiles_img/oneplus.avif";
import m4 from "../images/Mobiles_img/m4.4.jpg";
import m5 from "../images/Mobiles_img/samsun.avif";
import m6 from "../images/Mobiles_img/realme.webp";
import m7 from "../images/Mobiles_img/m7.webp";
import m8 from "../images/Mobiles_img/mobile8.webp";
import m9 from "../images/Mobiles_img/mobile9.jpeg";

function Mobile(){
    const products = [
        { id: 7, name: 'Redmi 13C', image: m1, description: 'Stardust Black, 6GB RAM, 128GB Storage' },
        { id: 8, name: 'Lava(128GB Storage) ', image: m2, description: 'AG Glass Bac T616 Octacore Processor|' },
        { id: 9, name: 'Oneplus Nord CE4', image: m3, description: 'Celadon Marble, 8GB RAM, 128Gb Storage)' },
        { id: 10, name: 'OnePlus 11R 5G', image: m4, description: 'Galactic Silver, 8GB RAM, 128GB Storage' },
        { id: 11, name: 'Samsung Galaxy M14', image: m5, description: '50MP Triple Cam | 5000mAh Battery' },
        { id: 12, name: 'realme 12 Pro 5G', image: m6, description: 'Submarine Blue, 8GB RAM 256 GB Storage' },
        { id: 13, name: 'Redmi 13C 5G', image: m7, description: 'Startrail Green, 4GB RAM, 128GB Storage)' }, 
        { id: 14, name: 'iQOO Z9 8GB RAM,128GB', image: m8, description: ' 44W Charger in The Box' },
        { id: 15, name: 'samsung Galaxy A35 5G', image: m9, description: ' 8GB RAM, 128GB Storage' },

    ];
    return(
        <div className="hero-section">
        <h1 className="hero-title">Mobiles</h1>
        <div className="card-container">
            {products.map(product => (
                <Link to={`/product/${product.id}`} className="card-link" key={product.id}>
                    <div className="card">
                        <img src={product.image} alt={product.name} className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-description">{product.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>

    );
}
export default Mobile;