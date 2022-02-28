import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
  const toggleHome = () =>{
    scroll.scrollToTop();
}
  return (
    <>
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinsTitle>About Us</FooterLinsTitle>
              <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Career</FooterLink>
                <FooterLink to='/'>Services</FooterLink>
                <FooterLink to='/'>Terms of Services</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinsTitle>Videos</FooterLinsTitle>
                <FooterLink to='/'>Submit video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinsTitle>Contact Us</FooterLinsTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Services</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinsTitle>Social Media</FooterLinsTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={toggleHome}>myLogo</SocialLogo>
          <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaInstagram/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaYoutube/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaTwitter/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaLinkedin/></SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    </>
  )
}
const FooterContainer = styled.footer`
background: #101522;
`
const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;
@media screen and (max-width:820px){
  padding-top: 32px;
}
`
const FooterLinksWrapper = styled.div`
display: flex;
@media screen and (max-width:820px){
  flex-direction: column;
}
`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;
@media screen and (max-width:420px){
margin: 0;
padding: 10px;
width: 100%;
}
`
const FooterLinsTitle = styled.h1`
font-size: 20px;
margin-bottom: 16px;
`
const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0%.5rem;
font-size: 14px;
&:hover{
  color: #01bf71;
  text-decoration: none;
  transition: none.3s ease-out;
}
`
const  SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`
const SocialMediaWrap = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;
@media screen and (max-width:820px){
  flex-direction: column;
}
`
const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
&:hover{
  color: #01bf71;
  text-decoration: none;
}
`
const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`
const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
&:hover{
  color: #01bf71;
}
`
export default Footer