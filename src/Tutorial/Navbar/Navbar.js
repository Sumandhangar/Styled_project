import React, { useState, useEffect } from "react";
import { Nav, NavbarContainer, MobileIcon, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./Navbarelements";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from "react-scroll";



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>myLogo</NavLogo>
                        <MobileIcon onClick={toggle} ><FaBars /></MobileIcon>
                        <NavMenu>
                            <NavItem ><NavLinks
                                to='/' onClick={toggleHome}>Home</NavLinks></NavItem>
                            <NavItem><NavLinks
                                to='about'                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLinks></NavItem>
                            <NavItem><NavLinks
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Services</NavLinks></NavItem>
                            <NavItem><NavLinks
                                to='work'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Work</NavLinks></NavItem>
                            <NavItem><NavLinks
                                to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Contact</NavLinks></NavItem>
                        </NavMenu>
                        <NavBtn><NavBtnLink to='/Signin'>Sign In</NavBtnLink></NavBtn>
                    </NavbarContainer>
                </Nav>

            </IconContext.Provider>
        </>
    );
};

export default Navbar;
