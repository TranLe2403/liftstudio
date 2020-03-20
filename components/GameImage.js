import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 133px;
  height: 156px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    padding-bottom: 0;
  }
`;

export default function GameImage(props) {
  return (
    <div>
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}
