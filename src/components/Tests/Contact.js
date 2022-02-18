import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const RegistserForm = () => (
    <div className="row row-1">
      <div className="col-md-12 text-center">
        <h1
          style={{ color: " #485be6", paddingTop: "5rem" }}
          className="font-weight-bolder"
          id="heading"
        >
          Get in touch
        </h1>
      </div>
      <div className="col-md-12 d-flex justify-content-center">
        <div className="form-v4-content d-lg-flex d-md-flex d-block">
          <div className="form-left">
            <h2>INFOMATION</h2>
            <p className="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text-2">
              <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc
              vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div className="form-left-last">
              <button
                type="submit"
                name="account"
                className="account btn btn-lg pt-3 pb-3 btn-primary"
                onClick={() => setIsPreview(!isPreview)}
              >Click to Login</button>
              <div className="social-links d-flex justify-content-center mt-5 ml-lg-0 ml-md-2 mt-2 mb-5">
                <span className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 bg-light reg_soc_link" style={{color:'#485be6'}}>
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 bg-light reg_soc_link"style={{color:'#485be6'}}>
                  <i className="fab fa-youtube"></i>
                </span>
                <span className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 bg-light reg_soc_link"style={{color:'#485be6'}}>
                  <i className="fab fa-google"></i>
                </span>
                <span className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 bg-light reg_soc_link"style={{color:'#485be6'}}>
                  <i className="fab fa-instagram-square"></i>
                </span>
                <span className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 bg-light reg_soc_link"style={{color:'#485be6'}}>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
          </div>
          <form
            className="form-detail mt-lg-0 mt-md-0 mt-5"
            action="#"
            method="post"
            id="myform"
          >
            <h2 style={{ color: " #485be6" }}>REGISTER FORM</h2>
            <div className="form-group">
              <div className="form-row form-row-1">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row form-row-1">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="your_email">Your Email</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                className="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1 ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-text"
                  required
                />
              </div>
              <div className="form-row form-row-1">
                <label htmlFor="comfirm-password">Comfirm Password</label>
                <input
                  type="password"
                  name="comfirm_password"
                  id="comfirm_password"
                  className="input-text"
                  required
                />
              </div>
            </div>
            <div className="form-checkbox">
              <label className="container">
                <p className="pt-2">
                  I agree to the{" "}
                  <a href="#" className="text" style={{ color: " #485be6" }}>
                    Terms and Conditions
                  </a>
                </p>
                <input type="checkbox" name="checkbox" />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="register"
                className="register btn-primary"
                value="Register"
                onClick={() => setIsPreview(!isPreview)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  const LoginForm = () => (
    <div className="row row-1">
      <div className="col-md-12 text-center">
        <h1
          style={{ color: " #485be6", paddingTop: "5rem" }}
          className="font-weight-bolder"
          id="heading"
        >
          Get in touch
        </h1>
      </div>
      <div className="col-md-12 d-flex justify-content-center">
        <div className="form-v4-content d-lg-flex d-md-flex d-block">
          <div className="form-left">
            <h2>INFOMATION</h2>
            <p className="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text-2">
              <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc
              vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div className="form-left-last">
            <button
                type="submit"
                name="account"
                className="account btn btn-lg pt-3 pb-3 btn-primary"
                onClick={() => setIsPreview(!isPreview)}
              >New Registraion</button>
            </div>
          </div>
          <form className="form-detail" action="#" method="post" id="myform">
            <h2 style={{ color: " #485be6" }}>LOGIN FORM</h2>
            <div className="form-row">
              <label htmlFor="your_email">Your Email</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                className="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                required
              />
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="register"
                className="register bg-primary btn-primary"
                value="Login"
              />
            </div>
            <div className="social-links d-flex justify-content-center mt-5 ml-lg-0 ml-md-2 mt-2 mb-5">
              <span
                className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 text-white log_soc_icon"
              >
                <i className="fab fa-facebook-f"></i>
              </span>
              <span
                className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 text-white log_soc_icon"
              >
                <i className="fab fa-youtube"></i>
              </span>
              <span
                className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 text-white log_soc_icon"
              >
                <i className="fab fa-google"></i>
              </span>
              <span
                className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 text-white log_soc_icon"
              >
                <i className="fab fa-instagram-square"></i>
              </span>
              <span
                className="rounded pt-2 pb-2 pl-3 pr-3 mr-lg-3 mr-md-2 mr-1 text-white log_soc_icon"
              >
                <i className="fab fa-twitter"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const [isPreview, setIsPreview] = useState(true);
  return <>{isPreview ? <RegistserForm /> : <LoginForm />}</>;
}
