import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-family: "Orbitron";
  font-size: 24px;
  letter-spacing: 1.5px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: 3px;
    text-align: left;
  }
`;

const Description = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  width: 100%;
  height: 100%;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;

export default function GameDescription(props) {
  return (
    <>
      <Title>{props.game}</Title>
      <Description>{props.description}</Description>
    </>
  );
}
