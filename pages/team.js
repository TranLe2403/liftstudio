import Layout from "../components/MyLayout.js";
import Person from "../components/Person.js";
import { attributes } from "../content/team.md";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
`;

const TitleBar = styled.div`
  height: 65px;
  background-color: #f9a825;
  text-align: center;
  flex-grow: 1;

  @media (min-width: 768px) {
    height: 100px;
  }
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

  @media (min-width: 768px) {
    font-size: 60px;
    margin-top: 0px;
  }
`;

const Background = styled.div`
  background-color: #c4c4c4;
  opacity: 0.85;
  height: 100%;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  background-color: #040404;
  opacity: 0.85;
  height: 100%;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function Team(props) {
  let { title, persons } = attributes;
  return (
    <Layout>
      <Container>
        <TitleBar>
          <Title className="title">{title}</Title>
        </TitleBar>
        <Background className="bg">
          <TeamContainer className="team">
            {persons.map(person => {
              return (
                <Person
                  key={person.name}
                  name={person.name}
                  src={person.avatar}
                  fb={person.fb}
                  github={person.github}
                  gmail={person.gmail}
                  description={person.description}
                />
              );
            })}
          </TeamContainer>
        </Background>
      </Container>
    </Layout>
  );
}
