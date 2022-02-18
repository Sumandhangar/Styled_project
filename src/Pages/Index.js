import React,{useState} from 'react'
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar/Navbar'

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => {
        setIsOpen(!isOpen)
    };
  return (
    <>
    <Sidebar  isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    </>
  )
}

export default Index