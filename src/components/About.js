import React from "react";
import { keyframes, styled } from "styled-components";

const AboutContainer = styled.section`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

const fadeIn = keyframes`
  0% {
    color: #001f3f;
  }
  50% {
    color: #641e16;
  }
  100% {
    color: #555aaa;
  }
  
`;

const FadeInBox = styled.p`
  font-weight: bold;
  font-size: 18px;
  font-family: monospace;
  animation: ${fadeIn} 5s infinite;
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>Acerca de mí</Heading>
      <FadeInBox>
        Profesional autodidacta, trabajo con tecnologías como Docker, Git,
        GitHub, Java, Spring, SQL, Html, Css, JavaScript y React, constantemente
        me capacito para mejorar profesionalmente.
      </FadeInBox>
    </AboutContainer>
  );
};

export default About;
