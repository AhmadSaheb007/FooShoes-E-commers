import React from 'react';
import Counter from './Counter';
import ImageCarousel from './ImageCarousel';

const ProductDetails = (props) => {
    return (
        <div>
            <div className="bg-brown-black text-light">
                <div className="container">
                    <div className="row mx-auto py-5">
                        <div className="col-lg-6">
                            {/* <img className='img-responsive rounded-2 w-100' src="/src/assets/img/HomeBlackShoe.png" alt="" /> */}
                            <ImageCarousel/>
                        </div>
                        <div className="col-lg-4 text-start">
                            <h1 className="fw-meduim">Home Black Shoe</h1>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <Counter/>
                                    <button className='btn btn-dark text-dark px-4 py-2 rounded-2 bg-peast-greenn addToCartBtn mx-2'>Add to Cart</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;