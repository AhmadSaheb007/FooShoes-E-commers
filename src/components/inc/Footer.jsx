import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <div className=' bg-brown-black pt-5'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-light py-5">
                        <p className='fw-medium'>TEST WIDGET</p>
                        <p className='font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique excepturi eaque sint laborum molestias voluptas, vero tempore, aliquam voluptates repellendus deserunt! Ea temporibus non iste perspiciatis nostrum asperiores repellat ut reprehenderit illo magnam nam, laborum magni accusamus velit expedita quas aspernatur minima voluptatem laboriosam reiciendis quod. Sapiente, quisquam reiciendis!</p>
                    </div>

                    <div className="col-lg-4 text-light py-5">
                        <p className='fw-medium'> SEE HANDLES</p>
                        <p className='font-sm'><span className='text-peast-greenn'>@FOOSHOP</span> dolor sit amet consectetur adipisicing elit. Repudiandae similique excepturi eaque sint laborum molestias voluptas, vero tempore, aliquam
                        <br />
                        <br /> 
                        <span className='text-peast-greenn'>@voluptates</span> voluptates repellendus deserunt! Ea temporibus non iste perspiciatis nostrum asperiores repellat quas aspernatur minima voluptatem laboriosam reiciendis quod. Sapiente, quisquam reiciendis!</p>
                    </div>

                    <div className="col-lg-4 text-light py-5">
                        <p className='fw-medium'>MORE ITEMS</p>
                        <img src="/src/assets/img/HomeFooterPic.png" alt="" />
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;