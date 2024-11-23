// Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import mobile from '../images/mobile1.webp';
import laptop from '../images/laptop.jpeg';
import ipad from '../images/ipad.jpeg';
import smartwatch from '../images/smartwatch.jpeg';
import earphones from '../images/earphones.jpeg';
import powerbank from "../images/pow1.jpg";
import m8 from "../images/Mobiles_img/m8.jpg";
import m7 from "../images/Mobiles_img/m7.webp";
import m9 from "../images/Mobiles_img/m9.jpg";
import l1 from "../images/laptops_img/l1.jpg";
import l2 from '../images/laptops_img/l2.jpg'
import l3 from '../images/laptops_img/l3.jpg'
import l4 from '../images/laptops_img/l4.jpg'
import l5 from '../images/laptops_img/l5.jpg'
import l6 from '../images/laptops_img/l6.jpg'
import l7 from '../images/laptops_img/l7.jpg'
import l8 from '../images/laptops_img/l8.jpg'
import l9 from '../images/laptops_img/l9.jpg'



function Hero() {
    const products = [
        { id: 1, name: 'Mobile', image: mobile, description: 'Latest smartphone with advanced features.' },
        { id: 2, name: 'Laptop', image: laptop, description: 'Powerful and portable laptops for all needs.' },
        { id: 3, name: 'iPad', image: ipad, description: 'Versatile tablets for work and play. nice product' },
        { id: 4, name: 'Smartwatch', image: smartwatch, description: 'Keep track of your health and notifications.' },
        { id: 5, name: 'Earphones', image: earphones, description: 'High-quality sound and wireless convenience.' },
        { id: 6, name: 'Power Bank', image: powerbank, description: ' 18W Fast Power Delivery Charging ' },
      
        { id: 16, name: 'HP Laptop 15, 12Gen', image: l1, description: 'Graphics, Backlit Keyboard, Dual Speakers' },
        { id: 17, name: 'ASUS TUF F15 ', image: l2, description: 'Intel Core i5-11400H 11th Gen, 15.6-inch' },
        { id: 18, name: 'Dell 15 Thin & Light', image: l3, description: '16GB DDR4/512GB SSD/Intel UHD Graphics' },
        { id: 19, name: 'Lenovo IdeaPad Gaming 3 ', image: l4, description: ' Ryzen 5 5500H 15.6" (39.62cm) ' },
        { id: 20, name: 'Acer Aspire Lite 12th', image: l5, description: 'Windows 11 Home/8 GB RAM/512GB SSD' },
        { id: 21, name: 'HONOR MagicBook X16 Pro', image: l6, description: '13th Gen Intel Core i5-13420H ' },
        { id: 22, name: ' DELL Latitude 5490', image: l7, description: 'Core i5 8th Gen Laptop' }, 
        { id: 23, name: 'Dell Latitude 5270', image: l8, description: ' 6th Gen Intel Core i5 Thin & Light' },
        { id: 24, name: 'Dell G15-5530', image: l9, description: 'Intel Core i5-13450HX Processor' },
        { id: 13, name: 'Redmi 13C 5G', image: m7, description: 'Startrail Green, 4GB RAM, 128GB Storage)' }, 
        { id: 14, name: 'iQOO Z9 8GB RAM,128GB', image: m8, description: ' 44W Charger in The Box' },
        { id: 15, name: 'samsung Galaxy A35 5G', image: m9, description: ' 8GB RAM, 128GB Storage' },

    ];

    return (
        <div className="hero-section">
            <h1 className="hero-title">Our Products</h1>
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

export default Hero;
