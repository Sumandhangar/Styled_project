import React from 'react'
import styled from 'styled-components'
import Icon1 from '../../assets/img/car.svg'
import Icon2 from '../../assets/img/car.svg'
import Icon3 from '../../assets/img/car.svg'

const Services = () => {
  return (
    <>
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images and copyright free pictures</ServicesP>
          </ServicesCard>
          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>Virtual Office</ServicesH2>
              <ServicesP>Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images and copyright free pictures</ServicesP>
          </ServicesCard>
          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>Premium Benifits</ServicesH2>
              <ServicesP>Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images and copyright free pictures</ServicesP>
          </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}
const ServicesContainer = styled.div`
/* height: 800px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding: 80px 0;
@media screen and(max-width:768px){
    /* height: 1300px; */
}
@media screen and(max-width:480px){
    /* height: 1300px; */
}
`
const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all .2s ease-in-out;
&:hover{
    transform: scale(1.02);
    transition: all.2s ease-in-out;
    cursor: pointer;
}
`
const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
@media screen and (max-width:480px){
    font-size: 2rem;
}
`
const ServicesH2 = styled.h2`
font-size: 1.2rem;
margin-bottom: 10px;
`
const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`
export default Services