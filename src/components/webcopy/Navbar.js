import React from "react";
import {Header,Nav, Gredient, RightNav,NavbarRow} from "./Css.js";

export default function Navbar() {
  return (
    <>
        <Header id="nav-wrapper" className="m-0 p-0">
          <Nav id="nav" className="">
            <NavbarRow className="nav left">
              <Gredient className="gradient skew">
                <h1 className="logo un-skew">
                  <a href="#home" className="">
                    Logo Here
                  </a>
                </h1>
              </Gredient>
              <button id="menu" className="btn-nav">
                <span className="fas fa-bars"></span>
              </button>
            </NavbarRow>
            <NavbarRow  className="nav right">
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
            </NavbarRow>
          </Nav>
        </Header>
    </>
  );
}
