import React from "react";

const ImageCarousel = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active preview-img"
            aria-current="true"
            aria-label="Slide 1"
          ><img src={props.productImage1} className="d-block w-100 border-1 rounded-3 border border-secondary" alt="..." /></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="preview-img"
          ><img src={props.productImage2} className="d-block w-100 border-1 rounded-3 border border-secondary" alt="..." /></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="preview-img"
          ><img src={props.productImage3} className="d-block w-100 border-1 rounded-3 border border-secondary" alt="..." /></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.productImage1}className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={props.productImage2} className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={props.productImage3} className="d-block w-100 rounded-3" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon text-bg-dark p-4" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon text-bg-dark p-4" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
