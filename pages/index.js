import Layout from "../components/MyLayout.js";
import Logo from "../components/Logo";
import { useEffect } from "react";
import styled from "styled-components";

/*  Responsive by JS
import WindowDimensionsProvider from '../components/WindowDimensionsProvider'
import   Content from '../components/Content'

function App (){
  return (
    <WindowDimensionsProvider>  
    <div className="App">
      <Content />
    </div>
  </WindowDimensionsProvider>
  );
}*/

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  height: 100%;
  justify-content: center;

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    content: " ";
    background-image: linear-gradient(
        to right,
        rgba(4, 4, 4, 0.85),
        rgba(4, 4, 4, 0.85)
      ),
      url("https://cutt.ly/EwpgjBY"), url("https://cutt.ly/4wpgxGI"),
      url("https://cutt.ly/2wpgcwu"), url("https://cutt.ly/zwpgcDs");
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top left, top right, bottom left, bottom right;
    background-size: 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  }

  @media (min-width: 768px) {
    &::before {
      background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
      background-size: 100%, 25%, 25%, 25%, 25%;
    }
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

const LogoContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  padding-bottom: 10px;

  &::after {
    z-index: 1;
    opacity: 1;
    position: absolute;
  }

  @media (min-width: 768px) and (max-width: 1559px) {
    width: 50%;
  }

  @media (min-width: 1560px) {
    width: 45%;
  }
`;

const StudioTitle = styled.h1`
  font-family: "Orbitron";
  font-size: 22px;
  letter-spacing: 2px;
  color: white;
  width: 100%;
  text-align: center;
  line-height: 30px;

  @media (min-width: 768px) and (max-width: 1559px) {
    font-size: 45px;
    letter-spacing: 7px;
    width: 60%;
    line-height: 55px;
  }

  @media (min-width: 1560px) {
    font-size: 50px;
    letter-spacing: 12px;
    line-height: 55px;
    width: 60%;
  }
`;

const Description = styled.p`
  font-family: "Montserrat";
  font-size: 17px;
  color: white;
  width: 50%;
  text-align: center;
  letter-spacing: 2px;
  text-align: justify;
  line-height: 25px;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 5px;
    width: 50%;
  }
`;

export default function Blog() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <Layout>
      <Container>
        <LogoSection>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <StudioTitle>LIFT STUDIO</StudioTitle>
        </LogoSection>
        <Description>
          Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo
          consequat.
        </Description>
      </Container>
    </Layout>
  );
}
