import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navber from "./components/inc/Navber";
import * as React from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import "./index.css";
import Header from "./components/inc/Header";
import Home from './components/pages/Home';
import ProductsPage from './components/pages/ProductsPage';
import Login from './components/pages/Login';
import ProductDetails from './components/inc/ProductDetails';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/products",
  //     element: <ProductsPage />,
  //   },

  //   {
  //     path: "/about",
  //     element: <About />,
  //   },

  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },

  //   {
  //     path: "/productDetails",
  //     element: <ProductDetails />,
  //   },

  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },

  //   {
  //     path: "/signup",
  //     element: <Signup />,
  //   },
  // ]);

  return(

    <>
    <Navber />

    
    </>
    

  );
  
}

export default App;
