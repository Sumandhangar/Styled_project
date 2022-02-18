import React from "react";
import "./Index.css";

export default function Navbar() {
  return (
    <>
        <header id="nav-wrapper" className="m-0 p-0">
          <nav id="nav" className="">
            <div className="nav left">
              <span className="gradient skew">
                <h1 className="logo un-skew pt-4">
                  <a href="#home" className="">
                    Logo Here
                  </a>
                </h1>
              </span>
              <button id="menu" className="btn-nav">
                <span className="fas fa-bars"></span>
              </button>
            </div>
            <div className="nav right">
              <a href="#index" className="nav-link active">
                <span className="nav-link-span">
                  <span className="u-nav">Home</span>
                </span>
              </a>
              <a href="#about" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">About</span>
                </span>
              </a>
              <a href="#work" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Work</span>
                </span>
              </a>
              <a href="#product" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Product</span>
                </span>
              </a>
              <a href="#contact" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Contact</span>
                </span>
              </a>
            </div>
          </nav>
        </header> 
    </>
  );
}
