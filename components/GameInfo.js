import React from "react";
import styled from "styled-components";
import GameImage from "./GameImage";
import GameDescription from "./GameDescription";

const Container = styled.div`
  padding: 80px 40px;
  background-image: url(${props => props.backgroundUrl});
  background-size: 100% 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px;
  background-color: #e5e5e5;
  flex-direction: column;
  opacity: 0.7;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  order: ${props => props.index % 2 === 1 ? 0 : 2};
  padding-left: 60px;
  width: 40%;
`;

const DescriptionContainer = styled.div`
  width: 60%;
  padding-left: 30px;
`;

const GameInfo = props => {
  const { info, index } = props;
  console.log(index % 2);
  

  return (
    <Container backgroundUrl={info.background}>
      <Info>
        <ImageContainer index={index} >
          <GameImage src={info.image} alt={info.name} />
        </ImageContainer>
        <DescriptionContainer>
          <GameDescription game={info.name} description={info.description} />
        </DescriptionContainer>
      </Info>
    </Container>
  );
};

export default GameInfo;
