import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductsPage from './../pages/ProductsPage';
import Home from './../pages/Home';
import ProductDetails from './ProductDetails';
import Login from './../pages/Login';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Header from './Header';
import Signup from './../pages/Signup';


function Navber() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-transparent">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navber;
