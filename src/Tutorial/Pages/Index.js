import React, { useState } from 'react'
import Sidebar from '../Sidebar/Index';
import Navbar from '../Navbar/Navbar';
import HeroSection from "../Navbar/HeroSection";
import InfoSection from '../InfoSection/Index';
import { Nav, homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data';
import Footer from './Footer'
import Services from './Services'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...Nav }  />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services/>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  )
}

export default Index