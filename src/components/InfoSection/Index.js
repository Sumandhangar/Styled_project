import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/img/car.svg';
const Index = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, lightTextDesc, shadow, buttonLabel, alt, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart} >
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    darkText={darkText ? 1 : 0}
                    darkText={dark ? 1 : 0}
                    shadow={shadow ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={Image} width='100%' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
const InfoContainer = styled.div`
width: 100%;
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
z-index: -1;
@media screen and (max-width:768px){
    padding: 100px 0;
    width: 100%;
}
`
const InfoWrapper = styled.div`
 display: grid;
 z-index: 1;
 height: 860px;
 width: 100%;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
justify-content: center;
`
const InfoRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
 @media screen and (max-width:768px){
     grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
 }
 `
const Column1 = styled.div`
 margin-bottom: 15px;
 padding: 0 48px;
 grid-area: col1;
 @media screen and (max-width:480px){
  padding: 0 15px;
 }
 `
const Column2 = styled.div`
  margin-bottom: 48px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width:480px){
  padding: 0 15px;
 }
  `
const TextWrapper = styled.div`
  /* max-width:540px; */
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
 `
const TopLine = styled.p`
 color: #01bf71;
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
 `
const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  @media screen and (max-width:480px){
      font-size: 32px;

  }
  `
const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  `
const BtnWrap = styled.div`
  display: flex;
  /* justify-content: center; */
  `
const Button = styled.button`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#fff' : '#010606')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2s ease-in-out;
&:hover{
    background: ${({ primary }) => (primary ? '#01BF71' : '#fff')};
    color: ${({ dark }) => (dark ? '##01BF71' : '#010606')};
    box-shadow: ${({ shadow }) => (shadow ? '3px 4px 12px #01BF71' : '0')};
}
  `
const ImgWrap = styled.div`
  width:555px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width:768px){
    width: 700px;
  }
  @media screen and (max-width:480px){
    width: 320px;
  }
  `
const Img = styled.img`
  width:100%;
  /* margin: 0 0 10px 0; */
  padding-right: 0; 
  
  `
export default Index