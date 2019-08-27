
import React, { useState } from 'react'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import Menu from './Menu'
import Link from '../Link';


export default function Burger() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }
  const handleLinkClick = () => {
    setMenuOpen(false)
  }
  const menu = [
    { href: "/", name: "HOME" },
    { href: "/games", name: "GAMES" },
    { href: "/team", name: "TEAM" },
    { href: "/contact", name: "CONTACT" }
  ];
  const menuItems = menu.map((val) => {
    return (
      <Link href={val.href} key={val.name}>
        <MenuItem 
          onClick={handleLinkClick}>
          {val.name}
        </MenuItem>
      </Link>

    )
  });

  return (
    <React.Fragment>
      <div className="main">
        <div className="menu_button">
          <MenuButton
            open={menuOpen}
            onClick={handleMenuClick}
            color='black'
          />
        </div>
        <Menu open={menuOpen}>
          {menuItems}
        </Menu>
      </div>

      <style jsx>{`
        .menu_button {
          margin-top: 0;
          margin-left: 0;
          z-index: 99;
          opacity: 0.9;
          display: flex;
          align-items: center;
          width: 100%;
          color: white;
        }
    `}</style>
    </React.Fragment>
  )
}