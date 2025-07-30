import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product.jsx';
import Contact from './pages/Contact/Contact';
import ProductDetails from "./pages/Product/ProductDetails"; // 👈 Add this line

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* 👈 Add this line */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
