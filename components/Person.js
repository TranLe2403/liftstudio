import React from "react";
import Logo from "./LogoSocial.js";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    max-width: 400px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-self: center;
  align-self: center;
`;

const LogoNetwork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Description = styled.p`
  font-family: "Montserrat";
  font-size: 15px;
  width: 80%;
  color: #ffffff;
  letter-spacing: 3px;
  justify-self: center;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 20px;
    align-self: start;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const MemberName = styled.h2`
  font-family: "Orbitron";
  font-size: 14px;
  letter-spacing: 7px;
  color: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export default function Person(props) {
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src={props.src} alt={props.alt} />
        <MemberName>{props.name}</MemberName>
      </AvatarContainer>

      <LogoNetwork>
        <a href={props.fb} target="_blank">
          <Logo src="https://cutt.ly/IwpgIvr" alt="fb" />
        </a>

        <a href={props.github} target="_blank">
          <Logo src="https://cutt.ly/nwpgU6A" alt="github" />
        </a>

        <a href={props.gmail} target="_blank">
          <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" />
        </a>
      </LogoNetwork>

      <Description>{props.description}</Description>
    </Container>
  );
}
