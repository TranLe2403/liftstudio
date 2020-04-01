import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Layout(props) {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}
