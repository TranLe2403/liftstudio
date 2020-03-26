import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-top: 50px;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
  }
`;

export default function Logo_Contact() {
  return (
    <Container>
      <Logo
        src="https://cutt.ly/AwpgtSt"
        alt="gmail"
        name="Email: abc@gmail.com"
      />
      <Logo src="https://cutt.ly/IwpgIvr" alt="fb" name="Facebook: LIFT" />
      <Logo
        src="https://cutt.ly/7wpgSt4"
        alt="home"
        name="Office: Leppavaara"
      />
    </Container>
  );
}

const ContactItem = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 20% 50%;
  grid-gap: 10%;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 20% 70%;
    padding-left: 0px;
    width: 100%;
    grid-gap: 8%;
  }
`;

const ContactItemLogo = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  justify-self: end;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const ContactItemText = styled.div`
  margin: 25px 0;
  font-family: "Montserrat";
  letter-spacing: 1.5px;
  font-size: 17px;
  display: flex;
  justify-self: start;

  @media (min-width: 768px) {
    letter-spacing: 3px;
    font-size: 27px;
    height: 50px;
    width: 100%;
    margin: 25px 0;
    align-items: center;
  }
`;

function Logo(props) {
  return (
    <ContactItem>
      <ContactItemLogo src={props.src} alt={props.alt} />
      <ContactItemText>{props.name}</ContactItemText>
    </ContactItem>
  );
}
