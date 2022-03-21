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
import './components/web/Style'
import Navbar from "./components/web/Navbar";
import Banner from "./components/web/Banner";
import About from "./components/web/About";
import Work from "./components/web/Work";
import Product from "./components/web/Product";
import Contact from "./components/web/Contact";
import Footer from "./components/web/Footer";





function App() {

  return (
    <>
      <div className="container-fluid rays"><Navbar /><Banner /></div>
      <div className="container-fluid">
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="product"><Product /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>

    </>
  );
}

export default App;
