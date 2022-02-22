import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar/Navbar';
import InfoSection from '../components/InfoSection/Index';
import { Nav, homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
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