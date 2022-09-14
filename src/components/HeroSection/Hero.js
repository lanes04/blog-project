import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Image from './blooga.png';
import { Category, HeroSection, Logo, Nav, Subscribe, TextContainer } from './Hero.Styled';

const Hero = ({ changeCaption, navigateLibrary, navigateCategory,category }) => {

  

  return (
    <HeroSection>

     <Nav>   

      <Logo> <img src={Image} alt="" /> </Logo>

      <Category>
        <Link  to="/Category" onClick={navigateCategory}>design tools</Link>
        <Link  to="/Category" onClick={navigateCategory}>weekly updates</Link>
        <Link  to="/Category" onClick={navigateCategory}>tutorials</Link>
        <Link  to="/Library" onClick={navigateCategory}>Library</Link>
      </Category>

      <Subscribe> <span>subscribe</span></Subscribe>
     </Nav>

     <TextContainer>
     <span>
      <div> 👋 HELLO </div>

     </span>
     <div>
      <h1>Insights about my personal and work Linkfe, and the in-betweens</h1>
     </div>
    </TextContainer>

    </HeroSection>
  )
}

export default Hero
