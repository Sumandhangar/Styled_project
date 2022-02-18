import styled,{keyframes} from "styled-components";
import img from '../../assets/img/Graphic-Purple-Wave.svg';
import img2 from '../../assets/img/Graphic-Blue-Wave.svg';
import img3 from '../../assets/img/Graphic-Teal-Wave.svg';
import img4 from '../../assets/img/Graphic-Hero-Blur.jpg';

export const Header = styled.header`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 2px 2px 4px 0px #cacaca;
 @media (min-width: 800) {
    overflow:hidden;
  } 
`
export const Nav = styled.nav`
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  height: 4em;
  overflow: hidden;
& button {
  height: 100%;
  overflow: auto;
}
@media (min-width: 800) {
  overflow: hidden;
    flex-direction: column;
    & button{
    display: block;
  }
  }
  & button{
    display: none;
  }
  @media (min-width: 768px)and (max-width:1024px){
    & button{
      color: #f857a8;
    padding-left: 2em;
    padding-right: 2em;
    display: block;
    }
  }
  @media (min-width: 360)and (max-width:767px){
    & button{
      color: #f857a8;
    padding-left: 2em;
    padding-right: 2em;
    display: block;
    }
  }
  
`

export const NavbarRow = styled.nav`
 display: flex;
  height: 4em;
  line-height: 4em;
  flex-grow: 1;
`
export const NavItems = styled.nav`
 display: flex;
  height: 5em;
  line-height: 4em;
  flex-grow: 1;
`
export const Gredient = styled.nav`
  background: #bd5ff2;
  background: linear-gradient(45deg, #bd5ff2, #6287f6);
  padding: 0 1em;
  position: relative;
  right: 1em;
  margin-right: auto;
  transition: all .5s ease;
  transform: skew(-20deg);
  & a{
    color: white;
    padding: 0px 0px 0px 15px;
    &:hover{
      text-decoration: none;
    }
  }
  &:hover{
  padding-right: 3em;
  }
`



export const RightNav = styled.nav`
 overflow: hidden;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    left: 1.5em;
    height: auto;
    
    /* & a{
    text-transform: uppercase;
  text-align: center;
  border-top: 0.5px;
  color: black;
  }
  & a:active{
    text-decoration: none;
  color: #fff;
  }
  & a:visited{
    text-decoration: none;
  color: #fff;
  } */
 `
// export const Logo = styled.logo`
//     background: #bd5ff2;
//   background: linear-gradient(45deg, #bd5ff2, #6287f6);
//   padding: 0 1em;
//   position: relative;
//   right: 1em;
//   margin-right: auto;
//   & :hover{
//     animation-name: logo-hover;
//   animation-duration: 0.3s;
//   animation-fill-mode: forwards;
//   animation-timing-function: cubic-bezier(0.17, 0.57, 0.31, 0.85);
//   }
//   & h1{

//   }
// `
export const AppContainer = styled.div`
font-family: pangolin;
width: 100%;
margin:0;
padding:0;
`
 export const Button = styled.div`
 background: var(--linear);
&:hover{
  background: linear-gradient(270deg, #2e37b8 50%, #e600e6 0) 100%;
  transition: 0.5s linear;
  background-size: 200%;
}
`;

export const Ul = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const nav = styled.nav`
 display: flex;
  height: 5em;
  line-height: 4em;
  flex-grow: 1;
`
export const H1 =styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #485be6;
`;
export const H3 =styled.h3`
 color: #485be6;
`
export const CornerIcon =styled.div`
  background: var(--linear);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: relative;
  top: 19px;
  -webkit-transition: 0s all linear-in;
  transition: 0s all linear-in;
  left: 9px;
  & i{
    font-weight: 900;
  padding-top: 0.4rem;
  padding-left: 0.3rem;
  }
`
export const Box =styled.div`
 top: 0px;
  position: absolute;
  right: 14px;
  height: 80px;
  width: 80px;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
  z-index: 2;
  background-color: white;
`
export const RightCornerIcon =styled.div`
 top: -9px;
  position: absolute;
  right: -10px;
  height: 80px;
  width: 80px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 67% 100%, 0 33%);
`
export const Column =styled.div`
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  transition: all 0.8s;
  background: #f8f9fa;
  cursor: pointer;

 &:hover{
  box-shadow: 0 4px 8px rgb(212, 211, 211);
  background: url("../../assets/img/magicpattern-blob-3.png");
  background-position: right bottom;
  transition: all 0.8s;
 }
`



export const Section =styled.div`
  width: 100%;
  transition: 0.5s;
  height: 600px;
  & img{
    position: absolute;
  width: 95%;
  transition: 0.5s;
  margin-top: 5rem;
  }
`
export const Content =styled.div`
  font-size: large;
  & h1{
    font-size: 6vw;
    font-weight: 900;
  }
`
export const Rays =styled.div`
  width: 100%;
  top: 0;
  left: 0;
background: url(${img})100%,url(${img2})100% top,url(${img3})100% top,url(${img4})100%;
`
