import React from 'react'
import styled from 'styled-components'


function Pricing() {
  
  return (
    <Pricont>
      <Priwrap>
        <Pup>
          <P1>Our Pricing</P1>
          <P2>Our Pricing Plan</P2>
        </Pup>
        <Plist>
          <Pbas>
            <B1>
              <B1a>Basic</B1a> 
              <B1b>$<span className='espa'>20</span>/Month</B1b>
            </B1>
            <B2>
              <Bsub>
              <B2b>Operation</B2b>
              <B2b>Maintenance</B2b>
              <B2b>Installation</B2b>
              <B2b>Quality Components</B2b>
              <B2b>Battery Materials</B2b>
              </Bsub>
              <B2a>Choose Plan</B2a>
            </B2>
          </Pbas>
          <Pbas>
            <B1> 
            <B1a>Advanced</B1a> 
            <B1b>$<span className='espa'>50</span>/Month</B1b>
            </B1>
            <B2>
              <Bsub>
              <B2b>Operation</B2b>
              <B2b>Maintenance</B2b>
              <B2b>Installation</B2b>
              <B2b>Quality Components</B2b>
              <B2b>Battery Materials</B2b>
              </Bsub>
              <B2a>Choose Plan</B2a>
            </B2>
          </Pbas>
          <Pbas>
            <B1>
            <B1a>Premium</B1a> 
            <B1b>$<span className='espa'>100</span>/Month</B1b>
            </B1>
            <B2>
              <Bsub>
              <B2b>Operation</B2b>
              <B2b>Maintenance</B2b>
              <B2b>Installation</B2b>
              <B2b>Quality Components</B2b>
              <B2b>Battery Materials</B2b>
              </Bsub>
              <B2a>Choose Plan</B2a>
            </B2>
          </Pbas>
        </Plist>
      </Priwrap>
    </Pricont>
  )
}

export default Pricing
const Pricont = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1087px){
  width: 100%;
  height: 200vh;
  // display: flex;
  // align-items: flex-start;
  // justify-content: center;
}
`
const Priwrap = styled.div`
width: 95%;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 1087px){
  width: 95%;
  height: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
`
const Pup = styled.div`
width: 100%;
height: 8%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

 
@media screen and (max-width: 1087px){
  width: 100%;
  height: 5%;
}
`
const P1 = styled.div`
text-align: center;
font-size: 30px;
`
const P2 = styled.div`
text-align: center;
`
const Plist = styled.div`
width: 100%;
height: 92%;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 1087px){
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
}
`
const Pbas = styled.div`
width: 32%;
height: 85%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: space-around;

@media screen and (max-width: 1087px){
  width: 100%;
  height: 30%;
}
`
const B1 = styled.div`
width: 100%;
height: 22%;
background-color: #293462;
color: #fff;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1087px){
  width: 100%;
  height: 50%;
  background-color: #293462;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
}
`
const B1a = styled.div`
font-size: 25px;
@media screen and (max-width: 1087px){
font-size: 20px;
}
`
const B1b = styled.div`
font-size: 20px;
@media screen and (max-width: 1087px){
  font-size: 15px;
}

.espa {
  font-size: 45px;
@media screen and (max-width: 1087px){
  font-size: 40px;
}
}
`
const B2 = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: #fff;
box-shadow: 0 3px 3px  grey;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;

@media screen and (max-width: 1087px){
  width: 100%;
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
`
const Bsub = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-weight: 200

@media screen and (max-width: 1087px){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: 200
}
`
const B2b = styled.div`
font-size: 18px;
`
const B2a = styled.button`
width: 35%;
height: 10%;
background-color: #293462;
color: #fff;
border: none;
font-size: 20px;
font-style: italic;

@media screen and (max-width: 1087px){
  width: 30%;
  height: 10%;
  background-color: #293462;
  color: #fff;
  border: none;
  font-size: 20px;
  font-style: italic;
}
`