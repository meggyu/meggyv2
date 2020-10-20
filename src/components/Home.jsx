import React from 'react';
import {
  Button,
  LeftContainer,
  AboutWrapper,
  RightContainer,
} from './Layout';
import styled, { keyframes } from 'styled-components';

const ScrollDownAnimation = keyframes`
  0% {
    transform: translateY(-20%);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20%);
  }
`

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 1025px) {
    padding: 0 70px;
  }

  @media (max-width: 425px) {
    padding: 0 30px;
  }

  .arrow {
    margin-bottom: -100px;
    font-size: 40px;
    animation: 1.5s ${ScrollDownAnimation} infinite ease-in-out;
    z-index: -1;

    @media (min-width: 2560px) {
      margin-bottom: -200px;
    }

    @media (max-width: 1024px) {
      margin-bottom: 0;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  @media (max-width: 1025px) {
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-bottom: 50px;
  }

  @media (max-width: 425px) {
    margin-bottom: 50px;
  }
`;

export const Heading = styled.h1`
    font-style: italic;
    text-transform: uppercase;
    width: 400px;

    @media (max-width: 1025px) {
      width: 100%;
    }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <MainWrapper>
        <LeftContainer>
          <img src='img/me1.png' alt="Issa me, Megan" />
        </LeftContainer>

        <RightContainer>
          <Heading>Megan Koh</Heading>
          <AboutWrapper>
            Howdy <span role="img" aria-label="handwave">👋</span> My name is Megan, and I am a software engineer and web developer based in sweaty ole ATX!
          </AboutWrapper>
          <a href="#contact"><Button>Say Hi!</Button></a>
        </RightContainer>
      </MainWrapper>

      <div className="arrow">↓</div>
    </HomeWrapper>
  );
}

export default Home; 