import React from 'react';
import { TbChartDots3 } from "react-icons/tb";
// import Link from 'react-router-dom';
function Navber(){
    return(
        <div>

            <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">

                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>


                        <li className="nav-item">
                        <a className="nav-link" href="/blogs">Blogs</a>
                        </li>


                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        
                        
                    </ul>

                    </div>
                </div>
                </nav>
            </div>
            
        </div>
    );
}

export default Navber;