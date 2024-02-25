import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { MdOutlineReviews } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className=" col-lg-12">
      <div className="product-box">
        <img className="item-hover" src={props.productImg} alt="" />
        <div className="bg-frosted product-icon my-3">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-2 py-2"> 
              <Link to="/details"><FaEye className="text-light fs-3" /></Link>
            </div>

            <div className="col-lg-2 py-2"> 
              <a href=""><MdOutlineShoppingBag  className="text-light fs-3" /></a>
            </div>

            <div className="col-lg-2 py-2"> 
              <a href=""><FcLike  className="fs-3" /></a>
            </div>

            <div className="col-lg-2 py-2"> 
              <a href=""><MdOutlineReviews  className="text-light fs-3" /></a>
            </div>
          </div>

        </div>
        <div className="d-flex">
        <button className="product-btn btn btn-light text-light px-5 bg-peast-greenn mx-auto">
          {props.price}
        </button>
        <p className="fs-3 px-3 fw-medium my-auto product-name">
          {props.itemName}
        </p>

       
      </div>
      </div>
      
    </div>
  );
};

export default Product;
