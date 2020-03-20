import React from "react";
import styled from "styled-components";

const LogoSocial = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    padding: 10px;
    width: 50px;
    height: 50px;
  }
`;

export default function Logo(props) {
  return (
    <>
			<LogoSocial src={props.src} alt={props.alt} />
    </>
  );
}
