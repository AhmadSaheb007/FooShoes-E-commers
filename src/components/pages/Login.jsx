import React from "react";
import Footer from "./../inc/Footer";

const Login = () => {
  return (
    <div className="product-bg">
      <div className="pb-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 mx-auto text-center bg-brown-black text-peast-greenn py-5 rounded-5">
              <form>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label fs-4 fw-medium"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text text-light">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label fs-4 fw-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-light text-light px-5 bg-peast-greenn">
                  <p className="text-brown-black my-auto fw-medium">Log in</p>
                </button>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
                <p className="fs-5 fw-medium">
                    Don't have account, &nbsp;&nbsp;
                    <a href="/signup">
                        Register here
                    </a> 
                </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
