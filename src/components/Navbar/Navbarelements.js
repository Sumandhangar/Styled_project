import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 80px;
display: flex;
margin-top: -80px;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width:960px){
 transition: 0ms.8s all ease;
}
`;
export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 30px;
 max-width:1100px;
 `;
export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 text-decoration: none;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 font-weight: bold;
 text-decoration: none;
 &:hover{
     color: #01bf71;
     text-decoration: none;
 }
 `;

export const MobileIcon = styled.div`
 display: none;
 @media screen and (max-width: 768px){
     display: block;
     position: absolute;
     top: 1.2rem;
     right: 1.5rem;
     transition: translate(-100%, 60%);
     cursor: pointer;
     color: white;
     font-size: 1.8rem;
 }
 `;

export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;
 @media screen and (max-width:768px){
     display: none;
 }
 `;
export const NavItem = styled.li`
 height: 80px;
 color: white;
 font-size: large;
 font-weight: 400;
 &:hover{
     color: #01bf71;
 }
 `;
export const NavLinks = styled(LinkS)`
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1.5rem;
 height: 100%;
 cursor: pointer;
 &.active{
     border-bottom: 3px solid #01bf71;
 }

 `;
 export const NavBtn = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width:768px){
     display: none;
 }
 `;
 export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 outline: none;
 border: none;
 cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
}
`;