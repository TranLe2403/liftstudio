import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  animation: 1s appear forwards;
`;

const Item = styled.div`
  font-size: 25px;
  padding: 1rem 0;
  margin: 0 5%;
  cursor: pointer;
  color: ${props => (props.hover ? "red" : "#444141")};
  animation: 0.5s slideIn forwards;
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: scale(1.5);
  }
`;

const MenuItem = React.forwardRef(({ onClick, children }, ref) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <Container>
      <Item
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={onClick}
        hover={hover}
      >
        {children}
      </Item>
    </Container>
  );
});

export default MenuItem;
