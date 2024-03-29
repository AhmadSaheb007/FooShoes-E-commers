import React from 'react';
import Marquee from './../inc/Marquee';
import OnSale from './../inc/OnSale';
import Product from '../inc/Product';
import Footer from '../inc/Footer';
import Banner from '../inc/Banner';

function Home(){
    return(
        <div>
            <Banner/>
            <section>
            <Marquee/>
            <div className="bg-black">

                <div className="container py-4 d-flex justify-content-around">
                    <div className="row">
                        <div className="col-lg-4">
                        <OnSale btnTitle = "ON SALE" imgPath = "/src/assets/img/HomeSaleProduct.png"/>
                        </div>

                        <div className="col-lg-4">
                        <OnSale btnTitle = "ALL OFFERS" imgPath = "/src/assets/img/HomeOffers.png"/>
                        </div>

                        <div className="col-lg-4">
                        <OnSale btnTitle = "Must HAVE" imgPath = "/src/assets/img/HomeMustHave.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-bg pb-5">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-12">
                            <p className='fs-2 fw-medium'>New arrivals on FooShoes</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                        <Product itemName = "Golden Shoe" productImg = "/src/assets/img/HomeBuyProduct.png" price="$99.99"/>
                        </div>

                        <div className="col-lg-4">
                        <Product itemName = "Black Shoe"  productImg = "/src/assets/img/HomeBlackShoe.png"  price="$149.99"/>
                        </div>

                        <div className="col-lg-4">
                        <Product itemName = "Pink Shoe"  productImg = "/src/assets/img/HomeBuyProduct.png"  price="$199.99"/>
                        </div>

                    </div>


                    <div className="row py-4">
                        <div className="col-lg-12">
                            <p className='fs-2 fw-medium'>Best Seller of the Month</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                        <Product itemName = "Brown Shoe" productImg = "/src/assets/img/HomeBlackShoe.png" price="$99.99"/>
                        </div>

                        <div className="col-lg-4">
                        <Product itemName = "Green Shoe"  productImg = "/src/assets/img/HomeBuyProduct.png"  price="$149.99"/>
                        </div>

                        <div className="col-lg-4">
                        <Product itemName = "Pearl Shoe"  productImg = "/src/assets/img/HomeBuyProduct.png"  price="$199.99"/>
                        </div>

                    </div>


                </div>

            </div>

            <Footer/>

            

            </section>
            
            
        </div>
    );
}

export default Home;