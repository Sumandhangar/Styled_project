import React, { useState, useEffect } from "react";
import "./Css.js";

export default function Product() {
  // const [active, setActive] = useState();
  // const list = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="container-fluid mt-5 contact-section">
        <div className="row">
          <div className="col-md-12 text-center pt-5 pb-5">
            <h1 id="heading">Our Product</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="contact-content text-left pt-lg-5">
              <p className="subheading text-left">what is codenotary</p>
              <h2 className="heading font-weight-bold">
                Sign your code so easy and safety
              </h2>
              <p className="content text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cum cumque minus iste
                veritatis provident
              </p>
              <button
                type="submit "
                className="btn-lg border-0 mb-5 mt-2 font-weight-bold text-white btn-primary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="linearbg mt-5">
              <div className="linear-overlay">
                <img src="img/flower1-removebg-preview.png" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6 text-center bordered">
            <div className="main-box">
              <div className="animated-content pt-5">
                <div className="title">
                  <h1 className="m-0">Heading</h1>
                  <div className="span pt-1 pl-lg-0 pl-md-4 pl-0 d-lg-block d-md-block d-none">
                    <span className="float-left pl-5">dd/mm/yyyy</span>
                    <span className="float-right pr-5">
                      <i className="fas fa-inbox pr-1"></i>Messege
                    </span>
                  </div>
                  <h3 className="arrow">
                    <i className="fas fa-chevron-down"></i>
                  </h3>
                </div>
                <div className="text pt-lg-0 pl-lg-0 pl-md-5 pt-md-5 pt-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate ipsam at id assumenda quae magni tempora
                    asperiores libero est ex cum voluptate laboriosam vel,
                    quidem quod, adipisci facere consectetur tenetur.
                  </p>
                  <button
                    type="submit "
                    className="btn-sm border-0 mb-5 font-weight-bold text-white btn-primary"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            <div className="box-inner">
              <img src="img/Graphic-Hero-Blur.jpg" className="w-100 h-100" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 mt-lg-0 mt-md-4 mt-4 text-center bordered">
            <div className="main-box main-box-2">
              <div className="animated-content animated-content-2 pt-5">
                <div className="title">
                  <h1 className="m-0">Heading</h1>
                  <div className="span pt-1 pl-lg-0 pl-md-4 pl-0 d-lg-block d-md-block d-none">
                    <span className="float-left pl-5">dd/mm/yyyy</span>
                    <span className="float-right pr-5">
                      <i className="fas fa-inbox pr-1"></i>Messege
                    </span>
                  </div>
                  <h3 className="arrow">
                    <i className="fas fa-chevron-down"></i>
                  </h3>
                </div>
                <div className="text pt-lg-0 pl-lg-0 pl-md-5 pt-md-5 pt-1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate ipsam at id assumenda quae magni tempora
                    asperiores libero est ex cum voluptate laboriosam vel,
                    quidem quod, adipisci facere consectetur tenetur.
                  </p>
                  <button
                    type="submit "
                    className="btn-sm border-0 mb-5 font-weight-bold text-white btn-primary"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            <div className="box-inner box-inner-2">
              <img src="img/Graphic-Hero-Blur.jpg" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <ul className="d-flex justify-content-center">
              <li className="list-item d-flex align-items-end">
                <div className="overlay text-white d-flex">
                  <span className="pl-lg-3 pl-md-2 pl-3 pb-2 pulse">
                    <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                  </span>
                  <span className="pl-lg-5 pl-md-3 pl-1 pt-1">List Item</span>
                </div>
              </li>
              <li className="list-item d-flex align-items-end">
                <div className="overlay text-white d-flex">
                  <span className="pl-lg-3 pl-md-2 pl-3 pb-2 pulse">
                    <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                  </span>
                  <span className="pl-lg-5 pl-md-3 pl-1 pt-1">List Item</span>
                </div>
              </li>
              <li className="list-item d-flex align-items-end activate">
                <div className="overlay text-white d-flex">
                  <span className="pl-lg-3 pl-md-2 pl-3 pb-2 pulse">
                    <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                  </span>
                  <span className="pl-lg-5 pl-md-3 pl-1 pt-1">List Item</span>
                </div>
              </li>
              <li className="list-item d-flex align-items-end">
                <div className="overlay text-white d-flex">
                  <span className="pl-lg-3 pl-md-2 pl-3 pb-2 pulse">
                    <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                  </span>
                  <span className="pl-lg-5 pl-md-3 pl-1 pt-1">List Item</span>
                </div>
              </li>
              <li className="list-item d-flex align-items-end">
                <div className="overlay text-white d-flex">
                  <span className="pl-lg-3 pl-md-2 pl-3 pb-2 pulse">
                    <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                  </span>
                  <span className="pl-lg-5 pl-md-3 pl-1 pt-1">List Item</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
