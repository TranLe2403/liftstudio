import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Link from "../Link";
import styled from "styled-components";

const MenuButtonContaier = styled.div`
  margin-top: 0;
  margin-left: 0;
  z-index: 99;
  opacity: 0.9;
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
`;

export default function Burger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menu = [
    { href: "/", name: "HOME" },
    { href: "/games", name: "GAMES" },
    { href: "/team", name: "TEAM" },
    { href: "/contact", name: "CONTACT" }
  ];

  const menuItems = menu.map(val => {
    return (
      <Link href={val.href} key={val.name} passHref>
        <MenuItem onClick={handleLinkClick}>{val.name}</MenuItem>
      </Link>
    );
  });

  return (
    <div>
      <MenuButtonContaier>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color="black" />
      </MenuButtonContaier>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </div>
  );
}
