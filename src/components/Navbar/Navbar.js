import React from "react";
import { Nav, NavbarContainer, NavLogo,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,MobileIcon } from "./Navbarelements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
<Nav>
  <NavbarContainer>
      <NavLogo to='to'>Navbar Logo</NavLogo>
      <MobileIcon>
          <FaBars />
      </MobileIcon>
      <NavMenu>
          <NavItem>
              <NavLinks to='/'>Home</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to='work'>Work</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
          </NavItem>
      </NavMenu>
      <NavBtn>
          <NavBtnLink to='/Signin'>
              Sign In
          </NavBtnLink>
      </NavBtn>
  </NavbarContainer>
</Nav>
        </>
    );
};

export default Navbar;
