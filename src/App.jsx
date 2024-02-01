import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navber from "./components/inc/Navber";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/pages/About";
import Header from "./components/inc/Header";
import ProductsPage from './components/pages/ProductsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return(

    <>
    <Header/>
    <Navber />
    <RouterProvider router={router} />

    
    </>
    

  );
  
}

export default App;
