import React, { useState } from 'react'
import Sidebar from '../Sidebar/Index';
import Navbar from '../Navbar/Navbar';
import InfoSection from '../InfoSection/Index';
import { Nav, homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data';
import Footer from './Footer'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...Nav} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  )
}

export default Index