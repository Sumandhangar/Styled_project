import React from "react";
import Img from "../../../src/assets/img/logo.png";
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="row" style={{ background: "black" }}>
        <div className="col-lg-3 col-md-12 order-lg-1 order-md-1 column-1 text-center text-light my-auto pt-lg-0 pt-md-0 pt-3">
          <img src={Img} width="150px" className="mt-lg-0 mt-md-4 mt-3" />
        </div>
        <div className="col-lg-6 col-md-6 order-lg-2 order-md-1 pt-3 pb-3 column-2">
          <ul className="footer-links pt-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p className="text-center text-light">
            All right reserved @ copyright 2022
          </p>
        </div>
        <div className="col-lg-3 col-md-6 column-3 order-lg-3 order-md-3">
          <div
            className="icons d-flex pt-4 pb-3"
            style={{ justifyContent: "space-evenly" }}>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
          <p className="text-light pl-lg-3 pt-2 text-center">
            Support: Teammp2it@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
