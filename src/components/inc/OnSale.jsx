import React from 'react';

const OnSale = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-10">
                    <div className='sale-img'>
                        <img src={props.imgPath} className='img-responsive' alt="" />
                        <div className='onsale-btn col-lg-12'>
                            <button className='bg-black opacity-75 text-light py-3 px-5 rounded-2'>{props.btnTitle}</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default OnSale;