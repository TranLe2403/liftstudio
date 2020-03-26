import Layout from "../components/MyLayout.js";
import Logo from "../components/Logo";
import Logo_Contact from "../components/Contact";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
`;

const TitleBar = styled.div`
  height: 65px;
  background-color: #f9a825;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-family: "Orbitron";
  text-align: center;
  font-size: 26px;
  border-bottom: 3px solid #444141;
  letter-spacing: 5px;
  color: #444141;
  display: inline-block;

  @media (min-width: 768px) and (max-width: 1559px) {
    font-size: 60px;
    margin-top: 0px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  height: 100%;
  align-items: center;
  flex-direction: column;

  &::before {
    content: " ";
    background: linear-gradient(
        to right,
        rgba(4, 4, 4, 0.85),
        rgba(4, 4, 4, 0.85)
      ),
      url("https://cutt.ly/LwpgFq9");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContactLogoContainer = styled.div`
  width: 100%;
  height: 50%;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    align-items: center;
  }
`;

const StudioLogoSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  width: 50%;

  @media (min-width: 768px) {
    padding: 100px 10px 100px 40px;
  }
`;

const StudioLogoContainer = styled.div`
  width: 70%;

  @media (min-width: 768px) and (max-width: 1559px) {
    width: 50%;
  }

  @media (min-width: 1560px) {
    width: 45%;
  }
`;

const StudioTitle = styled.h1`
  font-family: "Orbitron";
  font-size: 26px;
  letter-spacing: 2px;
  color: white;
  width: 100%;
  text-align: center;
  line-height: 30px;

  @media (min-width: 768px) and (max-width: 1559px) {
    font-size: 45px;
    letter-spacing: 7px;
    line-height: 50px;
    width: 80%;
  }

  @media (min-width: 1560px) {
    font-size: 50px;
    letter-spacing: 12px;
    line-height: 55px;
    width: 100%;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <Container>
        <TitleBar>
          <Title>CONTACT</Title>
        </TitleBar>
        <ContentContainer>
          <ContactLogoContainer>
            <Logo_Contact />
          </ContactLogoContainer>
          <StudioLogoSection>
            <StudioLogoContainer>
              <Logo />
            </StudioLogoContainer>
            <StudioTitle>LIFT STUDIO</StudioTitle>
          </StudioLogoSection>
        </ContentContainer>
      </Container>
    </Layout>
  );
}
