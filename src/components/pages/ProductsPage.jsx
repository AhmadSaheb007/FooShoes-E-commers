import React from "react";
import Banner from './../inc/Banner';
import Product from './../inc/Product';
// import myitems from "/src/components/allitems"

// function creatProduct(itemm){
//   return (

//     <Product 
//     itemName = {itemm.name}
//     productImg = {itemm.imgURL} 
//     price = {itemm.price}/>

//   );
// }

const ProductsPage = () => {
  return (
    <div className="product-bg">
      <Banner/>
      <div className="bg-brown-black text-center">
        <div className="container">
          <div className="row mx-auto py-3 d-flex justify-content-between">
            <div className="col-lg-2">
              <p className="fs-3 fw-medium text-light my-auto">Shop By:</p>
            </div>

            <div className="col-lg-2 my-auto">
              <div class="dropdown">
                <a
                  class="btn btn-dark dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 my-auto">
              <div class="dropdown">
                <a
                  class="btn btn-dark dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagories
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 my-auto">
              <div class="dropdown">
                <a
                  class="btn btn-dark dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Price
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">

          {/* {myitems.map(creatProduct)} */}

          {/* {myitems.map(creatProduct)} */}
          
          <div className="col-lg-4">
            <Product
              itemName="Golden Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$99.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Black Shoe"
              productImg="/src/assets/img/HomeBlackShoe.png"
              price="$149.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Pink Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$199.99"
            />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4">
            <Product
              itemName="Golden Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$99.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Black Shoe"
              productImg="/src/assets/img/HomeBlackShoe.png"
              price="$149.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Pink Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$199.99"
            />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4">
            <Product
              itemName="Golden Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$99.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Black Shoe"
              productImg="/src/assets/img/HomeBlackShoe.png"
              price="$149.99"
            />
          </div>

          <div className="col-lg-4">
            <Product
              itemName="Pink Shoe"
              productImg="/src/assets/img/HomeBuyProduct.png"
              price="$199.99"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
