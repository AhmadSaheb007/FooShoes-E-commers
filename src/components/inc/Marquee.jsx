import React from 'react';

const Marquee = () => {
    return (
        <div className='bg-brown-black'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">

                        <marquee behavior="" direction="">
                            <div className='row d-flex justify-content-between pb-2'>
                                <div className='col-lg-2 px-2'>
                                    <hr className='text-peast-greenn' />
                                    <button className='btn btn-dark'>
                                        <span>Pink Shows</span> <br/>
                                        <span className='font-sm'>Now at $149.49</span>
                                    </button>
                                </div>

                                <div className='col-lg-2 px-2'>
                                    <hr className='text-peast-greenn' />
                                    <button className='btn btn-dark'>
                                        <span>Pink Shows</span> <br/>
                                        <span className='font-sm'>Now at $149.49</span>
                                    </button>
                                </div>

                                <div className='col-lg-2 px-2'>
                                    <hr className='text-peast-greenn' />
                                    <button className='btn btn-dark'>
                                        <span>Pink Shows</span> <br/>
                                        <span className='font-sm'>Now at $149.49</span>
                                    </button>
                                </div>

                                <div className='col-lg-2 px-2'>
                                    <hr className='text-peast-greenn' />
                                    <button className='btn btn-dark'>
                                        <span>Pink Shows</span> <br/>
                                        <span className='font-sm'>Now at $149.49</span>
                                    </button>
                                </div>

                                <div className='col-lg-2 px-2'>
                                    <hr className='text-peast-greenn' />
                                    <button className='btn btn-dark'>
                                        <span>Pink Shows</span> <br/>
                                        <span className='font-sm'>Now at $149.49</span>
                                    </button>
                                </div>
                                
                            </div>

                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;