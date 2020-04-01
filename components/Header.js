import Logo from "./Logo";
import Link from "./Link";
import Burger from "./BgMenu";
import styled from "styled-components";

const ContainerMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9a825;
  height: 80px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9a825;
    height: 80px;
  }
`;

const LogoContainer = styled.div`
  padding: 10px 30px;
  width: 60px;
  height: 60px;
`;

const NavBarMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
`;

const NavBar = styled.div`
  padding-right: 30px;
  font-weight: 1000;
`;

const MenuLink = styled.a`
  color: #444141;
  margin-right: 20px;
  font-family: Orbitron;
  font-size: 25px;
  text-decoration: none;
  letter-spacing: 3px;
  padding: 10px;
  border-bottom: ${props => {
    if (props.active) {
      return "5px solid #444141";
    }
  }};

  &:hover {
    color: gray;
    font-style: italic;
  }
`;

export default function Header() {
  const links = [
    { href: "/", name: "HOME" },
    { href: "/games", name: "GAMES" },
    { href: "/team", name: "TEAM" },
    { href: "/contact", name: "CONTACT" }
  ];

  return (
    <>
      <ContainerMobile>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavBarMobile>
          <Burger />
        </NavBarMobile>
      </ContainerMobile>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavBar>
          {links.map(link => {
            return (
              <Link
                activeClassName="active"
                href={link.href}
                as={link.href}
                key={link.name}
                passHref
              >
                <MenuLink>{link.name}</MenuLink>
              </Link>
            );
          })}
        </NavBar>
      </Container>
    </>
  );
}
