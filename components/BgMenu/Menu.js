import styled from "styled-components";

const MeunListContainer = styled.div`
  margin-top: 23px;
  position: absolute;
  right: 0;
  height: ${props => (props.open ? "100%" : 0)};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1ebeb;
  opacity: 0.95;
  color: black;
  transition: height 0.3s ease;
  z-index: 2;
  align-items: center;
`;

const List = styled.div`
  padding: 30px;
  font-family: Orbitron;
  letter-spacing: 3px;
`;

export default function Menu({ open, children }) {
  return (
    <MeunListContainer open={open}>
      {open ? <List className="list">{children}</List> : null}
    </MeunListContainer>
  );
}
