import React from "react";
import "./Index.css";

export default function Work() {
  return (
    <>
      <div className="container-fluid work-section">
        <div className="row m-0 p-0">
          <div className="col-md-12 text-center pt-0 pb-5 work">
            <h1 id="heading">Our Work</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-5 col-xl-5">
            <div className="left-content">
              <p className="subheading ">what is codenotary</p>
              <h2 className="heading font-weight-bold">
                Sign your code so easy and safety
              </h2>
              <p className="content ">
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
          <div className="col-md-12 col-lg-7 col-xl-7 mr-0 ml-0 right-section">
            <div className="hexagon text-white ">
              <div className="text ">
                <i className="far fa-credit-card fa-2x "></i>
                <h3 className="font-weight-bold ">Verify Integrity</h3>
                <p className="pl-2 pr-2 demo ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
            <div className="hexagon2 text-white ">
              <div className="text ">
                <i className="far fa-credit-card fa-2x "></i>
                <h3 className="font-weight-bold ">Verify Integrity</h3>
                <p className="pl-2 pr-2 demo ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
            <div className="hexagon3 text-white ">
              <div className="text ">
                <i className="far fa-credit-card fa-2x "></i>
                <h3 className="font-weight-bold ">Verify Integrity</h3>
                <p className="pl-2 pr-2 demo ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row hexa-bottom-row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 order-lg-1 order-md-2 order-2">
            <div className="div-1 col-sm-12">
              <i className="far fa-credit-card fa-2x"></i>
              <p className="pl-2 pr-2 demo ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div className="div-2 col-sm-12">
              <i className="far fa-credit-card fa-2x"></i>
              <p className="pl-2 pr-2 demo ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div className="div-3 mt-lg-4 mt-md-4 col-sm-12">
              <i className="far fa-credit-card fa-2x"></i>
              <p className="pl-2 pr-2 demo ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 order-lg-2 order-md-1 order-1">
            <div className="right-content">
              <p className="subheading ">what is codenotary</p>
              <h2 className="heading font-weight-bold">
                Sign your code so easy and safety
              </h2>
              <p className="content ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet
              </p>
              <button
                type="submit "
                className="btn-lg border-0 mb-5 mt-2 font-weight-bold text-white btn-primary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
