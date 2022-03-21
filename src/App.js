import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
// ***************************************
import { GlobalStyle } from "./components/GlobalStyle";
// *********************************************
// import Oprators from "./components/Tests/Oprators";
// import Home from "./components/Tests/Home";
// import Total from "./components/Tests/Total";
// import { Footer } from "./components/Tests/Footer";
// import Navigation from "./components/Tests/Navigation";
// import Form from "./components/Tests/Form";
// ***************************************************

import Navbar from "./components/Styled_project/Navbar";
import Banner from "./components/Styled_project/Banner";
import About from "./components/Styled_project/About";
import Work from "./components/Styled_project/Work";
import Json from "./components/Styled_project/Json";
import Product from "./components/Styled_project/Product";
import Contact from "./components/Styled_project/Contact";
import Footers from "./components/Styled_project/Footer";
import { Rays } from "../src/components/Styled_project/Css";
// **********************************************
function App() {

  return (
    <>


      <Rays className="container-fluid"><Json /><Banner /></Rays>
      <div className="container">
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="product"><Product /></section>
      </div>
      <div className="container-fluid"><section id="contact"><Contact /></section><Footers /></div>


    </>
  );
}

export default App;
