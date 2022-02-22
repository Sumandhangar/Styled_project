import React, { useState } from "react";
import styled from "styled-components";
// import "./Index.css";
// import { MenuLink } from "react-router-dom";




function Total() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Nav>
        <Logo href="#">
          <span>
            <h1><a href="#home">Logo Here</a></h1>
          </span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)} className="bg-dark">
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen} className="menu" onclick="myFunction(event)">
          <MenuLink href="/" className="active NavLink">
              <span>Home</span>
          </MenuLink>
          <MenuLink href="#about" className="NavLink" onClick={() => setIsOpen(!isOpen)}>
              <span>About</span>
          </MenuLink>
          <DropDownLi>
                    <MenuLink onClick={() => this.handleClick("DropDown")}>
                    <span>About</span>
                    </MenuLink>
                    <DropDownContent>
                        {" "}
                        <SubA onClick={() => this.handleClick("Link1")}>
                            Link 1
                        </SubA>
                        <SubA onClick={() => this.handleClick("Link2")}>
                            Link 2
                        </SubA>
                        <SubA onClick={() => this.handleClick("Link3")}>
                            Link 3
                        </SubA>
                    </DropDownContent>
                </DropDownLi>
          <MenuLink href="#product" className="NavLink" onClick={() => setIsOpen(!isOpen)}>
              <span >Products</span>
          </MenuLink>
          <MenuLink href="#contact" className="NavLink" onClick={() => setIsOpen(!isOpen)}>
            <span className="pr-lg-3">Contact</span>
          </MenuLink>
        </Menu>
      </Nav>
    </>
  );
}
const DropDownLi = styled(MenuLink)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;
const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;
const SubA = styled(MenuLink)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: lightblue;
    padding: 10px;
`;
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background: white;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 2px 2px 4px 0px #cacaca;
  @media (min-width: 800) {
    overflow: hidden;
  }
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0 1rem 0 1rem;
    background: #bd5ff2;
    background: var(--linear);
  }
`;
const Menu = styled.menu`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  text-decoration: none;
  margin: 0;
  padding: 0rem 0rem 0rem 0rem;
  left: 1rem;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: height 0.3s ease;
    left: 0;
  }
`;
const  MenuLink = styled.a`
  border: none;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  text-shadow: 2px 2px 4px #6287f6;
  font-size: larger;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
    span{
       display: inline-block;
       margin: 0;
    }
    
  
  @media (max-width: 768px) {
    border-top: 0.5px solid #ddd;
    flex-direction: column;
    width: 100%;
  }
  &:hover:not(.active) {
    background: #ddd;
    background: linear-gradient(45deg, #fff, #ddd);
  }
  &.active{
    background: var(--linear);
  }
`;



const Logo = styled.a`
  position: relative;
  right: 1em;
  margin-right: auto;
  h1 {
    justify-content: center;
    padding: .7em 1.2em ;
    border: none;
    font-weight: 300;
    font-size: 1.75em;
    line-height: 0.75em;
 a{
    text-decoration: none;
    color: black;
  }
  }
  &:hover {
    text-decoration: none;
    animation-name: logo-hover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.17, 0.57, 0.31, 0.85);
  }
  @media (max-width: 768px) {
    padding: 0rem 0rem 0rem 0rem;
  }
`;
export default Total;
