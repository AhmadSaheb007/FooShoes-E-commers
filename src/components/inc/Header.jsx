import React from 'react';
import { CiMenuKebab } from "react-icons/ci";
const Header = () => {
    return (
        <div className='bg-brown-black'>
            <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex ">
                    <a class="navbar-brand text-light fs-3 fw-medium " href="#"><p className='text-peast-greenn my-auto'>FOOSESHOES</p></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-light"><CiMenuKebab /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item px-3">
                        <a className="nav-link active  text-light" aria-current="page" href="/">Login</a>
                        </li>

                        <li className="nav-item px-3">
                        <a className="nav-link  text-light" href="/products">Sign up</a>
                        </li>
                        
                        
                    </ul>

                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;