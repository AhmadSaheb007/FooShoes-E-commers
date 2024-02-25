import React from "react";
import Footer from "../inc/Footer";
import Counter from './../inc/Counter';

const Cart = () => {
  return (
    <div className="bg-brown-black ">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td><Counter/></td>
                  <td>180 $</td>
                </tr>
                <tr className="align-middle">
                <th scope="row">2</th>
                  <td>Mark</td>
                  <td><Counter/></td>
                  <td>180 $</td>
                </tr>
                <tr className="align-middle">
                <th scope="row">3</th>
                  <td>Mark</td>
                  <td><Counter/></td>
                  <td>180 $</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
