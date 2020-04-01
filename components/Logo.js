import Link from "./Link";
import styled from "styled-components";

const LogoImage = styled.img`
  background: #444141;
`;

function Logo() {
  return (
    <Link href="/">
      <LogoImage src="https://cutt.ly/jwpgf2R" alt="logo" />
    </Link>
  );
}

export default Logo;
