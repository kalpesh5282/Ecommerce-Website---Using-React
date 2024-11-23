import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import ProductDetail from './Components/ProductDetail';
import Mobile from './Components/Mobile';
import Laptops from './Components/Laptop';
import About from './Components/About';
import Contact from './Components/Contact';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart'; // Import the Cart component
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/Mobiles" element={<Mobile />} />
                    <Route path="/Laptops" element={<Laptops />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
