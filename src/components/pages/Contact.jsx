import React from 'react';
import Footer from './../inc/Footer';

function Contact(){
    return(
        <div>
            <div className='contactBg'>
                <div className="container ">
                <div className="row">
                    <div className="col-lg-6 text-center m-auto bg-frosted py-5">
                        <p>DEVELOPED BY</p>
                        <p className='fs-2'>SHADMAN AHMAD ABEER</p>

                        <p><a href="mailto:ahmad.saheb007.com">ahmad.saheb007.com</a></p>
                        <p><a href="https://github.com/AhmadSaheb007">AhmadSaheb007</a></p>
                        <p className='fs-6'>SHADMAN AHMAD ABEER</p>
                    </div>
                </div>
                </div>

           
            </div>

            <Footer/>
        </div>
    );
}

export default Contact;