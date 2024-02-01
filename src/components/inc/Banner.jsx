import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className='headerBg'>
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6 py-5">
                            <button className='btn btn-light text-light px-3 py-4 bg-peast-greenn'>$119.99</button>
                            <p className='fs-1 fw-medium'>Pink Shoes <br/> 2024 Collection</p>
                            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem numquam modi totam sequi tempore voluptates ipsa id optio deleniti. At beatae ad sint alias non nostrum repudiandae aliquam dignissimos! Provident ex sed laudantium animi, modi, nemo laborum repellendus soluta repellat numquam veniam consequatur alias odio tenetur aliquid voluptates facere?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;