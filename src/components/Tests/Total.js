import React, { useState } from 'react';
import './Total.css';
// import Img from '../assets/img/Graphic-Owned-Planets-p-1080.png'
// import Image from '../../src/assets/img/flower1-removebg-preview.png';
import Img from '../../../src/assets/img/flower1-removebg-preview.png';
import { Link } from 'react-router-dom';




const Total = () => {
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("cont2");
  };



  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' width='100px'>
            <div className='w-100' width='100px' height='200px' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/img/1.jpg"})` }}>
              <p>You need a file with a specific name in the build output, such as manifest.webmanifest.
                You have thousands of images and need to dynamically reference their paths.
                You want to include a small script like custom.js include it as a tag.</p>
            </div>
            <img src={Img} width='150px' />
            <img src={process.env.PUBLIC_URL + "/img/1.jpg"} width='150px' />
            
          </div>
          <div className='col-md-6'>
            <div className={style}>
              <Link to='./Oprators' target='_blank'><button className="btn btn-lg bg-primary" onClick={changeStyle}>
                Click me!</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );

};

export default Total;