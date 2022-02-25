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
// import './components/web/Style'
// import Navbar from "./components/web/Navbar";
// import Banner from "./components/web/Banner";
// import About from "./components/web/About";
// import Work from "./components/web/Work";
// import Product from "./components/web/Product";
// import Contact from "./components/web/Contact";
// import Footer from "./components/web/Footer";
// ************************************************
// import Navbar from "./components/webcopy/Navbar";
// import Banner from "./components/webcopy/Banner";
// import About from "./components/webcopy/About";
// import Work from "./components/webcopy/Work";
// import Json from "./components/webcopy/Json";
// import Product from "./components/webcopy/Product";
// import Contact from "./components/webcopy/Contact";
// import Footers from "./components/webcopy/Footer";
// import { Rays } from "../src/components/webcopy/Css";
// **********************************************
import Index from './Tutorial/Pages/index';
import Signin from "./Tutorial/Pages/Signin";
function App() {

  return (
    <>
      {/* <div className="container-fluid rays"><Navbar /><Banner /></div>
      <div className="container-fluid">
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="product"><Product /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div> */}
      {/* ********************************************************** */}

      {/* <Rays className="container-fluid"><Json /><Banner /></Rays>
      <div className="container">
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="product"><Product /></section>
      </div>
      <div className="container-fluid"><section id="contact"><Contact /></section><Footers /></div> */}




      {/* ************************************************** */}

      {/* <Navigation />
    <Routes>
      <Route exact path='/' exact element={<Form />} />
      <Route path='/total' element={<Total />} />
      <Route path='/oprators' element={<Oprators />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    <Footer /> */}

      {/* **************************************************** */}
    
   <Routes>
   <Route exact path='/' exact element={<Index />} />
   <Route exact path='/Signin' exact element={<Signin />} />
   </Routes>

    {/* ********************************************************** */}
    </>
  );
}

export default App;
