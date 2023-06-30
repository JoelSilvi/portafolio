import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  background-color: #282c34;
  padding: 20px;
  font-family: Roboto, sans-serif;
`;

const Title = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 5px;
`;

const Subtitle = styled.h2`
  color: #777;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Joel Aguilar</Title>
      <Subtitle>Software Engineer</Subtitle>
      <Description>Full Stack Junior</Description>
    </HeaderContainer>
  );
};

export default Header;
